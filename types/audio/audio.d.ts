/**
 * A helper class to provide common functionality for working with the Web Audio API.
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
 * A singleton instance of this class is available as game#audio.
 * @see Game#audio
 */
declare class AudioHelper {
    /**
     * The Native interval for the AudioHelper to analyse audio levels from streams
     * Any interval passed to startLevelReports() would need to be a multiple of this value.
     * @type {number}
     */
    static levelAnalyserNativeInterval: number;
    /**
     * The cache size threshold after which audio buffers will be expired from the cache to make more room.
     * 1 gigabyte, by default.
     */
    static THRESHOLD_CACHE_SIZE_BYTES: number;
    /**
     * Register client-level settings for global volume overrides
     */
    static registerSettings(): void;
    /**
     * Test whether a source file has a supported audio extension type
     * @param {string} src      A requested audio source path
     * @returns {boolean}       Does the filename end with a valid audio extension?
     */
    static hasAudioExtension(src: string): boolean;
    /**
     * Given an input file path, determine a default name for the sound based on the filename
     * @param {string} src      An input file path
     * @returns {string}        A default sound name for the path
     */
    static getDefaultSoundName(src: string): string;
    /**
     * Open socket listeners which transact ChatMessage data
     * @param socket
     */
    static _activateSocketListeners(socket: any): void;
    /**
     * Play a one-off sound effect which is not part of a Playlist
     *
     * @param {Object} data           An object configuring the audio data to play
     * @param {string} data.src       The audio source file path, either a public URL or a local path relative to the public directory
     * @param {number} data.volume    The volume level at which to play the audio, between 0 and 1.
     * @param {boolean} data.autoplay Begin playback of the audio effect immediately once it is loaded.
     * @param {boolean} data.loop     Loop the audio effect and continue playing it until it is manually stopped.
     * @param {object|boolean} socketOptions  Options which only apply when emitting playback over websocket.
     *                                As a boolean, emits (true) or does not emit (false) playback to all other clients
     *                                As an object, can configure which recipients should receive the event.
     * @param {string[]} [socketOptions.recipients] An array of user IDs to push audio playback to. All users by default.
     *
     * @returns {Sound}               A Sound instance which controls audio playback.
     *
     * @example Play the sound of a locked door for all players
     * ```js
     * AudioHelper.play({src: "sounds/lock.wav", volume: 0.8, loop: false}, true);
     * ```
     */
    static play(data: {
        src: string;
        volume: number;
        autoplay: boolean;
        loop: boolean;
    }, socketOptions: object | boolean): Sound;
    /**
     * Begin loading the sound for a provided source URL adding its
     * @param {string} src            The audio source path to preload
     * @returns {Promise<Sound>}      The created and loaded Sound ready for playback
     */
    static preloadSound(src: string): Promise<Sound>;
    /**
     * Returns the volume value based on a range input volume control's position.
     * This is using an exponential approximation of the logarithmic nature of audio level perception
     * @param {number|string} value   Value between [0, 1] of the range input
     * @param {number} [order=1.5]    The exponent of the curve
     * @returns {number}
     */
    static inputToVolume(value: number | string, order?: number): number;
    /**
     * Counterpart to inputToVolume()
     * Returns the input range value based on a volume
     * @param {number} volume         Value between [0, 1] of the volume level
     * @param {number} [order=1.5]    The exponent of the curve
     * @returns {number}
     */
    static volumeToInput(volume: number, order?: number): number;
    /**
     * The primary Audio Context used to play client-facing sounds.
     * The context is undefined until the user's first gesture is observed.
     * @type {AudioContext}
     */
    context: AudioContext;
    /**
     * The set of AudioBuffer objects which are cached for different audio paths
     * @type {Map<string,{buffer: AudioBuffer, lastAccessed: number, playing: boolean, size: number}>}
     */
    buffers: Map<string, {
        buffer: AudioBuffer;
        lastAccessed: number;
        playing: boolean;
        size: number;
    }>;
    /**
     * The set of singleton Sound instances which are cached for different audio paths
     * @type {Map<string,Sound>}
     */
    sounds: Map<string, Sound>;
    /**
     * Get a map of the Sound objects which are currently playing.
     * @type {Map<number,Sound>}
     */
    playing: Map<number, Sound>;
    /**
     * A user gesture must be registered before audio can be played.
     * This Array contains the Sound instances which are requested for playback prior to a gesture.
     * Once a gesture is observed, we begin playing all elements of this Array.
     * @type {Function[]}
     * @see Sound
     */
    pending: Function[];
    /**
     * A flag for whether video playback is currently locked by awaiting a user gesture
     * @type {boolean}
     */
    locked: boolean;
    /**
     * Audio Context singleton used for analysing audio levels of each stream
     * Only created if necessary to listen to audio streams.
     *
     * @type {AudioContext}
     * @private
     */
    private _audioContext;
    /**
     * Map of all streams that we listen to for determining the decibel levels.
     * Used for analyzing audio levels of each stream.
     * Format of the object stored is :
     * {id:
     *   {
     *     stream: MediaStream,
     *     analyser: AudioAnalyser,
     *     interval: Number,
     *     callback: Function
     *   }
     * }
     *
     * @type {Object}
     * @private
     */
    private _analyserStreams;
    /**
     * Interval ID as returned by setInterval for analysing the volume of streams
     * When set to 0, means no timer is set.
     * @type {number}
     * @private
     */
    private _analyserInterval;
    /**
     * Fast Fourier Transform Array.
     * Used for analysing the decibel level of streams. The array is allocated only once
     * then filled by the analyser repeatedly. We only generate it when we need to listen to
     * a stream's level, so we initialize it to null.
     * @type {Float32Array}
     * @private
     */
    private _fftArray;
    /**
     * A Promise which resolves once the game audio API is unlocked and ready to use.
     * @type {Promise<AudioContext>}
     */
    unlock: Promise<AudioContext>;
    /**
     * Create a Sound instance for a given audio source URL
     * @param {object} options      Audio creation options
     * @param {string} options.src                  The source URL for the audio file
     * @param {boolean} [options.singleton=true]    Reuse an existing Sound for this source?
     * @param {boolean} [options.preload=false]     Begin loading the audio immediately?
     * @param {boolean} [options.autoplay=false]    Begin playing the audio as soon as it is ready?
     * @param {object} [options.autoplayOptions={}] Additional options passed to the play method if autoplay is true
     * @returns {Sound}
     */
    create({ src, singleton, preload, autoplay, autoplayOptions }?: {
        src: string;
        singleton?: boolean;
        preload?: boolean;
        autoplay?: boolean;
        autoplayOptions?: object;
    }): Sound;
    /**
     * Play a single Sound by providing its source.
     * @param {string} src            The file path to the audio source being played
     * @param {object} [options]       Additional options passed to Sound#play
     * @returns {Promise<Sound>}      The created Sound which is now playing
     */
    play(src: string, options?: object): Promise<Sound>;
    /**
     * Register an event listener to await the first mousemove gesture and begin playback once observed.
     * @returns {Promise<AudioContext>}       The unlocked audio context
     */
    awaitFirstGesture(): Promise<AudioContext>;
    /**
     * Request that other connected clients begin preloading a certain sound path.
     * @param {string} src          The source file path requested for preload
     * @returns {Promise<Sound>}    A Promise which resolves once the preload is complete
     */
    preload(src: string): Promise<Sound>;
    /**
     * Retrieve an AudioBuffer from the buffers cache, if it is available
     * @param {string} src          The buffer audio source path
     * @returns {AudioBuffer}       The AudioBuffer instance if cached, otherwise undefined
     */
    getCache(src: string): AudioBuffer;
    /**
     * Update the last accessed time and playing status of a cached buffer.
     * @param {string} src          The buffer audio source path
     * @param {boolean} playing     Is the buffer currently playing?
     */
    updateCache(src: string, playing?: boolean): void;
    /**
     * Insert an AudioBuffer into the buffers cache.
     * See https://padenot.github.io/web-audio-perf/#memory-profiling
     * @param {string} src          The buffer audio source path
     * @param {AudioBuffer} buffer  The AudioBuffer instance
     */
    setCache(src: string, buffer: AudioBuffer): number;
    /**
     * Returns a singleton AudioContext if one can be created.
     * An audio context may not be available due to limited resources or browser compatibility
     * in which case null will be returned
     *
     * @returns {AudioContext}  A singleton AudioContext or null if one is not available
     */
    getAudioContext(): AudioContext;
    /**
     * Registers a stream for periodic reports of audio levels.
     * Once added, the callback will be called with the maximum decibel level of
     * the audio tracks in that stream since the last time the event was fired.
     * The interval needs to be a multiple of AudioHelper.levelAnalyserNativeInterval which defaults at 50ms
     *
     * @param {string} id             An id to assign to this report. Can be used to stop reports
     * @param {MediaStream} stream    The MediaStream instance to report activity on.
     * @param {Function} callback     The callback function to call with the decibel level. `callback(dbLevel)`
     * @param {number} interval       (optional) The interval at which to produce reports.
     * @param {number} smoothing      (optional) The smoothingTimeConstant to set on the audio analyser. Refer to AudioAnalyser API docs.
     * @returns {boolean}              Returns whether or not listening to the stream was successful
     */
    startLevelReports(id: string, stream: MediaStream, callback: Function, interval?: number, smoothing?: number): boolean;
    /**
     * Stop sending audio level reports
     * This stops listening to a stream and stops sending reports.
     * If we aren't listening to any more streams, cancel the global analyser timer.
     * @param {string} id      The id of the reports that passed to startLevelReports.
     */
    stopLevelReports(id: string): void;
    /**
     * Ensures the global analyser timer is started
     *
     * We create only one timer that runs every 50ms and only create it if needed, this is meant to optimize things
     * and avoid having multiple timers running if we want to analyse multiple streams at the same time.
     * I don't know if it actually helps much with performance but it's expected that limiting the number of timers
     * running at the same time is good practice and with JS itself, there's a potential for a timer congestion
     * phenomenon if too many are created.
     * @private
     */
    private _ensureAnalyserTimer;
    /**
     * Cancel the global analyser timer
     * If the timer is running and has become unnecessary, stops it.
     * @private
     */
    private _cancelAnalyserTimer;
    /**
     * Capture audio level for all speakers and emit a webrtcVolumes custom event with all the volume levels
     * detected since the last emit.
     * The event's detail is in the form of {userId: decibelLevel}
     * @private
     */
    private _emitVolumes;
    /**
     * Handle the first observed user gesture
     * @param {Event} event         The mouse-move event which enables playback
     * @param {Function} resolve    The Promise resolution function
     * @private
     */
    private _onFirstGesture;
    /**
     * Additional standard callback events that occur whenever a global volume slider is adjusted
     * @param {string} key        The setting key
     * @param {number} volume     The new volume level
     * @private
     */
    private _onChangeGlobalVolume;
    #private;
}
