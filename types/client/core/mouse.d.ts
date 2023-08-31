/**
 * Management class for Mouse events
 */
declare class MouseManager {
    /**
     * Specify a rate limit for mouse wheel to gate repeated scrolling.
     * This is especially important for continuous scrolling mice which emit hundreds of events per second.
     * This designates a minimum number of milliseconds which must pass before another wheel event is handled
     * @type {number}
     */
    static MOUSE_WHEEL_RATE_LIMIT: number;
    _wheelTime: number;
    /**
     * Begin listening to mouse events.
     * @internal
     */
    _activateListeners(): void;
    /**
     * Master mouse-wheel event handler
     * @param {WheelEvent} event    The mouse wheel event
     * @protected
     */
    protected _onWheel(event: WheelEvent): any;
}
