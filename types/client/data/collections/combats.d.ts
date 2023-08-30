/**
 * The singleton collection of Combat documents which exist within the active World.
 * This Collection is accessible within the Game object as game.combats.
 * @extends {WorldCollection}
 *
 * @see {@link Combat} The Combat document
 * @see {@link CombatTracker} The CombatTracker sidebar directory
 */
declare class CombatEncounters extends WorldCollection {
    /**
     * Provide the settings object which configures the Combat document
     * @type {object}
     */
    static get settings(): any;
    /** @inheritdoc */
    get directory(): any;
    /**
     * Get an Array of Combat instances which apply to the current canvas scene
     * @type {Combat[]}
     */
    get combats(): Combat[];
    /**
     * The currently active Combat instance
     * @type {Combat}
     */
    get active(): Combat;
    /**
     * The currently viewed Combat encounter
     * @type {Combat|null}
     */
    get viewed(): Combat;
    /**
     * When a Token is deleted, remove it as a combatant from any combat encounters which included the Token
     * @param {string} sceneId      The Scene id within which a Token is being deleted
     * @param {string} tokenId      The Token id being deleted
     * @protected
     */
    protected _onDeleteToken(sceneId: string, tokenId: string): Promise<void>;
}
