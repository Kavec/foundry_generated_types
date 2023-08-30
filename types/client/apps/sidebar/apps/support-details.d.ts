/**
 * Support Info and Report
 * @type {Application}
 */
declare class SupportDetails extends Application {
    /**
     * A bundle of metrics for Support
     * @typedef {Object} SupportReportData
     * @property {number} coreVersion
     * @property {string} systemVersion
     * @property {number} activeModuleCount
     * @property {string} os
     * @property {string} client
     * @property {string} gpu
     * @property {number|string} maxTextureSize
     * @property {string} sceneDimensions
     * @property {number} grid
     * @property {float} padding
     * @property {number} walls
     * @property {number} lights
     * @property {number} sounds
     * @property {number} tiles
     * @property {number} tokens
     * @property {number} actors
     * @property {number} items
     * @property {number} journals
     * @property {number} tables
     * @property {number} playlists
     * @property {number} packs
     * @property {number} messages
     */
    /**
     * Collects a number of metrics that is useful for Support
     * @returns {SupportReportData}
     */
    static generateSupportReport(): {
        coreVersion: number;
        systemVersion: string;
        activeModuleCount: number;
        os: string;
        client: string;
        gpu: string;
        maxTextureSize: number | string;
        sceneDimensions: string;
        grid: number;
        padding: float;
        walls: number;
        lights: number;
        sounds: number;
        tiles: number;
        tokens: number;
        actors: number;
        items: number;
        journals: number;
        tables: number;
        playlists: number;
        packs: number;
        messages: number;
    };
    /**
     * Get a WebGL renderer information string
     * @param {WebGLRenderingContext} gl    The rendering context
     * @returns {string}                    The unmasked renderer string
     */
    static getWebGLRendererInfo(gl: WebGLRenderingContext): string;
    /** @inheritdoc */
    getData(options?: {}): any;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /** @inheritdoc */
    _render(force?: boolean, options?: {}): Promise<void>;
    /** @inheritdoc */
    _renderInner(data: any): Promise<JQueryStatic>;
    /**
     * Handle a button click action.
     * @param {MouseEvent} event  The click event.
     * @protected
     */
    protected _onClickAction(event: MouseEvent): void;
    /**
     * Copy the support details report to clipboard.
     * @protected
     */
    protected _copyReport(): void;
    /**
     * Marshal information on Documents that failed validation and format it for display.
     * @returns {object[]}
     * @protected
     */
    protected _getDocumentValidationErrors(): object[];
    /**
     * Marshal package-related warnings and errors and format it for display.
     * @returns {object[]}
     * @protected
     */
    protected _getModuleIssues(): object[];
}
/**
 * A bundle of metrics for Support
 */
type SupportReportData = {
    coreVersion: number;
    systemVersion: string;
    activeModuleCount: number;
    os: string;
    client: string;
    gpu: string;
    maxTextureSize: number | string;
    sceneDimensions: string;
    grid: number;
    padding: float;
    walls: number;
    lights: number;
    sounds: number;
    tiles: number;
    tokens: number;
    actors: number;
    items: number;
    journals: number;
    tables: number;
    playlists: number;
    packs: number;
    messages: number;
};
