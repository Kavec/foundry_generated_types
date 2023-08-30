/**
 * The client-side Token document which extends the common BaseToken document model.
 * @extends documents.BaseToken
 * @mixes ClientDocumentMixin
 *
 * @see {@link Scene}                     The Scene document type which contains Token documents
 * @see {@link TokenConfig}               The Token configuration application
 */
declare class TokenDocument {
    /**
     * @typedef {object} TrackedAttributesDescription
     * @property {string[][]} bar    A list of property path arrays to attributes with both a value and a max property.
     * @property {string[][]} value  A list of property path arrays to attributes that have only a value property.
     */
    /**
     * Get an Array of attribute choices which could be tracked for Actors in the Combat Tracker
     * @param {object|DataModel|typeof DataModel|SchemaField|string} [data]  The object to explore for attributes, or an
     *                                                                       Actor type.
     * @param {string[]} [_path]
     * @returns {TrackedAttributesDescription}
     */
    static getTrackedAttributes(data?: object | DataModel | typeof DataModel | SchemaField | string, _path?: string[]): {
        /**
         * A list of property path arrays to attributes with both a value and a max property.
         */
        bar: string[][];
        /**
         * A list of property path arrays to attributes that have only a value property.
         */
        value: string[][];
    };
    /**
     * Retrieve an Array of attribute choices from a plain object.
     * @param {object} data  The object to explore for attributes.
     * @param {string[]} _path
     * @returns {TrackedAttributesDescription}
     * @protected
     */
    protected static _getTrackedAttributesFromObject(data: object, _path?: string[]): {
        /**
         * A list of property path arrays to attributes with both a value and a max property.
         */
        bar: string[][];
        /**
         * A list of property path arrays to attributes that have only a value property.
         */
        value: string[][];
    };
    /**
     * Retrieve an Array of attribute choices from a SchemaField.
     * @param {SchemaField} schema  The schema to explore for attributes.
     * @param {string[]} _path
     * @returns {TrackedAttributesDescription}
     * @protected
     */
    protected static _getTrackedAttributesFromSchema(schema: SchemaField, _path?: string[]): {
        /**
         * A list of property path arrays to attributes with both a value and a max property.
         */
        bar: string[][];
        /**
         * A list of property path arrays to attributes that have only a value property.
         */
        value: string[][];
    };
    /**
     * Retrieve any configured attributes for a given Actor type.
     * @param {string} [type]  The Actor type.
     * @returns {TrackedAttributesDescription|void}
     * @protected
     */
    protected static _getConfiguredTrackedAttributes(type?: string): void | {
        /**
         * A list of property path arrays to attributes with both a value and a max property.
         */
        bar: string[][];
        /**
         * A list of property path arrays to attributes that have only a value property.
         */
        value: string[][];
    };
    /**
     * Inspect the Actor data model and identify the set of attributes which could be used for a Token Bar
     * @param {object} attributes       The tracked attributes which can be chosen from
     * @returns {object}                A nested object of attribute choices to display
     */
    static getTrackedAttributeChoices(attributes: object): object;
    /**
     * A singleton collection which holds a reference to the synthetic token actor by its base actor's ID.
     * @type {Collection<Actor>}
     */
    actors: Collection<Actor>;
    /**
     * A reference to the Actor this Token modifies.
     * If actorLink is true, then the document is the primary Actor document.
     * Otherwise, the Actor document is a synthetic (ephemeral) document constructed using the Token's ActorDelta.
     * @returns {Actor|null}
     */
    get actor(): Actor;
    /**
     * A reference to the base, World-level Actor this token represents.
     * @returns {Actor}
     */
    get baseActor(): Actor;
    /**
     * An indicator for whether the current User has full control over this Token document.
     * @type {boolean}
     */
    get isOwner(): boolean;
    /**
     * A convenient reference for whether this TokenDocument is linked to the Actor it represents, or is a synthetic copy
     * @type {boolean}
     */
    get isLinked(): boolean;
    /**
     * Return a reference to a Combatant that represents this Token, if one is present in the current encounter.
     * @type {Combatant|null}
     */
    get combatant(): Function;
    /**
     * An indicator for whether this Token is currently involved in the active combat encounter.
     * @type {boolean}
     */
    get inCombat(): boolean;
    set sort(arg: number);
    /**
     * Define a sort order for this TokenDocument.
     * This controls its rendering order in the PrimaryCanvasGroup relative to siblings at the same elevation.
     * In the future this will be replaced with a persisted database field for permanent adjustment of token stacking.
     * In case of ties, Tokens will be sorted above other types of objects.
     * @type {number}
     */
    get sort(): number;
    /** @inheritdoc */
    _initialize(options?: {}): void;
    /** @inheritdoc */
    prepareBaseData(): void;
    alpha: any;
    /** @inheritdoc */
    prepareEmbeddedDocuments(): void;
    /**
     * Prepare detection modes which are available to the Token.
     * Ensure that every Token has the basic sight detection mode configured.
     * @protected
     */
    protected _prepareDetectionModes(): void;
    /**
     * A helper method to retrieve the underlying data behind one of the Token's attribute bars
     * @param {string} barName                The named bar to retrieve the attribute for
     * @param {object} [options]
     * @param {string} [options.alternative]  An alternative attribute path to get instead of the default one
     * @returns {object|null}                 The attribute displayed on the Token bar, if any
     */
    getBarAttribute(barName: string, { alternative }?: {
        alternative?: string;
    }): object | null;
    /**
     * A helper function to toggle a status effect which includes an Active Effect template
     * @param {{id: string, label: string, icon: string}} effectData The Active Effect data
     * @param {object} [options]                                     Options to configure application of the Active Effect
     * @param {boolean} [options.overlay=false]                      Should the Active Effect icon be displayed as an
     *                                                               overlay on the token?
     * @param {boolean} [options.active]                             Force a certain active state for the effect.
     * @returns {Promise<boolean>}                                   Whether the Active Effect is now on or off
     */
    toggleActiveEffect(effectData: {
        id: string;
        label: string;
        icon: string;
    }, { overlay, active }?: {
        overlay?: boolean;
        active?: boolean;
    }): Promise<boolean>;
    /**
     * Test whether a Token has a specific status effect.
     * @param {string} statusId     The status effect ID as defined in CONFIG.statusEffects
     * @returns {boolean}           Does the Token have this status effect?
     */
    hasStatusEffect(statusId: string): boolean;
    /**
     * Convenience method to change a token vision mode.
     * @param {string} visionMode       The vision mode to apply to this token.
     * @param {boolean} [defaults=true] If the vision mode should be updated with its defaults.
     * @returns {Promise<*>}
     */
    updateVisionMode(visionMode: string, defaults?: boolean): Promise<any>;
    /** @inheritdoc */
    getEmbeddedCollection(embeddedName: any): any;
    /** @inheritdoc */
    _preUpdate(data: any, options: any, user: any): Promise<void>;
    /** @inheritdoc */
    _onUpdate(data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDelete(options: any, userId: any): void;
    /**
     * Support the special case descendant document changes within an ActorDelta.
     * The descendant documents themselves are configured to have a synthetic Actor as their parent.
     * We need this to ensure that the ActorDelta receives these events which do not bubble up.
     * @inheritdoc
     */
    _preCreateDescendantDocuments(parent: any, collection: any, data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _preUpdateDescendantDocuments(parent: any, collection: any, changes: any, options: any, userId: any): void;
    /** @inheritdoc */
    _preDeleteDescendantDocuments(parent: any, collection: any, ids: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onUpdateDescendantDocuments(parent: any, collection: any, documents: any, changes: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void;
    /**
     * When the base Actor for a TokenDocument changes, we may need to update its Actor instance
     * @param {object} update
     * @param {object} options
     * @internal
     */
    _onUpdateBaseActor(update?: object, options?: object): void;
    /**
     * Whenever the token's actor delta changes, or the base actor changes, perform associated refreshes.
     * @param {object} [update]                        The update delta.
     * @param {DocumentModificationContext} [options]  The options provided to the update.
     * @protected
     */
    protected _onRelatedUpdate(update?: object, options?: DocumentModificationContext): void;
    /**
     * @deprecated since v11
     * @ignore
     */
    getActor(): any;
    set actorData(arg: any);
    /**
     * @deprecated since v11
     * @ignore
     */
    get actorData(): any;
    delta: any;
    #private;
}
/**
 * @deprecated since v10
 * @see data.PrototypeToken
 * @ignore
 */
declare class PrototypeTokenDocument {
    constructor(...args: any[]);
}
type TrackedAttributesDescription = {
    /**
     * A list of property path arrays to attributes with both a value and a max property.
     */
    bar: string[][];
    /**
     * A list of property path arrays to attributes that have only a value property.
     */
    value: string[][];
};
