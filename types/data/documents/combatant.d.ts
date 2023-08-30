/**
 * The client-side Combatant document which extends the common BaseCombatant model.
 *
 * @extends documents.BaseCombatant
 * @mixes ClientDocumentMixin
 *
 * @see {@link Combat}                  The Combat document which contains Combatant embedded documents
 * @see {@link CombatantConfig}         The application which configures a Combatant.
 */
declare class Combatant {
    /**
     * The token video source image (if any)
     * @type {string|null}
     * @internal
     */
    _videoSrc: string | null;
    /**
     * The current value of the special tracked resource which pertains to this Combatant
     * @type {object|null}
     */
    resource: object | null;
    /**
     * A convenience alias of Combatant#parent which is more semantically intuitive
     * @type {Combat|null}
     */
    get combat(): Combat;
    /**
     * This is treated as a non-player combatant if it has no associated actor and no player users who can control it
     * @type {boolean}
     */
    get isNPC(): boolean;
    /** @override */
    override get visible(): any;
    /**
     * A reference to the Actor document which this Combatant represents, if any
     * @type {Actor|null}
     */
    get actor(): Actor;
    /**
     * A reference to the Token document which this Combatant represents, if any
     * @type {TokenDocument|null}
     */
    get token(): TokenDocument;
    /**
     * An array of non-Gamemaster Users who have ownership of this Combatant.
     * @type {User[]}
     */
    get players(): User[];
    /**
     * Has this combatant been marked as defeated?
     * @type {boolean}
     */
    get isDefeated(): boolean;
    /** @inheritdoc */
    testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
    /**
     * Get a Roll object which represents the initiative roll for this Combatant.
     * @param {string} formula        An explicit Roll formula to use for the combatant.
     * @returns {Roll}                The unevaluated Roll instance to use for the combatant.
     */
    getInitiativeRoll(formula: string): Roll;
    /**
     * Roll initiative for this particular combatant.
     * @param {string} [formula]      A dice formula which overrides the default for this Combatant.
     * @returns {Promise<Combatant>}  The updated Combatant.
     */
    rollInitiative(formula?: string): Promise<Function>;
    /** @override */
    override prepareDerivedData(): void;
    /**
     * Update the value of the tracked resource for this Combatant.
     * @returns {null|object}
     */
    updateResource(): null | object;
    /**
     * Acquire the default dice formula which should be used to roll initiative for this combatant.
     * Modules or systems could choose to override or extend this to accommodate special situations.
     * @returns {string}               The initiative formula to use for this combatant.
     * @protected
     */
    protected _getInitiativeFormula(): string;
}
