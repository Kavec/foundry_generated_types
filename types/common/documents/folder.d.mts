export default BaseFolder;
export type FolderData = {
    /**
     * The _id which uniquely identifies this Folder document
     */
    _id: string;
    /**
     * The name of this Folder
     */
    name: string;
    /**
     * The document type which this Folder contains, from CONST.FOLDER_DOCUMENT_TYPES
     */
    type: string;
    /**
     * An HTML description of the contents of this folder
     */
    description?: string;
    /**
     * The _id of a parent Folder which contains this Folder
     */
    folder?: string | null;
    /**
     * The sorting mode used to organize documents within this Folder, in ["a", "m"]
     */
    sorting?: string;
    /**
     * The numeric sort value which orders this Folder relative to its siblings
     */
    sort?: number;
    /**
     * A color string used for the background color of this Folder
     */
    color?: string | null;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
    /**
     * An object of creation and access information
     */
    _stats?: DocumentStats;
};
/**
 * @typedef {Object} FolderData
 * @property {string} _id                 The _id which uniquely identifies this Folder document
 * @property {string} name                The name of this Folder
 * @property {string} type                The document type which this Folder contains, from CONST.FOLDER_DOCUMENT_TYPES
 * @property {string} [description]       An HTML description of the contents of this folder
 * @property {string|null} [folder]       The _id of a parent Folder which contains this Folder
 * @property {string} [sorting=a]         The sorting mode used to organize documents within this Folder, in ["a", "m"]
 * @property {number} [sort]              The numeric sort value which orders this Folder relative to its siblings
 * @property {string|null} [color]        A color string used for the background color of this Folder
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for a Folder.
 * Defines the DataSchema and common behaviors for a Folder which are shared between both client and server.
 * @extends abstract.Document
 * @mixes FolderData
 * @memberof documents
 *
 * @param {FolderData} data                       Initial data from which to construct the Folder
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseFolder {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.StringField;
        description: fields.StringField;
        folder: fields.ForeignDocumentField;
        sorting: fields.StringField;
        sort: fields.IntegerSortField;
        color: fields.ColorField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /** @inheritdoc */
    static validateJoint(data: any): void;
    /**
     * Allow folder sorting modes
     * @type {string[]}
     */
    static SORTING_MODES: string[];
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    /** @override */
    static override get(documentId: any, options?: {}): any;
}
import * as fields from "../data/fields.mjs";
