export default BaseJournalEntryPage;
export type JournalEntryPageImageData = {
    /**
     * A caption for the image.
     */
    caption?: string;
};
export type JournalEntryPageTextData = {
    /**
     * The content of the JournalEntryPage in a format appropriate for its type.
     */
    content?: string;
    /**
     * The original markdown source, if applicable.
     */
    markdown?: string;
    /**
     * The format of the page's content, in {@link CONST.JOURNAL_ENTRY_PAGE_FORMATS }.
     */
    format: number;
};
export type JournalEntryPageVideoData = {
    /**
     * Automatically loop the video?
     */
    loop?: boolean;
    /**
     * Should the video play automatically?
     */
    autoplay?: boolean;
    /**
     * The volume level of any audio that the video file contains.
     */
    volume?: number;
    /**
     * The starting point of the video, in seconds.
     */
    timestamp?: number;
    /**
     * The width of the video, otherwise it will fill the available container width.
     */
    width?: number;
    /**
     * The height of the video, otherwise it will use the aspect ratio of the source video,
     *      or 16:9 if that aspect ratio is not available.
     */
    height?: number;
};
export type JournalEntryPageTitleData = {
    /**
     * Whether to render the page's title in the overall journal view.
     */
    show: boolean;
    /**
     * The heading level to render this page's title at in the overall journal view.
     */
    level: number;
};
export type JournalEntryPageData = {
    /**
     * The _id which uniquely identifies this JournalEntryPage embedded document.
     */
    _id: string;
    /**
     * The text name of this page.
     */
    name: string;
    /**
     * The type of this page, in {@link BaseJournalEntryPage.TYPES }.
     */
    type: string;
    /**
     * Data that control's the display of this page's title.
     */
    title: JournalEntryPageTitleData;
    /**
     * Data particular to image journal entry pages.
     */
    image: JournalEntryPageImageData;
    /**
     * Data particular to text journal entry pages.
     */
    text: JournalEntryPageTextData;
    /**
     * Data particular to video journal entry pages.
     */
    video: JournalEntryPageVideoData;
    /**
     * The URI of the image or other external media to be used for this page.
     */
    src?: string;
    /**
     * System-specific data.
     */
    system: object;
    /**
     * The numeric sort value which orders this page relative to its siblings.
     */
    sort: number;
    /**
     * An object which configures the ownership of this page.
     */
    ownership?: object;
    /**
     * An object of optional key/value flags.
     */
    flags?: object;
};
/**
 * @typedef {object} JournalEntryPageImageData
 * @property {string} [caption]  A caption for the image.
 */
/**
 * @typedef {object} JournalEntryPageTextData
 * @property {string} [content]   The content of the JournalEntryPage in a format appropriate for its type.
 * @property {string} [markdown]  The original markdown source, if applicable.
 * @property {number} format      The format of the page's content, in {@link CONST.JOURNAL_ENTRY_PAGE_FORMATS}.
 */
/**
 * @typedef {object} JournalEntryPageVideoData
 * @property {boolean} [loop]      Automatically loop the video?
 * @property {boolean} [autoplay]  Should the video play automatically?
 * @property {number} [volume]     The volume level of any audio that the video file contains.
 * @property {number} [timestamp]  The starting point of the video, in seconds.
 * @property {number} [width]      The width of the video, otherwise it will fill the available container width.
 * @property {number} [height]     The height of the video, otherwise it will use the aspect ratio of the source video,
 *                                 or 16:9 if that aspect ratio is not available.
 */
/**
 * @typedef {object} JournalEntryPageTitleData
 * @property {boolean} show  Whether to render the page's title in the overall journal view.
 * @property {number} level  The heading level to render this page's title at in the overall journal view.
 */
/**
 * @typedef {object} JournalEntryPageData
 * @property {string} _id          The _id which uniquely identifies this JournalEntryPage embedded document.
 * @property {string} name         The text name of this page.
 * @property {string} type         The type of this page, in {@link BaseJournalEntryPage.TYPES}.
 * @property {JournalEntryPageTitleData} title  Data that control's the display of this page's title.
 * @property {JournalEntryPageImageData} image  Data particular to image journal entry pages.
 * @property {JournalEntryPageTextData} text    Data particular to text journal entry pages.
 * @property {JournalEntryPageVideoData} video  Data particular to video journal entry pages.
 * @property {string} [src]        The URI of the image or other external media to be used for this page.
 * @property {object} system       System-specific data.
 * @property {number} sort         The numeric sort value which orders this page relative to its siblings.
 * @property {object} [ownership]  An object which configures the ownership of this page.
 * @property {object} [flags]      An object of optional key/value flags.
 */
/**
 * The Document definition for a JournalEntryPage.
 * Defines the data schema and common behaviours for a JournalEntryPage which are shared between both client and server.
 * @extends abstract.Document
 * @mixes JournalEntryPageData
 * @memberof documents
 *
 * @param {JournalEntryPageData} data            Initial data from which to construct the JournalEntryPage.
 * @param {DocumentConstructionContext} context  Construction context options.
 */
declare class BaseJournalEntryPage {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.StringField;
        title: fields.SchemaField;
        image: fields.SchemaField;
        text: fields.SchemaField;
        video: fields.SchemaField;
        src: fields.StringField;
        system: fields.TypeDataField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The allowed set of JournalEntryPageData types which may exist.
     * @type {string[]}
     */
    static get TYPES(): string[];
    /** @inheritdoc */
    getUserLevel(user: any): any;
}
import * as fields from "../data/fields.mjs";
