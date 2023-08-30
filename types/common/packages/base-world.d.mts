/**
 * The data schema used to define World manifest files.
 * Extends the basic PackageData schema with some additional world-specific fields.
 * @property {string} system            The game system name which this world relies upon
 * @property {string} coreVersion       The version of the core software for which this world has been migrated
 * @property {string} systemVersion     The version of the game system for which this world has been migrated
 * @property {string} [background]      A web URL or local file path which provides a background banner image
 * @property {string} [nextSession]     An ISO datetime string when the next game session is scheduled to occur
 * @property {boolean} [resetKeys]      Should user access keys be reset as part of the next launch?
 * @property {boolean} [safeMode]       Should the world launch in safe mode?
 * @property {string} [joinTheme]       The theme to use for this world's join page.
 */
export default class BaseWorld extends BasePackage {
    /** @inheritDoc */
    static defineSchema(): {
        id: fields.StringField;
        title: fields.StringField;
        description: fields.StringField;
        authors: fields.SetField;
        url: fields.StringField;
        license: fields.StringField;
        readme: fields.StringField;
        bugs: fields.StringField;
        changelog: fields.StringField;
        flags: fields.ObjectField;
        media: fields.SetField;
        version: fields.StringField;
        compatibility: import("./base-package.mjs").PackageCompatibility;
        scripts: fields.SetField;
        esmodules: fields.SetField;
        styles: fields.SetField;
        languages: fields.SetField;
        packs: import("./base-package.mjs").PackageCompendiumPacks;
        packFolders: fields.SetField;
        relationships: import("./base-package.mjs").PackageRelationships;
        socket: fields.BooleanField;
        manifest: fields.StringField;
        download: fields.StringField;
        protected: fields.BooleanField;
        exclusive: fields.BooleanField;
        persistentStorage: fields.BooleanField;
    } & {
        system: fields.StringField;
        background: fields.StringField;
        joinTheme: fields.StringField;
        coreVersion: fields.StringField;
        systemVersion: fields.StringField;
        lastPlayed: fields.StringField;
        playtime: fields.NumberField;
        nextSession: fields.StringField;
        resetKeys: fields.BooleanField;
        safeMode: fields.BooleanField;
        version: fields.StringField;
    };
    /**
     * The default icon used for this type of Package.
     * @type {string}
     */
    static icon: string;
    /** @inheritDoc */
    static migrateData(data: any): any;
}
import BasePackage from "./base-package.mjs";
import * as fields from "../data/fields.mjs";
