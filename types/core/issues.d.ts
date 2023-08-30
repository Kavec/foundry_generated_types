/**
 * An object structure of document types at the top level, with a count of different sub-types for that document type.
 * @typedef {Object<Object<number>>} ModuleSubTypeCounts
 */
/**
 * A class responsible for tracking issues in the current world.
 */
declare class ClientIssues {
    /**
     * The minimum supported resolution.
     * @type {{WIDTH: number, HEIGHT: number}}
     */
    static "__#29@#MIN_RESOLUTION": {
        WIDTH: number;
        HEIGHT: number;
    };
    /**
     * @typedef {object} BrowserTest
     * @property {number} minimum  The minimum supported version for this browser.
     * @property {RegExp} match    A regular expression to match the browser against the user agent string.
     * @property {string} message  A message to display if the user's browser version does not meet the minimum.
     */
    /**
     * The minimum supported client versions.
     * @type {Object<BrowserTest>}
     */
    static "__#29@#BROWSER_TESTS": any;
    /**
     * Detect and display warnings for known performance issues which may occur due to the user's hardware or browser
     * configuration.
     * @internal
     */
    _detectWebGLIssues(): void;
    /**
     * Add an invalid Document to the module-provided sub-type counts.
     * @param {string} documentName                The Document name.
     * @param {object} source                      The Document's source data.
     * @param {object} [options]
     * @param {boolean} [options.decrement=false]  Decrement the counter rather than incrementing it.
     * @internal
     */
    _countDocumentSubType(documentName: string, source: object, options?: {
        decrement?: boolean;
    }): void;
    /**
     * Track a validation failure that occurred in a WorldCollection.
     * @param {WorldCollection} collection      The parent collection.
     * @param {object} source                   The Document's source data.
     * @param {DataModelValidationError} error  The validation error.
     * @internal
     */
    _trackValidationFailure(collection: WorldCollection, source: object, error: DataModelValidationError): void;
    /**
     * Detect and record certain usability error messages which are likely to result in the user having a bad experience.
     * @internal
     */
    _detectUsabilityIssues(): void;
    /**
     * Get the Document sub-type counts for a given module.
     * @param {Module|string} module  The module or its ID.
     * @returns {ModuleSubTypeCounts}
     */
    getSubTypeCountsFor(module: Module | string): ModuleSubTypeCounts;
    /**
     * Retrieve all sub-type counts in the world.
     * @returns {Iterator<string, ModuleSubTypeCounts>}
     */
    getAllSubTypeCounts(): Iterator<string, ModuleSubTypeCounts>;
    /**
     * Retrieve the tracked validation failures.
     * @returns {object}
     */
    get validationFailures(): any;
    /**
     * Retrieve the tracked usability issues.
     * @returns {Object<UsabilityIssue>}
     */
    get usabilityIssues(): any;
    /**
     * @typedef {object} PackageCompatibilityIssue
     * @property {string[]} error    Error messages.
     * @property {string[]} warning  Warning messages.
     */
    /**
     * Retrieve package compatibility issues.
     * @returns {Object<PackageCompatibilityIssue>}
     */
    get packageCompatibilityIssues(): any;
    #private;
}
type UsabilityIssue = {
    /**
     * The pre-localized message to display in relation to the usability issue.
     */
    message: string;
    /**
     * The severity of the issue, either "error", "warning", or "info".
     */
    severity: string;
    /**
     * Parameters to supply to the localization.
     */
    params?: object;
};
type BrowserTest = {
    /**
     * The minimum supported version for this browser.
     */
    minimum: number;
    /**
     * A regular expression to match the browser against the user agent string.
     */
    match: RegExp;
    /**
     * A message to display if the user's browser version does not meet the minimum.
     */
    message: string;
};
type PackageCompatibilityIssue = {
    /**
     * Error messages.
     */
    error: string[];
    /**
     * Warning messages.
     */
    warning: string[];
};
/**
 * An object structure of document types at the top level, with a count of different sub-types for that document type.
 */
type ModuleSubTypeCounts = any;
