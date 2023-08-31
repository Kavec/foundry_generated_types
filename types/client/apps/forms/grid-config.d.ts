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
     * @protected
     */
    protected _onKeyDown(event: KeyboardEvent): void;
    /**
     * Handle mousewheel events.
     * @param {WheelEvent} event    The original wheel event
     * @protected
     */
    protected _onWheel(event: WheelEvent): void;
    /** @override */
    override _onChangeInput(event: any): Promise<void>;
    /** @override */
    override _updateObject(event: any, formData: any): Promise<any>;
    /**
     * Temporarily refresh the display of the BackgroundLayer and GridLayer for the new pending dimensions
     * @param {object} options          Options which define how the refresh is performed
     * @param {boolean} [options.background]      Refresh the background display?
     * @param {object} [options.grid]             Refresh the grid display?
     * @protected
     */
    protected _refresh({ background, grid }: {
        background?: boolean;
        grid?: object;
    }): void;
    /**
     * Reset the scene back to its original settings
     * @protected
     */
    protected _reset(): Promise<void>;
    /**
     * Scale the background size relative to the grid size
     * @param {number} delta          The directional change in background size
     * @protected
     */
    protected _scaleBackgroundSize(delta: number): void;
    /**
     * Scale the grid size relative to the background image.
     * When scaling the grid size in this way, constrain the allowed values between 50px and 300px.
     * @param {number} delta          The grid size in pixels
     * @protected
     */
    protected _scaleGridSize(delta: number): void;
    /**
     * Shift the background image relative to the grid layer
     * @param {object} position       The position configuration to preview
     * @param {number} position.deltaX    The number of pixels to shift in the x-direction
     * @param {number} position.deltaY    The number of pixels to shift in the y-direction
     * @protected
     */
    protected _shiftBackground({ deltaX, deltaY }?: {
        deltaX: number;
        deltaY: number;
    }): void;
    #private;
}
