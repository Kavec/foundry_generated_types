/**
 * The Application responsible for configuring a single Scene document.
 * @extends {DocumentSheet}
 * @param {Scene} object                    The Scene Document which is being configured
 * @param {DocumentSheetOptions} [options]  Application configuration options.
 */
declare class SceneConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * Get an enumeration of the available grid types which can be applied to this Scene
     * @returns {object}
     * @internal
     */
    static _getGridTypes(): object;
    /**
     * Indicates if width / height should change together to maintain aspect ratio
     * @type {boolean}
     */
    linkedDimensions: boolean;
    /** @inheritdoc */
    render(force: any, options?: {}): any;
    /**
     * Get the available weather effect types which can be applied to this Scene
     * @returns {object}
     * @protected
     */
    protected _getWeatherTypes(): object;
    /**
     * Get the alphabetized Documents which can be chosen as a configuration for the Scene
     * @param {WorldCollection} collection
     * @returns {object[]}
     * @protected
     */
    protected _getDocuments(collection: WorldCollection): object[];
    /**
     * Capture the current Scene position and zoom level as the initial view in the Scene config
     * @param {Event} event   The originating click event
     * @protected
     */
    protected _onCapturePosition(event: Event): void;
    /**
     * Handle click events to open the grid configuration application
     * @param {Event} event   The originating click event
     * @protected
     */
    protected _onGridConfig(event: Event): Promise<void>;
    /**
     * Handle click events to link or unlink the scene dimensions
     * @param {Event} event
     * @returns {Promise<void>}
     * @protected
     */
    protected _onLinkDimensions(event: Event): Promise<void>;
    /** @override */
    override _onChangeInput(event: any): Promise<any>;
    /** @override */
    override _onChangeColorPicker(event: any): void;
    /** @override */
    override _onChangeRange(event: any): void;
    /**
     * Live update the scene as certain properties are changed.
     * @param {string} changed  The changed property.
     * @protected
     */
    protected _previewScene(changed: string): void;
    /**
     * Reset the previewed darkness level, background color, grid alpha, and grid color back to their true values.
     * @protected
     */
    protected _resetScenePreview(): void;
    /**
     * Handle updating the select menu of PlaylistSound options when the Playlist is changed
     * @param {Event} event   The initiating select change event
     * @protected
     */
    protected _onChangePlaylist(event: Event): void;
    /**
     * Handle updating the select menu of JournalEntryPage options when the JournalEntry is changed.
     * @param {Event} event  The initiating select change event.
     * @protected
     */
    protected _onChangeJournal(event: Event): void;
    /**
     * Handle updating the select menu of JournalEntryPage options when the JournalEntry is changed.
     * @param event
     * @protected
     */
    protected _onChangeDimensions(event: any): void;
}
