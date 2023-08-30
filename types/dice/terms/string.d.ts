/**
 * A type of RollTerm used to represent strings which have not yet been matched.
 * @extends {RollTerm}
 */
declare class StringTerm extends RollTerm {
    constructor({ term, options }?: {
        term: any;
        options: any;
    });
    term: any;
    /** @inheritdoc */
    get expression(): any;
    /** @inheritdoc */
    get total(): any;
    /** @inheritdoc */
    evaluate(options?: {}): void;
}
