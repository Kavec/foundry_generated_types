/**
 * The Application responsible for configuring a single Tile document within a parent Scene.
 * @param {Tile} tile                    The Tile object being configured
 * @param {DocumentSheetOptions} [options]  Additional application rendering options
 */
declare class TileConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    _onChangeInput(event: any): Promise<void>;
}
