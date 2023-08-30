export default BaseMacro;
export type MacroData = {
    /**
     * The _id which uniquely identifies this Macro document
     */
    _id: string;
    /**
     * The name of this Macro
     */
    name: string;
    /**
     * A Macro subtype from CONST.MACRO_TYPES
     */
    type: string;
    /**
     * The _id of a User document which created this Macro *
     */
    author: string;
    /**
     * An image file path which provides the thumbnail artwork for this Macro
     */
    img?: string;
    /**
     * The scope of this Macro application from CONST.MACRO_SCOPES
     */
    scope?: string;
    /**
     * The string content of the macro command
     */
    command: string;
    /**
     * The _id of a Folder which contains this Macro
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this Macro relative to its siblings
     */
    sort?: number;
    /**
     * An object which configures ownership of this Macro
     */
    ownership?: object;
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
 * @typedef {Object} MacroData
 * @property {string} _id                 The _id which uniquely identifies this Macro document
 * @property {string} name                The name of this Macro
 * @property {string} type                A Macro subtype from CONST.MACRO_TYPES
 * @property {string} author              The _id of a User document which created this Macro *
 * @property {string} [img]               An image file path which provides the thumbnail artwork for this Macro
 * @property {string} [scope=global]      The scope of this Macro application from CONST.MACRO_SCOPES
 * @property {string} command             The string content of the macro command
 * @property {string|null} folder         The _id of a Folder which contains this Macro
 * @property {number} [sort]              The numeric sort value which orders this Macro relative to its siblings
 * @property {object} [ownership]         An object which configures ownership of this Macro
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for a Macro.
 * Defines the DataSchema and common behaviors for a Macro which are shared between both client and server.
 * @extends abstract.Document
 * @mixes MacroData
 * @memberof documents
 *
 * @param {MacroData} data                        Initial data from which to construct the Macro
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseMacro {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.StringField;
        author: fields.ForeignDocumentField;
        img: fields.FilePathField;
        scope: fields.StringField;
        command: fields.StringField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for newly created Macro documents.
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    /** @inheritdoc */
    testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
    /** @inheritdoc */
    _preCreate(data: any, options: any, user: any): Promise<void>;
}
import * as fields from "../data/fields.mjs";
