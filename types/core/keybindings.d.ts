/**
 * A class responsible for managing defined game keybinding.
 * Each keybinding is a string key/value pair belonging to a certain namespace and a certain store scope.
 *
 * When Foundry Virtual Tabletop is initialized, a singleton instance of this class is constructed within the global
 * Game object as as game.keybindings.
 *
 * @see {@link Game#keybindings}
 * @see {@link SettingKeybindingConfig}
 * @see {@link KeybindingsConfig}
 */
declare class ClientKeybindings {
    static MOVEMENT_DIRECTIONS: {
        UP: string;
        LEFT: string;
        DOWN: string;
        RIGHT: string;
    };
    static ZOOM_DIRECTIONS: {
        IN: string;
        OUT: string;
    };
    /**
     * A helper method that, when given a value, ensures that the returned value is a standardized Binding array
     * @param {KeybindingActionBinding[]} values  An array of keybinding assignments to be validated
     * @returns {KeybindingActionBinding[]}       An array of keybinding assignments confirmed as valid
     * @private
     */
    private static _validateBindings;
    /**
     * Validate that assigned modifiers are allowed
     * @param {string[]} keys           An array of modifiers which may be valid
     * @returns {string[]}              An array of modifiers which are confirmed as valid
     * @private
     */
    private static _validateModifiers;
    /**
     * Compares two Keybinding Actions based on their Order
     * @param {KeybindingAction} a   The first Keybinding Action
     * @param {KeybindingAction} b   the second Keybinding Action
     * @returns {number}
     * @internal
     */
    static _compareActions(a: KeybindingAction, b: KeybindingAction): number;
    /**
     * Handle Select all action
     * @param {KeyboardEvent} event             The originating keyboard event
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onSelectAllObjects;
    /**
     * Handle Cycle View actions
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onCycleView;
    /**
     * Handle Dismiss actions
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onDismiss;
    /**
     * Open Character sheet for current token or controlled actor
     * @param {KeyboardEvent} event             The initiating keyboard event
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onToggleCharacterSheet;
    /**
     * Handle action to target the currently hovered token.
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onTarget;
    /**
     * Handle DELETE Keypress Events
     * @param {KeyboardEvent} event             The originating keyboard event
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onDelete;
    /**
     * Handle Measured Ruler Movement Action
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onMeasuredRulerMovement;
    /**
     * Handle Pause Action
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onPause;
    /**
     * Handle Highlight action
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onHighlight;
    /**
     * Handle Macro executions
     * @param {KeyboardEventContext} context  The context data of the event
     * @param {number} number                 The numbered macro slot to execute
     * @private
     */
    private static _onMacroExecute;
    /**
     * Handle Macro page swaps
     * @param {KeyboardEventContext} context    The context data of the event
     * @param {number} page                     The numbered macro page to activate
     * @private
     */
    private static _onMacroPageSwap;
    /**
     * Handle action to copy data to clipboard
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onCopy;
    /**
     * Handle Paste action
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onPaste;
    /**
     * Handle Undo action
     * @param {KeyboardEventContext} context    The context data of the event
     * @private
     */
    private static _onUndo;
    /**
     * Handle presses to keyboard zoom keys
     * @param {KeyboardEventContext} context                    The context data of the event
     * @param {ClientKeybindings.ZOOM_DIRECTIONS} zoomDirection The direction to zoom
     * @private
     */
    private static _onZoom;
    /**
     * Bring the chat window into view and focus the input
     * @param {KeyboardEventContext} context    The context data of the event
     * @returns {boolean}
     * @private
     */
    private static _onFocusChat;
    /**
     * Registered Keybinding actions
     * @type {Map<string, KeybindingActionConfig>}
     */
    actions: Map<string, KeybindingActionConfig>;
    /**
     * A mapping of a string key to possible Actions that might execute off it
     * @type {Map<string, KeybindingAction[]>}
     */
    activeKeys: Map<string, KeybindingAction[]>;
    /**
     * A stored cache of Keybind Actions Ids to Bindings
     * @type {Map<string, KeybindingActionBinding[]>}
     */
    bindings: Map<string, KeybindingActionBinding[]>;
    /**
     * A count of how many registered keybindings there are
     * @type {number}
     * @private
     */
    private _registered;
    /**
     * A timestamp which tracks the last time a pan operation was performed
     * @type {number}
     * @private
     */
    private _moveTime;
    /**
     * An alias of the movement key set tracked by the keyboard
     * @returns {Set<string>}>
     */
    get moveKeys(): Set<string>;
    /**
     * Initializes the keybinding values for all registered actions
     */
    initialize(): void;
    /**
     * Register a new keybinding
     *
     * @param {string} namespace                  The namespace the Keybinding Action belongs to
     * @param {string} action                     A unique machine-readable id for the Keybinding Action
     * @param {KeybindingActionConfig} data       Configuration for keybinding data
     *
     * @example Define a keybinding which shows a notification
     * ```js
     * game.keybindings.register("myModule", "showNotification", {
     *   name: "My Settings Keybinding",
     *   hint: "A description of what will occur when the Keybinding is executed.",
     *   uneditable: [
     *     {
     *       key: "Digit1",
     *       modifiers: ["Control"]
     *     }
     *   ],
     *   editable: [
     *     {
     *       key: "F1"
     *     }
     *   ],
     *   onDown: () => { ui.notifications.info("Pressed!") },
     *   onUp: () => {},
     *   restricted: true,             // Restrict this Keybinding to gamemaster only?
     *   reservedModifiers: ["Alt""],  // On ALT, the notification is permanent instead of temporary
     *   precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
     * }
     * ```
     */
    register(namespace: string, action: string, data: KeybindingActionConfig): void;
    /**
     * Get the current Bindings of a given namespace's Keybinding Action
     *
     * @param {string} namespace   The namespace under which the setting is registered
     * @param {string} action      The keybind action to retrieve
     * @returns {KeybindingActionBinding[]}
     *
     * @example Retrieve the current Keybinding Action Bindings
     * ```js
     * game.keybindings.get("myModule", "showNotification");
     * ```
     */
    get(namespace: string, action: string): KeybindingActionBinding[];
    /**
     * Set the editable Bindings of a Keybinding Action for a certain namespace and Action
     *
     * @param {string} namespace                    The namespace under which the Keybinding is registered
     * @param {string} action                       The Keybinding action to set
     * @param {KeybindingActionBinding[]} bindings  The Bindings to assign to the Keybinding
     *
     * @example Update the current value of a keybinding
     * ```js
     * game.keybindings.set("myModule", "showNotification", [
     *     {
     *       key: "F2",
     *       modifiers: [ "CONTROL" ]
     *     }
     * ]);
     * ```
     */
    set(namespace: string, action: string, bindings: KeybindingActionBinding[]): Promise<any>;
    /**
     * Reset all client keybindings back to their default configuration.
     */
    resetDefaults(): Promise<any>;
    /**
     * Register core keybindings
     */
    _registerCoreKeybindings(): void;
    /**
     * Handle keyboard movement once a small delay has elapsed to allow for multiple simultaneous key-presses.
     * @param {KeyboardEventContext} context        The context data of the event
     * @param {InteractionLayer} layer              The active InteractionLayer instance
     * @private
     */
    private _handleMovement;
    /**
     * Handle panning the canvas using CTRL + directional keys
     */
    _handleCanvasPan(): any;
    /**
     * Handle Pan action
     * @param {KeyboardEventContext} context          The context data of the event
     * @param {string[]} movementDirections           The Directions being panned in
     * @private
     */
    private _onPan;
}
