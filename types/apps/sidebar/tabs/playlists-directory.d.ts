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
     * @private
     */
    private _volumeExpanded;
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
     * @private
     */
    private _createExpandedSet;
    /**
     * Return an Array of the Playlist documents which are currently playing
     * @type {Playlist[]}
     */
    get playing(): Playlist[];
    /**
     * Whether the 'currently playing' element is pinned to the top or bottom of the display.
     * @type {string}
     * @private
     */
    private get _playingLocation();
    _playingSoundsData: any[];
    /**
     * Augment the tree directory structure with playlist-level data objects for rendering
     * @param {object} node   The tree leaf node being prepared
     * @private
     */
    private _prepareTreeData;
    /**
     * Create an object of rendering data for each Playlist document being displayed
     * @param {Playlist} playlist   The playlist to display
     * @returns {object}            The data for rendering
     * @private
     */
    private _preparePlaylistData;
    /**
     * Get the icon used to represent the "play/stop" icon for the PlaylistSound
     * @param {PlaylistSound} sound   The sound being rendered
     * @returns {string}              The icon that should be used
     * @private
     */
    private _getPlayIcon;
    /**
     * Get the icon used to represent the pause/loading icon for the PlaylistSound
     * @param {PlaylistSound} sound   The sound being rendered
     * @returns {string}              The icon that should be used
     * @private
     */
    private _getPauseIcon;
    /**
     * Given a constant playback mode, provide the FontAwesome icon used to display it
     * @param {number} mode
     * @returns {string}
     * @private
     */
    private _getModeIcon;
    /**
     * Given a constant playback mode, provide the string tooltip used to describe it
     * @param {number} mode
     * @returns {string}
     * @private
     */
    private _getModeTooltip;
    /**
     * Handle global volume change for the playlist sidebar
     * @param {MouseEvent} event   The initial click event
     * @private
     */
    private _onGlobalVolume;
    /** @inheritdoc */
    collapseAll(): void;
    /** @override */
    override _onClickEntryName(event: any): void;
    /**
     * Handle global volume control collapse toggle
     * @param {MouseEvent} event   The initial click event
     * @private
     */
    private _onVolumeCollapse;
    /**
     * Helper method to render the expansion or collapse of playlists
     * @private
     */
    private _collapse;
    /**
     * Handle Playlist playback state changes
     * @param {MouseEvent} event    The initial click event
     * @param {boolean} playing     Is the playlist now playing?
     * @private
     */
    private _onPlaylistPlay;
    /**
     * Handle advancing the playlist to the next (or previous) sound
     * @param {MouseEvent} event    The initial click event
     * @param {string} action       The control action requested
     * @private
     */
    private _onPlaylistSkip;
    /**
     * Handle cycling the playback mode for a Playlist
     * @param {MouseEvent} event   The initial click event
     * @private
     */
    private _onPlaylistToggleMode;
    /**
     * Handle Playlist track addition request
     * @param {MouseEvent} event   The initial click event
     * @private
     */
    private _onSoundCreate;
    /**
     * Modify the playback state of a Sound within a Playlist
     * @param {MouseEvent} event    The initial click event
     * @param {string} action       The sound control action performed
     * @private
     */
    private _onSoundPlay;
    /**
     * Handle volume adjustments to sounds within a Playlist
     * @param {Event} event   The initial change event
     * @private
     */
    private _onSoundVolume;
    /**
     * Handle changes to the sound playback mode
     * @param {Event} event   The initial click event
     * @private
     */
    private _onSoundToggleMode;
    _onPlayingPin(): any;
    /** @inheritdoc */
    _onSearchFilter(event: any, query: any, rgx: any, html: any): void;
    /**
     * Update the displayed timestamps for all currently playing audio sources.
     * Runs on an interval every 1000ms.
     * @private
     */
    private _updateTimestamps;
    /**
     * Format the displayed timestamp given a number of seconds as input
     * @param {number} seconds    The current playback time in seconds
     * @returns {string}          The formatted timestamp
     * @private
     */
    private _formatTimestamp;
    /** @inheritdoc */
    _contextMenu(html: any): void;
    /**
     * Get context menu options for individual sound effects
     * @returns {Object}   The context options for each sound
     * @private
     */
    private _getSoundContextOptions;
    /** @inheritdoc */
    _onDragStart(event: any): void;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
}
