/**
 * A singleton class {@link game#time} which keeps the official Server and World time stamps.
 * Uses a basic implementation of https://www.geeksforgeeks.org/cristians-algorithm/ for synchronization.
 */
declare class GameTime {
    /**
     * The amount of time to delay before re-syncing the official server time.
     * @type {number}
     */
    static SYNC_INTERVAL_MS: number;
    constructor(socket: any);
    /**
     * The most recently synchronized timestamps retrieved from the server.
     * @type {{clientTime: number, serverTime: number, worldTime: number}}
     */
    _time: {
        clientTime: number;
        serverTime: number;
        worldTime: number;
    };
    /**
     * The average one-way latency across the most recent 5 trips
     * @type {number}
     */
    _dt: number;
    /**
     * The most recent five synchronization durations
     * @type {number[]}
     */
    _dts: number[];
    /**
     * The current server time based on the last synchronization point and the approximated one-way latency.
     * @type {number}
     */
    get serverTime(): number;
    /**
     * The current World time based on the last recorded value of the core.time setting
     * @type {number}
     */
    get worldTime(): number;
    /**
     * Advance the game time by a certain number of seconds
     * @param {number} seconds        The number of seconds to advance (or rewind if negative) by
     * @param {object} [options]      Additional options passed to game.settings.set
     * @returns {Promise<number>}     The new game time
     */
    advance(seconds: number, options?: object): Promise<number>;
    /**
     * Synchronize the local client game time with the official time kept by the server
     * @param {Socket} socket         The connected server Socket instance
     * @returns {Promise<GameTime>}
     */
    sync(socket: Socket): Promise<GameTime>;
    /**
     * Handle follow-up actions when the official World time is changed
     * @param {number} worldTime      The new canonical World time.
     * @param {object} options        Options passed from the requesting client where the change was made
     * @param {string} userId         The ID of the User who advanced the time
     */
    onUpdateWorldTime(worldTime: number, options: object, userId: string): void;
}
