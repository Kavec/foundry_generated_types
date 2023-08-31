/**
 * The Sound class is used to control the playback of audio sources using the Web Audio API.
 */
declare class Sound {
    /**
     * A global audio node ID used to quickly reference a specific audio node
     * @type {number}
     * @protected
     */
    protected static _nodeId: number;
    constructor(src: any, { container }?: {
        container: any;
    });
    /**
     * The numeric identifier for accessing this node
     * @type {number}
     */
    id: number;
    /**
     * The audio source path
     * @type {string}
     */
    src: string;
    /**
     * The AudioContainer which controls playback
     * @type {AudioContainer}
     */
    container: AudioContainer;
    /**
     * The time in seconds at which playback was started
     * @type {number}
     */
    startTime: number;
    /**
     * The time in seconds at which playback was paused
     * @type {number}
     */
    pausedTime: number;
    /**
     * Registered event callbacks
     * @type {{stop: {}, start: {}, end: {}, pause: {}, load: {}}}
     */
    events: {
        stop: {};
        start: {};
        end: {};
        pause: {};
        load: {};
    };
    /**
     * The registered event handler id for this Sound.
     * Incremented each time a callback is registered.
     * @type {number}
     * @protected
     */
    protected _eventHandlerId: number;
    /**
     * If this Sound source is currently in the process of loading, this attribute contains a Promise that will resolve
     * when the loading process completes.
     * @type {Promise}
     */
    loading: Promise<any>;
    /**
     * A collection of scheduled events recorded as window timeout IDs
     * @type {Set<number>}
     * @protected
     */
    protected _scheduledEvents: Set<number>;
    /**
     * A convenience reference to the sound context used by the application
     * @returns {AudioContext}
     */
    get context(): AudioContext;
    /**
     * A reference to the audio source node being used by the AudioContainer
     * @returns {AudioBufferSourceNode|MediaElementAudioSourceNode}
     */
    get node(): AudioBufferSourceNode | MediaElementAudioSourceNode;
    /**
     * A reference to the GainNode parameter which controls volume
     * @type {AudioParam}
     */
    get gain(): AudioParam;
    /**
     * The current playback time of the sound
     * @returns {number}
     */
    get currentTime(): number;
    /**
     * The total sound duration, in seconds
     * @type {number}
     */
    get duration(): number;
    /**
     * Is the contained audio node loaded and ready for playback?
     * @type {boolean}
     */
    get loaded(): boolean;
    /**
     * Did the contained audio node fail to load?
     * @type {boolean}
     */
    get failed(): boolean;
    /**
     * Is the audio source currently playing?
     * @type {boolean}
     */
    get playing(): boolean;
    set loop(arg: boolean);
    /**
     * Is the Sound current looping?
     * @type {boolean}
     */
    get loop(): boolean;
    set volume(arg: number);
    /**
     * The volume at which the Sound is playing
     * @returns {number}
     */
    get volume(): number;
    /**
     * Fade the volume for this sound between its current level and a desired target volume
     * @param {number} volume                     The desired target volume level between 0 and 1
     * @param {object} [options={}]               Additional options that configure the fade operation
     * @param {number} [options.duration=1000]      The duration of the fade effect in milliseconds
     * @param {number} [options.from]               A volume level to start from, the current volume by default
     * @param {string} [options.type=linear]        The type of fade easing, "linear" or "exponential"
     * @returns {Promise<void>}                   A Promise that resolves after the requested fade duration
     */
    fade(volume: number, { duration, from, type }?: {
        duration?: number;
        from?: number;
        type?: string;
    }): Promise<void>;
    /**
     * Load the audio source, creating an AudioBuffer.
     * Audio loading is idempotent, it can be requested multiple times but only the first load request will be honored.
     * @param {object} [options={}]   Additional options which affect resource loading
     * @param {boolean} [options.autoplay=false]  Automatically begin playback of the audio source once loaded
     * @param {object} [options.autoplayOptions]  Additional options passed to the play method when loading is complete
     * @returns {Promise<Sound>}      The Sound once its source audio buffer is loaded
     */
    load({ autoplay, autoplayOptions }?: {
        autoplay?: boolean;
        autoplayOptions?: object;
    }): Promise<Sound>;
    /**
     * Begin playback for the sound node
     * @param {object} [options={}]   Options which configure playback
     * @param {boolean} [options.loop=false]    Whether to loop the audio automatically
     * @param {number} [options.offset]         A specific offset in seconds at which to begin playback
     * @param {number} [options.volume]         The desired volume at which to begin playback
     * @param {number} [options.fade=0]         Fade volume changes over a desired duration in milliseconds
     */
    play({ loop, offset, volume, fade }?: {
        loop?: boolean;
        offset?: number;
        volume?: number;
        fade?: number;
    }): any;
    /**
     * Pause playback, remembering the playback position in order to resume later.
     */
    pause(): void;
    /**
     * Stop playback, fully resetting the Sound to a non-playing state.
     */
    stop(): void;
    /**
     * Schedule a function to occur at the next occurrence of a specific playbackTime for this Sound.
     * @param {Function} fn           A function that will be called with this Sound as its single argument
     * @param {number} playbackTime   The desired playback time at which the function should be called
     * @returns {Promise<null>}       A Promise which resolves once the scheduled function has been called
     *
     * @example Schedule audio playback changes
     * ```js
     * sound.schedule(() => console.log("Do something exactly 30 seconds into the track"), 30);
     * sound.schedule(() => console.log("Do something next time the track loops back to the beginning"), 0);
     * sound.schedule(() => console.log("Do something 5 seconds before the end of the track"), sound.duration - 5);
     * ```
     */
    schedule(fn: Function, playbackTime: number): Promise<null>;
    /**
     * Trigger registered callback functions for a specific event name.
     * @param {string} eventName      The event name being emitted
     */
    emit(eventName: string): void;
    /**
     * Deactivate an event handler which was previously registered for a specific event
     * @param {string} eventName      The event name being deactivated
     * @param {number|Function} fn    The callback ID or callback function being un-registered
     */
    off(eventName: string, fn: number | Function): void;
    /**
     * Register an event handler to take actions for a certain Sound event.
     * @param {string} eventName      The event name being deactivated
     * @param {Function} fn           The callback function to trigger when the event occurs
     * @param {object} [options={}]   Additional options that affect callback registration
     * @param {boolean} [options.once=false]  Trigger the callback once only and automatically un-register it
     */
    on(eventName: string, fn: Function, { once }?: {
        once?: boolean;
    }): number;
    /**
     * Register a new callback function for a certain event. For internal use only.
     * @protected
     */
    protected _registerForEvent(eventName: any, callback: any): number;
    /**
     * Cancel all pending scheduled events.
     * @protected
     */
    protected _clearEvents(): void;
    /**
     * Called when playback concludes naturally
     * @protected
     */
    protected _onEnd(): void;
    /**
     * Called when the audio buffer is first loaded
     * @protected
     */
    protected _onLoad(): void;
    /**
     * Called when playback is paused
     * @protected
     */
    protected _onPause(): void;
    /**
     * Called when the sound begins playing
     * @protected
     */
    protected _onStart(): void;
    /**
     * Called when playback is stopped (prior to naturally reaching the end)
     * @protected
     */
    protected _onStop(): void;
}
