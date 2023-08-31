/**
 * A set of helpers and management functions for dealing with user input from keyboard events.
 * {@link https://keycode.info/}
 */
declare class KeyboardManager {
    /**
     * Allowed modifier keys
     * @enum {string}
     */
    static MODIFIER_KEYS: {
        CONTROL: string;
        SHIFT: string;
        ALT: string;
    };
    /**
     * Track which KeyboardEvent#code presses associate with each modifier
     * @enum {string[]}
     */
    static MODIFIER_CODES: {
        [x: string]: string[];
    };
    /**
     * Key codes which are "protected" and should not be used because they are reserved for browser-level actions.
     * @type {string[]}
     */
    static PROTECTED_KEYS: string[];
    /**
     * The OS-specific string display for what their Command key is
     * @type {string}
     */
    static CONTROL_KEY_STRING: string;
    /**
     * An special mapping of how special KeyboardEvent#code values should map to displayed strings or symbols.
     * Values in this configuration object override any other display formatting rules which may be applied.
     * @type {Object<string, string>}
     */
    static KEYCODE_DISPLAY_MAPPING: {
        [x: string]: string;
    };
    /**
     * Emulates a key being pressed, triggering the Keyboard event workflow.
     * @param {boolean} up                        If True, emulates the `keyup` Event. Else, the `keydown` event
     * @param {string} code                       The KeyboardEvent#code which is being pressed
     * @param {object} [options]                  Additional options to configure behavior.
     * @param {boolean} [options.altKey=false]    Emulate the ALT modifier as pressed
     * @param {boolean} [options.ctrlKey=false]   Emulate the CONTROL modifier as pressed
     * @param {boolean} [options.shiftKey=false]  Emulate the SHIFT modifier as pressed
     * @param {boolean} [options.repeat=false]    Emulate this as a repeat event
     * @param {boolean} [options.force=false]     Force the event to be handled.
     * @returns {KeyboardEventContext}
     */
    static emulateKeypress(up: boolean, code: string, { altKey, ctrlKey, shiftKey, repeat, force }?: {
        altKey?: boolean;
        ctrlKey?: boolean;
        shiftKey?: boolean;
        repeat?: boolean;
        force?: boolean;
    }): KeyboardEventContext;
    /**
     * Format a KeyboardEvent#code into a displayed string.
     * @param {string} code       The input code
     * @returns {string}          The displayed string for this code
     */
    static getKeycodeDisplayString(code: string): string;
    /**
     * Get a standardized keyboard context for a given event.
     * Every individual keypress is uniquely identified using the KeyboardEvent#code property.
     * A list of possible key codes is documented here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
     *
     * @param {KeyboardEvent} event   The originating keypress event
     * @param {boolean} up            A flag for whether the key is down or up
     * @return {KeyboardEventContext} The standardized context of the event
     */
    static getKeyboardEventContext(event: KeyboardEvent, up?: boolean): KeyboardEventContext;
    /**
     * Converts a Keyboard Context event into a string representation, such as "C" or "Control+C"
     * @param {KeyboardEventContext} context  The standardized context of the event
     * @param {boolean} includeModifiers      If True, includes modifiers in the string representation
     * @return {string}
     * @protected
     */
    protected static _getContextDisplayString(context: KeyboardEventContext, includeModifiers?: boolean): string;
    /**
     * Given a standardized pressed key, find all matching registered Keybind Actions.
     * @param {KeyboardEventContext} context  A standardized keyboard event context
     * @return {KeybindingAction[]}           The matched Keybind Actions. May be empty.
     * @internal
     */
    static _getMatchingActions(context: KeyboardEventContext): KeybindingAction[];
    /**
     * Test whether a keypress context matches the registration for a keybinding action
     * @param {KeybindingAction} action             The keybinding action
     * @param {KeyboardEventContext} context        The keyboard event context
     * @returns {boolean}                           Does the context match the action requirements?
     * @protected
     */
    protected static _testContext(action: KeybindingAction, context: KeyboardEventContext): boolean;
    /**
     * Given a registered Keybinding Action, executes the action with a given event and context
     *
     * @param {KeybindingAction} keybind         The registered Keybinding action to execute
     * @param {KeyboardEventContext} context     The gathered context of the event
     * @return {boolean}                         Returns true if the keybind was consumed
     * @protected
     */
    protected static _executeKeybind(keybind: KeybindingAction, context: KeyboardEventContext): boolean;
    /**
     * Begin listening to keyboard events.
     * @internal
     */
    _activateListeners(): void;
    /**
     * The set of key codes which are currently depressed (down)
     * @type {Set<string>}
     */
    downKeys: Set<string>;
    /**
     * The set of movement keys which were recently pressed
     * @type {Set<string>}
     */
    moveKeys: Set<string>;
    /**
     * Test whether an HTMLElement currently has focus.
     * If so we normally don't want to process keybinding actions.
     * @type {boolean}
     */
    get hasFocus(): boolean;
    /**
     * Report whether a modifier in KeyboardManager.MODIFIER_KEYS is currently actively depressed.
     * @param {string} modifier     A modifier in MODIFIER_KEYS
     * @returns {boolean}           Is this modifier key currently down (active)?
     */
    isModifierActive(modifier: string): boolean;
    /**
     * Processes a keyboard event context, checking it against registered keybinding actions
     * @param {KeyboardEventContext} context   The keyboard event context
     * @param {object} [options]               Additional options to configure behavior.
     * @param {boolean} [options.force=false]  Force the event to be handled.
     * @protected
     */
    protected _processKeyboardContext(context: KeyboardEventContext, { force }?: {
        force?: boolean;
    }): void;
    /**
     * Reset tracking for which keys are in the down and released states
     * @protected
     */
    protected _reset(): void;
    /**
     * Emulate a key-up event for any currently down keys. When emulating, we go backwards such that combinations such as
     * "CONTROL + S" emulate the "S" first in order to capture modifiers.
     * @param {object} [options]              Options to configure behavior.
     * @param {boolean} [options.force=true]  Force the keyup events to be handled.
     */
    releaseKeys({ force }?: {
        force?: boolean;
    }): void;
    /**
     * Handle a key press into the down position
     * @param {KeyboardEvent} event   The originating keyboard event
     * @param {boolean} up            A flag for whether the key is down or up
     * @protected
     */
    protected _handleKeyboardEvent(event: KeyboardEvent, up: boolean): void;
    /**
     * Input events do not fire with isComposing = false at the end of a composition event in Chrome
     * See: https://github.com/w3c/uievents/issues/202
     * @param {CompositionEvent} event
     */
    _onCompositionEnd(event: CompositionEvent): void;
    /**
     * Release any down keys when focusing a form element.
     * @param {FocusEvent} event  The focus event.
     * @protected
     */
    protected _onFocusIn(event: FocusEvent): void;
}
/**
 * Allowed modifier keys
 */
type MODIFIER_KEYS = string;
/**
 * Track which KeyboardEvent#code presses associate with each modifier
 */
type MODIFIER_CODES = string[];
