/**
 * A type of RollTerm used to enclose a parenthetical expression to be recursively evaluated.
 * @extends {RollTerm}
 */
declare class ParentheticalTerm extends RollTerm {
    /**
     * The regular expression pattern used to identify the opening of a parenthetical expression.
     * This could also identify the opening of a math function.
     * @type {RegExp}
     */
    static OPEN_REGEXP: RegExp;
    /**
     * A regular expression pattern used to identify the closing of a parenthetical expression.
     * @type {RegExp}
     */
    static CLOSE_REGEXP: RegExp;
    /**
     * Construct a ParentheticalTerm from an Array of component terms which should be wrapped inside the parentheses.
     * @param {RollTerm[]} terms      The array of terms to use as internal parts of the parenthetical
     * @param {object} [options={}]   Additional options passed to the ParentheticalTerm constructor
     * @returns {ParentheticalTerm}   The constructed ParentheticalTerm instance
     *
     * @example Create a Parenthetical Term from an array of component RollTerm instances
     * ```js
     * const d6 = new Die({number: 4, faces: 6});
     * const plus = new OperatorTerm({operator: "+"});
     * const bonus = new NumericTerm({number: 4});
     * t = ParentheticalTerm.fromTerms([d6, plus, bonus]);
     * t.formula; // (4d6 + 4)
     * ```
     */
    static fromTerms(terms: RollTerm[], options?: object): ParentheticalTerm;
    constructor({ term, roll, options }: {
        term: any;
        roll: any;
        options: any;
    });
    /**
     * The original provided string term used to construct the parenthetical
     * @type {string}
     */
    term: string;
    /**
     * Alternatively, an already-evaluated Roll instance may be passed directly
     * @type {Roll}
     */
    roll: Roll;
    /**
     * An array of evaluated DiceTerm instances that should be bubbled up to the parent Roll
     * @type {DiceTerm[]}
     */
    get dice(): DiceTerm[];
    /** @inheritdoc */
    get total(): number;
    /** @inheritdoc */
    _evaluateSync({ minimize, maximize }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): this;
    /** @inheritdoc */
    _evaluate({ minimize, maximize }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): Promise<this>;
}
