/**
 * @typedef {object} AVSettingsData
 * @property {boolean} [muted]     Whether this user has muted themselves.
 * @property {boolean} [hidden]    Whether this user has hidden their video.
 * @property {boolean} [speaking]  Whether the user is broadcasting audio.
 */
declare class AVSettings {
    /**
     * WebRTC Mode, Disabled, Audio only, Video only, Audio & Video
     * @enum {number}
     */
    static AV_MODES: {
        DISABLED: number;
        AUDIO: number;
        VIDEO: number;
        AUDIO_VIDEO: number;
    };
    /**
     * Voice modes: Always-broadcasting, voice-level triggered, push-to-talk.
     * @enum {string}
     */
    static VOICE_MODES: {
        ALWAYS: string;
        ACTIVITY: string;
        PTT: string;
    };
    /**
     * Displayed nameplate options: Off entirely, animate between player and character name, player name only, character
     * name only.
     * @enum {number}
     */
    static NAMEPLATE_MODES: {
        OFF: number;
        BOTH: number;
        PLAYER_ONLY: number;
        CHAR_ONLY: number;
    };
    /**
     * AV dock positions.
     * @enum {string}
     */
    static DOCK_POSITIONS: {
        TOP: string;
        RIGHT: string;
        BOTTOM: string;
        LEFT: string;
    };
    /**
     * Default client AV settings.
     * @type {object}
     */
    static DEFAULT_CLIENT_SETTINGS: object;
    /**
     * Default world-level AV settings.
     * @type {object}
     */
    static DEFAULT_WORLD_SETTINGS: object;
    /**
     * Default client settings for each connected user.
     * @type {object}
     */
    static DEFAULT_USER_SETTINGS: object;
    _set: any;
    _change: any;
    /**
     * Stores the transient AV activity data received from other users.
     * @type {Object<string, AVSettingsData>}
     */
    activity: {
        [x: string]: AVSettingsData;
    };
    initialize(): void;
    client: any;
    world: any;
    _original: any;
    changed(): any;
    get(scope: any, setting: any): any;
    getUser(userId: any): any;
    set(scope: any, setting: any, value: any): void;
    /**
     * Return a mapping of AV settings for each game User.
     * @type {object}
     */
    get users(): any;
    /**
     * A helper to determine if the dock is configured in a vertical position.
     */
    get verticalDock(): boolean;
    /**
     * Prepare a standardized object of user settings data for a single User
     * @private
     */
    private _getUserSettings;
    /**
     * Handle setting changes to either rctClientSettings or rtcWorldSettings.
     * @private
     */
    private _onSettingsChanged;
    /**
     * Handle another connected user changing their AV settings.
     * @param {string} userId
     * @param {AVSettingsData} settings
     */
    handleUserActivity(userId: string, settings: AVSettingsData): void;
}
/**
 * WebRTC Mode, Disabled, Audio only, Video only, Audio & Video
 */
type AV_MODES = number;
/**
 * Voice modes: Always-broadcasting, voice-level triggered, push-to-talk.
 */
type VOICE_MODES = string;
/**
 * Displayed nameplate options: Off entirely, animate between player and character name, player name only, character
 * name only.
 */
type NAMEPLATE_MODES = number;
/**
 * AV dock positions.
 */
type DOCK_POSITIONS = string;
type AVSettingsData = {
    /**
     * Whether this user has muted themselves.
     */
    muted?: boolean;
    /**
     * Whether this user has hidden their video.
     */
    hidden?: boolean;
    /**
     * Whether the user is broadcasting audio.
     */
    speaking?: boolean;
};
