export default BaseAdventure;
export type AdventureData = {
    /**
     * The _id which uniquely identifies this Adventure document
     */
    _id: string;
    /**
     * The human-readable name of the Adventure
     */
    name: string;
    /**
     * The file path for the primary image of the adventure
     */
    img: string;
    /**
     * A string caption displayed under the primary image banner
     */
    caption: string;
    /**
     * An HTML text description for the adventure
     */
    description: string;
    /**
     * An array of Actor documents which are included in the adventure
     */
    actors: documents.BaseActor[];
    /**
     * An array of Combat documents which are included in the adventure
     */
    combats: documents.BaseCombat[];
    /**
     * An array of Item documents which are included in the adventure
     */
    items: documents.BaseItem[];
    /**
     * An array of Scene documents which are included in the adventure
     */
    scenes: documents.BaseScene[];
    /**
     * An array of JournalEntry documents which are included in the adventure
     */
    journal: documents.BaseJournalEntry[];
    /**
     * An array of RollTable documents which are included in the adventure
     */
    tables: documents.BaseRollTable[];
    /**
     * An array of Macro documents which are included in the adventure
     */
    macros: documents.BaseMacro[];
    /**
     * An array of Cards documents which are included in the adventure
     */
    cards: documents.BaseCards[];
    /**
     * An array of Playlist documents which are included in the adventure
     */
    playlists: documents.BasePlaylist[];
    /**
     * An array of Folder documents which are included in the adventure
     */
    folders: documents.BaseFolder[];
    /**
     * The sort order of this adventure relative to its siblings
     */
    sort: number;
    /**
     * ={}            An object of optional key/value flags
     */
    flags: object;
    /**
     * An object of creation and access information
     */
    _stats?: DocumentStats;
};
/**
 * @typedef {Object} AdventureData
 * @property {string} _id                 The _id which uniquely identifies this Adventure document
 * @property {string} name                The human-readable name of the Adventure
 * @property {string} img                 The file path for the primary image of the adventure
 * @property {string} caption             A string caption displayed under the primary image banner
 * @property {string} description         An HTML text description for the adventure
 * @property {documents.BaseActor[]} actors         An array of Actor documents which are included in the adventure
 * @property {documents.BaseCombat[]} combats       An array of Combat documents which are included in the adventure
 * @property {documents.BaseItem[]} items           An array of Item documents which are included in the adventure
 * @property {documents.BaseScene[]} scenes         An array of Scene documents which are included in the adventure
 * @property {documents.BaseJournalEntry[]} journal An array of JournalEntry documents which are included in the adventure
 * @property {documents.BaseRollTable[]} tables     An array of RollTable documents which are included in the adventure
 * @property {documents.BaseMacro[]} macros         An array of Macro documents which are included in the adventure
 * @property {documents.BaseCards[]} cards          An array of Cards documents which are included in the adventure
 * @property {documents.BasePlaylist[]} playlists   An array of Playlist documents which are included in the adventure
 * @property {documents.BaseFolder[]} folders       An array of Folder documents which are included in the adventure
 * @property {number} sort                The sort order of this adventure relative to its siblings
 * @property {object} flags={}            An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for an Adventure.
 * Defines the DataSchema and common behaviors for an Adventure which are shared between both client and server.
 * @extends abstract.Document
 * @mixes AdventureData
 * @memberof documents
 *
 * @param {AdventureData} data                    Initial data from which to construct the Actor
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseAdventure {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        img: fields.FilePathField;
        caption: fields.HTMLField;
        description: fields.HTMLField;
        actors: fields.SetField;
        combats: fields.SetField;
        items: fields.SetField;
        journal: fields.SetField;
        scenes: fields.SetField;
        tables: fields.SetField;
        macros: fields.SetField;
        cards: fields.SetField;
        playlists: fields.SetField;
        folders: fields.SetField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * An array of the fields which provide imported content from the Adventure.
     * @type {Object<Document>}
     */
    static get contentFields(): any;
    /** @inheritdoc */
    static fromSource(source: any, options?: {}): any;
    /** @inheritdoc */
    static migrateData(data: any): any;
    /**
     * Provide a thumbnail image path used to represent the Adventure document.
     * @type {string}
     */
    get thumbnail(): string;
}
import * as documents from "./module.mjs";
import * as fields from "../data/fields.mjs";
