/**
 * The Application responsible for configuring a single PlaylistSound document within a parent Playlist.
 * @extends {DocumentSheet}
 *
 * @param {PlaylistSound} sound             The PlaylistSound document being configured
 * @param {DocumentSheetOptions} [options]  Additional application rendering options
 */
declare class PlaylistSoundConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    activateListeners(html: any): any;
    /**
     * Auto-populate the track name using the provided filename, if a name is not already set
     * @param {Event} event
     * @private
     */
    private _onSourceChange;
}
