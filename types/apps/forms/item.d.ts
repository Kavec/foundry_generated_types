/**
 * The Application responsible for displaying and editing a single Item document.
 * @param {Item} item                       The Item instance being displayed within the sheet.
 * @param {DocumentSheetOptions} [options]  Additional application configuration options.
 */
declare class ItemSheet extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    get title(): any;
    /**
     * A convenience reference to the Item document
     * @type {Item}
     */
    get item(): Item;
    /**
     * The Actor instance which owns this item. This may be null if the item is unowned.
     * @type {Actor}
     */
    get actor(): Actor;
}
