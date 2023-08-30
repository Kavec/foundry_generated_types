/**
 * The client-side Item document which extends the common BaseItem model.
 * @extends documents.BaseItem
 * @mixes ClientDocumentMixin
 *
 * @see {@link documents.Items}            The world-level collection of Item documents
 * @see {@link applications.ItemSheet}     The Item configuration application
 */
declare class Item {
    /** @inheritdoc */
    static _onCreateDocuments(items: any, context: any): Promise<any>;
    /** @inheritdoc */
    static _onDeleteDocuments(items: any, context: any): Promise<any>;
    /**
     * A convenience alias of Item#parent which is more semantically intuitive
     * @type {Actor|null}
     */
    get actor(): Actor;
    /**
     * Provide a thumbnail image path used to represent this document.
     * @type {string}
     */
    get thumbnail(): string;
    /**
     * A convenience alias of Item#isEmbedded which is preserves legacy support
     * @type {boolean}
     */
    get isOwned(): boolean;
    /**
     * Return an array of the Active Effect instances which originated from this Item.
     * The returned instances are the ActiveEffect instances which exist on the Item itself.
     * @type {ActiveEffect[]}
     */
    get transferredEffects(): ActiveEffect[];
    /**
     * Prepare a data object which defines the data schema used by dice roll commands against this Item
     * @returns {object}
     */
    getRollData(): object;
    /** @inheritdoc */
    _preCreate(data: any, options: any, user: any): Promise<any>;
}
