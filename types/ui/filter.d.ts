/**
 * @typedef {object} SearchFilterConfiguration
 * @property {object} options          Options which customize the behavior of the filter
 * @property {string} options.inputSelector    The CSS selector used to target the text input element.
 * @property {string} options.contentSelector  The CSS selector used to target the content container for these tabs.
 * @property {Function} options.callback       A callback function which executes when the filter changes.
 * @property {string} [options.initial]        The initial value of the search query.
 * @property {number} [options.delay=200]      The number of milliseconds to wait for text input before processing.
 */
/**
 * @typedef {object} FieldFilter
 * @property {string} field                                     The dot-delimited path to the field being filtered
 * @property {string} [operator=SearchFilter.OPERATORS.EQUALS]  The search operator, from CONST.OPERATORS
 * @property {boolean} negate                                   Negate the filter, returning results which do NOT match the filter criteria
 * @property {*} value                                          The value against which to test
 */
/**
 * A controller class for managing a text input widget that filters the contents of some other UI element
 * @see {@link Application}
 *
 * @param {SearchFilterConfiguration}
 */
declare class SearchFilter {
    /**
     * The allowed Filter Operators which can be used to define a search filter
     * @enum {string}
     */
    static OPERATORS: Readonly<{
        EQUALS: "equals";
        CONTAINS: "contains";
        STARTS_WITH: "starts_with";
        ENDS_WITH: "ends_with";
        LESS_THAN: "lt";
        LESS_THAN_EQUAL: "lte";
        GREATER_THAN: "gt";
        GREATER_THAN_EQUAL: "gte";
        BETWEEN: "between";
        IS_EMPTY: "is_empty";
    }>;
    /**
     * Test whether a given object matches a provided filter
     * @param {object} obj          An object to test against
     * @param {FieldFilter} filter  The filter to test
     * @returns {boolean}           Whether the object matches the filter
     */
    static evaluateFilter(obj: object, filter: FieldFilter): boolean;
    /**
     * Clean a query term to standardize it for matching.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
     * @param {string} query    An input string which may contain leading/trailing spaces or diacritics
     * @returns {string}        A cleaned string of ASCII characters for comparison
     */
    static cleanQuery(query: string): string;
    constructor({ inputSelector, contentSelector, initial, callback, delay }?: {
        inputSelector: any;
        contentSelector: any;
        initial?: string;
        callback: any;
        delay?: number;
    });
    /**
     * The value of the current query string
     * @type {string}
     */
    query: string;
    /**
     * A callback function to trigger when the tab is changed
     * @type {Function|null}
     */
    callback: Function | null;
    /**
     * The regular expression corresponding to the query that should be matched against
     * @type {RegExp}
     */
    rgx: RegExp;
    /**
     * The CSS selector used to target the tab navigation element
     * @type {string}
     */
    _inputSelector: string;
    /**
     * A reference to the HTML navigation element the tab controller is bound to
     * @type {HTMLElement|null}
     */
    _input: HTMLElement | null;
    /**
     * The CSS selector used to target the tab content element
     * @type {string}
     */
    _contentSelector: string;
    /**
     * A reference to the HTML container element of the tab content
     * @type {HTMLElement|null}
     */
    _content: HTMLElement | null;
    /**
     * A debounced function which applies the search filtering
     * @type {Function}
     */
    _filter: Function;
    /**
     * Bind the SearchFilter controller to an HTML application
     * @param {HTMLElement} html
     */
    bind(html: HTMLElement): void;
    /**
     * Perform a filtering of the content by invoking the callback function
     * @param {KeyboardEvent} event   The triggering keyboard event
     * @param {string} query          The input search string
     */
    filter(event: KeyboardEvent, query: string): void;
}
/**
 * The allowed Filter Operators which can be used to define a search filter
 */
type OPERATORS = string;
type SearchFilterConfiguration = {
    /**
     * Options which customize the behavior of the filter
     */
    options: {
        inputSelector: string;
        contentSelector: string;
        callback: Function;
        initial?: string;
        delay?: number;
    };
};
type FieldFilter = {
    /**
     * The dot-delimited path to the field being filtered
     */
    field: string;
    /**
     * The search operator, from CONST.OPERATORS
     */
    operator?: string;
    /**
     * Negate the filter, returning results which do NOT match the filter criteria
     */
    negate: boolean;
    /**
     * The value against which to test
     */
    value: any;
};
