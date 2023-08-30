/**
 * The data schema used to define System manifest files.
 * Extends the basic PackageData schema with some additional system-specific fields.
 * @property {string} [background]        A web URL or local file path which provides a default background banner for
 *                                        worlds which are created using this system
 * @property {string} [initiative]        A default initiative formula used for this system
 * @property {number} [gridDistance]      A default distance measurement to use for Scenes in this system
 * @property {string} [gridUnits]         A default unit of measure to use for distance measurement in this system
 * @property {string} [primaryTokenAttribute] An Actor data attribute path to use for Token primary resource bars
 * @property {string} [primaryTokenAttribute] An Actor data attribute path to use for Token secondary resource bars
 */
export default class BaseSystem extends BasePackage {
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
        background: fields.StringField;
        initiative: fields.StringField;
        gridDistance: fields.NumberField;
        gridUnits: fields.StringField;
        primaryTokenAttribute: fields.StringField;
        secondaryTokenAttribute: fields.StringField;
    };
    /**
     * The default icon used for this type of Package.
     * @type {string}
     */
    static icon: string;
    /**
     * An alias for the document types available in the currently active World.
     * @enum string[]
     */
    get documentTypes(): any;
    /**
     * An alias for the raw template JSON loaded from the game System.
     * @type {object}
     */
    get template(): any;
    /**
     * An alias for the structured data model organized by document class and type.
     * @type {object}
     */
    get model(): any;
}
import BasePackage from "./base-package.mjs";
import * as fields from "../data/fields.mjs";
