/**
 * An implementation of the AVClient which uses the simple-peer library and the Foundry socket server for signaling.
 * Credit to bekit#4213 for identifying simple-peer as a viable technology and providing a POC implementation.
 * @extends {AVClient}
 */
declare class SimplePeerAVClient extends AVClient {
    /**
     * The local Stream which captures input video and audio
     * @type {MediaStream}
     */
    localStream: MediaStream;
    /**
     * The dedicated audio stream used to measure volume levels for voice activity detection.
     * @type {MediaStream}
     */
    levelsStream: MediaStream;
    /**
     * A mapping of connected peers
     * @type {Map}
     */
    peers: Map<any, any>;
    /**
     * A mapping of connected remote streams
     * @type {Map}
     */
    remoteStreams: Map<any, any>;
    /**
     * Has the client been successfully initialized?
     * @type {boolean}
     * @private
     */
    private _initialized;
    /**
     * Is outbound broadcast of local audio enabled?
     * @type {boolean}
     */
    audioBroadcastEnabled: boolean;
    /**
     * The polling interval ID for connected users that might have unexpectedly dropped out of our peer network.
     * @type {number|null}
     */
    _connectionPoll: number | null;
    /**
     * Try to establish a peer connection with each user connected to the server.
     * @private
     */
    private _connect;
    /** @override */
    override getConnectedUsers(): any[];
    /** @override */
    override getMediaStreamForUser(userId: any): any;
    /** @override */
    override getLevelsStreamForUser(userId: any): any;
    /** @override */
    override toggleAudio(enabled: any): void;
    /** @override */
    override toggleBroadcast(enabled: any): void;
    /** @override */
    override toggleVideo(enabled: any): void;
    /** @override */
    override setUserVideo(userId: any, videoElement: any): Promise<void>;
    /**
     * Initialize a local media stream for the current user
     * @returns {Promise<MediaStream>}
     */
    initializeLocalStream(): Promise<MediaStream>;
    /**
     * Attempt to create local media streams.
     * @param {{video: object, audio: object}} params       Parameters for the getUserMedia request.
     * @returns {Promise<MediaStream|Error>}                The created MediaStream or an error.
     * @private
     */
    private _createMediaStream;
    /**
     * Listen for Audio/Video updates on the av socket to broker connections between peers
     */
    activateSocketListeners(): void;
    /**
     * Initialize a stream connection with a new peer
     * @param {string} userId           The Foundry user ID for which the peer stream should be established
     * @returns {Promise<SimplePeer>}   A Promise which resolves once the peer stream is initialized
     */
    initializePeerStream(userId: string): Promise<SimplePeer>;
    /**
     * Receive a request to establish a peer signal with some other User id
     * @param {string} userId           The Foundry user ID who is requesting to establish a connection
     * @param {object} data             The connection details provided by SimplePeer
     */
    receiveSignal(userId: string, data: object): void;
    /**
     * Connect to a peer directly, either as the initiator or as the receiver
     * @param {string} userId           The Foundry user ID with whom we are connecting
     * @param {boolean} isInitiator     Is the current user initiating the connection, or responding to it?
     * @returns {SimplePeer}            The constructed and configured SimplePeer instance
     */
    connectPeer(userId: string, isInitiator?: boolean): SimplePeer;
    /**
     * Create the SimplePeer instance for the desired peer connection.
     * Modules may implement more advanced connection strategies by overriding this method.
     * @param {string} userId           The Foundry user ID with whom we are connecting
     * @param {boolean} isInitiator     Is the current user initiating the connection, or responding to it?
     * @private
     */
    private _createPeerConnection;
    /**
     * Setup the custom TURN relay to be used in subsequent calls if there is one configured.
     * TURN credentials are mandatory in WebRTC.
     * @param {object} options The SimplePeer configuration object.
     * @private
     */
    private _setupCustomTURN;
    /**
     * Disconnect from a peer by stopping current stream tracks and destroying the SimplePeer instance
     * @param {string} userId           The Foundry user ID from whom we are disconnecting
     * @returns {Promise<void>}         A Promise which resolves once the disconnection is complete
     */
    disconnectPeer(userId: string): Promise<void>;
    /**
     * Disconnect from all current peer streams
     * @returns {Promise<Array>}       A Promise which resolves once all peers have been disconnected
     */
    disconnectAll(): Promise<any[]>;
    /** @override */
    override onSettingsChanged(changed: any): Promise<void>;
}
