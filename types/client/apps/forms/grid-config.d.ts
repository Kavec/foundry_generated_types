/**
 * A tool for fine-tuning the grid in a Scene
 * @param {Scene} scene                       The scene whose grid is being configured.
 * @param {SceneConfig} sheet                 The Scene Configuration sheet that spawned this dialog.
 * @param {FormApplicationOptions} [options]  Application configuration options.
 */
declare class GridConfig extends FormApplication {
    /** @override */
    static override get defaultOptions(): any;
    constructor(scene: any, sheet: any, ...args: any[]);
    /**
     * Track the Scene Configuration sheet reference
     * @type {SceneConfig}
     */
    sheet: SceneConfig;
    /** @override */
    override getData(options?: {}): {
        gridTypes: any;
        scale: number;
        scene: any;
    };
    /** @override */
    override _getSubmitData(updateData?: {}): any;
    /**
     * Handle keyboard events.
     * @param {KeyboardEvent} event    The original keydown event
     * @private
     */
    private _onKeyDown;
    /**
     * Handle mousewheel events.
     * @param {WheelEvent} event    The original wheel event
     * @private
     */
    private _onWheel;
    /** @override */
    override _onChangeInput(event: any): Promise<void>;
    /** @override */
    override _updateObject(event: any, formData: any): Promise<any>;
    /**
     * Temporarily refresh the display of the BackgroundLayer and GridLayer for the new pending dimensions
     * @param {object} options          Options which define how the refresh is performed
     * @param {boolean} [options.background]      Refresh the background display?
     * @param {object} [options.grid]             Refresh the grid display?
     * @private
     */
    private _refresh;
    /**
     * Reset the scene back to its original settings
     * @private
     */
    private _reset;
    /**
     * Scale the background size relative to the grid size
     * @param {number} delta          The directional change in background size
     * @private
     */
    private _scaleBackgroundSize;
    /**
     * Scale the grid size relative to the background image.
     * When scaling the grid size in this way, constrain the allowed values between 50px and 300px.
     * @param {number} delta          The grid size in pixels
     * @private
     */
    private _scaleGridSize;
    /**
     * Shift the background image relative to the grid layer
     * @param {object} position       The position configuration to preview
     * @param {number} position.deltaX    The number of pixels to shift in the x-direction
     * @param {number} position.deltaY    The number of pixels to shift in the y-direction
     * @private
     */
    private _shiftBackground;
    #private;
}
