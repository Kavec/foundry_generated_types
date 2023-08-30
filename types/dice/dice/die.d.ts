/**
 * A type of DiceTerm used to represent rolling a fair n-sided die.
 * @implements {DiceTerm}
 *
 * @example Roll four six-sided dice
 * ```js
 * let die = new Die({faces: 6, number: 4}).evaluate();
 * ```
 */
declare class Die extends DiceTerm implements DiceTerm {
    /** @inheritdoc */
    static MODIFIERS: {
        r: string;
        rr: string;
        x: string;
        xo: string;
        k: string;
        kh: string;
        kl: string;
        d: string;
        dh: string;
        dl: string;
        min: string;
        max: string;
        even: string;
        odd: string;
        cs: string;
        cf: string;
        df: string;
        sf: string;
        ms: string;
    };
    constructor(termData?: {});
    /**
     * Re-roll the Die, rolling additional results for any values which fall within a target set.
     * If no target number is specified, re-roll the lowest possible result.
     *
     * 20d20r         reroll all 1s
     * 20d20r1        reroll all 1s
     * 20d20r=1       reroll all 1s
     * 20d20r1=1      reroll a single 1
     *
     * @param {string} modifier     The matched modifier query
     * @param {boolean} recursive   Reroll recursively, continuing to reroll until the condition is no longer met
     * @returns {boolean|void}      False if the modifier was unmatched
     */
    reroll(modifier: string, { recursive }?: boolean): boolean | void;
    /**
     * @see {@link Die#reroll}
     */
    rerollRecursive(modifier: any): boolean | void;
    /**
     * Explode the Die, rolling additional results for any values which match the target set.
     * If no target number is specified, explode the highest possible result.
     * Explosion can be a "small explode" using a lower-case x or a "big explode" using an upper-case "X"
     *
     * @param {string} modifier     The matched modifier query
     * @param {boolean} recursive   Explode recursively, such that new rolls can also explode?
     */
    explode(modifier: string, { recursive }?: boolean): boolean;
    /**
     * @see {@link Die#explode}
     */
    explodeOnce(modifier: any): boolean;
    /**
     * Keep a certain number of highest or lowest dice rolls from the result set.
     *
     * 20d20k       Keep the 1 highest die
     * 20d20kh      Keep the 1 highest die
     * 20d20kh10    Keep the 10 highest die
     * 20d20kl      Keep the 1 lowest die
     * 20d20kl10    Keep the 10 lowest die
     *
     * @param {string} modifier     The matched modifier query
     */
    keep(modifier: string): boolean;
    /**
     * Drop a certain number of highest or lowest dice rolls from the result set.
     *
     * 20d20d       Drop the 1 lowest die
     * 20d20dh      Drop the 1 highest die
     * 20d20dl      Drop the 1 lowest die
     * 20d20dh10    Drop the 10 highest die
     * 20d20dl10    Drop the 10 lowest die
     *
     * @param {string} modifier     The matched modifier query
     */
    drop(modifier: string): boolean;
    /**
     * Count the number of successful results which occurred in a given result set.
     * Successes are counted relative to some target, or relative to the maximum possible value if no target is given.
     * Applying a count-success modifier to the results re-casts all results to 1 (success) or 0 (failure)
     *
     * 20d20cs      Count the number of dice which rolled a 20
     * 20d20cs>10   Count the number of dice which rolled higher than 10
     * 20d20cs<10   Count the number of dice which rolled less than 10
     *
     * @param {string} modifier     The matched modifier query
     */
    countSuccess(modifier: string): boolean;
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
    countFailures(modifier: string): boolean;
    /**
     * Count the number of even results which occurred in a given result set.
     * Even numbers are marked as a success and counted as 1
     * Odd numbers are marked as a non-success and counted as 0.
     *
     * 6d6even    Count the number of even numbers rolled
     *
     * @param {string} modifier     The matched modifier query
     */
    countEven(modifier: string): void;
    /**
     * Count the number of odd results which occurred in a given result set.
     * Odd numbers are marked as a success and counted as 1
     * Even numbers are marked as a non-success and counted as 0.
     *
     * 6d6odd    Count the number of odd numbers rolled
     *
     * @param {string} modifier     The matched modifier query
     */
    countOdd(modifier: string): void;
    /**
     * Deduct the number of failures from the dice result, counting each failure as -1
     * Failures are identified relative to some target, or relative to the lowest possible value if no target is given.
     * Applying a deduct-failures modifier to the results counts all failed results as -1.
     *
     * 6d6df      Subtract the number of dice which rolled a 1 from the non-failed total.
     * 6d6cs>3df  Subtract the number of dice which rolled a 3 or less from the non-failed count.
     * 6d6cf<3df  Subtract the number of dice which rolled less than 3 from the non-failed count.
     *
     * @param {string} modifier     The matched modifier query
     */
    deductFailures(modifier: string): boolean;
    /**
     * Subtract the value of failed dice from the non-failed total, where each failure counts as its negative value.
     * Failures are identified relative to some target, or relative to the lowest possible value if no target is given.
     * Applying a deduct-failures modifier to the results counts all failed results as -1.
     *
     * 6d6df<3    Subtract the value of results which rolled less than 3 from the non-failed total.
     *
     * @param {string} modifier     The matched modifier query
     */
    subtractFailures(modifier: string): boolean;
    /**
     * Subtract the total value of the DiceTerm from a target value, treating the difference as the final total.
     * Example: 6d6ms>12    Roll 6d6 and subtract 12 from the resulting total.
     * @param {string} modifier     The matched modifier query
     */
    marginSuccess(modifier: string): boolean;
    /**
     * Constrain each rolled result to be at least some minimum value.
     * Example: 6d6min2    Roll 6d6, each result must be at least 2
     * @param {string} modifier     The matched modifier query
     */
    minimum(modifier: string): boolean;
    /**
     * Constrain each rolled result to be at most some maximum value.
     * Example: 6d6max5    Roll 6d6, each result must be at most 5
     * @param {string} modifier     The matched modifier query
     */
    maximum(modifier: string): boolean;
}
