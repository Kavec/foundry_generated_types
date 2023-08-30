export default BaseRollTable;
export type RollTableData = {
    /**
     * The _id which uniquely identifies this RollTable document
     */
    _id: string;
    /**
     * The name of this RollTable
     */
    name: string;
    /**
     * An image file path which provides the thumbnail artwork for this RollTable
     */
    img?: string;
    /**
     * The HTML text description for this RollTable document
     */
    description?: string;
    /**
     * A Collection of TableResult embedded documents which belong to this RollTable
     */
    results?: Collection<BaseTableResult>;
    /**
     * The Roll formula which determines the results chosen from the table
     */
    formula: string;
    /**
     * Are results from this table drawn with replacement?
     */
    replacement?: boolean;
    /**
     * Is the Roll result used to draw from this RollTable displayed in chat?
     */
    displayRoll?: boolean;
    /**
     * The _id of a Folder which contains this RollTable
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this RollTable relative to its siblings
     */
    sort?: number;
    /**
     * An object which configures ownership of this RollTable
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
 * @typedef {Object} RollTableData
 * @property {string} _id                 The _id which uniquely identifies this RollTable document
 * @property {string} name                The name of this RollTable
 * @property {string} [img]               An image file path which provides the thumbnail artwork for this RollTable
 * @property {string} [description]       The HTML text description for this RollTable document
 * @property {Collection<BaseTableResult>} [results=[]] A Collection of TableResult embedded documents which belong to this RollTable
 * @property {string} formula             The Roll formula which determines the results chosen from the table
 * @property {boolean} [replacement=true] Are results from this table drawn with replacement?
 * @property {boolean} [displayRoll=true] Is the Roll result used to draw from this RollTable displayed in chat?
 * @property {string|null} folder         The _id of a Folder which contains this RollTable
 * @property {number} [sort]              The numeric sort value which orders this RollTable relative to its siblings
 * @property {object} [ownership]         An object which configures ownership of this RollTable
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for a RollTable.
 * Defines the DataSchema and common behaviors for a RollTable which are shared between both client and server.
 */
declare class BaseRollTable extends Document {
    /** @inheritDoc DataModel.defineSchema */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        img: fields.FilePathField;
        description: fields.HTMLField;
        results: fields.EmbeddedCollectionField;
        formula: fields.StringField;
        replacement: fields.BooleanField;
        displayRoll: fields.BooleanField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for newly created Macro documents
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /** @inheritDoc DataModel.migrateData */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
}
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
