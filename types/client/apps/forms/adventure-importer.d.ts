/**
 * An interface for importing an adventure from a compendium pack.
 */
declare class AdventureImporter extends DocumentSheet {
    /** @inheritDoc */
    static get defaultOptions(): any;
    /**
     * An alias for the Adventure document
     * @type {Adventure}
     */
    adventure: Adventure;
    /** @override */
    override getData(options?: {}): Promise<{
        adventure: Adventure;
        contents: {
            icon: string;
            label: string;
            count: number;
        }[];
        imported: boolean;
    }>;
    /**
     * Handle toggling the import all checkbox.
     * @param {Event} event  The change event.
     * @protected
     */
    protected _onToggleImportAll(event: Event): void;
    /**
     * Prepare a list of content types provided by this adventure.
     * @returns {{icon: string, label: string, count: number}[]}
     * @protected
     */
    protected _getContentList(): {
        icon: string;
        label: string;
        count: number;
    }[];
    /** @override */
    override _updateObject(event: any, formData: any): Promise<void | AdventureImportResult>;
    /**
     * Mirror Adventure#import but call AdventureImporter#_importContent and AdventureImport#_prepareImportData
     * @deprecated since v11
     * @ignore
     */
    _importLegacy(formData: any): Promise<void>;
    /**
     * @deprecated since v11
     * @ignore
     */
    _prepareImportData(formData: any): Promise<AdventureImportData>;
    /**
     * @deprecated since v11
     * @ignore
     */
    _importContent(toCreate: any, toUpdate: any, documentCount: any): Promise<AdventureImportResult>;
}
