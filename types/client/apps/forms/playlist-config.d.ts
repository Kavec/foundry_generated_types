/**
 * The Application responsible for configuring a single Playlist document.
 * @extends {DocumentSheet}
 * @param {Playlist} object                 The {@link Playlist} to configure.
 * @param {DocumentSheetOptions} [options]  Application configuration options.
 */
declare class PlaylistConfig extends DocumentSheet {
    /** @inheritdoc */
    _getFilePickerOptions(event: any): any;
    /** @inheritdoc */
    _onSelectFile(selection: any, filePicker: any): Promise<any>;
}
