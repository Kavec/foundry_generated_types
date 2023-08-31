/**
 * A DocumentSheet application responsible for displaying and editing a single Cards stack.
 */
declare class CardsConfig extends DocumentSheet {
    /**
     * The allowed sorting methods which can be used for this sheet
     * @enum {string}
     */
    static SORT_TYPES: {
        STANDARD: string;
        SHUFFLED: string;
    };
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * The CardsConfig sheet is constructed by providing a Cards document and sheet-level options.
     * @param {Cards} object                    The {@link Cards} object being configured.
     * @param {DocumentSheetOptions} [options]  Application configuration options.
     */
    constructor(object: Cards, options?: DocumentSheetOptions);
    /** @inheritdoc */
    getData(options?: {}): any;
    /**
     * Handle card control actions which modify single cards on the sheet.
     * @param {PointerEvent} event          The originating click event
     * @returns {Promise}                   A Promise which resolves once the handler has completed
     * @protected
     */
    protected _onCardControl(event: PointerEvent): Promise<any>;
    /**
     * Handle lazy-loading card face images.
     * See {@link SidebarTab#_onLazyLoadImage}
     * @param {IntersectionObserverEntry[]} entries   The entries which are now in the observer frame
     * @param {IntersectionObserver} observer         The intersection observer instance
     * @protected
     */
    protected _onLazyLoadImage(entries: IntersectionObserverEntry[], observer: IntersectionObserver): any;
    /** @inheritdoc */
    _canDragStart(selector: any): any;
    /** @inheritdoc */
    _onDragStart(event: any): void;
    /** @inheritdoc */
    _canDragDrop(selector: any): any;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
    /**
     * Handle sorting a Card relative to other siblings within this document
     * @param {Event} event     The drag drop event
     * @param {Card} card       The card being dragged
     * @protected
     */
    protected _onSortCard(event: Event, card: Card): any;
}
/**
 * A subclass of CardsConfig which provides a sheet representation for Cards documents with the "hand" type.
 */
declare class CardsHand extends CardsConfig {
}
/**
 * A subclass of CardsConfig which provides a sheet representation for Cards documents with the "pile" type.
 */
declare class CardsPile extends CardsConfig {
}
/**
 * The allowed sorting methods which can be used for this sheet
 */
type SORT_TYPES = string;
