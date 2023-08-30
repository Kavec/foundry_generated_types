/**
 * A type of RollTerm used to denote and perform an arithmetic operation.
 * @extends {RollTerm}
 */
declare class OperatorTerm extends RollTerm {
    /**
     * An array of operators which represent arithmetic operations
     * @type {string[]}
     */
    static OPERATORS: string[];
    constructor({ operator, options }?: {
        operator: any;
        options: any;
    });
    operator: any;
    /** @inheritdoc */
    get total(): string;
}
