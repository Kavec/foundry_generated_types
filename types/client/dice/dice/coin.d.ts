/**
 * A type of DiceTerm used to represent flipping a two-sided coin.
 * @implements {DiceTerm}
 */
declare class Coin extends DiceTerm implements DiceTerm {
    /** @inheritdoc */
    static MODIFIERS: {
        c: string;
    };
    constructor(termData: any);
    /** @inheritdoc */
    roll({ minimize, maximize }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): {
        result: any;
        active: boolean;
    };
    /** @inheritdoc */
    getResultLabel(result: any): any;
    /** @inheritdoc */
    getResultCSS(result: any): string[];
    /**
     * Call the result of the coin flip, marking any coins that matched the called target as a success
     * 3dcc1      Flip 3 coins and treat "heads" as successes
     * 2dcc0      Flip 2 coins and treat "tails" as successes
     * @param {string} modifier     The matched modifier query
     */
    call(modifier: string): boolean;
}
