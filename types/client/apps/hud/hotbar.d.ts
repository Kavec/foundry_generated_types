/**
 * The global action bar displayed at the bottom of the game view.
 * The Hotbar is a UI element at the bottom of the screen which contains Macros as interactive buttons.
 * The Hotbar supports 5 pages of global macros which can be dragged and dropped to organize as you wish.
 *
 * Left-clicking a Macro button triggers its effect.
 * Right-clicking the button displays a context menu of Macro options.
 * The number keys 1 through 0 activate numbered hotbar slots.
 * Pressing the delete key while hovering over a Macro will remove it from the bar.
 *
 * @see {@link Macros}
 * @see {@link Macro}
 */
declare class Hotbar extends Application {
    /** @override */
    static override get defaultOptions(): any;
    /**
     * Handle toggling a document sheet.
     * @param {string} uuid     The Document UUID to display
     * @returns {Promise<void>|Application|*}
     */
    static toggleDocumentSheet(uuid: string): Promise<void> | Application | any;
    constructor(options: any);
    /**
     * The currently viewed macro page
     * @type {number}
     */
    page: number;
    /**
     * The currently displayed set of macros
     * @type {Macro[]}
     */
    macros: Macro[];
    /**
     * Track collapsed state
     * @type {boolean}
     */
    _collapsed: boolean;
    /**
     * Track which hotbar slot is the current hover target, if any
     * @type {number|null}
     */
    _hover: number | null;
    /**
     * Whether the hotbar is locked.
     * @returns {boolean}
     */
    get locked(): boolean;
    /** @override */
    override getData(options?: {}): {
        page: number;
        macros: Macro[];
        barClass: string;
        locked: boolean;
    };
    /**
     * Get the Array of Macro (or null) values that should be displayed on a numbered page of the bar
     * @param {number} page
     * @returns {Macro[]}
     * @private
     */
    private _getMacrosByPage;
    /**
     * Collapse the Hotbar, minimizing its display.
     * @returns {Promise}    A promise which resolves once the collapse animation completes
     */
    collapse(): Promise<any>;
    /**
     * Expand the Hotbar, displaying it normally.
     * @returns {Promise}    A promise which resolves once the expand animation completes
     */
    expand(): Promise<any>;
    /**
     * Change to a specific numbered page from 1 to 5
     * @param {number} page     The page number to change to.
     */
    changePage(page: number): void;
    /**
     * Change the page of the hotbar by cycling up (positive) or down (negative)
     * @param {number} direction    The direction to cycle
     */
    cyclePage(direction: number): void;
    /** @override */
    override activateListeners(html: any): void;
    /** @inheritdoc */
    _contextMenu(html: any): void;
    /**
     * Get the Macro entry context options
     * @returns {object[]}  The Macro entry context options
     * @private
     */
    private _getEntryContextOptions;
    /**
     * Handle left-click events to
     * @param {MouseEvent} event    The originating click event
     * @protected
     */
    protected _onClickMacro(event: MouseEvent): Promise<any>;
    /**
     * Handle pagination controls
     * @param {Event} event   The originating click event
     * @private
     */
    private _onClickPageControl;
    /** @override */
    override _canDragStart(selector: any): boolean;
    /** @override */
    override _onDragStart(event: any): boolean;
    /** @override */
    override _canDragDrop(selector: any): boolean;
    /** @override */
    override _onDrop(event: any): Promise<any>;
    /**
     * Create a Macro which rolls a RollTable when executed
     * @param {Document} table    The RollTable document
     * @returns {Promise<Macro>}  A created Macro document to add to the bar
     * @private
     */
    private _createRollTableRollMacro;
    /**
     * Create a Macro document which can be used to toggle display of a Journal Entry.
     * @param {Document} doc          A Document which should be toggled
     * @returns {Promise<Macro>}      A created Macro document to add to the bar
     * @protected
     */
    protected _createDocumentSheetToggle(doc: Document): Promise<Macro>;
    /**
     * Handle click events to toggle display of the macro bar
     * @param {Event} event
     * @private
     */
    private _onToggleBar;
    /**
     * Toggle the hotbar's lock state.
     * @returns {Promise<Hotbar>}
     * @protected
     */
    protected _toggleHotbarLock(): Promise<Hotbar>;
}
