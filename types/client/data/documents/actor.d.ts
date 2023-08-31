declare const Actor_base: typeof import("../../../common/documents/actor.mjs").default;
/**
 * The client-side Actor document which extends the common BaseActor model.
 *
 * @extends foundry.documents.BaseActor
 * @mixes ClientDocumentMixin
 * @category - Documents
 *
 * @see {@link documents.Actors}            The world-level collection of Actor documents
 * @see {@link applications.ActorSheet}     The Actor configuration application
 *
 * @example Create a new Actor
 * ```js
 * let actor = await Actor.create({
 *   name: "New Test Actor",
 *   type: "character",
 *   img: "artwork/character-profile.jpg"
 * });
 * ```
 *
 * @example Retrieve an existing Actor
 * ```js
 * let actor = game.actors.get(actorId);
 * ```
 */
declare class Actor extends Actor_base {
    /**
     * Request wildcard token images from the server and return them.
     * @param {string} actorId         The actor whose prototype token contains the wildcard image path.
     * @param {object} [options]
     * @param {string} [options.pack]  The name of the compendium the actor is in.
     * @returns {Promise<string[]>}    The list of filenames to token images that match the wildcard search.
     * @protected
     */
    protected static _requestTokenImages(actorId: string, options?: {
        pack?: string;
    }): Promise<string[]>;
    /** @inheritdoc */
    _configure(options?: {}): void;
    /**
     * An object that tracks which tracks the changes to the data model which were applied by active effects
     * @type {object}
     */
    overrides: object;
    /**
     * The statuses that are applied to this actor by active effects
     * @type {Set<string>}
     */
    statuses: Set<string>;
    /**
     * A cached array of image paths which can be used for this Actor's token.
     * Null if the list has not yet been populated.
     * @type {string[]|null}
     * @protected
     */
    protected _tokenImages: string[] | null;
    /**
     * Cache the last drawn wildcard token to avoid repeat draws
     * @type {string|null}
     */
    _lastWildcard: string | null;
    /**
     * Provide a thumbnail image path used to represent this document.
     * @type {string}
     */
    get thumbnail(): string;
    /**
     * Provide an object which organizes all embedded Item instances by their type
     * @type {Object<Item[]>}
     */
    get itemTypes(): any;
    /**
     * Test whether an Actor document is a synthetic representation of a Token (if true) or a full Document (if false)
     * @type {boolean}
     */
    get isToken(): boolean;
    /**
     * Retrieve the list of ActiveEffects that are currently applied to this Actor.
     * @type {ActiveEffect[]}
     */
    get appliedEffects(): ActiveEffect[];
    /**
     * An array of ActiveEffect instances which are present on the Actor which have a limited duration.
     * @type {ActiveEffect[]}
     */
    get temporaryEffects(): ActiveEffect[];
    /**
     * Return a reference to the TokenDocument which owns this Actor as a synthetic override
     * @type {TokenDocument|null}
     */
    get token(): TokenDocument;
    /**
     * Whether the Actor has at least one Combatant in the active Combat that represents it.
     * @returns {boolean}
     */
    get inCombat(): boolean;
    /**
     * Apply any transformations to the Actor data which are caused by ActiveEffects.
     */
    applyActiveEffects(): void;
    /**
     * Retrieve an Array of active tokens which represent this Actor in the current canvas Scene.
     * If the canvas is not currently active, or there are no linked actors, the returned Array will be empty.
     * If the Actor is a synthetic token actor, only the exact Token which it represents will be returned.
     *
     * @param {boolean} [linked=false]    Limit results to Tokens which are linked to the Actor. Otherwise, return all
     *                                    Tokens even those which are not linked.
     * @param {boolean} [document=false]  Return the Document instance rather than the PlaceableObject
     * @returns {Array<TokenDocument|Token>} An array of Token instances in the current Scene which reference this Actor.
     */
    getActiveTokens(linked?: boolean, document?: boolean): (Function | TokenDocument)[];
    /**
     * Get all ActiveEffects that may apply to this Actor.
     * If CONFIG.ActiveEffect.legacyTransferral is true, this is equivalent to actor.effects.contents.
     * If CONFIG.ActiveEffect.legacyTransferral is false, this will also return all the transferred ActiveEffects on any
     * of the Actor's owned Items.
     * @yields {ActiveEffect}
     * @returns {Generator<ActiveEffect, void, void>}
     */
    allApplicableEffects(): Generator<ActiveEffect, void, void>;
    /**
     * Prepare a data object which defines the data schema used by dice roll commands against this Actor
     * @returns {object}
     */
    getRollData(): object;
    /**
     * Create a new Token document, not yet saved to the database, which represents the Actor.
     * @param {object} [data={}]            Additional data, such as x, y, rotation, etc. for the created token data
     * @returns {Promise<TokenDocument>}    The created TokenDocument instance
     */
    getTokenDocument(data?: object): Promise<TokenDocument>;
    /**
     * Get an Array of Token images which could represent this Actor
     * @returns {Promise<string[]>}
     */
    getTokenImages(): Promise<string[]>;
    /**
     * Handle how changes to a Token attribute bar are applied to the Actor.
     * This allows for game systems to override this behavior and deploy special logic.
     * @param {string} attribute    The attribute path
     * @param {number} value        The target attribute value
     * @param {boolean} isDelta     Whether the number represents a relative change (true) or an absolute change (false)
     * @param {boolean} isBar       Whether the new value is part of an attribute bar, or just a direct value
     * @returns {Promise<documents.Actor>}  The updated Actor document
     */
    modifyTokenAttribute(attribute: string, value: number, isDelta?: boolean, isBar?: boolean): Promise<documents.Actor>;
    /** @inheritdoc */
    prepareEmbeddedDocuments(): void;
    /**
     * Roll initiative for all Combatants in the currently active Combat encounter which are associated with this Actor.
     * If viewing a full Actor document, all Tokens which map to that actor will be targeted for initiative rolls.
     * If viewing a synthetic Token actor, only that particular Token will be targeted for an initiative roll.
     *
     * @param {object} options                          Configuration for how initiative for this Actor is rolled.
     * @param {boolean} [options.createCombatants=false]    Create new Combatant entries for Tokens associated with
     *                                                      this actor.
     * @param {boolean} [options.rerollInitiative=false]    Re-roll the initiative for this Actor if it has already
     *                                                      been rolled.
     * @param {object} [options.initiativeOptions={}]       Additional options passed to the Combat#rollInitiative method.
     * @returns {Promise<documents.Combat|null>}        A promise which resolves to the Combat document once rolls
     *                                                  are complete.
     */
    rollInitiative({ createCombatants, rerollInitiative, initiativeOptions }?: {
        createCombatants?: boolean;
        rerollInitiative?: boolean;
        initiativeOptions?: object;
    }): Promise<documents.Combat | null>;
    /**
     * Get this actor's dependent tokens.
     * If the actor is a synthetic token actor, only the exact Token which it represents will be returned.
     * @param {object} [options]
     * @param {Scene|Scene[]} [options.scenes]  A single Scene, or list of Scenes to filter by.
     * @param {boolean} [options.linked]        Limit the results to tokens that are linked to the actor.
     * @returns {TokenDocument[]}
     */
    getDependentTokens({ scenes, linked }?: {
        scenes?: Scene | Scene[];
        linked?: boolean;
    }): TokenDocument[];
    /**
     * Register a token as a dependent of this actor.
     * @param {TokenDocument} token  The token.
     * @internal
     */
    _registerDependentToken(token: TokenDocument): void;
    /**
     * Remove a token from this actor's dependents.
     * @param {TokenDocument} token  The token.
     * @internal
     */
    _unregisterDependentToken(token: TokenDocument): void;
    /**
     * Prune a whole scene from this actor's dependent tokens.
     * @param {Scene} scene  The scene.
     * @internal
     */
    _unregisterDependentScene(scene: Scene): void;
    /**
     * When an Actor is being created, apply default token configuration settings to its prototype token.
     * @param {object} data         Data explicitly provided to the creation workflow
     * @param {object} options      Options which configure creation
     * @param {boolean} [options.fromCompendium]  Does this creation workflow originate via compendium import?
     * @protected
     */
    protected _applyDefaultTokenSettings(data: object, { fromCompendium }?: {
        fromCompendium?: boolean;
    }): any;
    /** @override */
    override _onUpdate(data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onUpdateDescendantDocuments(parent: any, collection: any, documents: any, changes: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void;
    /**
     * Additional workflows to perform when any descendant document within this Actor changes.
     * @protected
     */
    protected _onEmbeddedDocumentChange(): void;
    /**
     * Update the active TokenDocument instances which represent this Actor.
     * @param {object} [update]                        The update delta.
     * @param {DocumentModificationContext} [options]  The update context.
     * @protected
     */
    protected _updateDependentTokens(update?: object, options?: DocumentModificationContext): void;
    /**
     * @deprecated since v10
     * @ignore
     */
    getTokenData(data: any): Promise<TokenDocument>;
}
