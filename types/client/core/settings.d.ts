/**
 * A class responsible for managing defined game settings or settings menus.
 * Each setting is a string key/value pair belonging to a certain namespace and a certain store scope.
 *
 * When Foundry Virtual Tabletop is initialized, a singleton instance of this class is constructed within the global
 * Game object as game.settings.
 *
 * @see {@link Game#settings}
 * @see {@link Settings}
 * @see {@link SettingsConfig}
 */
declare class ClientSettings {
    constructor(worldSettings: any);
    /**
     * A object of registered game settings for this scope
     * @type {Map<string, SettingsConfig>}
     */
    settings: Map<string, SettingsConfig>;
    /**
     * Registered settings menus which trigger secondary applications
     * @type {Map}
     */
    menus: Map<any, any>;
    /**
     * The storage interfaces used for persisting settings
     * Each storage interface shares the same API as window.localStorage
     */
    storage: Map<any, any>;
    /**
     * Return a singleton instance of the Game Settings Configuration app
     * @returns {SettingsConfig}
     */
    get sheet(): SettingsConfig;
    _sheet: SettingsConfig;
    /**
     * Register a new game setting under this setting scope
     *
     * @param {string} namespace    The namespace under which the setting is registered
     * @param {string} key          The key name for the setting under the namespace
     * @param {SettingConfig} data  Configuration for setting data
     *
     * @example Register a client setting
     * ```js
     * game.settings.register("myModule", "myClientSetting", {
     *   name: "Register a Module Setting with Choices",
     *   hint: "A description of the registered setting and its behavior.",
     *   scope: "client",     // This specifies a client-stored setting
     *   config: true,        // This specifies that the setting appears in the configuration view
     *   requiresReload: true // This will prompt the user to reload the application for the setting to take effect.
     *   type: String,
     *   choices: {           // If choices are defined, the resulting setting will be a select menu
     *     "a": "Option A",
     *     "b": "Option B"
     *   },
     *   default: "a",        // The default value for the setting
     *   onChange: value => { // A callback function which triggers when the setting is changed
     *     console.log(value)
     *   }
     * });
     * ```
     *
     * @example Register a world setting
     * ```js
     * game.settings.register("myModule", "myWorldSetting", {
     *   name: "Register a Module Setting with a Range slider",
     *   hint: "A description of the registered setting and its behavior.",
     *   scope: "world",      // This specifies a world-level setting
     *   config: true,        // This specifies that the setting appears in the configuration view
     *   requiresReload: true // This will prompt the GM to have all clients reload the application for the setting to
     *                        // take effect.
     *   type: Number,
     *   range: {             // If range is specified, the resulting setting will be a range slider
     *     min: 0,
     *     max: 100,
     *     step: 10
     *   }
     *   default: 50,         // The default value for the setting
     *   onChange: value => { // A callback function which triggers when the setting is changed
     *     console.log(value)
     *   }
     * });
     * ```
     */
    register(namespace: string, key: string, data: SettingConfig): void;
    /**
     * Register a new sub-settings menu
     *
     * @param {string} namespace           The namespace under which the menu is registered
     * @param {string} key                 The key name for the setting under the namespace
     * @param {SettingSubmenuConfig} data  Configuration for setting data
     *
     * @example Define a settings submenu which handles advanced configuration needs
     * ```js
     * game.settings.registerMenu("myModule", "mySettingsMenu", {
     *   name: "My Settings Submenu",
     *   label: "Settings Menu Label",      // The text label used in the button
     *   hint: "A description of what will occur in the submenu dialog.",
     *   icon: "fas fa-bars",               // A Font Awesome icon used in the submenu button
     *   type: MySubmenuApplicationClass,   // A FormApplication subclass which should be created
     *   restricted: true                   // Restrict this submenu to gamemaster only?
     * });
     * ```
     */
    registerMenu(namespace: string, key: string, data: SettingSubmenuConfig): void;
    /**
     * Get the value of a game setting for a certain namespace and setting key
     *
     * @param {string} namespace   The namespace under which the setting is registered
     * @param {string} key         The setting key to retrieve
     *
     * @example Retrieve the current setting value
     * ```js
     * game.settings.get("myModule", "myClientSetting");
     * ```
     */
    get(namespace: string, key: string): any;
    /**
     * Set the value of a game setting for a certain namespace and setting key
     *
     * @param {string} namespace    The namespace under which the setting is registered
     * @param {string} key          The setting key to retrieve
     * @param {*} value             The data to assign to the setting key
     * @param {object} [options]    Additional options passed to the server when updating world-scope settings
     * @returns {*}                 The assigned setting value
     *
     * @example Update the current value of a setting
     * ```js
     * game.settings.set("myModule", "myClientSetting", "b");
     * ```
     */
    set(namespace: string, key: string, value: any, options?: object): any;
    #private;
}
