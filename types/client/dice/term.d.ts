/**
 * An abstract class which represents a single token that can be used as part of a Roll formula.
 * Every portion of a Roll formula is parsed into a subclass of RollTerm in order for the Roll to be fully evaluated.
 */
declare class RollTerm {
    /**
     * A regular expression pattern which identifies optional term-level flavor text
     * @type {string}
     */
    static FLAVOR_REGEXP_STRING: string;
    /**
     * A regular expression which identifies term-level flavor text
     * @type {RegExp}
     */
    static FLAVOR_REGEXP: RegExp;
    /**
     * A regular expression used to match a term of this type
     * @type {RegExp}
     */
    static REGEXP: RegExp;
    /**
     * An array of additional attributes which should be retained when the term is serialized
     * @type {string[]}
     */
    static SERIALIZE_ATTRIBUTES: string[];
    /**
     * Construct a RollTerm from a provided data object
     * @param {object} data         Provided data from an un-serialized term
     * @return {RollTerm}           The constructed RollTerm
     */
    static fromData(data: object): RollTerm;
    /**
     * Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm
     * @param {object} data         The de-serialized term data
     * @returns {RollTerm}          The re-constructed RollTerm object
     * @protected
     */
    protected static _fromData(data: object): RollTerm;
    /**
     * Reconstruct a RollTerm instance from a provided JSON string
     * @param {string} json   A serialized JSON representation of a DiceTerm
     * @return {RollTerm}     A reconstructed RollTerm from the provided JSON
     */
    static fromJSON(json: string): RollTerm;
    constructor({ options }?: {
        options?: {};
    });
    /**
     * An object of additional options which describes and modifies the term.
     * @type {object}
     */
    options: object;
    /**
     * An internal flag for whether the term has been evaluated
     * @type {boolean}
     */
    _evaluated: boolean;
    /**
     * Is this term intermediate, and should be evaluated first as part of the simplification process?
     * @type {boolean}
     */
    isIntermediate: boolean;
    /**
     * A string representation of the formula expression for this RollTerm, prior to evaluation.
     * @type {string}
     */
    get expression(): string;
    /**
     * A string representation of the formula, including optional flavor text.
     * @type {string}
     */
    get formula(): string;
    /**
     * A string or numeric representation of the final output for this term, after evaluation.
     * @type {number|string}
     */
    get total(): string | number;
    /**
     * Optional flavor text which modifies and describes this term.
     * @type {string}
     */
    get flavor(): string;
    /**
     * Whether this term is entirely deterministic or contains some randomness.
     * @type {boolean}
     */
    get isDeterministic(): boolean;
    /**
     * Evaluate the term, processing its inputs and finalizing its total.
     * @param {object} [options={}]           Options which modify how the RollTerm is evaluated
     * @param {boolean} [options.minimize=false]    Minimize the result, obtaining the smallest possible value.
     * @param {boolean} [options.maximize=false]    Maximize the result, obtaining the largest possible value.
     * @param {boolean} [options.async=false]       Evaluate the term asynchronously, receiving a Promise as the returned value.
     *                                              This will become the default behavior in version 10.x
     * @returns {RollTerm}                     The evaluated RollTerm
     */
    evaluate({ minimize, maximize, async }?: {
        minimize?: boolean;
        maximize?: boolean;
        async?: boolean;
    }): RollTerm;
    /**
     * Evaluate the term.
     * @param {object} [options={}]           Options which modify how the RollTerm is evaluated, see RollTerm#evaluate
     * @returns {Promise<RollTerm>}
     * @protected
     */
    protected _evaluate({ minimize, maximize }?: object): Promise<RollTerm>;
    /**
     * This method is temporarily factored out in order to provide different behaviors synchronous evaluation.
     * This will be removed in 0.10.x
     * @protected
     */
    protected _evaluateSync({ minimize, maximize }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): this;
    /**
     * Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
     * This method should return an object suitable for passing to the JSON.stringify function.
     * @return {object}
     */
    toJSON(): object;
}
