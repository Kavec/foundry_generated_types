/**
 * Abstraction of the Application interface to be used with the Draggable class as a substitute for the app
 * This class will represent one popout feed window and handle its positioning and draggability
 * @param {CameraViews} view      The CameraViews application that this popout belongs to
 * @param {string} userId         ID of the user this popout belongs to
 * @param {jQuery} element        The div element of this specific popout window
 */
declare class CameraPopoutAppWrapper {
    constructor(view: any, userId: any, element: any);
    view: any;
    element: any;
    userId: any;
    popOut: boolean;
    options: {};
    /**
     * Get the current position of this popout window
     */
    get position(): any;
    /** @override */
    override setPosition(options?: {}): any;
    _onResize(event: any): void;
    /** @override */
    override bringToTop(): void;
}
