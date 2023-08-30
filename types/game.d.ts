/**
 * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
 * The singleton instance of the Game class is available as the global variable game.
 */
declare class Game {
    /**
     * Fetch World data and return a Game instance
     * @param {string} view             The named view being created
     * @param {string|null} sessionId   The current sessionId of the connecting client
     * @returns {Promise<Game>}         A Promise which resolves to the created Game instance
     */
    static create(view: string, sessionId: string | null): Promise<Game>;
    /**
     * Establish a live connection to the game server through the socket.io URL
     * @param {string} sessionId  The client session ID with which to establish the connection
     * @returns {Promise<object>}  A promise which resolves to the connected socket, if successful
     */
    static connect(sessionId: string): Promise<object>;
    /**
     * Retrieve the cookies which are attached to the client session
     * @returns {object}   The session cookies
     */
    static getCookies(): object;
    /**
     * Request World data from server and return it
     * @param {Socket} socket     The active socket connection
     * @param {string} view       The view for which data is being requested
     * @returns {Promise<object>}
     */
    static getData(socket: Socket, view: string): Promise<object>;
    /**
     * Get the current World status upon initial connection.
     * @param {Socket} socket  The active client socket connection
     * @returns {Promise<boolean>}
     */
    static getWorldStatus(socket: Socket): Promise<boolean>;
    /**
     * Support mousewheel control for range type input elements
     * @param {WheelEvent} event    A Mouse Wheel scroll event
     * @private
     */
    private static _handleMouseWheelInputChange;
    /**
     * @param {string} view         The named view which is active for this game instance.
     * @param {object} data         An object of all the World data vended by the server when the client first connects
     * @param {string} sessionId    The ID of the currently active client session retrieved from the browser cookie
     * @param {Socket} socket       The open web-socket which should be used to transact game-state data
     */
    constructor(view: string, data: object, sessionId: string, socket: Socket);
    /**
     * The user role permissions setting
     * @type {object}
     */
    permissions: object;
    /**
     * Whether the Game is running in debug mode
     * @type {boolean}
     */
    debug: boolean;
    /**
     * A flag for whether texture assets for the game canvas are currently loading
     * @type {boolean}
     */
    loading: boolean;
    /**
     * A flag for whether the Game has successfully reached the "ready" hook
     * @type {boolean}
     */
    ready: boolean;
    /**
     * The game World which is currently active.
     * @type {World}
     */
    world: World;
    /**
     * The System which is used to power this game World.
     * @type {System}
     */
    system: System;
    /**
     * A Map of active Modules which are currently eligible to be enabled in this World.
     * The subset of Modules which are designated as active are currently enabled.
     * @type {Map<string, Module>}
     */
    modules: Map<string, Module>;
    /**
     * Returns the current version of the Release, usable for comparisons using isNewerVersion
     * @type {string}
     */
    get version(): string;
    /**
     * Configure package data that is currently enabled for this world
     * @param {object} data  Game data provided by the server socket
     */
    setupPackages(data: object): void;
    documentTypes: any;
    template: any;
    model: any;
    /**
     * Return the named scopes which can exist for packages.
     * Scopes are returned in the prioritization order that their content is loaded.
     * @returns {string[]}    An array of string package scopes
     */
    getPackageScopes(): string[];
    /**
     * Initialize the Game for the current window location
     */
    initialize(): Promise<void>;
    /**
     * Shut down the currently active Game. Requires GameMaster user permission.
     * @returns {Promise<void>}
     */
    shutDown(): Promise<void>;
    /**
     * Fully set up the game state, initializing Documents, UI applications, and the Canvas
     * @returns {Promise<void>}
     */
    setupGame(): Promise<void>;
    /**
     * Initialize game state data by creating WorldCollection instances for every primary Document type
     */
    initializeDocuments(): void;
    _documentsReady: boolean;
    /**
     * Initialize the Compendium packs which are present within this Game
     * Create a Collection which maps each Compendium pack using it's collection ID
     * @returns {Collection<string,CompendiumCollection>}
     */
    initializePacks(): Collection<string, CompendiumCollection>;
    /**
     * Initialize the WebRTC implementation
     */
    initializeRTC(): Promise<boolean>;
    webrtc: AVMaster;
    /**
     * Initialize core UI elements
     */
    initializeUI(): void;
    /**
     * Initialize the game Canvas
     * @returns {Promise<void>}
     */
    initializeCanvas(): Promise<void>;
    /**
     * Initialize Keyboard controls
     */
    initializeKeyboard(): void;
    /**
     * Initialize Mouse controls
     */
    initializeMouse(): void;
    /**
     * Initialize Gamepad controls
     */
    initializeGamepads(): void;
    /**
     * Register core game settings
     */
    registerSettings(): void;
    /**
     * Register core Tours
     * @returns {Promise<void>}
     */
    registerTours(): Promise<void>;
    /**
     * Is the current session user authenticated as an application administrator?
     * @type {boolean}
     */
    get isAdmin(): boolean;
    /**
     * The currently connected User document, or null if Users is not yet initialized
     * @type {User|null}
     */
    get user(): User;
    /**
     * A convenience accessor for the currently viewed Combat encounter
     * @type {Combat}
     */
    get combat(): Combat;
    /**
     * A state variable which tracks whether the game session is currently paused
     * @type {boolean}
     */
    get paused(): boolean;
    /**
     * A convenient reference to the currently active canvas tool
     * @type {string}
     */
    get activeTool(): string;
    /**
     * Toggle the pause state of the game
     * Trigger the `pauseGame` Hook when the paused state changes
     * @param {boolean} pause         The desired pause state; true for paused, false for un-paused
     * @param {boolean} [push=false]  Push the pause state change to other connected clients? Requires an GM user.
     * @returns {boolean}             The new paused state
     */
    togglePause(pause: boolean, push?: boolean): boolean;
    /**
     * Open Character sheet for current token or controlled actor
     * @returns {ActorSheet|null}  The ActorSheet which was toggled, or null if the User has no character
     */
    toggleCharacterSheet(): ActorSheet | null;
    /**
     * Log out of the game session by returning to the Join screen
     */
    logOut(): void;
    /**
     * Scale the base font size according to the user's settings.
     * @param {number} [index]  Optionally supply a font size index to use, otherwise use the user's setting.
     *                          Available font sizes, starting at index 1, are: 8, 10, 12, 14, 16, 18, 20, 24, 28, and 32.
     */
    scaleFonts(index?: number): void;
    /**
     * Activate Socket event listeners which are used to transact game state data with the server
     */
    activateSocketListeners(): void;
    /**
     * Activate Event Listeners which apply to every Game View
     */
    activateListeners(): void;
    /**
     * On left mouse clicks, check if the element is contained in a valid hyperlink and open it in a new tab.
     * @param {MouseEvent} event
     * @private
     */
    private _onClickHyperlink;
    /**
     * Prevent starting a drag and drop workflow on elements within the document unless the element has the draggable
     * attribute explicitly defined or overrides the dragstart handler.
     * @param {DragEvent} event   The initiating drag start event
     * @private
     */
    private _onPreventDragstart;
    /**
     * Disallow dragging of external content onto anything but a file input element
     * @param {DragEvent} event   The requested drag event
     * @private
     */
    private _onPreventDragover;
    /**
     * Disallow dropping of external content onto anything but a file input element
     * @param {DragEvent} event   The requested drag event
     * @private
     */
    private _onPreventDrop;
    /**
     * On a left-click event, remove any currently displayed inline roll tooltip
     * @param {PointerEvent} event    The mousedown pointer event
     * @private
     */
    private _onPointerDown;
    /**
     * Fallback handling for mouse-up events which aren't handled further upstream.
     * @param {PointerEvent} event    The mouseup pointer event
     * @private
     */
    private _onPointerUp;
    /**
     * Handle resizing of the game window by adjusting the canvas and repositioning active interface applications.
     * @param {Event} event     The window resize event which has occurred
     * @private
     */
    private _onWindowResize;
    /**
     * Handle window unload operations to clean up any data which may be pending a final save
     * @param {Event} event     The window unload event which is about to occur
     * @private
     */
    private _onWindowBeforeUnload;
    /**
     * Handle cases where the browser window loses focus to reset detection of currently pressed keys
     * @param {Event} event   The originating window.blur event
     * @private
     */
    private _onWindowBlur;
    _onWindowPopState(event: any): void;
    /**
     * Initialize elements required for the current view
     * @private
     */
    private _initializeView;
    /**
     * Initialization steps for the primary Game view
     * @private
     */
    private _initializeGameView;
    /**
     * Initialization steps for the Stream helper view
     * @private
     */
    private _initializeStreamView;
    #private;
}
type HotReloadData = {
    /**
     * The type of package which was modified
     */
    packageType: string;
    /**
     * The id of the package which was modified
     */
    packageId: string;
    /**
     * The updated stringified file content
     */
    content: string;
    /**
     * The relative file path which was modified
     */
    path: string;
    /**
     * The file extension which was modified, e.g. "js", "css", "html"
     */
    extension: string;
};
