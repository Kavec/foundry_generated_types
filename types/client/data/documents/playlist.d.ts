/**
 * The client-side Playlist document which extends the common BasePlaylist model.
 * @extends documents.BasePlaylist
 * @mixes ClientDocumentMixin
 *
 * @see {@link Playlists}             The world-level collection of Playlist documents
 * @see {@link PlaylistSound}         The PlaylistSound embedded document within a parent Playlist
 * @see {@link PlaylistConfig}        The Playlist configuration application
 */
declare class Playlist {
    /**
     * Find all content links belonging to a given {@link Playlist} or {@link PlaylistSound}.
     * @param {Playlist|PlaylistSound} doc  The Playlist or PlaylistSound.
     * @returns {NodeListOf<Element>}
     * @protected
     */
    protected static _getSoundContentLinks(doc: Playlist | PlaylistSound): NodeListOf<Element>;
    /**
     * Playlists may have a playback order which defines the sequence of Playlist Sounds
     * @type {string[]}
     */
    _playbackOrder: string[];
    /**
     * The order in which sounds within this playlist will be played (if sequential or shuffled)
     * Uses a stored seed for randomization to guarantee that all clients generate the same random order.
     * @type {string[]}
     */
    get playbackOrder(): string[];
    /** @inheritdoc */
    get visible(): any;
    /** @inheritdoc */
    prepareDerivedData(): void;
    playing: any;
    /**
     * Begin simultaneous playback for all sounds in the Playlist.
     * @returns {Promise<Playlist>} The updated Playlist document
     */
    playAll(): Promise<Playlist>;
    /**
     * Play the next Sound within the sequential or shuffled Playlist.
     * @param {string} [soundId]      The currently playing sound ID, if known
     * @param {object} [options={}]   Additional options which configure the next track
     * @param {number} [options.direction=1] Whether to advance forward (if 1) or backwards (if -1)
     * @returns {Promise<Playlist>}   The updated Playlist document
     */
    playNext(soundId?: string, { direction }?: {
        direction?: number;
    }): Promise<Playlist>;
    /**
     * Begin playback of a specific Sound within this Playlist.
     * Determine which other sounds should remain playing, if any.
     * @param {PlaylistSound} sound       The desired sound that should play
     * @returns {Promise<Playlist>}       The updated Playlist
     */
    playSound(sound: PlaylistSound): Promise<Playlist>;
    /**
     * Stop playback of a specific Sound within this Playlist.
     * Determine which other sounds should remain playing, if any.
     * @param {PlaylistSound} sound       The desired sound that should play
     * @returns {Promise<Playlist>}       The updated Playlist
     */
    stopSound(sound: PlaylistSound): Promise<Playlist>;
    /**
     * End playback for any/all currently playing sounds within the Playlist.
     * @returns {Promise<Playlist>} The updated Playlist document
     */
    stopAll(): Promise<Playlist>;
    /**
     * Cycle the playlist mode
     * @return {Promise.<Playlist>}   A promise which resolves to the updated Playlist instance
     */
    cycleMode(): Promise<Playlist>;
    /**
     * Get the next sound in the cached playback order. For internal use.
     * @private
     */
    private _getNextSound;
    /**
     * Get the previous sound in the cached playback order. For internal use.
     * @private
     */
    private _getPreviousSound;
    /**
     * Define the sorting order for the Sounds within this Playlist. For internal use.
     * @private
     */
    private _sortSounds;
    /** @inheritdoc */
    toAnchor({ classes, ...options }?: {
        classes?: any[];
    }): any;
    /** @inheritdoc */
    _onClickDocumentLink(event: any): Promise<Playlist>;
    /** @inheritdoc */
    _preUpdate(changed: any, options: any, user: any): Promise<any>;
    /** @inheritdoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDelete(options: any, userId: any): void;
    /** @inheritdoc */
    _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onUpdateDescendantDocuments(parent: any, collection: any, documents: any, changes: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void;
    /**
     * Handle callback logic when an individual sound within the Playlist concludes playback naturally
     * @param {PlaylistSound} sound
     * @private
     */
    private _onSoundEnd;
    /**
     * Handle callback logic when playback for an individual sound within the Playlist is started.
     * Schedule auto-preload of next track
     * @param {PlaylistSound} sound
     * @private
     */
    private _onSoundStart;
    /**
     * Update the playing status of this Playlist in content links.
     * @param {object} changed  The data changes.
     * @private
     */
    private _updateContentLinkPlaying;
    /** @inheritdoc */
    toCompendium(pack: any, options?: {}): any;
}
