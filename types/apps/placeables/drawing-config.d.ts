/**
 * @typedef {FormApplicationOptions} DrawingConfigOptions
 * @property {boolean} [configureDefault=false]  Configure the default drawing settings, instead of a specific Drawing
 */
/**
 * The Application responsible for configuring a single Drawing document within a parent Scene.
 * @extends {DocumentSheet}
 *
 * @param {Drawing} drawing               The Drawing object being configured
 * @param {DrawingConfigOptions} options  Additional application rendering options
 */
declare class DrawingConfig extends DocumentSheet {
    /** @override */
    override get title(): any;
    /** @override */
    override getData(options?: {}): {
        author: any;
        isDefault: any;
        fillTypes: {};
        scaledBezierFactor: number;
        fontFamilies: any;
        object: any;
        options: any;
        submitText: string;
    };
    /** @override */
    override close(options: any): Promise<void>;
    preview: any;
    /**
     * Reset the user Drawing configuration settings to their default values
     * @param {PointerEvent} event      The originating mouse-click event
     * @protected
     */
    protected _onResetDefaults(event: PointerEvent): void;
}
type DrawingConfigOptions = FormApplicationOptions;
