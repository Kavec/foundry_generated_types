/**
 * Management class for Gamepad events
 */
declare class GamepadManager {
    /**
     * How often Gamepad polling should check for button presses
     * @type {number}
     */
    static GAMEPAD_POLLER_INTERVAL_MS: number;
    _gamepadPoller: NodeJS.Timeout;
    /**
     * The connected Gamepads
     * @type {Map<string, ConnectedGamepad>}
     * @private
     */
    private _connectedGamepads;
    /**
     * Begin listening to gamepad events.
     * @internal
     */
    _activateListeners(): void;
    /**
     * Handles a Gamepad Connection event, adding its info to the poll list
     * @param {GamepadEvent} event The originating Event
     * @private
     */
    private _onGamepadConnect;
    /**
     * Handles a Gamepad Disconnect event, removing it from consideration for polling
     * @param {GamepadEvent} event The originating Event
     * @private
     */
    private _onGamepadDisconnect;
    /**
     * Polls all Connected Gamepads for updates. If they have been updated, checks status of Axis and Buttons,
     * firing off Keybinding Contexts as appropriate
     * @private
     */
    private _pollGamepads;
    /**
     * Converts a Gamepad Input event into a KeyboardEvent, then fires it
     * @param {string} gamepadId  The string representation of the Gamepad Input
     * @param {boolean} up        True if the Input is pressed or active
     * @param {boolean} repeat    True if the Input is being held
     * @private
     */
    private _handleGamepadInput;
}
