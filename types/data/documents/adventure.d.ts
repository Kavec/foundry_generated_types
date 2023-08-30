/**
 * @typedef {Object} AdventureImportData
 * @property {Object<object[]>} toCreate    Arrays of document data to create, organized by document name
 * @property {Object<object[]>} toUpdate    Arrays of document data to update, organized by document name
 * @property {number} documentCount         The total count of documents to import
 */
/**
 * @typedef {Object} AdventureImportResult
 * @property {Object<Document[]>} created   Documents created as a result of the import, organized by document name
 * @property {Object<Document[]>} updated   Documents updated as a result of the import, organized by document name
 */
/**
 * The client-side Adventure document which extends the common {@link foundry.documents.BaseAdventure} model.
 * @extends documents.BaseAdventure
 * @mixes ClientDocumentMixin
 *
 * ### Hook Events
 * {@link hookEvents.preImportAdventure} emitted by Adventure#import
 * {@link hookEvents.importAdventure} emitted by Adventure#import
 */
declare class Adventure {
    /**
     * Perform a full import workflow of this Adventure.
     * Create new and update existing documents within the World.
     * @param {object} [options]                  Options which configure and customize the import process
     * @param {boolean} [options.dialog=true]       Display a warning dialog if existing documents would be overwritten
     * @returns {Promise<AdventureImportResult>}  The import result
     */
    import({ dialog, ...importOptions }?: {
        dialog?: boolean;
    }): Promise<AdventureImportResult>;
    /**
     * Prepare Adventure data for import into the World.
     * @param {object} [options]                 Options passed in from the import dialog to configure the import
     *                                           behavior.
     * @param {string[]} [options.importFields]  A subset of adventure fields to import.
     * @returns {Promise<AdventureImportData>}
     */
    prepareImport({ importFields }?: {
        importFields?: string[];
    }): Promise<AdventureImportData>;
    /**
     * Execute an Adventure import workflow, creating and updating documents in the World.
     * @param {AdventureImportData} data          Prepared adventure data to import
     * @returns {Promise<AdventureImportResult>}  The import result
     */
    importContent({ toCreate, toUpdate, documentCount }?: AdventureImportData): Promise<AdventureImportResult>;
}
type AdventureImportData = {
    /**
     * Arrays of document data to create, organized by document name
     */
    toCreate: any;
    /**
     * Arrays of document data to update, organized by document name
     */
    toUpdate: any;
    /**
     * The total count of documents to import
     */
    documentCount: number;
};
type AdventureImportResult = {
    /**
     * Documents created as a result of the import, organized by document name
     */
    created: any;
    /**
     * Documents updated as a result of the import, organized by document name
     */
    updated: any;
};
