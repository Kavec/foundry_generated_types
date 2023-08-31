/**
 * The master Audio/Video controller instance.
 * This is available as the singleton game.webrtc
 *
 * @param {AVSettings} settings     The Audio/Video settings to use
 */
declare class AVMaster {
    settings: AVSettings;
    config: AVConfig;
    /**
     * The Audio/Video client class
     * @type {AVClient}
     */
    client: AVClient;
    /**
     * A flag to track whether the current user is actively broadcasting their microphone.
     * @type {boolean}
     */
    broadcasting: boolean;
    /**
     * Flag to determine if we are connected to the signalling server or not.
     * This is required for synchronization between connection and reconnection attempts.
     * @type {boolean}
     */
    _connected: boolean;
    /**
     * The cached connection promise.
     * This is required to prevent re-triggering a connection while one is already in progress.
     * @type {Promise<boolean>|null}
     * @protected
     */
    protected _connecting: Promise<boolean> | null;
    /**
     * A flag to track whether the A/V system is currently in the process of reconnecting.
     * This occurs if the connection is lost or interrupted.
     * @type {boolean}
     * @protected
     */
    protected _reconnecting: boolean;
    _speakingData: {
        speaking: boolean;
        volumeHistories: any[];
    };
    _pttMuteTimeout: number;
    get mode(): any;
    /**
     * Connect to the Audio/Video client.
     * @return {Promise<boolean>}     Was the connection attempt successful?
     */
    connect(): Promise<boolean>;
    /**
     * Disconnect from the Audio/Video client.
     * @return {Promise<boolean>}     Whether an existing connection was terminated?
     */
    disconnect(): Promise<boolean>;
    /**
     * Callback actions to take when the user becomes disconnected from the server.
     * @return {Promise<void>}
     */
    reestablish(): Promise<void>;
    /**
     * Initialize the local broadcast state.
     * @protected
     */
    protected _initialize(): void;
    /**
     * A user can broadcast audio if the AV mode is compatible and if they are allowed to broadcast.
     * @param {string} userId
     * @return {boolean}
     */
    canUserBroadcastAudio(userId: string): boolean;
    /**
     * A user can share audio if they are allowed to broadcast and if they have not muted themselves or been blocked.
     * @param {string} userId
     * @return {boolean}
     */
    canUserShareAudio(userId: string): boolean;
    /**
     * A user can broadcast video if the AV mode is compatible and if they are allowed to broadcast.
     * @param {string} userId
     * @return {boolean}
     */
    canUserBroadcastVideo(userId: string): boolean;
    /**
     * A user can share video if they are allowed to broadcast and if they have not hidden themselves or been blocked.
     * @param {string} userId
     * @return {boolean}
     */
    canUserShareVideo(userId: string): boolean;
    /**
     * Trigger a change in the audio broadcasting state when using a push-to-talk workflow.
     * @param {boolean} intent        The user's intent to broadcast. Whether an actual broadcast occurs will depend
     *                                on whether or not the user has muted their audio feed.
     */
    broadcast(intent: boolean): any;
    /**
     * Set up audio level listeners to handle voice activation detection workflow.
     * @param {string} mode           The currently selected voice broadcasting mode
     * @protected
     */
    protected _initializeUserVoiceDetection(mode: string): void;
    /**
     * Activate voice detection tracking for a userId on a provided MediaStream.
     * Currently only a MediaStream is supported because MediaStreamTrack processing is not yet supported cross-browser.
     * @param {MediaStream} stream    The MediaStream which corresponds to that User
     * @param {number} [ms]           A number of milliseconds which represents the voice activation volume interval
     */
    activateVoiceDetection(stream: MediaStream, ms?: number): void;
    /**
     * Actions which the orchestration layer should take when a peer user disconnects from the audio/video service.
     */
    deactivateVoiceDetection(): void;
    /**
     * Periodic notification of user audio level
     *
     * This function uses the audio level (in dB) of the audio stream to determine if the user is speaking or not and
     * notifies the UI of such changes.
     *
     * The User is considered speaking if they are above the decibel threshold in any of the history values.
     * This marks them as speaking as soon as they have a high enough volume, and marks them as not speaking only after
     * they drop below the threshold in all histories (last 4 volumes = for 200 ms).
     *
     * There can be more optimal ways to do this and which uses whether the user was already considered speaking before
     * or not, in order to eliminate short bursts of audio (coughing for example).
     *
     * @param {number} dbLevel         The audio level in decibels of the user within the last 50ms
     * @protected
     */
    protected _onAudioLevel(dbLevel: number): any;
    /**
     * Resets the speaking history of a user
     * If the user was considered speaking, then mark them as not speaking
     */
    _resetSpeakingHistory(): void;
    /**
     * Handle activation of a push-to-talk key or button.
     * @param {KeyboardEventContext} context    The context data of the event
     */
    _onPTTStart(context: KeyboardEventContext): boolean;
    /**
     * Handle deactivation of a push-to-talk key or button.
     * @param {KeyboardEventContext} context    The context data of the event
     */
    _onPTTEnd(context: KeyboardEventContext): boolean;
    render(): any;
    /**
     * Render the audio/video streams to the CameraViews UI.
     * Assign each connected user to the correct video frame element.
     */
    onRender(): void;
    /**
     * Respond to changes which occur to AV Settings.
     * Changes are handled in descending order of impact.
     * @param {object} changed       The object of changed AV settings
     */
    onSettingsChanged(changed: object): Promise<boolean>;
    debug(message: any): void;
}
