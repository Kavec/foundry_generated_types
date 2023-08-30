/**
 * Render the HUD container
 * @type {Application}
 */
declare class HeadsUpDisplay extends Application {
    constructor(...args: any[]);
    /**
     * Token HUD
     * @type {TokenHUD}
     */
    token: TokenHUD;
    /**
     * Tile HUD
     * @type {TileHUD}
     */
    tile: TileHUD;
    /**
     * Drawing HUD
     * @type {DrawingHUD}
     */
    drawing: DrawingHUD;
    /**
     * Chat Bubbles
     * @type {ChatBubbles}
     */
    bubbles: ChatBubbles;
    /** @inheritdoc */
    getData(options?: {}): {
        width?: undefined;
        height?: undefined;
    } | {
        width: any;
        height: any;
    };
    /** @inheritdoc */
    _render(force: any, options: any): Promise<void>;
    /**
     * Align the position of the HUD layer to the current position of the canvas
     */
    align(): void;
}
