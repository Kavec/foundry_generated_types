/**
 * The client-side PlaylistSound document which extends the common BasePlaylistSound model.
 * Each PlaylistSound belongs to the sounds collection of a Playlist document.
 * @extends documents.BasePlaylistSound
 * @mixes ClientDocumentMixin
 *
 * @see {@link Playlist}              The Playlist document which contains PlaylistSound embedded documents
 * @see {@link PlaylistSoundConfig}   The PlaylistSound configuration application
 * @see {@link Sound}                 The Sound API which manages web audio playback
 */
declare class PlaylistSound {
    /**
     * The debounce tolerance for processing rapid volume changes into database updates in milliseconds
     * @type {number}
     */
    static VOLUME_DEBOUNCE_MS: number;
    constructor(data: any, context: any);
    /**
     * The Sound which manages playback for this playlist sound
     * @type {Sound|null}
     */
    sound: Sound | null;
    /**
     * A debounced function, accepting a single volume parameter to adjust the volume of this sound
     * @type {Function}
     * @param {number} volume     The desired volume level
     */
    debounceVolume: Function;
    /**
     * Create a Sound used to play this PlaylistSound document
     * @returns {Sound|null}
     * @protected
     */
    protected _createSound(): Sound | null;
    /**
     * The effective volume at which this playlist sound is played, incorporating the global playlist volume setting.
     * @type {number}
     */
    get effectiveVolume(): number;
    /**
     * Determine the fade duration for this PlaylistSound based on its own configuration and that of its parent.
     * @type {number}
     */
    get fadeDuration(): number;
    /**
     * Synchronize playback for this particular PlaylistSound instance
     */
    sync(): any;
    /** @inheritdoc */
    toAnchor({ classes, ...options }?: {
        classes?: any[];
    }): any;
    /** @inheritdoc */
    _onClickDocumentLink(event: any): any;
    /** @override */
    override _onCreate(data: any, options: any, userId: any): void;
    /** @override */
    override _onUpdate(changed: any, options: any, userId: any): void;
    /** @override */
    override _onDelete(options: any, userId: any): void;
    playing: boolean;
    /**
     * Special handling that occurs when a PlaylistSound reaches the natural conclusion of its playback.
     * @protected
     */
    protected _onEnd(): Promise<any>;
    /**
     * Special handling that occurs when playback of a PlaylistSound is started.
     * @protected
     */
    protected _onStart(): Promise<any>;
    /**
     * Special handling that occurs when a PlaylistSound is manually stopped before its natural conclusion.
     * @protected
     */
    protected _onStop(): Promise<void>;
    /**
     * Handle fading in the volume for this sound when it begins to play (or loop)
     * @param {Sound} sound     The sound fading-in
     * @protected
     */
    protected _fadeIn(sound: Sound): void;
    /**
     * Handle fading out the volume for this sound when it begins to play (or loop)
     * @param {Sound} sound     The sound fading-out
     * @protected
     */
    protected _fadeOut(sound: Sound): void;
}
