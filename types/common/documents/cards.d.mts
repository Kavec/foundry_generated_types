export default BaseCards;
export type CardsData = {
    /**
     * The _id which uniquely identifies this stack of Cards document
     */
    _id: string;
    /**
     * The text name of this stack
     */
    name: string;
    /**
     * The type of this stack, in BaseCards.metadata.types
     */
    type: string;
    /**
     * A text description of this stack
     */
    description?: string;
    /**
     * An image or video which is used to represent the stack of cards
     */
    img?: string;
    /**
     * Game system data which is defined by the system template.json model
     */
    system?: object;
    /**
     * A collection of Card documents which currently belong to this stack
     */
    cards: Collection<BaseCard>;
    /**
     * The visible width of this stack
     */
    width: number;
    /**
     * The visible height of this stack
     */
    height: number;
    /**
     * The angle of rotation of this stack
     */
    rotation: number;
    /**
     * Whether or not to publicly display the number of cards in this stack
     */
    displayCount?: boolean;
    /**
     * The _id of a Folder which contains this document
     */
    folder: string | null;
    /**
     * The sort order of this stack relative to others in its parent collection
     */
    sort: number;
    /**
     * An object which configures ownership of this Cards
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
 * @typedef {Object} CardsData
 * @property {string} _id                 The _id which uniquely identifies this stack of Cards document
 * @property {string} name                The text name of this stack
 * @property {string} type                The type of this stack, in BaseCards.metadata.types
 * @property {string} [description]       A text description of this stack
 * @property {string} [img]               An image or video which is used to represent the stack of cards
 * @property {object} [system]            Game system data which is defined by the system template.json model
 * @property {Collection<BaseCard>} cards A collection of Card documents which currently belong to this stack
 * @property {number} width               The visible width of this stack
 * @property {number} height              The visible height of this stack
 * @property {number} rotation            The angle of rotation of this stack
 * @property {boolean} [displayCount]     Whether or not to publicly display the number of cards in this stack
 * @property {string|null} folder         The _id of a Folder which contains this document
 * @property {number} sort                The sort order of this stack relative to others in its parent collection
 * @property {object} [ownership]         An object which configures ownership of this Cards
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for Cards.
 * Defines the DataSchema and common behaviors for Cards which are shared between both client and server.
 * @extends abstract.Document
 * @mixes CardsData
 * @memberof documents
 *
 * @param {CardsData} data                        Initial data from which to construct the Cards
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseCards {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.StringField;
        description: fields.HTMLField;
        img: fields.FilePathField;
        system: fields.TypeDataField;
        cards: fields.EmbeddedCollectionField;
        width: fields.NumberField;
        height: fields.NumberField;
        rotation: fields.AngleField;
        displayCount: fields.BooleanField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for a cards stack that does not have a custom image set
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /**
     * The allowed set of CardsData types which may exist
     * @type {string[]}
     */
    static get TYPES(): string[];
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
}
import * as fields from "../data/fields.mjs";
