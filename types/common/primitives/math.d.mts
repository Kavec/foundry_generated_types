/**
 * Bound a number between some minimum and maximum value, inclusively.
 * @param {number} num    The current value
 * @param {number} min    The minimum allowed value
 * @param {number} max    The maximum allowed value
 * @return {number}       The clamped number
 */
export function clamped(num: number, min: number, max: number): number;
/**
 * Linear interpolation function
 * @param {number} a   An initial value when weight is 0.
 * @param {number} b   A terminal value when weight is 1.
 * @param {number} w   A weight between 0 and 1.
 * @return {number}    The interpolated value between a and b with weight w.
 */
export function mix(a: number, b: number, w: number): number;
/**
 * Transform an angle in degrees to be bounded within the domain [0, 360]
 * @param {number} degrees  An angle in degrees
 * @param {number} [base=0] The base angle to normalize to, either 0 for [0, 360) or 360 for (0, 360]
 * @return {number}         The same angle on the range [0, 360) or (0, 360]
 */
export function normalizeDegrees(degrees: number, base?: number): number;
/**
 * Transform an angle in radians to be bounded within the domain [-PI, PI]
 * @param {number} radians  An angle in degrees
 * @return {number}         The same angle on the range [-PI, PI]
 */
export function normalizeRadians(radians: number): number;
/**
 * Round a floating point number to a certain number of decimal places
 * @param {number} number  A floating point number
 * @param {number} places  An integer number of decimal places
 */
export function roundDecimals(number: number, places: number): number;
/**
 * Transform an angle in radians to a number in degrees
 * @param {number} angle    An angle in radians
 * @return {number}         An angle in degrees
 */
export function toDegrees(angle: number): number;
/**
 * Transform an angle in degrees to an angle in radians
 * @param {number} angle    An angle in degrees
 * @return {number}         An angle in radians
 */
export function toRadians(angle: number): number;
/**
 * Get an oscillation between lVal and hVal according to t
 * @param {number} minVal             The minimal value of the oscillation.
 * @param {number} maxVal             The maximum value of the oscillation.
 * @param {number} t                  The time value.
 * @param {number} [p=1]              The period (can't be equal to 0).
 * @param {Function} [func=Math.cos]  The optional math function to use for oscillation.
 * @return {number}                   The oscillation according to t.
 */
export function oscillation(minVal: number, maxVal: number, t: number, p?: number, func?: Function): number;
export function roundFast(value: any): number;
