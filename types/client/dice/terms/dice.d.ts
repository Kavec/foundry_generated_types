/**
 * @typedef {Object} DiceTermResult
 * @property {number} result        The numeric result
 * @property {boolean} [active]     Is this result active, contributing to the total?
 * @property {number} [count]       A value that the result counts as, otherwise the result is not used directly as
 * @property {boolean} [success]    Does this result denote a success?
 * @property {boolean} [failure]    Does this result denote a failure?
 * @property {boolean} [discarded]  Was this result discarded?
 * @property {boolean} [rerolled]   Was this result rerolled?
 * @property {boolean} [exploded]   Was this result exploded?
 */
/**
 * An abstract base class for any type of RollTerm which involves randomized input from dice, coins, or other devices.
 * @extends RollTerm
 *
 * @param {object} termData                 Data used to create the Dice Term, including the following:
 * @param {number} [termData.number=1]      The number of dice of this term to roll, before modifiers are applied
 * @param {number} termData.faces           The number of faces on each die of this type
 * @param {string[]} [termData.modifiers]   An array of modifiers applied to the results
 * @param {object[]} [termData.results]     An optional array of pre-cast results for the term
 * @param {object} [termData.options]       Additional options that modify the term
 */
declare class DiceTerm extends RollTerm {
    /**
     * Define the denomination string used to register this DiceTerm type in CONFIG.Dice.terms
     * @type {string}
     */
    static DENOMINATION: string;
    /**
     * Define the named modifiers that can be applied for this particular DiceTerm type.
     * @type {{string: (string|Function)}}
     */
    static MODIFIERS: {
        string: (string | Function);
    };
    /**
     * A regular expression pattern which captures the full set of term modifiers
     * Anything until a space, group symbol, or arithmetic operator
     * @type {string}
     */
    static MODIFIERS_REGEXP_STRING: string;
    /**
     * A regular expression used to separate individual modifiers
     * @type {RegExp}
     */
    static MODIFIER_REGEXP: RegExp;
    /**
     * A helper comparison function.
     * Returns a boolean depending on whether the result compares favorably against the target.
     * @param {number} result         The result being compared
     * @param {string} comparison     The comparison operator in [=,&lt;,&lt;=,>,>=]
     * @param {number} target         The target value
     * @return {boolean}              Is the comparison true?
     */
    static compareResult(result: number, comparison: string, target: number): boolean;
    /**
     * A helper method to modify the results array of a dice term by flagging certain results are kept or dropped.
     * @param {object[]} results      The results array
     * @param {number} number         The number to keep or drop
     * @param {boolean} [keep]        Keep results?
     * @param {boolean} [highest]     Keep the highest?
     * @return {object[]}             The modified results array
     */
    static _keepOrDrop(results: object[], number: number, { keep, highest }?: boolean): object[];
    /**
     * A reusable helper function to handle the identification and deduction of failures
     */
    static _applyCount(results: any, comparison: any, target: any, { flagSuccess, flagFailure }?: {
        flagSuccess?: boolean;
        flagFailure?: boolean;
    }): void;
    /**
     * A reusable helper function to handle the identification and deduction of failures
     */
    static _applyDeduct(results: any, comparison: any, target: any, { deductFailure, invertFailure }?: {
        deductFailure?: boolean;
        invertFailure?: boolean;
    }): void;
    /**
     * Determine whether a string expression matches this type of term
     * @param {string} expression               The expression to parse
     * @param {object} [options={}]             Additional options which customize the match
     * @param {boolean} [options.imputeNumber=true]  Allow the number of dice to be optional, i.e. "d6"
     * @return {RegExpMatchArray|null}
     */
    static matchTerm(expression: string, { imputeNumber }?: {
        imputeNumber?: boolean;
    }): RegExpMatchArray | null;
    /**
     * Construct a term of this type given a matched regular expression array.
     * @param {RegExpMatchArray} match          The matched regular expression array
     * @return {DiceTerm}                      The constructed term
     */
    static fromMatch(match: RegExpMatchArray): DiceTerm;
    constructor({ number, faces, modifiers, results, options }: {
        number?: number;
        faces?: number;
        modifiers?: any[];
        results?: any[];
        options?: {};
    });
    /**
     * The number of dice of this term to roll, before modifiers are applied
     * @type {number}
     */
    number: number;
    /**
     * The number of faces on the die
     * @type {number}
     */
    faces: number;
    /**
     * An Array of dice term modifiers which are applied
     * @type {string[]}
     */
    modifiers: string[];
    /**
     * The array of dice term results which have been rolled
     * @type {DiceTermResult[]}
     */
    results: DiceTermResult[];
    /** @inheritdoc */
    get total(): number;
    /**
     * Return an array of rolled values which are still active within this term
     * @type {number[]}
     */
    get values(): number[];
    /**
     * Alter the DiceTerm by adding or multiplying the number of dice which are rolled
     * @param {number} multiply   A factor to multiply. Dice are multiplied before any additions.
     * @param {number} add        A number of dice to add. Dice are added after multiplication.
     * @return {DiceTerm}         The altered term
     */
    alter(multiply: number, add: number): DiceTerm;
    /** @inheritdoc */
    _evaluateSync({ minimize, maximize }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): this;
    /**
     * Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.
     * @param {object} [options={}]           Options which modify how a random result is produced
     * @param {boolean} [options.minimize=false]    Minimize the result, obtaining the smallest possible value.
     * @param {boolean} [options.maximize=false]    Maximize the result, obtaining the largest possible value.
     * @return {DiceTermResult}               The produced result
     */
    roll({ minimize, maximize }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): DiceTermResult;
    /**
     * Return a string used as the label for each rolled result
     * @param {DiceTermResult} result     The rolled result
     * @return {string}                   The result label
     */
    getResultLabel(result: DiceTermResult): string;
    /**
     * Get the CSS classes that should be used to display each rolled result
     * @param {DiceTermResult} result     The rolled result
     * @return {string[]}                 The desired classes
     */
    getResultCSS(result: DiceTermResult): string[];
    /**
     * Render the tooltip HTML for a Roll instance
     * @return {object}      The data object used to render the default tooltip template for this DiceTerm
     */
    getTooltipData(): object;
    /**
     * Sequentially evaluate each dice roll modifier by passing the term to its evaluation function
     * Augment or modify the results array.
     * @protected
     */
    protected _evaluateModifiers(): void;
    /**
     * Evaluate a single modifier command, recording it in the array of evaluated modifiers
     * @param {string} command        The parsed modifier command
     * @param {string} modifier       The full modifier request
     * @protected
     */
    protected _evaluateModifier(command: string, modifier: string): void;
}
type DiceTermResult = {
    /**
     * The numeric result
     */
    result: number;
    /**
     * Is this result active, contributing to the total?
     */
    active?: boolean;
    /**
     * A value that the result counts as, otherwise the result is not used directly as
     */
    count?: number;
    /**
     * Does this result denote a success?
     */
    success?: boolean;
    /**
     * Does this result denote a failure?
     */
    failure?: boolean;
    /**
     * Was this result discarded?
     */
    discarded?: boolean;
    /**
     * Was this result rerolled?
     */
    rerolled?: boolean;
    /**
     * Was this result exploded?
     */
    exploded?: boolean;
};
