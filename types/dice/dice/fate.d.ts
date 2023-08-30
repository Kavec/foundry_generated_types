/**
 * A type of DiceTerm used to represent a three-sided Fate/Fudge die.
 * Mathematically behaves like 1d3-2
 * @extends {DiceTerm}
 */
declare class FateDie extends DiceTerm {
    /** @inheritdoc */
    static MODIFIERS: {
        r: (modifier: string, { recursive }?: boolean) => boolean | void;
        rr: (modifier: any) => boolean | void;
        k: (modifier: string) => boolean;
        kh: (modifier: string) => boolean;
        kl: (modifier: string) => boolean;
        d: (modifier: string) => boolean;
        dh: (modifier: string) => boolean;
        dl: (modifier: string) => boolean;
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
}
