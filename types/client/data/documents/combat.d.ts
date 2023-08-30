/**
 * @typedef {Object} CombatHistoryData
 * @property {number|null} round
 * @property {number|null} turn
 * @property {string|null} tokenId
 * @property {string|null} combatantId
 */
/**
 * The client-side Combat document which extends the common BaseCombat model.
 *
 * @extends documents.BaseCombat
 * @mixes ClientDocumentMixin
 *
 * @see {@link documents.Combats}             The world-level collection of Combat documents
 * @see {@link Combatant}                     The Combatant embedded document which exists within a Combat document
 * @see {@link CombatConfig}                  The Combat configuration application
 */
declare class Combat {
    /**
     * The configuration setting used to record Combat preferences
     * @type {string}
     */
    static CONFIG_SETTING: string;
    constructor(data: any, context: any);
    /**
     * Track the sorted turn order of this combat encounter
     * @type {Combatant[]}
     */
    turns: Function[];
    /**
     * Record the current round, turn, and tokenId to understand changes in the encounter state
     * @type {CombatHistoryData}
     */
    current: CombatHistoryData;
    /**
     * Track the previous round, turn, and tokenId to understand changes in the encounter state
     * @type {CombatHistoryData}
     */
    previous: CombatHistoryData;
    /**
     * Get the Combatant who has the current turn.
     * @type {Combatant}
     */
    get combatant(): Function;
    /**
     * Get the Combatant who has the next turn.
     * @type {Combatant}
     */
    get nextCombatant(): Function;
    /**
     * Return the object of settings which modify the Combat Tracker behavior
     * @type {object}
     */
    get settings(): any;
    /**
     * Has this combat encounter been started?
     * @type {boolean}
     */
    get started(): boolean;
    /** @inheritdoc */
    get visible(): boolean;
    /**
     * Is this combat active in the current scene?
     * @type {boolean}
     */
    get isActive(): boolean;
    /**
     * Set the current Combat encounter as active within the Scene.
     * Deactivate all other Combat encounters within the viewed Scene and set this one as active
     * @param {object} [options] Additional context to customize the update workflow
     * @returns {Promise<Combat>}
     */
    activate(options?: object): Promise<Combat>;
    /** @override */
    override prepareDerivedData(): void;
    /**
     * Get a Combatant using its Token id
     * @param {string} tokenId   The id of the Token for which to acquire the combatant
     * @returns {Combatant}
     */
    getCombatantByToken(tokenId: string): Function;
    /**
     * Get a Combatant that represents the given Actor or Actor ID.
     * @param {string|Actor} actorOrId An Actor ID or an Actor instance.
     * @returns {Combatant}
     */
    getCombatantByActor(actorOrId: string | Actor): Function;
    /**
     * Begin the combat encounter, advancing to round 1 and turn 1
     * @returns {Promise<Combat>}
     */
    startCombat(): Promise<Combat>;
    /**
     * Advance the combat to the next round
     * @returns {Promise<Combat>}
     */
    nextRound(): Promise<Combat>;
    /**
     * Rewind the combat to the previous round
     * @returns {Promise<Combat>}
     */
    previousRound(): Promise<Combat>;
    /**
     * Advance the combat to the next turn
     * @returns {Promise<Combat>}
     */
    nextTurn(): Promise<Combat>;
    /**
     * Rewind the combat to the previous turn
     * @returns {Promise<Combat>}
     */
    previousTurn(): Promise<Combat>;
    /**
     * Display a dialog querying the GM whether they wish to end the combat encounter and empty the tracker
     * @returns {Promise<Combat>}
     */
    endCombat(): Promise<Combat>;
    /**
     * Toggle whether this combat is linked to the scene or globally available.
     * @returns {Promise<Combat>}
     */
    toggleSceneLink(): Promise<Combat>;
    /**
     * Reset all combatant initiative scores, setting the turn back to zero
     * @returns {Promise<Combat>}
     */
    resetAll(): Promise<Combat>;
    /**
     * Roll initiative for one or multiple Combatants within the Combat document
     * @param {string|string[]} ids     A Combatant id or Array of ids for which to roll
     * @param {object} [options={}]     Additional options which modify how initiative rolls are created or presented.
     * @param {string|null} [options.formula]         A non-default initiative formula to roll. Otherwise, the system
     *                                                default is used.
     * @param {boolean} [options.updateTurn=true]     Update the Combat turn after adding new initiative scores to
     *                                                keep the turn on the same Combatant.
     * @param {object} [options.messageOptions={}]    Additional options with which to customize created Chat Messages
     * @returns {Promise<Combat>}       A promise which resolves to the updated Combat document once updates are complete.
     */
    rollInitiative(ids: string | string[], { formula, updateTurn, messageOptions }?: {
        formula?: string | null;
        updateTurn?: boolean;
        messageOptions?: object;
    }): Promise<Combat>;
    /**
     * Roll initiative for all combatants which have not already rolled
     * @param {object} [options={}]   Additional options forwarded to the Combat.rollInitiative method
     */
    rollAll(options?: object): Promise<Combat>;
    /**
     * Roll initiative for all non-player actors who have not already rolled
     * @param {object} [options={}]   Additional options forwarded to the Combat.rollInitiative method
     */
    rollNPC(options?: object): Promise<Combat>;
    /**
     * Assign initiative for a single Combatant within the Combat encounter.
     * Update the Combat turn order to maintain the same combatant as the current turn.
     * @param {string} id         The combatant ID for which to set initiative
     * @param {number} value      A specific initiative value to set
     */
    setInitiative(id: string, value: number): Promise<void>;
    /**
     * Return the Array of combatants sorted into initiative order, breaking ties alphabetically by name.
     * @returns {Combatant[]}
     */
    setupTurns(): Function[];
    turn: any;
    /**
     * Debounce changes to the composition of the Combat encounter to de-duplicate multiple concurrent Combatant changes.
     * If this is the currently viewed encounter, re-render the CombatTracker application.
     * @type {Function}
     */
    debounceSetup: Function;
    /**
     * Update active effect durations for all actors present in this Combat encounter.
     */
    updateCombatantActors(): void;
    /**
     * Loads the registered Combat Theme (if any) and plays the requested type of sound.
     * If multiple exist for that type, one is chosen at random.
     * @param {string} announcement     The announcement that should be played: "startEncounter", "nextUp", or "yourTurn".
     * @protected
     */
    protected _playCombatSound(announcement: string): void;
    /**
     * Define how the array of Combatants is sorted in the displayed list of the tracker.
     * This method can be overridden by a system or module which needs to display combatants in an alternative order.
     * The default sorting rules sort in descending order of initiative using combatant IDs for tiebreakers.
     * @param {Combatant} a     Some combatant
     * @param {Combatant} b     Some other combatant
     * @protected
     */
    protected _sortCombatants(a: Function, b: Function): number;
    /**
     * Refresh the Token HUD under certain circumstances.
     * @param {Combatant[]} documents  A list of Combatant documents that were added or removed.
     * @protected
     */
    protected _refreshTokenHUD(documents: Function[]): void;
    /** @inheritdoc */
    _onCreate(data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onUpdate(data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDelete(options: any, userId: any): void;
    /** @inheritdoc */
    _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onUpdateDescendantDocuments(parent: any, collection: any, documents: any, changes: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void;
    /**
     * Manage the execution of Combat lifecycle events.
     * This method orchestrates the execution of four events in the following order, as applicable:
     * 1. End Turn
     * 2. End Round
     * 3. Begin Round
     * 4. Begin Turn
     * Each lifecycle event is an async method, and each is awaited before proceeding.
     * @param {number} [adjustedTurn]   Optionally, an adjusted turn to commit to the Combat.
     * @returns {Promise<void>}
     * @protected
     */
    protected _manageTurnEvents(adjustedTurn?: number): Promise<void>;
    /**
     * A workflow that occurs at the end of each Combat Turn.
     * This workflow occurs after the Combat document update, prior round information exists in this.previous.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @param {Combatant} combatant     The Combatant whose turn just ended
     * @returns {Promise<void>}
     * @protected
     */
    protected _onEndTurn(combatant: Function): Promise<void>;
    /**
     * A workflow that occurs at the end of each Combat Round.
     * This workflow occurs after the Combat document update, prior round information exists in this.previous.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @returns {Promise<void>}
     * @protected
     */
    protected _onEndRound(): Promise<void>;
    /**
     * A workflow that occurs at the start of each Combat Round.
     * This workflow occurs after the Combat document update, new round information exists in this.current.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @returns {Promise<void>}
     * @protected
     */
    protected _onStartRound(): Promise<void>;
    /**
     * A workflow that occurs at the start of each Combat Turn.
     * This workflow occurs after the Combat document update, new turn information exists in this.current.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @param {Combatant} combatant     The Combatant whose turn just started
     * @returns {Promise<void>}
     * @protected
     */
    protected _onStartTurn(combatant: Function): Promise<void>;
    /**
     * @deprecated since v11
     * @ignore
     */
    updateEffectDurations(): void;
    #private;
}
type CombatHistoryData = {
    round: number | null;
    turn: number | null;
    tokenId: string | null;
    combatantId: string | null;
};
