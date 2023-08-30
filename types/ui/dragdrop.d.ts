/**
 * @typedef {object} DragDropConfiguration
 * @property {string} dragSelector     The CSS selector used to target draggable elements.
 * @property {string} dropSelector     The CSS selector used to target viable drop targets.
 * @property {Object<string,Function>} permissions    An object of permission test functions for each action
 * @property {Object<string,Function>} callbacks      An object of callback functions for each action
 */
/**
 * A controller class for managing drag and drop workflows within an Application instance.
 * The controller manages the following actions: dragstart, dragover, drop
 * @see {@link Application}
 *
 * @param {DragDropConfiguration}
 * @example Activate drag-and-drop handling for a certain set of elements
 * ```js
 * const dragDrop = new DragDrop({
 *   dragSelector: ".item",
 *   dropSelector: ".items",
 *   permissions: { dragstart: this._canDragStart.bind(this), drop: this._canDragDrop.bind(this) },
 *   callbacks: { dragstart: this._onDragStart.bind(this), drop: this._onDragDrop.bind(this) }
 * });
 * dragDrop.bind(html);
 * ```
 */
declare class DragDrop {
    static createDragImage(img: any, width: any, height: any): HTMLElement;
    constructor({ dragSelector, dropSelector, permissions, callbacks }?: {
        dragSelector: any;
        dropSelector: any;
        permissions?: {};
        callbacks?: {};
    });
    /**
     * The HTML selector which identifies draggable elements
     * @type {string}
     */
    dragSelector: string;
    /**
     * The HTML selector which identifies drop targets
     * @type {string}
     */
    dropSelector: string;
    /**
     * A set of permission checking functions for each action of the Drag and Drop workflow
     * @type {Object}
     */
    permissions: any;
    /**
     * A set of callback functions for each action of the Drag and Drop workflow
     * @type {Object}
     */
    callbacks: any;
    /**
     * Bind the DragDrop controller to an HTML application
     * @param {HTMLElement} html    The HTML element to which the handler is bound
     */
    bind(html: HTMLElement): this;
    /**
     * Execute a callback function associated with a certain action in the workflow
     * @param {DragEvent} event   The drag event being handled
     * @param {string} action     The action being attempted
     */
    callback(event: DragEvent, action: string): any;
    /**
     * Test whether the current user has permission to perform a step of the workflow
     * @param {string} action     The action being attempted
     * @param {string} selector   The selector being targeted
     * @return {boolean}          Can the action be performed?
     */
    can(action: string, selector: string): boolean;
    /**
     * Handle the start of a drag workflow
     * @param {DragEvent} event   The drag event being handled
     * @private
     */
    private _handleDragStart;
    /**
     * Handle a dragged element over a droppable target
     * @param {DragEvent} event   The drag event being handled
     * @private
     */
    private _handleDragOver;
    /**
     * Handle a dragged element dropped on a droppable target
     * @param {DragEvent} event   The drag event being handled
     * @private
     */
    private _handleDrop;
}
type DragDropConfiguration = {
    /**
     * The CSS selector used to target draggable elements.
     */
    dragSelector: string;
    /**
     * The CSS selector used to target viable drop targets.
     */
    dropSelector: string;
    /**
     * An object of permission test functions for each action
     */
    permissions: {
        [x: string]: Function;
    };
    /**
     * An object of callback functions for each action
     */
    callbacks: {
        [x: string]: Function;
    };
};
