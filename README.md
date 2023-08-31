# foundry_generated_types
Type declarations for Foundry VTT auto-generated from typedoc comments

## Updating typedefs

0. Get / set up dependencies

    If you're on node18+, you can:
    
    `corepack enable && corepack prepare pnpm@latest --activate`

    Followed by a `pnpm install` to get deps all set up

1. Download a linux build of foundryvtt from your purchased licenses page

2. Run `pnpm generate` and follow the prompts


## Versioning

Versions inherit the FoundryVTT build number + a build number of our own.

That is, v11.308.2 matches FoundryVTT v11.308. Despite looking like a semver
number, this library makes no guarantees to maintain backwards compatibility
between semver's patch versions. 

Should be fine, though, since 11.308.1 and 11.308.2888 are generated off
the same FoundryVTT version.


## TODO:

- [ ] Publish to npm
- [ ] Pare down generated types from "everything" to "reasonable"
- [ ] Add / setup any fixups needed in `fixups.d.ts`
- [ ] Use the thing