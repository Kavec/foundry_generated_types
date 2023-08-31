/**
 * An interface and API for constructing and evaluating dice rolls.
 * The basic structure for a dice roll is a string formula and an object of data against which to parse it.
 *
 * @param {string} formula    The string formula to parse
 * @param {object} data       The data object against which to parse attributes within the formula
 *
 * @example Attack with advantage
 * ```js
 * // Construct the Roll instance
 * let r = new Roll("2d20kh + @prof + @strMod", {prof: 2, strMod: 4});
 *
 * // The parsed terms of the roll formula
 * console.log(r.terms);    // [Die, OperatorTerm, NumericTerm, OperatorTerm, NumericTerm]
 *
 * // Execute the roll
 * await r.evaluate();
 *
 * // The resulting equation after it was rolled
 * console.log(r.result);   // 16 + 2 + 4
 *
 * // The total resulting from the roll
 * console.log(r.total);    // 22
 * ```
 */
declare class Roll {
    /**
     * A Proxy environment for safely evaluating a string using only available Math functions
     * @type {Math}
     */
    static MATH_PROXY: Math;
    /**
     * The HTML template path used to render a complete Roll object to the chat log
     * @type {string}
     */
    static CHAT_TEMPLATE: string;
    /**
     * The HTML template used to render an expanded Roll tooltip to the chat log
     * @type {string}
     */
    static TOOLTIP_TEMPLATE: string;
    /**
     * A factory method which constructs a Roll instance using the default configured Roll class.
     * @param {string} formula        The formula used to create the Roll instance
     * @param {object} [data={}]      The data object which provides component data for the formula
     * @param {object} [options={}]   Additional options which modify or describe this Roll
     * @returns {Roll}                The constructed Roll instance
     */
    static create(formula: string, data?: object, options?: object): Roll;
    /**
     * Get the default configured Roll class.
     * @returns {typeof Roll}
     */
    static get defaultImplementation(): typeof Roll;
    /**
     * Transform an array of RollTerm objects into a cleaned string formula representation.
     * @param {RollTerm[]} terms      An array of terms to represent as a formula
     * @returns {string}              The string representation of the formula
     */
    static getFormula(terms: RollTerm[]): string;
    /**
     * A sandbox-safe evaluation function to execute user-input code with access to scoped Math methods.
     * @param {string} expression   The input string expression
     * @returns {number}            The numeric evaluated result
     */
    static safeEval(expression: string): number;
    /**
     * After parenthetical and arithmetic terms have been resolved, we need to simplify the remaining expression.
     * Any remaining string terms need to be combined with adjacent non-operators in order to construct parsable terms.
     * @param {RollTerm[]} terms      An array of terms which is eligible for simplification
     * @returns {RollTerm[]}          An array of simplified terms
     */
    static simplifyTerms(terms: RollTerm[]): RollTerm[];
    /**
     * Simulate a roll and evaluate the distribution of returned results
     * @param {string} formula      The Roll expression to simulate
     * @param {number} n            The number of simulations
     * @returns {Promise<number[]>} The rolled totals
     */
    static simulate(formula: string, n?: number): Promise<number[]>;
    /**
     * Parse a formula by following an order of operations:
     *
     * Step 1: Replace formula data
     * Step 2: Split outer-most parenthetical groups
     * Step 3: Further split outer-most dice pool groups
     * Step 4: Further split string terms on arithmetic operators
     * Step 5: Classify all remaining strings
     *
     * @param {string} formula      The original string expression to parse
     * @param {object} data         A data object used to substitute for attributes in the formula
     * @returns {RollTerm[]}        A parsed array of RollTerm instances
     */
    static parse(formula: string, data: object): RollTerm[];
    /**
     * Replace referenced data attributes in the roll formula with values from the provided data.
     * Data references in the formula use the @attr syntax and would reference the corresponding attr key.
     *
     * @param {string} formula          The original formula within which to replace
     * @param {object} data             The data object which provides replacements
     * @param {object} [options]        Options which modify formula replacement
     * @param {string} [options.missing]      The value that should be assigned to any unmatched keys.
     *                                        If null, the unmatched key is left as-is.
     * @param {boolean} [options.warn=false]  Display a warning notification when encountering an un-matched key.
     * @static
     */
    static replaceFormulaData(formula: string, data: object, { missing, warn }?: {
        missing?: string;
        warn?: boolean;
    }): string;
    /**
     * Validate that a provided roll formula can represent a valid
     * @param {string} formula    A candidate formula to validate
     * @returns {boolean}         Is the provided input a valid dice formula?
     */
    static validate(formula: string): boolean;
    /**
     * Split a formula by identifying its outer-most parenthetical and math terms
     * @param {string} _formula      The raw formula to split
     * @returns {string[]}          An array of terms, split on parenthetical terms
     * @protected
     */
    protected static _splitParentheses(_formula: string): string[];
    /**
     * Handle closing of a parenthetical term to create a MathTerm expression with a function and arguments
     * @param {string} expression   The expression to split
     * @returns {MathTerm[]}        An array of evaluated MathTerm instances
     * @protected
     */
    protected static _splitMathArgs(expression: string): MathTerm[];
    /**
     * Split a formula by identifying its outermost dice pool terms.
     * @param {string} _formula      The raw formula to split
     * @returns {string[]}          An array of terms, split on parenthetical terms
     * @protected
     */
    protected static _splitPools(_formula: string): string[];
    /**
     * Split a formula by identifying its outermost groups using a certain group symbol like parentheses or brackets.
     * @param {string} _formula     The raw formula to split
     * @param {object} options      Options that configure how groups are split
     * @param {RegExp} [options.openRegexp]   A regular expression that identifies opening groups
     * @param {RegExp} [options.closeRegexp]  A regular expression that identifies closing groups
     * @param {string} [options.openSymbol]   The string symbol that opens a group
     * @param {string} [options.closeSymbol]  The string symbol that closes a group
     * @param {Function} [options.onClose]    A callback function invoked when a group is closed
     * @returns {string[]}          An array of terms, split on dice pool terms
     * @protected
     */
    protected static _splitGroup(_formula: string, { openRegexp, closeRegexp, openSymbol, closeSymbol, onClose }?: {
        openRegexp?: RegExp;
        closeRegexp?: RegExp;
        openSymbol?: string;
        closeSymbol?: string;
        onClose?: Function;
    }): string[];
    /**
     * Split a formula by identifying arithmetic terms
     * @param {string} _formula                 The raw formula to split
     * @returns {Array<(string|OperatorTerm)>}  An array of terms, split on arithmetic operators
     * @protected
     */
    protected static _splitOperators(_formula: string): Array<(string | OperatorTerm)>;
    /**
     * Temporarily remove flavor text from a string formula allowing it to be accurately parsed.
     * @param {string} formula                        The formula to extract
     * @returns {{formula: string, flavors: object}}  The cleaned formula and extracted flavor mapping
     * @protected
     */
    protected static _extractFlavors(formula: string): {
        formula: string;
        flavors: object;
    };
    /**
     * Restore flavor text to a string term
     * @param {string} term             The string term possibly containing flavor symbols
     * @param {Object<string>} flavors  The extracted flavors object
     * @returns {string}                The restored term containing flavor text
     * @protected
     */
    protected static _restoreFlavor(term: string, flavors: any): string;
    /**
     * Classify a remaining string term into a recognized RollTerm class
     * @param {string} term         A remaining un-classified string
     * @param {object} [options={}] Options which customize classification
     * @param {boolean} [options.intermediate=true]  Allow intermediate terms
     * @param {RollTerm|string} [options.prior]       The prior classified term
     * @param {RollTerm|string} [options.next]        The next term to classify
     * @returns {RollTerm}          A classified RollTerm instance
     * @internal
     */
    static _classifyStringTerm(term: string, { intermediate, prior, next }?: {
        intermediate?: boolean;
        prior?: RollTerm | string;
        next?: RollTerm | string;
    }): RollTerm;
    /**
     * Expand an inline roll element to display its contained dice result as a tooltip.
     * @param {HTMLAnchorElement} a     The inline-roll button
     * @returns {Promise<void>}
     */
    static expandInlineResult(a: HTMLAnchorElement): Promise<void>;
    /**
     * Collapse an expanded inline roll to conceal its tooltip.
     * @param {HTMLAnchorElement} a     The inline-roll button
     */
    static collapseInlineResult(a: HTMLAnchorElement): void;
    /**
     * Recreate a Roll instance using a provided data object
     * @param {object} data   Unpacked data representing the Roll
     * @returns {Roll}         A reconstructed Roll instance
     */
    static fromData(data: object): Roll;
    /**
     * Recreate a Roll instance using a provided JSON string
     * @param {string} json   Serialized JSON data representing the Roll
     * @returns {Roll}        A reconstructed Roll instance
     */
    static fromJSON(json: string): Roll;
    /**
     * Manually construct a Roll object by providing an explicit set of input terms
     * @param {RollTerm[]} terms      The array of terms to use as the basis for the Roll
     * @param {object} [options={}]   Additional options passed to the Roll constructor
     * @returns {Roll}                The constructed Roll instance
     *
     * @example Construct a Roll instance from an array of component terms
     * ```js
     * const t1 = new Die({number: 4, faces: 8};
     * const plus = new OperatorTerm({operator: "+"});
     * const t2 = new NumericTerm({number: 8});
     * const roll = Roll.fromTerms([t1, plus, t2]);
     * roll.formula; // 4d8 + 8
     * ```
     */
    static fromTerms(terms: RollTerm[], options?: object): Roll;
    constructor(formula: any, data?: {}, options?: {});
    /**
     * The original provided data object which substitutes into attributes of the roll formula
     * @type {Object}
     */
    data: any;
    /**
     * Options which modify or describe the Roll
     * @type {object}
     */
    options: object;
    /**
     * The identified terms of the Roll
     * @type {RollTerm[]}
     */
    terms: RollTerm[];
    /**
     * An array of inner DiceTerms which were evaluated as part of the Roll evaluation
     * @type {DiceTerm[]}
     */
    _dice: DiceTerm[];
    /**
     * Store the original cleaned formula for the Roll, prior to any internal evaluation or simplification
     * @type {string}
     */
    _formula: string;
    /**
     * Track whether this Roll instance has been evaluated or not. Once evaluated the Roll is immutable.
     * @type {boolean}
     */
    _evaluated: boolean;
    /**
     * Cache the numeric total generated through evaluation of the Roll.
     * @type {number}
     * @protected
     */
    protected _total: number;
    /**
     * Prepare the data structure used for the Roll.
     * This is factored out to allow for custom Roll classes to do special data preparation using provided input.
     * @param {object} data   Provided roll data
     * @returns {object}      The prepared data object
     * @protected
     */
    protected _prepareData(data: object): object;
    /**
     * Return an Array of the individual DiceTerm instances contained within this Roll.
     * @type {DiceTerm[]}
     */
    get dice(): DiceTerm[];
    /**
     * Return a standardized representation for the displayed formula associated with this Roll.
     * @type {string}
     */
    get formula(): string;
    /**
     * The resulting arithmetic expression after rolls have been evaluated
     * @type {string}
     */
    get result(): string;
    /**
     * Return the total result of the Roll expression if it has been evaluated.
     * @type {number}
     */
    get total(): number;
    /**
     * Whether this Roll contains entirely deterministic terms or whether there is some randomness.
     * @type {boolean}
     */
    get isDeterministic(): boolean;
    /**
     * Alter the Roll expression by adding or multiplying the number of dice which are rolled
     * @param {number} multiply   A factor to multiply. Dice are multiplied before any additions.
     * @param {number} add        A number of dice to add. Dice are added after multiplication.
     * @param {boolean} [multiplyNumeric]  Apply multiplication factor to numeric scalar terms
     * @returns {Roll}            The altered Roll expression
     */
    alter(multiply: number, add: number, { multiplyNumeric }?: boolean): Roll;
    /**
     * Clone the Roll instance, returning a new Roll instance that has not yet been evaluated.
     * @returns {Roll}
     */
    clone(): Roll;
    /**
     * Execute the Roll, replacing dice and evaluating the total result
     * @param {object} [options={}]     Options which inform how the Roll is evaluated
     * @param {boolean} [options.minimize=false]    Minimize the result, obtaining the smallest possible value.
     * @param {boolean} [options.maximize=false]    Maximize the result, obtaining the largest possible value.
     * @param {boolean} [options.async=true]        Evaluate the roll asynchronously. false is deprecated
     * @returns {Roll|Promise<Roll>}    The evaluated Roll instance
     *
     * @example Evaluate a Roll expression
     * ```js
     * let r = new Roll("2d6 + 4 + 1d4");
     * await r.evaluate();
     * console.log(r.result); // 5 + 4 + 2
     * console.log(r.total);  // 11
     * ```
     */
    evaluate({ minimize, maximize, async }?: {
        minimize?: boolean;
        maximize?: boolean;
        async?: boolean;
    }): Roll | Promise<Roll>;
    /**
     * Evaluate the roll asynchronously.
     * A temporary helper method used to migrate behavior from 0.7.x (sync by default) to 0.9.x (async by default).
     * @param {object} [options]      Options which inform how evaluation is performed
     * @param {boolean} [options.minimize]    Force the result to be minimized
     * @param {boolean} [options.maximize]    Force the result to be maximized
     * @returns {Promise<Roll>}
     * @protected
     */
    protected _evaluate({ minimize, maximize }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): Promise<Roll>;
    /**
     * Evaluate the roll synchronously.
     * A temporary helper method used to migrate behavior from 0.7.x (sync by default) to 0.9.x (async by default).
     * @param {object} [options]      Options which inform how evaluation is performed
     * @param {boolean} [options.minimize]    Force the result to be minimized
     * @param {boolean} [options.maximize]    Force the result to be maximized
     * @returns {Roll}
     * @protected
     */
    protected _evaluateSync({ minimize, maximize }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): Roll;
    /**
     * Safely evaluate the final total result for the Roll using its component terms.
     * @returns {number}    The evaluated total
     * @protected
     */
    protected _evaluateTotal(): number;
    /**
     * Alias for evaluate.
     * @param {object} options    Options passed to Roll#evaluate
     * @see {Roll#evaluate}
     */
    roll(options?: object): Roll | Promise<Roll>;
    /**
     * Create a new Roll object using the original provided formula and data.
     * Each roll is immutable, so this method returns a new Roll instance using the same data.
     * @param {object} [options={}]     Evaluation options passed to Roll#evaluate
     * @returns {Roll}                  A new Roll object, rolled using the same formula and data
     */
    reroll(options?: object): Roll;
    /**
     * Recompile the formula string that represents this Roll instance from its component terms.
     * @returns {string}                The re-compiled formula
     */
    resetFormula(): string;
    /**
     * Render the tooltip HTML for a Roll instance
     * @returns {Promise<string>}     The rendered HTML tooltip as a string
     */
    getTooltip(): Promise<string>;
    /**
     * Render a Roll instance to HTML
     * @param {object} [options={}]               Options which affect how the Roll is rendered
     * @param {string} [options.flavor]             Flavor text to include
     * @param {string} [options.template]           A custom HTML template path
     * @param {boolean} [options.isPrivate=false]   Is the Roll displayed privately?
     * @returns {Promise<string>}                 The rendered HTML template as a string
     */
    render({ flavor, template, isPrivate }?: {
        flavor?: string;
        template?: string;
        isPrivate?: boolean;
    }): Promise<string>;
    /**
     * Transform a Roll instance into a ChatMessage, displaying the roll result.
     * This function can either create the ChatMessage directly, or return the data object that will be used to create.
     *
     * @param {object} messageData          The data object to use when creating the message
     * @param {options} [options]           Additional options which modify the created message.
     * @param {string} [options.rollMode]   The template roll mode to use for the message from CONFIG.Dice.rollModes
     * @param {boolean} [options.create=true]   Whether to automatically create the chat message, or only return the
     *                                          prepared chatData object.
     * @returns {Promise<ChatMessage|object>} A promise which resolves to the created ChatMessage document if create is
     *                                        true, or the Object of prepared chatData otherwise.
     */
    toMessage(messageData?: object, { rollMode, create }?: options): Promise<ChatMessage | object>;
    /**
     * Construct an inline roll link for this Roll.
     * @param {object} [options]                  Additional options to configure how the link is constructed.
     * @param {string} [options.label]            A custom label for the total.
     * @param {object<string>} [options.attrs]    Attributes to set on the link.
     * @param {object<string>} [options.dataset]  Custom data attributes to set on the link.
     * @param {string[]} [options.classes]        Additional classes to add to the link. The classes `inline-roll`
     *                                            and `inline-result` are added by default.
     * @param {string} [options.icon]             A font-awesome icon class to use as the icon instead of a d20.
     * @returns {HTMLAnchorElement}
     */
    toAnchor({ attrs, dataset, classes, label, icon }?: {
        label?: string;
    }): HTMLAnchorElement;
    /**
     * Represent the data of the Roll as an object suitable for JSON serialization.
     * @returns {object}     Structured data which can be serialized into JSON
     */
    toJSON(): object;
}
