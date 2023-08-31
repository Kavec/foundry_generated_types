/**
 * An AudioSourceNode container which handles the strategy of node type to use for playback.
 * Used by the Sound interface which controls playback.
 * This class is for internal use only and should not be used by external callers.
 */
declare class AudioContainer {
    /**
     * The maximum duration, in seconds, for which an AudioBuffer will be used.
     * Otherwise, a streaming media element will be used.
     * @type {number}
     */
    static MAX_BUFFER_DURATION: number;
    /**
     * The sequence of container loading states.
     * @enum {number}
     */
    static LOAD_STATES: {
        FAILED: number;
        NONE: number;
        LOADING: number;
        LOADED: number;
    };
    constructor(src: any);
    /**
     * The audio source path
     * @type {string}
     */
    src: string;
    /**
     * The Audio Node used to control this sound
     * @type {AudioBufferSourceNode|MediaElementAudioSourceNode}
     */
    sourceNode: AudioBufferSourceNode | MediaElementAudioSourceNode;
    /**
     * The GainNode used to control volume
     * @type {GainNode}
     */
    gainNode: GainNode;
    /**
     * Is this container using an AudioBuffer?
     * @type {boolean}
     */
    isBuffer: boolean;
    /**
     * Whether we have attempted to load the audio node or not, and whether it failed.
     * @see {LOAD_STATES}
     * @type {number}
     */
    loadState: number;
    /**
     * Is the audio source currently playing?
     * @type {boolean}
     */
    playing: boolean;
    /**
     * Should the audio source loop?
     * @type {boolean}
     * @protected
     */
    protected _loop: boolean;
    set loop(arg: boolean);
    get loop(): boolean;
    /**
     * Has the audio file been loaded either fully or for streaming.
     * @type {boolean}
     */
    get loaded(): boolean;
    /**
     * Did the audio file fail to load.
     * @type {boolean}
     */
    get failed(): boolean;
    /**
     * A reference to the AudioBuffer if the sourceNode is a AudioBufferSourceNode.
     * @returns {AudioBuffer}
     */
    get buffer(): AudioBuffer;
    /**
     * The game audio context used throughout the application.
     * @returns {AudioContext}
     */
    get context(): AudioContext;
    /**
     * The total duration of the audio source in seconds
     * @type {number}
     */
    get duration(): number;
    /**
     * A reference to the HTMLMediaElement, if the sourceNode is a MediaElementAudioSourceNode.
     * @returns {HTMLMediaElement}
     */
    get element(): HTMLMediaElement;
    /**
     * Load the source node required for playback of this audio source
     * @returns {Promise<void>}
     */
    load(): Promise<void>;
    /**
     * Create the initial audio node used for playback.
     * Determine the node type to use based on cached state and sound duration.
     * @returns {AudioBufferSourceNode|MediaElementAudioSourceNode}
     * @protected
     */
    protected _createNode(): AudioBufferSourceNode | MediaElementAudioSourceNode;
    /**
     * Create an Audio source node using a buffered array.
     * @param {string} src                The source URL from which to create the buffer
     * @returns {Promise<AudioBuffer>}    The created and decoded buffer
     */
    createAudioBuffer(src: string): Promise<AudioBuffer>;
    /**
     * Create a AudioBufferSourceNode using a provided AudioBuffer
     * @protected
     */
    protected _createAudioBufferSourceNode(buffer: any): AudioBufferSourceNode;
    /**
     * Create an HTML5 Audio element which has loaded the metadata for the provided source.
     * @returns {Promise<HTMLAudioElement>}
     * @protected
     */
    protected _createAudioElement(): Promise<HTMLAudioElement>;
    /**
     * Create a MediaElementAudioSourceNode using a provided HTMLAudioElement
     * @protected
     */
    protected _createMediaElementAudioSourceNode(element: any): MediaElementAudioSourceNode;
    /**
     * Begin playback for the source node.
     * @param {number} [offset]       The desired start time
     * @param {Function} [onended]    A callback function for when playback concludes naturally
     */
    play(offset?: number, onended?: Function): void;
    /**
     * Terminate playback for the source node.
     */
    stop(): void;
    /**
     * Perform cleanup actions when the sound has finished playing. For
     * MediaElementAudioSourceNodes, this also means optionally restarting if
     * the sound is supposed to loop.
     * @param {Function} onended A callback provided by the owner of the container that gets fired when the sound ends.
     * @protected
     */
    protected _onEnd(onended: Function): void;
    /**
     * Unload the MediaElementAudioSourceNode to terminate any ongoing
     * connections.
     * @protected
     */
    protected _unloadMediaNode(): void;
}
/**
 * The sequence of container loading states.
 */
type LOAD_STATES = number;
