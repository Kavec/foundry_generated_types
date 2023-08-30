/**
 * @typedef {EffectDurationData} ActiveEffectDuration
 * @property {string} type            The duration type, either "seconds", "turns", or "none"
 * @property {number|null} duration   The total effect duration, in seconds of world time or as a decimal
 *                                    number with the format {rounds}.{turns}
 * @property {number|null} remaining  The remaining effect duration, in seconds of world time or as a decimal
 *                                    number with the format {rounds}.{turns}
 * @property {string} label           A formatted string label that represents the remaining duration
 * @property {number} [_worldTime]    An internal flag used determine when to recompute seconds-based duration
 * @property {number} [_combatTime]   An internal flag used determine when to recompute turns-based duration
 */
/**
 * The client-side ActiveEffect document which extends the common BaseActiveEffect model.
 * Each ActiveEffect belongs to the effects collection of its parent Document.
 * Each ActiveEffect contains a ActiveEffectData object which provides its source data.
 *
 * @extends documents.BaseActiveEffect
 * @mixes ClientDocumentMixin
 *
 * @see {@link documents.Actor}                     The Actor document which contains ActiveEffect embedded documents
 * @see {@link documents.Item}                      The Item document which contains ActiveEffect embedded documents
 *
 * @property {ActiveEffectDuration} duration        Expanded effect duration data.
 */
declare class ActiveEffect {
    /**
     * Retrieve the initial duration configuration.
     * @returns {{duration: {startTime: number, [startRound]: number, [startTurn]: number}}}
     */
    static getInitialDuration(): {
        duration: {
            startTime: number;
            [startRound]: number;
            [startTurn]: number;
        };
    };
    /**
     * Is there some system logic that makes this active effect ineligible for application?
     * @type {boolean}
     */
    get isSuppressed(): boolean;
    /**
     * Provide forward-compatibility with other Document types which use img as their primary image or icon.
     * We are likely to formally migrate this in the future, but for now this getter provides compatible read access.
     * @type {string}
     */
    get img(): string;
    /**
     * Retrieve the Document that this ActiveEffect targets for modification.
     * @type {Document|null}
     */
    get target(): Document;
    /**
     * Whether the Active Effect currently applying its changes to the target.
     * @type {boolean}
     */
    get active(): boolean;
    /**
     * Does this Active Effect currently modify an Actor?
     * @type {boolean}
     */
    get modifiesActor(): boolean;
    /** @inheritdoc */
    prepareBaseData(): void;
    /** @inheritdoc */
    prepareDerivedData(): void;
    /**
     * Update derived Active Effect duration data.
     * Configure the remaining and label properties to be getters which lazily recompute only when necessary.
     * @returns {ActiveEffectDuration}
     */
    updateDuration(): EffectDurationData;
    /**
     * Determine whether the ActiveEffect requires a duration update.
     * True if the worldTime has changed for an effect whose duration is tracked in seconds.
     * True if the combat turn has changed for an effect tracked in turns where the effect target is a combatant.
     * @returns {boolean}
     * @protected
     */
    protected _requiresDurationUpdate(): boolean;
    /**
     * Compute derived data related to active effect duration.
     * @returns {{
     *   type: string,
     *   duration: number|null,
     *   remaining: number|null,
     *   label: string,
     *   [_worldTime]: number,
     *   [_combatTime]: number}
     * }
     * @internal
     */
    _prepareDuration(): {
        type: string;
        duration: number | null;
        remaining: number | null;
        label: string;
        [_worldTime]: number;
        [_combatTime]: number;
    };
    /**
     * Format a round+turn combination as a decimal
     * @param {number} round    The round number
     * @param {number} turn     The turn number
     * @param {number} [nTurns] The maximum number of turns in the encounter
     * @returns {number}        The decimal representation
     * @private
     */
    private _getCombatTime;
    /**
     * Format a number of rounds and turns into a human-readable duration label
     * @param {number} rounds   The number of rounds
     * @param {number} turns    The number of turns
     * @returns {string}        The formatted label
     * @private
     */
    private _getDurationLabel;
    /**
     * Describe whether the ActiveEffect has a temporary duration based on combat turns or rounds.
     * @type {boolean}
     */
    get isTemporary(): boolean;
    /**
     * The source name of the Active Effect. The source is retrieved synchronously.
     * Therefore "Unknown" (localized) is returned if the origin points to a document inside a compendium.
     * Returns "None" (localized) if it has no origin, and "Unknown" (localized) if the origin cannot be resolved.
     * @type {string}
     */
    get sourceName(): string;
    /**
     * Apply this ActiveEffect to a provided Actor.
     * TODO: This method is poorly conceived. Its functionality is static, applying a provided change to an Actor
     * TODO: When we revisit this in Active Effects V2 this should become an Actor method, or a static method
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @returns {*}                           The resulting applied value
     */
    apply(actor: Actor, change: EffectChangeData): any;
    /**
     * Cast a raw EffectChangeData change string to the desired data type.
     * @param {string} raw      The raw string value
     * @param {string} type     The target data type that the raw value should be cast to match
     * @returns {*}             The parsed delta cast to the target data type
     * @private
     */
    private _castDelta;
    /**
     * Cast a raw EffectChangeData change string to an Array of an inner type.
     * @param {string} raw      The raw string value
     * @param {string} type     The target data type of inner array elements
     * @returns {Array<*>}      The parsed delta cast as a typed array
     * @private
     */
    private _castArray;
    /**
     * Parse serialized JSON, or retain the raw string.
     * @param {string} raw      A raw serialized string
     * @returns {*}             The parsed value, or the original value if parsing failed
     * @private
     */
    private _parseOrString;
    /**
     * Apply an ActiveEffect that uses an ADD application mode.
     * The way that effects are added depends on the data type of the current value.
     *
     * If the current value is null, the change value is assigned directly.
     * If the current type is a string, the change value is concatenated.
     * If the current type is a number, the change value is cast to numeric and added.
     * If the current type is an array, the change value is appended to the existing array if it matches in type.
     *
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @private
     */
    private _applyAdd;
    /**
     * Apply an ActiveEffect that uses a MULTIPLY application mode.
     * Changes which MULTIPLY must be numeric to allow for multiplication.
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @private
     */
    private _applyMultiply;
    /**
     * Apply an ActiveEffect that uses an OVERRIDE application mode.
     * Numeric data is overridden by numbers, while other data types are overridden by any value
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @private
     */
    private _applyOverride;
    /**
     * Apply an ActiveEffect that uses an UPGRADE, or DOWNGRADE application mode.
     * Changes which UPGRADE or DOWNGRADE must be numeric to allow for comparison.
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @private
     */
    private _applyUpgrade;
    /**
     * Apply an ActiveEffect that uses a CUSTOM application mode.
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @private
     */
    private _applyCustom;
    /** @inheritdoc */
    getFlag(scope: any, key: any): any;
    /** @inheritdoc */
    _preCreate(data: any, options: any, user: any): Promise<void>;
    /** @inheritdoc */
    _onCreate(data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _preUpdate(data: any, options: any, userId: any): Promise<any>;
    /** @inheritdoc */
    _onUpdate(data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDelete(options: any, userId: any): void;
    /**
     * Display changes to active effects as scrolling Token status text.
     * @param {boolean} enabled     Is the active effect currently enabled?
     * @protected
     */
    protected _displayScrollingStatus(enabled: boolean): void;
    /**
     * Get the name of the source of the Active Effect
     * @type {string}
     * @deprecated since v11
     * @ignore
     */
    _getSourceName(): Promise<any>;
}
type ActiveEffectDuration = EffectDurationData;
