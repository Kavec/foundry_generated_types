/**
 * The Application responsible for configuring a single Token document within a parent Scene.
 * @param {TokenDocument|Actor} object          The {@link TokenDocument} being configured or an {@link Actor} for whom
 *                                              to configure the {@link PrototypeToken}
 * @param {FormApplicationOptions} [options]    Application configuration options.
 */
declare class TokenConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    constructor(object: any, options: any);
    /**
     * The placed Token object in the Scene
     * @type {TokenDocument}
     */
    token: TokenDocument;
    /**
     * A reference to the Actor which the token depicts
     * @type {Actor}
     */
    actor: Actor;
    /**
     * Maintain a copy of the original to show a real-time preview of changes.
     * @type {TokenDocument|PrototypeToken}
     */
    preview: TokenDocument | PrototypeToken;
    /**
     * A convenience accessor to test whether we are configuring the prototype Token for an Actor.
     * @type {boolean}
     */
    get isPrototype(): boolean;
    /** @inheritdoc */
    _render(force: any, options?: {}): Promise<void>;
    /**
     * Handle preview with a token.
     * @param {boolean} force
     * @param {object} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _handleTokenPreview(force: boolean, options?: object): Promise<void>;
    /** @inheritDoc */
    _canUserView(user: any): any;
    /** @inheritdoc */
    getData(options?: {}): Promise<{
        cssClasses: string;
        isPrototype: boolean;
        hasAlternates: boolean;
        alternateImages: any;
        object: any;
        options: any;
        gridUnits: any;
        barAttributes: any;
        bar1: any;
        bar2: any;
        colorationTechniques: {
            [x: string]: ShaderTechnique;
        };
        visionModes: any[];
        detectionModes: any[];
        basicDetection: any;
        displayModes: {};
        actors: any;
        dispositions: {};
        lightAnimations: {
            "": any;
        };
        isGM: any;
        randomImgEnabled: any;
        scale: number;
        mirrorX: boolean;
        mirrorY: boolean;
    }>;
    /**
     * Get an Object of image paths and filenames to display in the Token sheet
     * @returns {Promise<object>}
     * @protected
     */
    protected _getAlternateTokenImages(): Promise<object>;
    /** @inheritDoc */
    _getSubmitData(updateData?: {}): any;
    /** @inheritDoc */
    _onChangeInput(event: any): Promise<void>;
    /**
     * Mimic changes to the Token document as if they were true document updates.
     * @param {object} [change]  The change to preview.
     * @protected
     */
    protected _previewChanges(change?: object): void;
    /**
     * Reset the temporary preview of the Token when the form is submitted or closed.
     * @protected
     */
    protected _resetPreview(): any;
    /**
     * Handle Token assignment requests to update the default prototype Token
     * @param {MouseEvent} event  The left-click event on the assign token button
     * @protected
     */
    protected _onAssignToken(event: MouseEvent): Promise<void>;
    /**
     * Handle changing the attribute bar in the drop-down selector to update the default current and max value
     * @param {Event} event  The select input change event
     * @protected
     */
    protected _onBarChange(event: Event): Promise<void>;
    /**
     * Handle click events on a token configuration sheet action button
     * @param {PointerEvent} event    The originating click event
     * @protected
     */
    protected _onClickActionButton(event: PointerEvent): void;
    /**
     * Handle adding a detection mode.
     * @param {object[]} modes  The existing detection modes.
     * @protected
     */
    protected _onAddDetectionMode(modes: object[]): void;
    /**
     * Handle removing a detection mode.
     * @param {number} index    The index of the detection mode to remove.
     * @param {object[]} modes  The existing detection modes.
     * @protected
     */
    protected _onRemoveDetectionMode(index: number, modes: object[]): void;
    /**
     * Disable the user's ability to edit the token image field if wildcard images are enabled and that user does not have
     * file browser permissions.
     * @protected
     */
    protected _disableEditImage(): void;
}
/**
 * A sheet that alters the values of the default Token configuration used when new Token documents are created.
 * @extends {TokenConfig}
 */
declare class DefaultTokenConfig extends TokenConfig {
    /**
     * The named world setting that stores the default Token configuration
     * @type {string}
     */
    static SETTING: string;
    /** @inheritdoc */
    get title(): any;
    /** @override */
    override getData(options?: {}): Promise<{
        cssClasses: string;
        isPrototype: boolean;
        hasAlternates: boolean;
        alternateImages: any;
        object: any;
        options: any;
        gridUnits: any;
        barAttributes: any;
        bar1: any;
        bar2: any;
        colorationTechniques: {
            [x: string]: ShaderTechnique;
        };
        visionModes: any[];
        detectionModes: any[];
        basicDetection: any;
        displayModes: {};
        actors: any;
        dispositions: {};
        lightAnimations: {
            "": any;
        };
        isGM: any;
        randomImgEnabled: any;
        scale: number;
        mirrorX: boolean;
        mirrorY: boolean;
    } & {
        object: any;
        isDefault: boolean;
        barAttributes: any;
        bar1: any;
        bar2: any;
    }>;
    /**
     * Reset the form to default values
     * @returns {Promise<void>}
     */
    reset(): Promise<void>;
    /** @inheritdoc */
    _onBarChange(): Promise<void>;
    /** @inheritdoc */
    _onAddDetectionMode(modes: any): void;
    /** @inheritdoc */
    _onRemoveDetectionMode(index: any, modes: any): void;
}
