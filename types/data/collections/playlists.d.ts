/**
 * The singleton collection of Playlist documents which exist within the active World.
 * This Collection is accessible within the Game object as game.playlists.
 * @extends {WorldCollection}
 *
 * @see {@link Playlist} The Playlist document
 * @see {@link PlaylistDirectory} The PlaylistDirectory sidebar directory
 */
declare class Playlists extends WorldCollection {
    constructor(...args: any[]);
    /**
     * Return the subset of Playlist documents which are currently playing
     * @type {Playlist[]}
     */
    get playing(): Playlist[];
    /**
     * Perform one-time initialization to begin playback of audio
     */
    initialize(): void;
    /**
     * Handle changes to a Scene to determine whether to trigger changes to Playlist documents.
     * @param {Scene} scene       The Scene document being updated
     * @param {Object} data       The incremental update data
     */
    _onChangeScene(scene: Scene, data: any): Promise<void>;
}
