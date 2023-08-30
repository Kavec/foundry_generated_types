export default BaseCard;
export type CardData = {
    /**
     * The _id which uniquely identifies this Card document
     */
    _id: string;
    /**
     * The text name of this card
     */
    name: string;
    /**
     * A text description of this card which applies to all faces
     */
    description?: string;
    /**
     * A category of card (for example, a suit) to which this card belongs
     */
    type: string;
    /**
     * Game system data which is defined by the system template.json model
     */
    system?: object;
    /**
     * An optional suit designation which is used by default sorting
     */
    suit?: string;
    /**
     * An optional numeric value of the card which is used by default sorting
     */
    value?: number;
    /**
     * An object of face data which describes the back of this card
     */
    back: CardFaceData;
    /**
     * An array of face data which represent displayable faces of this card
     */
    faces: CardFaceData[];
    /**
     * The index of the currently displayed face, or null if the card is face-down
     */
    face: number | null;
    /**
     * Whether this card is currently drawn from its source deck
     */
    drawn: boolean;
    /**
     * The document ID of the origin deck to which this card belongs
     */
    origin: string;
    /**
     * The visible width of this card
     */
    width: number;
    /**
     * The visible height of this card
     */
    height: number;
    /**
     * The angle of rotation of this card
     */
    rotation: number;
    /**
     * The sort order of this card relative to others in the same stack
     */
    sort: number;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
export type CardFaceData = {
    /**
     * A name for this card face
     */
    name?: string;
    /**
     * Displayed text that belongs to this face
     */
    text?: string;
    /**
     * A displayed image or video file which depicts the face
     */
    img?: string;
};
/**
 * @typedef {Object} CardData
 * @property {string} _id                 The _id which uniquely identifies this Card document
 * @property {string} name                The text name of this card
 * @property {string} [description]       A text description of this card which applies to all faces
 * @property {string} type                A category of card (for example, a suit) to which this card belongs
 * @property {object} [system]            Game system data which is defined by the system template.json model
 * @property {string} [suit]              An optional suit designation which is used by default sorting
 * @property {number} [value]             An optional numeric value of the card which is used by default sorting
 * @property {CardFaceData} back          An object of face data which describes the back of this card
 * @property {CardFaceData[]} faces       An array of face data which represent displayable faces of this card
 * @property {number|null} face           The index of the currently displayed face, or null if the card is face-down
 * @property {boolean} drawn              Whether this card is currently drawn from its source deck
 * @property {string} origin              The document ID of the origin deck to which this card belongs
 * @property {number} width               The visible width of this card
 * @property {number} height              The visible height of this card
 * @property {number} rotation            The angle of rotation of this card
 * @property {number} sort                The sort order of this card relative to others in the same stack
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * @typedef {Object} CardFaceData
 * @property {string} [name]              A name for this card face
 * @property {string} [text]              Displayed text that belongs to this face
 * @property {string} [img]               A displayed image or video file which depicts the face
 */
/**
 * The Document definition for a Card.
 * Defines the DataSchema and common behaviors for a Card which are shared between both client and server.
 * @extends abstract.Document
 * @mixes CardData
 * @memberof documents
 *
 * @param {CardData} data                         Initial data from which to construct the Card
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseCard {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        description: fields.HTMLField;
        type: fields.StringField;
        system: fields.TypeDataField;
        suit: fields.StringField;
        value: fields.NumberField;
        back: fields.SchemaField;
        faces: fields.ArrayField;
        face: fields.NumberField;
        drawn: fields.BooleanField;
        origin: fields.ForeignDocumentField;
        width: fields.NumberField;
        height: fields.NumberField;
        rotation: fields.AngleField;
        sort: fields.IntegerSortField;
        flags: fields.ObjectField;
    };
    /**
     * The default icon used for a Card face that does not have a custom image set
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /**
     * The allowed set of Card types which may exist
     * @type {string[]}
     */
    static get TYPES(): string[];
    /**
     * Is a User able to create a new Card within this parent?
     * @private
     */
    private static "__#8@#canCreate";
    /**
     * Is a user able to update an existing Card?
     * @private
     */
    private static "__#8@#canUpdate";
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    /** @inheritdoc */
    testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
}
import * as fields from "../data/fields.mjs";
