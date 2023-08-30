/**
 * @typedef {object} ContextMenuEntry
 * @property {string} name               The context menu label. Can be localized.
 * @property {string} icon               A string containing an HTML icon element for the menu item
 * @property {function(jQuery)} callback The function to call when the menu item is clicked. Receives the HTML element
 *                                       of the entry that this context menu is for.
 * @property {function(jQuery):boolean} [condition] A function to call to determine if this item appears in the menu.
 *                                                  Receives the HTML element of the entry that this context menu is
 *                                                  for.
 */
/**
 * @callback ContextMenuCallback
 * @param {HTMLElement} target  The element that the context menu has been triggered for.
 */
/**
 * Display a right-click activated Context Menu which provides a dropdown menu of options
 * A ContextMenu is constructed by designating a parent HTML container and a target selector
 * An Array of menuItems defines the entries of the menu which is displayed
 */
declare class ContextMenu {
    /**
     * Create a ContextMenu for this Application and dispatch hooks.
     * @param {Application} app                           The Application this ContextMenu belongs to.
     * @param {jQuery} html                               The Application's rendered HTML.
     * @param {string} selector                           The target CSS selector which activates the menu.
     * @param {ContextMenuEntry[]} menuItems              The array of menu items being rendered.
     * @param {object} [options]                          Additional options to configure context menu initialization.
     * @param {string} [options.hookName="EntryContext"]  The name of the hook to call.
     * @returns {ContextMenu}
     */
    static create(app: Application, html: JQueryStatic, selector: string, menuItems: ContextMenuEntry[], { hookName, ...options }?: {
        hookName?: string;
    }): ContextMenu;
    /**
     * Global listeners which apply once only to the document.
     */
    static eventListeners(): void;
    /**
     * @param {HTMLElement|jQuery} element                The containing HTML element within which the menu is positioned
     * @param {string} selector                           A CSS selector which activates the context menu.
     * @param {ContextMenuEntry[]} menuItems              An Array of entries to display in the menu
     * @param {object} [options]                          Additional options to configure the context menu.
     * @param {string} [options.eventName="contextmenu"]  Optionally override the triggering event which can spawn the
     *                                                    menu
     * @param {ContextMenuCallback} [options.onOpen]      A function to call when the context menu is opened.
     * @param {ContextMenuCallback} [options.onClose]     A function to call when the context menu is closed.
     */
    constructor(element: HTMLElement | JQueryStatic, selector: string, menuItems: ContextMenuEntry[], { eventName, onOpen, onClose }?: {
        eventName?: string;
        onOpen?: ContextMenuCallback;
        onClose?: ContextMenuCallback;
    });
    /**
     * The target HTMLElement being selected
     * @type {HTMLElement|jQuery}
     */
    element: HTMLElement | JQueryStatic;
    /**
     * The target CSS selector which activates the menu
     * @type {string}
     */
    selector: string;
    /**
     * An interaction event name which activates the menu
     * @type {string}
     */
    eventName: string;
    /**
     * The array of menu items being rendered
     * @type {ContextMenuEntry[]}
     */
    menuItems: ContextMenuEntry[];
    /**
     * A function to call when the context menu is opened.
     * @type {Function}
     */
    onOpen: Function;
    /**
     * A function to call when the context menu is closed.
     * @type {Function}
     */
    onClose: Function;
    /**
     * Track which direction the menu is expanded in
     * @type {boolean}
     */
    _expandUp: boolean;
    /**
     * A convenience accessor to the context menu HTML object
     * @returns {*|jQuery.fn.init|jQuery|HTMLElement}
     */
    get menu(): any;
    /**
     * Attach a ContextMenu instance to an HTML selector
     */
    bind(): void;
    /**
     * Closes the menu and removes it from the DOM.
     * @param {object} [options]                Options to configure the closing behavior.
     * @param {boolean} [options.animate=true]  Animate the context menu closing.
     * @returns {Promise<void>}
     */
    close({ animate }?: {
        animate?: boolean;
    }): Promise<void>;
    _close(): void;
    _animateOpen(menu: any): Promise<any>;
    _animateClose(menu: any): Promise<any>;
    /**
     * Render the Context Menu by iterating over the menuItems it contains.
     * Check the visibility of each menu item, and only render ones which are allowed by the item's logical condition.
     * Attach a click handler to each item which is rendered.
     * @param {jQuery} target     The target element to which the context menu is attached
     */
    render(target: JQueryStatic): Promise<any>;
    /**
     * Set the position of the context menu, taking into consideration whether the menu should expand upward or downward
     * @private
     */
    private _setPosition;
    /**
     * Local listeners which apply to each ContextMenu instance which is created.
     * @param {jQuery} html
     */
    activateListeners(html: JQueryStatic): void;
    #private;
}
type ContextMenuEntry = {
    /**
     * The context menu label. Can be localized.
     */
    name: string;
    /**
     * A string containing an HTML icon element for the menu item
     */
    icon: string;
    /**
     * The function to call when the menu item is clicked. Receives the HTML element
     * of the entry that this context menu is for.
     */
    callback: (arg0: JQueryStatic) => any;
    /**
     * A function to call to determine if this item appears in the menu.
     *  Receives the HTML element of the entry that this context menu is
     *  for.
     */
    condition?: (arg0: JQueryStatic) => boolean;
};
type ContextMenuCallback = (target: HTMLElement) => any;
