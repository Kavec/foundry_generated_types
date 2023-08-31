/**
 * The Application responsible for displaying and editing a single Actor document.
 * This Application is responsible for rendering an actor's attributes and allowing the actor to be edited.
 * @extends {DocumentSheet}
 * @category - Applications
 * @param {Actor} actor                     The Actor instance being displayed within the sheet.
 * @param {DocumentSheetOptions} [options]  Additional application configuration options.
 */
declare class ActorSheet extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    get title(): any;
    /**
     * A convenience reference to the Actor document
     * @type {Actor}
     */
    get actor(): Actor;
    /**
     * If this Actor Sheet represents a synthetic Token actor, reference the active Token
     * @type {Token|null}
     */
    get token(): Function;
    /** @inheritdoc */
    close(options: any): Promise<void>;
    /** @inheritdoc */
    _getSubmitData(updateData?: {}): any;
    /**
     * Handle requests to configure the Token for the Actor
     * @param {PointerEvent} event      The originating click event
     * @protected
     */
    protected _onConfigureToken(event: PointerEvent): any;
    /** @inheritdoc */
    _canDragStart(selector: any): any;
    /** @inheritdoc */
    _canDragDrop(selector: any): any;
    /** @inheritdoc */
    _onDragStart(event: any): void;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
    /**
     * Handle the dropping of ActiveEffect data onto an Actor Sheet
     * @param {DragEvent} event                  The concluding DragEvent which contains drop data
     * @param {object} data                      The data transfer extracted from the event
     * @returns {Promise<ActiveEffect|boolean>}  The created ActiveEffect object or false if it couldn't be created.
     * @protected
     */
    protected _onDropActiveEffect(event: DragEvent, data: object): Promise<ActiveEffect | boolean>;
    /**
     * Handle dropping of an Actor data onto another Actor sheet
     * @param {DragEvent} event            The concluding DragEvent which contains drop data
     * @param {object} data                The data transfer extracted from the event
     * @returns {Promise<object|boolean>}  A data object which describes the result of the drop, or false if the drop was
     *                                     not permitted.
     * @protected
     */
    protected _onDropActor(event: DragEvent, data: object): Promise<object | boolean>;
    /**
     * Handle dropping of an item reference or item data onto an Actor Sheet
     * @param {DragEvent} event            The concluding DragEvent which contains drop data
     * @param {object} data                The data transfer extracted from the event
     * @returns {Promise<Item[]|boolean>}  The created or updated Item instances, or false if the drop was not permitted.
     * @protected
     */
    protected _onDropItem(event: DragEvent, data: object): Promise<Item[] | boolean>;
    /**
     * Handle dropping of a Folder on an Actor Sheet.
     * The core sheet currently supports dropping a Folder of Items to create all items as owned items.
     * @param {DragEvent} event     The concluding DragEvent which contains drop data
     * @param {object} data         The data transfer extracted from the event
     * @returns {Promise<Item[]>}
     * @protected
     */
    protected _onDropFolder(event: DragEvent, data: object): Promise<Item[]>;
    /**
     * Handle the final creation of dropped Item data on the Actor.
     * This method is factored out to allow downstream classes the opportunity to override item creation behavior.
     * @param {object[]|object} itemData     The item data requested for creation
     * @returns {Promise<Item[]>}
     * @protected
     */
    protected _onDropItemCreate(itemData: object[] | object): Promise<Item[]>;
    /**
     * Handle a drop event for an existing embedded Item to sort that Item relative to its siblings
     * @param {Event} event
     * @param {Object} itemData
     * @protected
     */
    protected _onSortItem(event: Event, itemData: any): any;
}
