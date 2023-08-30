/**
 * The sidebar directory which organizes and displays world-level Combat documents.
 */
declare class CombatTracker extends SidebarTab {
    constructor(options: any);
    /**
     * Record a reference to the currently highlighted Token
     * @type {Token|null}
     * @private
     */
    private _highlighted;
    /**
     * Record the currently tracked Combat encounter
     * @type {Combat|null}
     */
    viewed: Combat | null;
    /**
     * Return an array of Combat encounters which occur within the current Scene.
     * @type {Combat[]}
     */
    get combats(): Combat[];
    /**
     * Initialize the combat tracker to display a specific combat encounter.
     * If no encounter is provided, the tracker will be initialized with the first encounter in the viewed scene.
     * @param {object} [options]                   Additional options to configure behavior.
     * @param {Combat|null} [options.combat=null]  The combat encounter to initialize
     * @param {boolean} [options.render=true]      Whether to re-render the sidebar after initialization
     */
    initialize({ combat, render }?: {
        combat?: Combat | null;
        render?: boolean;
    }): void;
    /**
     * Scroll the combat log container to ensure the current Combatant turn is centered vertically
     */
    scrollToTurn(): void;
    /** @inheritdoc */
    getData(options?: {}): Promise<any>;
    /**
     * Retrieve a source image for a combatant.
     * @param {Combatant} combatant         The combatant queried for image.
     * @returns {Promise<string>}           The source image attributed for this combatant.
     * @protected
     */
    protected _getCombatantThumbnail(combatant: Function): Promise<string>;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Handle new Combat creation request
     * @param {Event} event
     * @private
     */
    private _onCombatCreate;
    /**
     * Handle a Combat cycle request
     * @param {Event} event
     * @private
     */
    private _onCombatCycle;
    /**
     * Handle click events on Combat control buttons
     * @private
     * @param {Event} event   The originating mousedown event
     */
    private _onCombatControl;
    /**
     * Handle a Combatant control toggle
     * @private
     * @param {Event} event   The originating mousedown event
     */
    private _onCombatantControl;
    /**
     * Handle toggling the defeated status effect on a combatant Token
     * @param {Combatant} combatant     The combatant data being modified
     * @returns {Promise}                A Promise that resolves after all operations are complete
     * @private
     */
    private _onToggleDefeatedStatus;
    /**
     * Handle pinging a combatant Token
     * @param {Combatant} combatant     The combatant data
     * @returns {Promise}
     * @protected
     */
    protected _onPingCombatant(combatant: Function): Promise<any>;
    /**
     * Handle mouse-down event on a combatant name in the tracker
     * @param {Event} event   The originating mousedown event
     * @returns {Promise}     A Promise that resolves once the pan is complete
     * @private
     */
    private _onCombatantMouseDown;
    _clickTime: number;
    /**
     * Handle mouse-hover events on a combatant in the tracker
     * @private
     */
    private _onCombatantHoverIn;
    /**
     * Handle mouse-unhover events for a combatant in the tracker
     * @private
     */
    private _onCombatantHoverOut;
    /**
     * Highlight a hovered combatant in the tracker.
     * @param {Combatant} combatant The Combatant
     * @param {boolean} hover       Whether they are being hovered in or out.
     */
    hoverCombatant(combatant: Function, hover: boolean): void;
    /** @inheritdoc */
    _contextMenu(html: any): void;
    /**
     * Get the Combatant entry context options
     * @returns {object[]}   The Combatant entry context options
     * @private
     */
    private _getEntryContextOptions;
    /**
     * Display a dialog which prompts the user to enter a new initiative value for a Combatant
     * @param {jQuery} li
     * @private
     */
    private _onConfigureCombatant;
}
