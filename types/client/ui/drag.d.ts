/**
 * A UI utility to make an element draggable.
 * @param {Application} app             The Application that is being made draggable.
 * @param {JQuery<HTMLElement>} element              A JQuery reference to the Application's outer-most element.
 * @param {HTMLElement|boolean} handle  The element that acts as a drag handle. Supply false to disable dragging.
 * @param {boolean|object} resizable    Is the application resizable? Supply an object to configure resizing behaviour
 *                                      or true to have it automatically configured.
 * @param {string} [resizable.selector]       A selector for the resize handle.
 * @param {boolean} [resizable.resizeX=true]  Enable resizing in the X direction.
 * @param {boolean} [resizable.resizeY=true]  Enable resizing in the Y direction.
 * @param {boolean} [resizable.rtl]           Modify the resizing direction to be right-to-left.
 */
declare class Draggable {
    constructor(app: any, element: any, handle: any, resizable: any);
    app: any;
    element: any;
    handle: any;
    resizable: any;
    /**
     * Duplicate the application's starting position to track differences
     * @type {Object}
     */
    position: any;
    /**
     * Remember event handlers associated with this Draggable class so they may be later unregistered
     * @type {Object}
     */
    handlers: any;
    /**
     * Throttle mousemove event handling to 60fps
     * @type {number}
     */
    _moveTime: number;
    /**
     * Activate event handling for a Draggable application
     * Attach handlers for floating, dragging, and resizing
     */
    activateListeners(): void;
    /**
     * Attach handlers for dragging and floating.
     * @protected
     */
    protected _activateDragListeners(): void;
    /**
     * Attach handlers for resizing.
     * @protected
     */
    protected _activateResizeListeners(): void;
    /**
     * Handle the initial mouse click which activates dragging behavior for the application
     * @protected
     */
    protected _onDragMouseDown(event: any): void;
    _initial: {
        x: any;
        y: any;
    } | {
        x: any;
        y: any;
    };
    /**
     * Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport
     * @protected
     */
    protected _onDragMouseMove(event: any): void;
    /**
     * Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners
     * @protected
     */
    protected _onDragMouseUp(event: any): void;
    /**
     * Handle the initial mouse click which activates dragging behavior for the application
     * @protected
     */
    protected _onResizeMouseDown(event: any): void;
    /**
     * Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport
     * @protected
     */
    protected _onResizeMouseMove(event: any): void;
    /**
     * Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners
     * @protected
     */
    protected _onResizeMouseUp(event: any): void;
}
