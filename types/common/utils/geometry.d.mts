/**
 * Determine the relative orientation of three points in two-dimensional space.
 * The result is also an approximation of twice the signed area of the triangle defined by the three points.
 * This method is fast - but not robust against issues of floating point precision. Best used with integer coordinates.
 * Adapted from https://github.com/mourner/robust-predicates
 * @memberof helpers
 *
 * @param {Point} a     An endpoint of segment AB, relative to which point C is tested
 * @param {Point} b     An endpoint of segment AB, relative to which point C is tested
 * @param {Point} c     A point that is tested relative to segment AB
 *
 * @returns {number}    The relative orientation of points A, B, and C
 *                      A positive value if the points are in counter-clockwise order (C lies to the left of AB)
 *                      A negative value if the points are in clockwise order (C lies to the right of AB)
 *                      Zero if the points A, B, and C are collinear.
 */
export function orient2dFast(a: Point, b: Point, c: Point): number;
/**
 * Quickly test whether the line segment AB intersects with the line segment CD.
 * This method does not determine the point of intersection, for that use lineLineIntersection
 * @memberof helpers
 *
 * @param {Point} a                   The first endpoint of segment AB
 * @param {Point} b                   The second endpoint of segment AB
 * @param {Point} c                   The first endpoint of segment CD
 * @param {Point} d                   The second endpoint of segment CD
 *
 * @returns {boolean}                 Do the line segments intersect?
 */
export function lineSegmentIntersects(a: Point, b: Point, c: Point, d: Point): boolean;
/**
 * @typedef {Object}                  LineIntersection
 * @property {number} x               The x-coordinate of intersection
 * @property {number} y               The y-coordinate of intersection
 * @property {number} t0              The vector distance from A to B on segment AB
 * @property {number} [t1]            The vector distance from C to D on segment CD
 */
/**
 * An internal helper method for computing the intersection between two infinite-length lines.
 * Adapted from http://paulbourke.net/geometry/pointlineplane/
 * @memberof helpers
 *
 * @param {Point} a                   The first endpoint of segment AB
 * @param {Point} b                   The second endpoint of segment AB
 * @param {Point} c                   The first endpoint of segment CD
 * @param {Point} d                   The second endpoint of segment CD
 * @param {object} [options]          Options which affect the intersection test
 * @param {boolean} [options.t1=false]    Return the optional vector distance from C to D on CD
 *
 * @returns {LineIntersection|null}   An intersection point, or null if no intersection occurred
 */
export function lineLineIntersection(a: Point, b: Point, c: Point, d: Point, { t1 }?: {
    t1?: boolean;
}): LineIntersection | null;
/**
 * An internal helper method for computing the intersection between two finite line segments.
 * Adapted from http://paulbourke.net/geometry/pointlineplane/
 * @memberof helpers
 *
 * @param {Point} a                   The first endpoint of segment AB
 * @param {Point} b                   The second endpoint of segment AB
 * @param {Point} c                   The first endpoint of segment CD
 * @param {Point} d                   The second endpoint of segment CD
 * @param {number} [epsilon]          A small epsilon which defines a tolerance for near-equality
 * *
 * @returns {LineIntersection|null}   An intersection point, or null if no intersection occurred
 */
export function lineSegmentIntersection(a: Point, b: Point, c: Point, d: Point, epsilon?: number): LineIntersection | null;
/**
 * @typedef {Object} LineCircleIntersection
 * @property {boolean} aInside        Is point A inside the circle?
 * @property {boolean} bInside        Is point B inside the circle?
 * @property {boolean} contained      Is the segment AB contained within the circle?
 * @property {boolean} outside        Is the segment AB fully outside the circle?
 * @property {boolean} tangent        Is the segment AB tangent to the circle?
 * @property {Point[]} intersections  Intersection points: zero, one, or two
 */
/**
 * Determine the intersection between a line segment and a circle.
 * @memberof helpers
 *
 * @param {Point} a                   The first vertex of the segment
 * @param {Point} b                   The second vertex of the segment
 * @param {Point} center              The center of the circle
 * @param {number} radius             The radius of the circle
 * @param {number} epsilon            A small tolerance for floating point precision
 *
 * @returns {LineCircleIntersection}  The intersection of the segment AB with the circle
 */
export function lineCircleIntersection(a: Point, b: Point, center: Point, radius: number, epsilon?: number): LineCircleIntersection;
/**
 * Identify the point closest to C on segment AB
 * @memberof helpers
 *
 * @param {Point} c     The reference point C
 * @param {Point} a     Point A on segment AB
 * @param {Point} b     Point B on segment AB
 *
 * @returns {Point}     The closest point to C on segment AB
 */
export function closestPointToSegment(c: Point, a: Point, b: Point): Point;
/**
 * Determine the points of intersection between a line segment (p0,p1) and a circle.
 * There will be zero, one, or two intersections
 * See https://math.stackexchange.com/a/311956
 * @memberof helpers
 *
 * @param {Point} p0            The initial point of the line segment
 * @param {Point} p1            The terminal point of the line segment
 * @param {Point} center        The center of the circle
 * @param {number} radius       The radius of the circle
 * @param {number} [epsilon=0]  A small tolerance for floating point precision
 */
export function quadraticIntersection(p0: Point, p1: Point, center: Point, radius: number, epsilon?: number): {
    x: any;
    y: any;
}[];
export type LineIntersection = {
    /**
     * The x-coordinate of intersection
     */
    x: number;
    /**
     * The y-coordinate of intersection
     */
    y: number;
    /**
     * The vector distance from A to B on segment AB
     */
    t0: number;
    /**
     * The vector distance from C to D on segment CD
     */
    t1?: number;
};
export type LineCircleIntersection = {
    /**
     * Is point A inside the circle?
     */
    aInside: boolean;
    /**
     * Is point B inside the circle?
     */
    bInside: boolean;
    /**
     * Is the segment AB contained within the circle?
     */
    contained: boolean;
    /**
     * Is the segment AB fully outside the circle?
     */
    outside: boolean;
    /**
     * Is the segment AB tangent to the circle?
     */
    tangent: boolean;
    /**
     * Intersection points: zero, one, or two
     */
    intersections: Point[];
};
