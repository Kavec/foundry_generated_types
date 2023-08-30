/**
 * @typedef {object} NewFontDefinition
 * @property {string} [family]          The font family.
 * @property {number} [weight=400]      The font weight.
 * @property {string} [style="normal"]  The font style.
 * @property {string} [src=""]          The font file.
 * @property {string} [preview]         The text to preview the font.
 */
/**
 * A class responsible for configuring custom fonts for the world.
 * @extends {FormApplication}
 */
declare class FontConfig extends FormApplication {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * Whether a font is distributed to connected clients or found on their OS.
     * @enum {string}
     */
    static FONT_TYPES: {
        FILE: string;
        SYSTEM: string;
    };
    /**
     * Define the setting key where this world's font information will be stored.
     * @type {string}
     */
    static SETTING: string;
    /**
     * A list of fonts that were correctly loaded and are available for use.
     * @type {Set<string>}
     * @private
     */
    private static "__#29@#available";
    /**
     * Get the list of fonts that successfully loaded.
     * @returns {string[]}
     */
    static getAvailableFonts(): string[];
    /**
     * Get the list of fonts formatted for display with selectOptions.
     * @returns {Object<string>}
     */
    static getAvailableFontChoices(): any;
    /**
     * Load a font definition.
     * @param {string} family                    The font family name (case-sensitive).
     * @param {FontFamilyDefinition} definition  The font family definition.
     * @returns {Promise<boolean>}               Returns true if the font was successfully loaded.
     */
    static loadFont(family: string, definition: {
        /**
         * Whether the font is available in the rich text editor. This will also enable it
         * for notes and drawings.
         */
        editor: boolean;
        /**
         * Individual font face definitions for this font family. If this is empty, the
         * font family may only be loaded from the client's OS-installed fonts.
         */
        fonts: FontFaceDescriptors[];
    }): Promise<boolean>;
    /**
     * Ensure that fonts have loaded and are ready for use.
     * Enforce a maximum timeout in milliseconds.
     * Proceed after that point even if fonts are not yet available.
     * @param {number} [ms=4500]  The maximum time to spend loading fonts before proceeding.
     * @returns {Promise<void>}
     * @internal
     */
    static _loadFonts(ms?: number): Promise<void>;
    /**
     * Collect all the font definitions and combine them.
     * @returns {Object<FontFamilyDefinition>[]}
     * @protected
     */
    protected static _collectDefinitions(): any[];
    /**
     * Create FontFace object from a FontDefinition.
     * @param {string} family        The font family name.
     * @param {FontDefinition} font  The font definition.
     * @returns {FontFace}
     * @protected
     */
    protected static _createFontFace(family: string, font: FontFaceDescriptors): FontFace;
    /**
     * Format a font definition for display.
     * @param {string} family              The font family.
     * @param {FontDefinition} definition  The font definition.
     * @returns {string}                   The formatted definition.
     * @private
     */
    private static _formatFont;
    /**
     * An application for configuring custom world fonts.
     * @param {NewFontDefinition} [object]  The default settings for new font definition creation.
     * @param {object} [options]            Additional options to configure behaviour.
     */
    constructor(object?: NewFontDefinition, options?: object);
    /** @inheritdoc */
    getData(options?: {}): {
        fonts: any[];
        selected: any;
        font: any;
        family: string;
        weights: {
            value: number;
            label: string;
        }[];
    };
    /**
     * Template data for a given font definition.
     * @param {string} family                    The font family.
     * @param {FontFamilyDefinition} definition  The font family definition.
     * @returns {object[]}
     * @protected
     */
    protected _getDataForDefinition(family: string, definition: {
        /**
         * Whether the font is available in the rich text editor. This will also enable it
         * for notes and drawings.
         */
        editor: boolean;
        /**
         * Individual font face definitions for this font family. If this is empty, the
         * font family may only be loaded from the client's OS-installed fonts.
         */
        fonts: FontFaceDescriptors[];
    }): object[];
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<void>;
    /**
     * Handle application controls.
     * @param {MouseEvent} event  The click event.
     * @protected
     */
    protected _onClickControl(event: MouseEvent): void | Promise<void>;
    /** @inheritdoc */
    _onChangeInput(event: any): Promise<any>;
    /**
     * Update available font fields based on the font type selected.
     * @protected
     */
    protected _updateFontFields(): void;
    /**
     * Add a new custom font definition.
     * @protected
     */
    protected _onAddFont(): Promise<void>;
    /**
     * Delete a font.
     * @param {MouseEvent} event  The click event.
     * @protected
     */
    protected _onDeleteFont(event: MouseEvent): Promise<void>;
    /**
     * Select a font to preview.
     * @param {MouseEvent} event  The click event.
     * @protected
     */
    protected _onSelectFont(event: MouseEvent): void;
    #private;
}
/**
 * Whether a font is distributed to connected clients or found on their OS.
 */
type FONT_TYPES = string;
type NewFontDefinition = {
    /**
     * The font family.
     */
    family?: string;
    /**
     * The font weight.
     */
    weight?: number;
    /**
     * The font style.
     */
    style?: string;
    /**
     * The font file.
     */
    src?: string;
    /**
     * The text to preview the font.
     */
    preview?: string;
};
