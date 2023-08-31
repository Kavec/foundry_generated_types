/**
 * The sidebar directory which organizes and displays world-level Combat documents.
 */
declare class CombatTracker extends SidebarTab {
    constructor(options: any);
    /**
     * Record a reference to the currently highlighted Token
     * @type {Token|null}
     * @protected
     */
    protected _highlighted: Function;
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
     * @protected
     */
    protected _onCombatCreate(event: Event): Promise<void>;
    /**
     * Handle a Combat cycle request
     * @param {Event} event
     * @protected
     */
    protected _onCombatCycle(event: Event): Promise<void>;
    /**
     * Handle click events on Combat control buttons
     * @protected
     * @param {Event} event   The originating mousedown event
     */
    protected _onCombatControl(event: Event): Promise<void>;
    /**
     * Handle a Combatant control toggle
     * @protected
     * @param {Event} event   The originating mousedown event
     */
    protected _onCombatantControl(event: Event): Promise<any>;
    /**
     * Handle toggling the defeated status effect on a combatant Token
     * @param {Combatant} combatant     The combatant data being modified
     * @returns {Promise}                A Promise that resolves after all operations are complete
     * @protected
     */
    protected _onToggleDefeatedStatus(combatant: Function): Promise<any>;
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
     * @protected
     */
    protected _onCombatantMouseDown(event: Event): Promise<any>;
    _clickTime: number;
    /**
     * Handle mouse-hover events on a combatant in the tracker
     * @protected
     */
    protected _onCombatantHoverIn(event: any): void;
    /**
     * Handle mouse-unhover events for a combatant in the tracker
     * @protected
     */
    protected _onCombatantHoverOut(event: any): void;
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
     * @protected
     */
    protected _getEntryContextOptions(): object[];
    /**
     * Display a dialog which prompts the user to enter a new initiative value for a Combatant
     * @param {JQuery<HTMLElement>} li
     * @protected
     */
    protected _onConfigureCombatant(li: JQuery<HTMLElement>): void;
}
