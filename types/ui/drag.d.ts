/**
 * A UI utility to make an element draggable.
 * @param {Application} app             The Application that is being made draggable.
 * @param {jQuery} element              A JQuery reference to the Application's outer-most element.
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
     * @private
     */
    private _onDragMouseDown;
    _initial: {
        x: any;
        y: any;
    } | {
        x: any;
        y: any;
    };
    /**
     * Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport
     * @private
     */
    private _onDragMouseMove;
    /**
     * Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners
     * @private
     */
    private _onDragMouseUp;
    /**
     * Handle the initial mouse click which activates dragging behavior for the application
     * @private
     */
    private _onResizeMouseDown;
    /**
     * Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport
     * @private
     */
    private _onResizeMouseMove;
    /**
     * Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners
     * @private
     */
    private _onResizeMouseUp;
}
