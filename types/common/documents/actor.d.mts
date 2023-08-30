export default BaseActor;
export type ActorData = {
    /**
     * The _id which uniquely identifies this Actor document
     */
    _id: string;
    /**
     * The name of this Actor
     */
    name: string;
    /**
     * An Actor subtype which configures the system data model applied
     */
    type: string;
    /**
     * An image file path which provides the artwork for this Actor
     */
    img?: string;
    /**
     * The system data object which is defined by the system template.json model
     */
    system?: object;
    /**
     * Default Token settings which are used for Tokens created from
     * this Actor
     */
    prototypeToken?: data.PrototypeToken;
    /**
     * A Collection of Item embedded Documents
     */
    items: Collection<documents.BaseItem>;
    /**
     * A Collection of ActiveEffect embedded Documents
     */
    effects: Collection<documents.BaseActiveEffect>;
    /**
     * The _id of a Folder which contains this Actor
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this Actor relative to its siblings
     */
    sort?: number;
    /**
     * An object which configures ownership of this Actor
     */
    ownership?: object;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
    /**
     * An object of creation and access information.
     */
    _stats?: DocumentStats;
};
/**
 * @typedef {Object} ActorData
 * @property {string} _id                 The _id which uniquely identifies this Actor document
 * @property {string} name                The name of this Actor
 * @property {string} type                An Actor subtype which configures the system data model applied
 * @property {string} [img]               An image file path which provides the artwork for this Actor
 * @property {object} [system]            The system data object which is defined by the system template.json model
 * @property {data.PrototypeToken} [prototypeToken] Default Token settings which are used for Tokens created from
 *                                        this Actor
 * @property {Collection<documents.BaseItem>} items A Collection of Item embedded Documents
 * @property {Collection<documents.BaseActiveEffect>} effects A Collection of ActiveEffect embedded Documents
 * @property {string|null} folder         The _id of a Folder which contains this Actor
 * @property {number} [sort]              The numeric sort value which orders this Actor relative to its siblings
 * @property {object} [ownership]         An object which configures ownership of this Actor
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information.
 */
/**
 * The Document definition for an Actor.
 * Defines the DataSchema and common behaviors for an Actor which are shared between both client and server.
 * @extends abstract.Document
 * @mixes ActorData
 * @memberof documents
 *
 * @param {ActorData} data                        Initial data from which to construct the Actor
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseActor {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.StringField;
        img: fields.FilePathField;
        system: fields.TypeDataField;
        prototypeToken: fields.EmbeddedDataField;
        items: fields.EmbeddedCollectionField;
        effects: fields.EmbeddedCollectionField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for newly created Actor documents.
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /**
     * Determine default artwork based on the provided actor data.
     * @param {ActorData} actorData                      The source actor data.
     * @returns {{img: string, texture: {src: string}}}  Candidate actor image and prototype token artwork.
     */
    static getDefaultArtwork(actorData: ActorData): {
        img: string;
        texture: {
            src: string;
        };
    };
    /**
     * The allowed set of Actor types which may exist.
     * @type {string[]}
     */
    static get TYPES(): string[];
    /** @inheritdoc */
    static canUserCreate(user: any): any;
    /**
     * Is a user able to create this actor?
     * @param {User} user  The user attempting the creation operation.
     * @param {Actor} doc  The Actor being created.
     * @private
     */
    private static "__#7@#canCreate";
    /**
     * Is a user able to update an existing actor?
     * @param {User} user    The user attempting the update operation.
     * @param {Actor} doc    The Actor being updated.
     * @param {object} data  The update delta being applied.
     * @private
     */
    private static "__#7@#canUpdate";
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    /** @inheritdoc */
    _initializeSource(source: any, options: any): any;
    /** @inheritdoc */
    _preCreate(data: any, options: any, user: any): Promise<void>;
    /** @inheritdoc */
    _preUpdate(changed: any, options: any, user: any): Promise<void>;
}
import * as documents from "./module.mjs";
import * as fields from "../data/fields.mjs";
