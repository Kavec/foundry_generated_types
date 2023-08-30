export default BaseJournalEntry;
export type JournalEntryData = {
    /**
     * The _id which uniquely identifies this JournalEntry document
     */
    _id: string;
    /**
     * The name of this JournalEntry
     */
    name: string;
    /**
     * The pages contained within this JournalEntry document
     */
    pages: JournalEntryPageData[];
    /**
     * The _id of a Folder which contains this JournalEntry
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this JournalEntry relative to its siblings
     */
    sort?: number;
    /**
     * An object which configures ownership of this JournalEntry
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
 * @typedef {Object} JournalEntryData
 * @property {string} _id                 The _id which uniquely identifies this JournalEntry document
 * @property {string} name                The name of this JournalEntry
 * @property {JournalEntryPageData[]} pages   The pages contained within this JournalEntry document
 * @property {string|null} folder         The _id of a Folder which contains this JournalEntry
 * @property {number} [sort]              The numeric sort value which orders this JournalEntry relative to its siblings
 * @property {object} [ownership]         An object which configures ownership of this JournalEntry
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for a JournalEntry.
 * Defines the DataSchema and common behaviors for a JournalEntry which are shared between both client and server.
 * @extends abstract.Document
 * @mixes JournalEntryData
 * @memberof documents
 *
 * @param {JournalEntryData} data                 Initial data from which to construct the JournalEntry
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseJournalEntry {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        pages: fields.EmbeddedCollectionField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    /**
     * Migrate old content and img field to individual pages.
     * @param {object} source     Old source data which will be mutated in-place
     * @returns {object[]}        Page data that should be added to the document
     * @deprecated since v10
     */
    static migrateContentToPages(source: object): object[];
    /** @inheritdoc */
    _initializeSource(source: any, options?: {}): any;
}
import * as fields from "../data/fields.mjs";
