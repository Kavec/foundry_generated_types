/**
 * The sidebar directory which organizes and displays world-level Playlist documents.
 * @extends {DocumentDirectory}
 */
declare class PlaylistDirectory extends DocumentDirectory {
    /**
     * Converts a volume level to a human-friendly % value
     * @param {number} volume         Value between [0, 1] of the volume level
     * @returns {string}
     */
    static volumeToTooltip(volume: number): string;
    constructor(options: any);
    /**
     * Track the playlist IDs which are currently expanded in their display
     * @type {Set<string>}
     */
    _expanded: Set<string>;
    /**
     * Are the global volume controls currently expanded?
     * @type {boolean}
     * @protected
     */
    protected _volumeExpanded: boolean;
    /**
     * Cache the set of Playlist documents that are displayed as playing when the directory is rendered
     * @type {Playlist[]}
     */
    _playingPlaylists: Playlist[];
    /**
     * Cache the set of PlaylistSound documents that are displayed as playing when the directory is rendered
     * @type {PlaylistSound[]}
     */
    _playingSounds: PlaylistSound[];
    /**
     * Initialize the set of Playlists which should be displayed in an expanded form
     * @returns {Set<string>}
     * @protected
     */
    protected _createExpandedSet(): Set<string>;
    /**
     * Return an Array of the Playlist documents which are currently playing
     * @type {Playlist[]}
     */
    get playing(): Playlist[];
    /**
     * Whether the 'currently playing' element is pinned to the top or bottom of the display.
     * @type {string}
     * @protected
     */
    protected get _playingLocation(): string;
    _playingSoundsData: any[];
    /**
     * Augment the tree directory structure with playlist-level data objects for rendering
     * @param {object} node   The tree leaf node being prepared
     * @protected
     */
    protected _prepareTreeData(node: object): void;
    /**
     * Create an object of rendering data for each Playlist document being displayed
     * @param {Playlist} playlist   The playlist to display
     * @returns {object}            The data for rendering
     * @protected
     */
    protected _preparePlaylistData(playlist: Playlist): object;
    /**
     * Get the icon used to represent the "play/stop" icon for the PlaylistSound
     * @param {PlaylistSound} sound   The sound being rendered
     * @returns {string}              The icon that should be used
     * @protected
     */
    protected _getPlayIcon(sound: PlaylistSound): string;
    /**
     * Get the icon used to represent the pause/loading icon for the PlaylistSound
     * @param {PlaylistSound} sound   The sound being rendered
     * @returns {string}              The icon that should be used
     * @protected
     */
    protected _getPauseIcon(sound: PlaylistSound): string;
    /**
     * Given a constant playback mode, provide the FontAwesome icon used to display it
     * @param {number} mode
     * @returns {string}
     * @protected
     */
    protected _getModeIcon(mode: number): string;
    /**
     * Given a constant playback mode, provide the string tooltip used to describe it
     * @param {number} mode
     * @returns {string}
     * @protected
     */
    protected _getModeTooltip(mode: number): string;
    /**
     * Handle global volume change for the playlist sidebar
     * @param {MouseEvent} event   The initial click event
     * @protected
     */
    protected _onGlobalVolume(event: MouseEvent): any;
    /** @inheritdoc */
    collapseAll(): void;
    /** @override */
    override _onClickEntryName(event: any): void;
    /**
     * Handle global volume control collapse toggle
     * @param {MouseEvent} event   The initial click event
     * @protected
     */
    protected _onVolumeCollapse(event: MouseEvent): void;
    /**
     * Helper method to render the expansion or collapse of playlists
     * @protected
     */
    protected _collapse(el: any, collapse: any, speed?: number): void;
    /**
     * Handle Playlist playback state changes
     * @param {MouseEvent} event    The initial click event
     * @param {boolean} playing     Is the playlist now playing?
     * @protected
     */
    protected _onPlaylistPlay(event: MouseEvent, playing: boolean): any;
    /**
     * Handle advancing the playlist to the next (or previous) sound
     * @param {MouseEvent} event    The initial click event
     * @param {string} action       The control action requested
     * @protected
     */
    protected _onPlaylistSkip(event: MouseEvent, action: string): any;
    /**
     * Handle cycling the playback mode for a Playlist
     * @param {MouseEvent} event   The initial click event
     * @protected
     */
    protected _onPlaylistToggleMode(event: MouseEvent): any;
    /**
     * Handle Playlist track addition request
     * @param {MouseEvent} event   The initial click event
     * @protected
     */
    protected _onSoundCreate(event: MouseEvent): void;
    /**
     * Modify the playback state of a Sound within a Playlist
     * @param {MouseEvent} event    The initial click event
     * @param {string} action       The sound control action performed
     * @protected
     */
    protected _onSoundPlay(event: MouseEvent, action: string): any;
    /**
     * Handle volume adjustments to sounds within a Playlist
     * @param {Event} event   The initial change event
     * @protected
     */
    protected _onSoundVolume(event: Event): void;
    /**
     * Handle changes to the sound playback mode
     * @param {Event} event   The initial click event
     * @protected
     */
    protected _onSoundToggleMode(event: Event): any;
    _onPlayingPin(): any;
    /** @inheritdoc */
    _onSearchFilter(event: any, query: any, rgx: any, html: any): void;
    /**
     * Update the displayed timestamps for all currently playing audio sources.
     * Runs on an interval every 1000ms.
     * @protected
     */
    protected _updateTimestamps(): void;
    /**
     * Format the displayed timestamp given a number of seconds as input
     * @param {number} seconds    The current playback time in seconds
     * @returns {string}          The formatted timestamp
     * @protected
     */
    protected _formatTimestamp(seconds: number): string;
    /** @inheritdoc */
    _contextMenu(html: any): void;
    /**
     * Get context menu options for individual sound effects
     * @returns {Object}   The context options for each sound
     * @protected
     */
    protected _getSoundContextOptions(): any;
    /** @inheritdoc */
    _onDragStart(event: any): void;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
}
