/**
 * A type of RollTerm which encloses a pool of multiple inner Rolls which are evaluated jointly.
 *
 * A dice pool represents a set of Roll expressions which are collectively modified to compute an effective total
 * across all Rolls in the pool. The final total for the pool is defined as the sum over kept rolls, relative to any
 * success count or margin.
 *
 * @example Keep the highest of the 3 roll expressions
 * ```js
 * let pool = new PoolTerm({
 *   terms: ["4d6", "3d8 - 1", "2d10 + 3"],
 *   modifiers: ["kh"]
 * });
 * pool.evaluate();
 * ```
 */
declare class PoolTerm extends RollTerm {
    /**
     * Define the modifiers that can be used for this particular DiceTerm type.
     * @type {Object<string, Function>}
     */
    static MODIFIERS: {
        [x: string]: Function;
    };
    /**
     * The regular expression pattern used to identify the opening of a dice pool expression.
     * @type {RegExp}
     */
    static OPEN_REGEXP: RegExp;
    /**
     * A regular expression pattern used to identify the closing of a dice pool expression.
     * @type {RegExp}
     */
    static CLOSE_REGEXP: RegExp;
    /** @inheritdoc */
    static _fromData(data: any): RollTerm;
    /**
     * Given a string formula, create and return an evaluated PoolTerm object
     * @param {string} formula    The string formula to parse
     * @param {object} [options]  Additional options applied to the PoolTerm
     * @return {PoolTerm|null}    The evaluated PoolTerm object or null if the formula is invalid
     */
    static fromExpression(formula: string, options?: object): PoolTerm | null;
    /**
     * Create a PoolTerm by providing an array of existing Roll objects
     * @param {Roll[]} rolls      An array of Roll objects from which to create the pool
     * @returns {RollTerm}        The constructed PoolTerm comprised of the provided rolls
     */
    static fromRolls(rolls?: Roll[]): RollTerm;
    constructor({ terms, modifiers, rolls, results, options }?: {
        terms?: any[];
        modifiers?: any[];
        rolls?: any[];
        results?: any[];
        options?: {};
    });
    /**
     * The original provided terms to the Dice Pool
     * @type {string[]}
     */
    terms: string[];
    /**
     * The string modifiers applied to resolve the pool
     * @type {string[]}
     */
    modifiers: string[];
    /**
     * Each component term of a dice pool is evaluated as a Roll instance
     * @type {Roll[]}
     */
    rolls: Roll[];
    /**
     * The array of dice pool results which have been rolled
     * @type {DiceTermResult[]}
     */
    results: DiceTermResult[];
    /**
     * Return an Array of each individual DiceTerm instances contained within the PoolTerm.
     * @return {DiceTerm[]}
     */
    get dice(): DiceTerm[];
    /** @inheritdoc */
    get total(): number;
    /**
     * Return an array of rolled values which are still active within the PoolTerm
     * @type {number[]}
     */
    get values(): number[];
    /**
     * Alter the DiceTerm by adding or multiplying the number of dice which are rolled
     * @param {any[]} args        Arguments passed to each contained Roll#alter method.
     * @return {PoolTerm}         The altered pool
     */
    alter(...args: any[]): PoolTerm;
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
    /**
     * Use the same logic as for the DiceTerm to avoid duplication
     * @see DiceTerm#_evaluateModifiers
     */
    _evaluateModifiers(): any;
    /**
     * Use the same logic as for the DiceTerm to avoid duplication
     * @see DiceTerm#_evaluateModifier
     */
    _evaluateModifier(command: any, modifier: any): any;
    /**
     * Keep a certain number of highest or lowest dice rolls from the result set.
     *
     * {1d6,1d8,1d10,1d12}kh2       Keep the 2 best rolls from the pool
     * {1d12,6}kl                   Keep the lowest result in the pool
     *
     * @param {string} modifier     The matched modifier query
     */
    keep(modifier: string): any;
    /**
     * Keep a certain number of highest or lowest dice rolls from the result set.
     *
     * {1d6,1d8,1d10,1d12}dl3       Drop the 3 worst results in the pool
     * {1d12,6}dh                   Drop the highest result in the pool
     *
     * @param {string} modifier     The matched modifier query
     */
    drop(modifier: string): any;
    /**
     * Count the number of successful results which occurred in the pool.
     * Successes are counted relative to some target, or relative to the maximum possible value if no target is given.
     * Applying a count-success modifier to the results re-casts all results to 1 (success) or 0 (failure)
     *
     * 20d20cs      Count the number of dice which rolled a 20
     * 20d20cs>10   Count the number of dice which rolled higher than 10
     * 20d20cs<10   Count the number of dice which rolled less than 10
     *
     * @param {string} modifier     The matched modifier query
     */
    countSuccess(modifier: string): any;
    /**
     * Count the number of failed results which occurred in a given result set.
     * Failures are counted relative to some target, or relative to the lowest possible value if no target is given.
     * Applying a count-failures modifier to the results re-casts all results to 1 (failure) or 0 (non-failure)
     *
     * 6d6cf      Count the number of dice which rolled a 1 as failures
     * 6d6cf<=3   Count the number of dice which rolled less than 3 as failures
     * 6d6cf>4    Count the number of dice which rolled greater than 4 as failures
     *
     * @param {string} modifier     The matched modifier query
     */
    countFailures(modifier: string): any;
}
