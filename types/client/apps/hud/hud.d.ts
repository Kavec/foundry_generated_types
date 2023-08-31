/**
 * An abstract base class for displaying a heads-up-display interface bound to a Placeable Object on the canvas
 * @type {Application}
 * @abstract
 * @interface
 * @param {PlaceableObject} object        The {@link PlaceableObject} this HUD is bound to.
 * @param {ApplicationOptions} [options]  Application configuration options.
 */
declare class BasePlaceableHUD extends Application {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * Reference a PlaceableObject this HUD is currently bound to
     * @type {PlaceableObject}
     */
    object: PlaceableObject;
    /**
     * Convenience access for the canvas layer which this HUD modifies
     * @type {PlaceablesLayer}
     */
    get layer(): PlaceablesLayer;
    /**
     * Bind the HUD to a new PlaceableObject and display it
     * @param {PlaceableObject} object    A PlaceableObject instance to which the HUD should be bound
     */
    bind(object: PlaceableObject): void;
    /**
     * Clear the HUD by fading out it's active HTML and recording the new display state
     */
    clear(): void;
    /** @override */
    override _render(...args: any[]): Promise<void>;
    /** @override */
    override getData(options?: {}): any;
    /** @override */
    override setPosition({ left, top, width, height, scale }?: {
        left: any;
        top: any;
        width: any;
        height: any;
        scale: any;
    }): void;
    /** @override */
    override activateListeners(html: any): void;
    /**
     * Handle mouse clicks to control a HUD control button
     * @param {PointerEvent} event    The originating click event
     * @protected
     */
    protected _onClickControl(event: PointerEvent): Promise<any>;
    /**
     * Toggle the visible state of all controlled objects in the Layer
     * @param {PointerEvent} event    The originating click event
     * @protected
     */
    protected _onToggleVisibility(event: PointerEvent): Promise<any>;
    /**
     * Toggle locked state of all controlled objects in the Layer
     * @param {PointerEvent} event    The originating click event
     * @protected
     */
    protected _onToggleLocked(event: PointerEvent): Promise<any>;
    /**
     * Handle sorting the z-order of the object
     * @param {boolean} up            Move the object upwards in the vertical stack?
     * @param {PointerEvent} event    The originating mouse click event
     * @returns {Promise}
     * @protected
     */
    protected _onSort(event: PointerEvent, up: boolean): Promise<any>;
}
