export default BaseNote;
export type NoteData = {
    /**
     * The _id which uniquely identifies this BaseNote embedded document
     */
    _id: string;
    /**
     * The _id of a JournalEntry document which this Note represents
     */
    entryId?: string | null;
    /**
     * The _id of a specific JournalEntryPage document which this Note represents
     */
    pageId?: string | null;
    /**
     * The x-coordinate position of the center of the note icon
     */
    x?: number;
    /**
     * The y-coordinate position of the center of the note icon
     */
    y?: number;
    /**
     * An image icon used to represent this note
     */
    texture?: TextureData;
    /**
     * The pixel size of the map note icon
     */
    iconSize?: number;
    /**
     * Optional text which overrides the title of the linked Journal Entry
     */
    text?: string;
    /**
     * The font family used to display the text label on this note, defaults to
     *         CONFIG.defaultFontFamily
     */
    fontFamily?: string;
    /**
     * The font size used to display the text label on this note
     */
    fontSize?: number;
    /**
     * A value in CONST.TEXT_ANCHOR_POINTS which defines where the text label anchors
     *       to the note icon.
     */
    textAnchor?: number;
    /**
     * The string that defines the color with which the note text is rendered
     */
    textColor?: string;
    /**
     * Whether this map pin is globally visible or requires LoS to see.
     */
    global?: boolean;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} NoteData
 * @property {string} _id                 The _id which uniquely identifies this BaseNote embedded document
 * @property {string|null} [entryId=null] The _id of a JournalEntry document which this Note represents
 * @property {string|null} [pageId=null]  The _id of a specific JournalEntryPage document which this Note represents
 * @property {number} [x=0]               The x-coordinate position of the center of the note icon
 * @property {number} [y=0]               The y-coordinate position of the center of the note icon
 * @property {TextureData} [texture]      An image icon used to represent this note
 * @property {number} [iconSize=40]       The pixel size of the map note icon
 * @property {string} [text]              Optional text which overrides the title of the linked Journal Entry
 * @property {string} [fontFamily]        The font family used to display the text label on this note, defaults to
 *                                        CONFIG.defaultFontFamily
 * @property {number} [fontSize=36]       The font size used to display the text label on this note
 * @property {number} [textAnchor=1]      A value in CONST.TEXT_ANCHOR_POINTS which defines where the text label anchors
 *                                        to the note icon.
 * @property {string} [textColor=#FFFFFF] The string that defines the color with which the note text is rendered
 * @property {boolean} [global=false]     Whether this map pin is globally visible or requires LoS to see.
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for a Note.
 * Defines the DataSchema and common behaviors for a Note which are shared between both client and server.
 * @extends abstract.Document
 * @mixes NoteData
 * @memberof documents
 *
 * @param {NoteData} data                         Initial data from which to construct the Note
 * @param {DocumentConstructionContext} context   Construction context options
 *
 * @property {documents.BaseJournalEntry} entry   The JournalEntry document that this Note references
 */
declare class BaseNote {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        entryId: fields.ForeignDocumentField;
        pageId: fields.ForeignDocumentField;
        x: fields.NumberField;
        y: fields.NumberField;
        texture: TextureData;
        iconSize: fields.NumberField;
        text: fields.StringField;
        fontFamily: fields.StringField;
        fontSize: fields.NumberField;
        textAnchor: fields.NumberField;
        textColor: fields.ColorField;
        global: fields.BooleanField;
        flags: fields.ObjectField;
    };
    /**
     * The default icon used for newly created Note documents.
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
}
import { TextureData } from "../data/data.mjs";
import * as fields from "../data/fields.mjs";
