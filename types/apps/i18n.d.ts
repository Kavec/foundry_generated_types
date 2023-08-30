/**
 * A helper class which assists with localization and string translation
 * @param {string} serverLanguage       The default language configuration setting for the server
 */
declare class Localization {
    constructor(serverLanguage: any);
    /**
     * The target language for localization
     * @type {string}
     */
    lang: string;
    /**
     * The package authorized to provide default language configurations
     * @type {string}
     */
    defaultModule: string;
    /**
     * The translation dictionary for the target language
     * @type {Object}
     */
    translations: any;
    /**
     * Fallback translations if the target keys are not found
     * @type {Object}
     */
    _fallback: any;
    /**
     * Initialize the Localization module
     * Discover available language translations and apply the current language setting
     * @returns {Promise<void>}      A Promise which resolves once languages are initialized
     */
    initialize(): Promise<void>;
    /**
     * Set a language as the active translation source for the session
     * @param {string} lang       A language string in CONFIG.supportedLanguages
     * @returns {Promise<void>}   A Promise which resolves once the translations for the requested language are ready
     */
    setLanguage(lang: string): Promise<void>;
    /**
     * Discover the available supported languages from the set of packages which are provided
     * @returns {object}         The resulting configuration of supported languages
     * @private
     */
    private _discoverSupportedLanguages;
    /**
     * Prepare the dictionary of translation strings for the requested language
     * @param {string} lang         The language for which to load translations
     * @returns {Promise<object>}   The retrieved translations object
     * @private
     */
    private _getTranslations;
    /**
     * Reduce the languages array provided by a package to an array of file paths of translations to load
     * @param {object} pkg          The package data
     * @param {string} lang         The target language to filter on
     * @returns {string[]}           An array of translation file paths
     * @private
     */
    private _filterLanguagePaths;
    /**
     * Load a single translation file and return its contents as processed JSON
     * @param {string} src        The translation file path to load
     * @returns {Promise<object>} The loaded translation dictionary
     * @private
     */
    private _loadTranslationFile;
    /**
     * Return whether a certain string has a known translation defined.
     * @param {string} stringId     The string key being translated
     * @param {boolean} [fallback]  Allow fallback translations to count?
     * @returns {boolean}
     */
    has(stringId: string, fallback?: boolean): boolean;
    /**
     * Localize a string by drawing a translation from the available translations dictionary, if available
     * If a translation is not available, the original string is returned
     * @param {string} stringId     The string ID to translate
     * @returns {string}             The translated string
     *
     * @example Localizing a simple string in JavaScript
     * ```js
     * {
     *   "MYMODULE.MYSTRING": "Hello, this is my module!"
     * }
     * game.i18n.localize("MYMODULE.MYSTRING"); // Hello, this is my module!
     * ```
     *
     * @example Localizing a simple string in Handlebars
     * ```hbs
     * {{localize "MYMODULE.MYSTRING"}} <!-- Hello, this is my module! -->
     * ```
     */
    localize(stringId: string): string;
    /**
     * Localize a string including variable formatting for input arguments.
     * Provide a string ID which defines the localized template.
     * Variables can be included in the template enclosed in braces and will be substituted using those named keys.
     *
     * @param {string} stringId     The string ID to translate
     * @param {object} data         Provided input data
     * @returns {string}             The translated and formatted string
     *
     * @example Localizing a formatted string in JavaScript
     * ```js
     * {
     *   "MYMODULE.GREETING": "Hello {name}, this is my module!"
     * }
     * game.i18n.format("MYMODULE.GREETING" {name: "Andrew"}); // Hello Andrew, this is my module!
     * ```
     *
     * @example Localizing a formatted string in Handlebars
     * ```hbs
     * {{localize "MYMODULE.GREETING" name="Andrew"}} <!-- Hello, this is my module! -->
     * ```
     */
    format(stringId: string, data?: object): string;
    /**
     * Retrieve list formatter configured to the world's language setting.
     * @see [Intl.ListFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat)
     * @param {object} [options]
     * @param {ListFormatStyle} [options.style=long]       The list formatter style, either "long", "short", or "narrow".
     * @param {ListFormatType} [options.type=conjunction]  The list formatter type, either "conjunction", "disjunction",
     *                                                     or "unit".
     * @returns {Intl.ListFormat}
     */
    getListFormatter({ style, type }?: {
        style?: ListFormatStyle;
        type?: ListFormatType;
    }): Intl.ListFormat;
    /**
     * Sort an array of objects by a given key in a localization-aware manner.
     * @param {object[]} objects  The objects to sort, this array will be mutated.
     * @param {string} key        The key to sort the objects by. This can be provided in dot-notation.
     * @returns {object[]}
     */
    sortObjects(objects: object[], key: string): object[];
    #private;
}
