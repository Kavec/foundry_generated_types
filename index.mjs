import fs from 'node:fs';
import { exec } from 'node:child_process';

import decompress from 'decompress';
import prompts from 'prompts';
import { glob } from 'glob';

async function runStep(message, op) {
    process.stdout.write(`${message}... `);
    const result = op();
    if (result instanceof Promise) {
        await result;
    }
    console.log('done!');
}

const localCacheDir = './.foundryvtt';
async function copyFoundryToCache() {
    if (fs.existsSync(localCacheDir)) {
        const { doBlast } = await prompts({
            type: 'confirm',
            name: 'doBlast',
            message: 'Cached files detected; blast \'em?'
        });

        if (!doBlast) return;

        await runStep(
            `Cleaning old cache files in ${localCacheDir}`,
            () => fs.rmSync(localCacheDir, { recursive: true, force: true }),
        );
    }

    const { linuxBuild } = await prompts({
        type: 'text',
        name: 'linuxBuild',
        message: 'Enter path to linux version build downloaded from FoundryVTT'
    });

    if (!fs.existsSync(linuxBuild)) {
        throw Exception(`Linux build not found at: ${linuxBuild}`);
    }

    if (fs.lstatSync(linuxBuild).isDirectory()) {
        // Has already been extracted, just need to copy
        await runStep(
            `Copying foundry VTT build to ${localCacheDir}`,
            () => {
                fs.cpSync(linuxBuild, localCacheDir, { recursive: true });
            }
        )
    } else {
        // Probably a zip file. Could stand to do more validation
        await runStep(
            `Extracting Foundry VTT build to ${localCacheDir}`,
            async () => {
                fs.mkdirSync(localCacheDir);
                await decompress(linuxBuildZip, localCacheDir);
            }
        );
    }
}

// All fileModifiers are a function from string -> string that are
// assumed to be idempotent so we can blindly slap the cached code
// with them however often we'd like.
const fileModifiers = []
function addFileModifier(desc, fn /* (string) => string */) {
    console.log(`Registered file transform: ${desc}`);
    fileModifiers.push(fn);
}

async function runFileModifiers() {
    await runStep(`Running ${fileModifiers.length} file modifiers on source files`, async () => {
        const allJsFiles = await glob(`${localCacheDir}/resources/app/[!node_modules]*/**/*.js`);
    
        allJsFiles.forEach(fileName => {
            let data = fs.readFileSync(fileName).toString();
            fileModifiers.forEach(fn => data = fn(data));
            fs.writeFileSync(fileName, data);
        });
    });
}

// Main program below
await copyFoundryToCache();

// The vendored Pixi code doesn't typecheck well, so to avoid type
// generation errors we nuke out the javascript code here and include
// type definitions via tsconfig.json & the usual package.json dependencies
const pixiPath = `${localCacheDir}/resources/app/client/pixi`;
if (fs.existsSync(pixiPath)) {
    await runStep(
        `Removing problematic vendored pixi code`,
        () => fs.rmSync(pixiPath, { recursive: true, force: true }),
    );
}

// By design, typescript fails to emit the type for private class members
// e.g., a js class with `_fieldName` that has @private in its tsdoc will
// be produced in the output .d.ts as `private _fieldName;` on the class..
// even if the actual type is recorded for _fieldName in the tsdoc comment.
//
// This is fine, mostly, because in theory you don't call private fields
// on classes anyway... until you're trying to do something like rework
// the `_injectHtml` method to support svelte et al when inheriting from
// a class with a private field. Private class members marked this way in
// javascript aren't even real anyway (you can access  a private member 
// by using the `className['_array_access_notation']` style at any time 
// you'd like) and typescript /will/ emit the types for a protected class, 
// so this routine goes about and substitutes all @private directives for
// @protected ones.
addFileModifier(
    '@private -> @protected; ensures private type declarations in output',
    fileData => fileData.replace(/\B@private\b/g, '@protected'),
);

// Typescript wants to call `jQuery` types `JQueryStatic`, but in practice
// those prop types are instead `JQuery`. Difference being that base JQuery
// types can do things like `html.find` and JQuery static ones need to do
// `html.fn.find` instead.
addFileModifier(
    'jQuery -> JQuery; avoid mistype of JQuery props as JQueryStatic',
    fileData => fileData.replace(/(\*.*)(\{.*)\bjQuery\b(.*\})/g, '$1$2JQuery<HTMLElement>$3'),
);

await runFileModifiers();

await runStep(
    `Generating type definitions via tsc`,
    async () => await new Promise((r) => exec(`pnpm tsc`, r)),
);

await runStep(
    `Wiring up reference types declarations into index.d.ts`,
    async () => {
        const typedefFiles = await glob('./types/**/*.d.ts');
        const refLines = typedefFiles.map(filename => `/// <reference path='./${filename}' />`);
        refLines.sort();

        fs.writeFileSync(`index.d.ts`, [
            '// WARNING: AUTOGENERATED FILE',
            '// Changes should be made to index.mjs rather than by hand',
            '',
            '// Apply fixup patches for things that are wonky-typed first',
            '/// <reference path=\'./fixups.d.ts\' />',
            '',
            ...refLines
        ].join('\n'));
    }
);

console.log(`\nHave a nice day!`);
