/**
 * A type of RollTerm used to represent static numbers.
 * @extends {RollTerm}
 */
declare class NumericTerm extends RollTerm {
    /**
     * Determine whether a string expression matches a NumericTerm
     * @param {string} expression               The expression to parse
     * @return {RegExpMatchArray|null}
     */
    static matchTerm(expression: string): RegExpMatchArray | null;
    /**
     * Construct a term of this type given a matched regular expression array.
     * @param {RegExpMatchArray} match          The matched regular expression array
     * @return {NumericTerm}                    The constructed term
     */
    static fromMatch(match: RegExpMatchArray): NumericTerm;
    constructor({ number, options }?: {
        number: any;
        options: any;
    });
    number: number;
    /** @inheritdoc */
    get total(): number;
}
