/**
 * A type of RollTerm used to apply a function from the Math library.
 * @extends {RollTerm}
 */
declare class MathTerm extends RollTerm {
    constructor({ fn, terms, options }?: {
        fn: any;
        terms?: any[];
        options: any;
    });
    /**
     * The named function in the Math environment which should be applied to the term
     * @type {string}
     */
    fn: string;
    /**
     * An array of string argument terms for the function
     * @type {string[]}
     */
    terms: string[];
    /**
     * The cached Roll instances for each function argument
     * @type {Roll[]}
     */
    rolls: Roll[];
    /**
     * The cached result of evaluating the method arguments
     * @type {number}
     */
    result: number;
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
