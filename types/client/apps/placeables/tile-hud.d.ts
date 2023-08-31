/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Tile objects.
 * @extends {BasePlaceableHUD}
 */
declare class TileHUD extends BasePlaceableHUD {
    /**
     * @inheritdoc
     * @type {Tile}
     */
    object: Function;
    /** @inheritdoc */
    setPosition(options: any): void;
    /** @inheritdoc */
    _onClickControl(event: any): any;
    /**
     * Handle toggling the overhead state of the Tile.
     * @param {PointerEvent} event      The triggering click event
     * @param {boolean} overhead        Should the Tile be overhead?
     * @protected
     */
    protected _onToggleOverhead(event: PointerEvent, overhead: boolean): Promise<Application>;
    /**
     * Control video playback by toggling play or paused state for a video Tile.
     * @param {object} event
     * @protected
     */
    protected _onControlVideo(event: object): any;
}
