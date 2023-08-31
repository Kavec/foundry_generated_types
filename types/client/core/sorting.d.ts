/**
 * A collection of functions related to sorting objects within a parent container.
 */
declare class SortingHelpers {
    /**
     * Given a source object to sort, a target to sort relative to, and an Array of siblings in the container:
     * Determine the updated sort keys for the source object, or all siblings if a reindex is required.
     * Return an Array of updates to perform, it is up to the caller to dispatch these updates.
     * Each update is structured as:
     * {
     *   target: object,
     *   update: {sortKey: sortValue}
     * }
     *
     * @param {object} source       The source object being sorted
     * @param {object} [options]    Options which modify the sort behavior
     * @param {object|null} [options.target]  The target object relative which to sort
     * @param {object[]} [options.siblings]   The Array of siblings which the source should be sorted within
     * @param {string} [options.sortKey=sort] The property name within the source object which defines the sort key
     * @param {boolean} [options.sortBefore]  Explicitly sort before (true) or sort after( false).
     *                                        If undefined the sort order will be automatically determined.
     * @returns {object[]}          An Array of updates for the caller of the helper function to perform
     */
    static performIntegerSort(source: object, { target, siblings, sortKey, sortBefore }?: {
        target?: object | null;
        siblings?: object[];
        sortKey?: string;
        sortBefore?: boolean;
    }): object[];
    static performIntegerSort(source: any, { target, siblings, sortKey, sortBefore }?: {
        target?: any;
        siblings?: any[];
        sortKey?: string;
        sortBefore?: boolean;
    }): any[];
    /**
     * Given an ordered Array of siblings and a target position, return the [min,max] indices to sort before the target
     * @protected
     */
    protected static _sortBefore(siblings: any, idx: any, sortKey: any): any[];
    protected static _sortBefore(siblings: any, idx: any, sortKey: any): any[];
    /**
     * Given an ordered Array of siblings and a target position, return the [min,max] indices to sort after the target
     * @protected
     */
    protected static _sortAfter(siblings: any, idx: any, sortKey: any): any[];
    protected static _sortAfter(siblings: any, idx: any, sortKey: any): any[];
}
