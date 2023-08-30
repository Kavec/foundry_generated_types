export default BaseItem;
export type ItemData = {
    /**
     * The _id which uniquely identifies this Item document
     */
    _id: string;
    /**
     * The name of this Item
     */
    name: string;
    /**
     * An Item subtype which configures the system data model applied
     */
    type: string;
    /**
     * An image file path which provides the artwork for this Item
     */
    img?: string;
    /**
     * The system data object which is defined by the system template.json model
     */
    system?: object;
    /**
     * A collection of ActiveEffect embedded Documents
     */
    effects: Collection<BaseActiveEffect>;
    /**
     * The _id of a Folder which contains this Item
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this Item relative to its siblings
     */
    sort?: number;
    /**
     * An object which configures ownership of this Item
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
 * @typedef {Object} ItemData
 * @property {string} _id                 The _id which uniquely identifies this Item document
 * @property {string} name                The name of this Item
 * @property {string} type                An Item subtype which configures the system data model applied
 * @property {string} [img]               An image file path which provides the artwork for this Item
 * @property {object} [system]            The system data object which is defined by the system template.json model
 * @property {Collection<BaseActiveEffect>} effects A collection of ActiveEffect embedded Documents
 * @property {string|null} folder         The _id of a Folder which contains this Item
 * @property {number} [sort]              The numeric sort value which orders this Item relative to its siblings
 * @property {object} [ownership]         An object which configures ownership of this Item
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for an Item.
 * Defines the DataSchema and common behaviors for an Item which are shared between both client and server.
 * @extends abstract.Document
 * @mixes ItemData
 * @memberof documents
 *
 * @param {ItemData} data                         Initial data from which to construct the Item
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseItem {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.StringField;
        img: fields.FilePathField;
        system: fields.TypeDataField;
        effects: fields.EmbeddedCollectionField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for newly created Item documents
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /**
     * Determine default artwork based on the provided item data.
     * @param {ItemData} itemData  The source item data.
     * @returns {{img: string}}    Candidate item image.
     */
    static getDefaultArtwork(itemData: ItemData): {
        img: string;
    };
    /**
     * The allowed set of Item types which may exist.
     * @type {string[]}
     */
    static get TYPES(): string[];
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    /** @inheritdoc */
    canUserModify(user: any, action: any, data?: {}): any;
    /** @inheritdoc */
    testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
}
import * as fields from "../data/fields.mjs";
