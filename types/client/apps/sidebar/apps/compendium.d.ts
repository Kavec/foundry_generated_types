/**
 * An interface for displaying the content of a CompendiumCollection.
 * @param {CompendiumCollection} collection  The {@link CompendiumCollection} object represented by this interface.
 * @param {ApplicationOptions} [options]     Application configuration options.
 */
declare class Compendium extends DocumentDirectory {
    /** @inheritdoc */
    static get defaultOptions(): any;
    constructor(...args: any[]);
    /** @inheritdoc */
    get title(): any;
    /** @inheritdoc */
    get tabName(): string;
    /**
     * A convenience redirection back to the metadata object of the associated CompendiumCollection
     * @returns {object}
     */
    get metadata(): any;
    /** @inheritDoc */
    render(force: any, options: any): Application | this;
    /** @override */
    override _entryAlreadyExists(document: any): any;
    /** @override */
    override _getEntryDragData(entryId: any): {
        type: any;
        uuid: any;
    };
    /** @override */
    override _onCreateEntry(event: any): any;
    /**
     * Handle clicks on a footer button
     * @param {PointerEvent} event    The originating pointer event
     * @protected
     */
    protected _onClickFooterButton(event: PointerEvent): any;
    /** @override */
    override _getDocumentDragData(documentId: any): {
        type: any;
        uuid: any;
    };
    /** @override */
    override _getFolderDragData(folderId: any): {
        type: string;
        uuid: any;
    };
    /** @override */
    override _getEntryContextOptions(): {
        name: string;
        icon: string;
        condition: () => any;
        callback: (li: any) => any;
    }[];
}
