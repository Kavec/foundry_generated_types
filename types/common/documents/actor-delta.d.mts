export default BaseActorDelta;
export type ActorDeltaData = {
    /**
     * The _id which uniquely identifies this ActorDelta document.
     */
    _id: string;
    /**
     * The name override, if any.
     */
    name?: string;
    /**
     * The type override, if any.
     */
    type?: string;
    /**
     * The image override, if any.
     */
    img?: string;
    /**
     * The system data model override.
     */
    system?: object;
    /**
     * An array of embedded item data overrides.
     */
    items?: Collection<BaseItem>;
    /**
     * An array of embedded active effect data overrides.
     */
    effects?: Collection<BaseActiveEffect>;
    /**
     * Ownership overrides.
     */
    ownership?: object;
    /**
     * An object of actor flag overrides.
     */
    flags?: object;
};
/**
 * @typedef {object} ActorDeltaData
 * @property {string} _id                              The _id which uniquely identifies this ActorDelta document.
 * @property {string} [name]                           The name override, if any.
 * @property {string} [type]                           The type override, if any.
 * @property {string} [img]                            The image override, if any.
 * @property {object} [system]                         The system data model override.
 * @property {Collection<BaseItem>} [items]            An array of embedded item data overrides.
 * @property {Collection<BaseActiveEffect>} [effects]  An array of embedded active effect data overrides.
 * @property {object} [ownership]                      Ownership overrides.
 * @property {object} [flags]                          An object of actor flag overrides.
 */
/**
 * The Document definition for an ActorDelta.
 * Defines the DataSchema and common behaviors for an ActorDelta which are shared between both client and server.
 * ActorDeltas store a delta that can be applied to a particular Actor in order to produce a new Actor.
 * @extends abstract.Document
 * @mixes ActorDeltaData
 * @memberof document
 *
 * @param {ActorDeltaData} data                  Initial data used to construct the ActorDelta.
 * @param {DocumentConstructionContext} context  Construction context options.
 */
declare class BaseActorDelta {
    /** @inheritdoc */
    static metadata: any;
    /** @override */
    static override defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.StringField;
        img: fields.FilePathField;
        system: fields.ObjectField;
        items: fields.EmbeddedCollectionDeltaField;
        effects: fields.EmbeddedCollectionDeltaField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
    };
    /**
     * Apply an ActorDelta to an Actor and return the resultant synthetic Actor.
     * @param {ActorDelta} delta  The ActorDelta.
     * @param {Actor} baseActor   The base Actor.
     * @param {object} [context]  Context to supply to synthetic Actor instantiation.
     * @returns {Actor|null}
     */
    static applyDelta(delta: ActorDelta, baseActor: Actor, context?: object): Actor | null;
    /**
     * Merge delta Document embedded collections with the base Document.
     * @param {typeof Document} documentClass  The parent Document class.
     * @param {object} baseData                The base Document data.
     * @param {object} deltaData               The delta Document data.
     */
    static "__#6@#mergeEmbeddedCollections"(documentClass: typeof Document, baseData: object, deltaData: object): void;
    /**
     * Apply an embedded collection delta.
     * @param {object[]} base   The base embedded collection.
     * @param {object[]} delta  The delta embedded collection.
     * @returns {object[]}
     */
    static "__#6@#mergeEmbeddedCollection"(base?: object[], delta?: object[]): object[];
    /** @override */
    override canUserModify(user: any, action: any, data?: {}): any;
    /** @override */
    override testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
    /**
     * Retrieve the base actor's collection, if it exists.
     * @param {string} collectionName  The collection name.
     * @returns {Collection}
     */
    getBaseCollection(collectionName: string): Collection;
    /** @override */
    override toObject(source?: boolean): {};
}
import * as fields from "../data/fields.mjs";
import Document from "../abstract/document.mjs";
