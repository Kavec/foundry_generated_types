/**
 * A collection of world-level Document objects with a singleton instance per primary Document type.
 * Each primary Document type has an associated subclass of WorldCollection which contains them.
 * @extends {DocumentCollection}
 * @abstract
 * @see {Game#collections}
 *
 * @param {object[]} data      An array of data objects from which to create Document instances
 */
declare class WorldCollection extends DocumentCollection {
    /**
     * Return a reference to the singleton instance of this WorldCollection, or null if it has not yet been created.
     * @type {WorldCollection}
     */
    static get instance(): WorldCollection;
    /**
     * Register a Document sheet class as a candidate which can be used to display Documents of a given type.
     * See {@link DocumentSheetConfig.registerSheet} for details.
     * @static
     * @param {Array<*>} args      Arguments forwarded to the DocumentSheetConfig.registerSheet method
     *
     * @example Register a new ActorSheet subclass for use with certain Actor types.
     * ```js
     * Actors.registerSheet("dnd5e", ActorSheet5eCharacter, { types: ["character], makeDefault: true });
     * ```
     */
    static registerSheet(...args: Array<any>): void;
    /**
     * Unregister a Document sheet class, removing it from the list of available sheet Applications to use.
     * See {@link DocumentSheetConfig.unregisterSheet} for detauls.
     * @static
     * @param {Array<*>} args      Arguments forwarded to the DocumentSheetConfig.unregisterSheet method
     *
     * @example Deregister the default ActorSheet subclass to replace it with others.
     * ```js
     * Actors.unregisterSheet("core", ActorSheet);
     * ```
     */
    static unregisterSheet(...args: Array<any>): void;
    /**
     * Return an array of currently registered sheet classes for this Document type.
     * @static
     * @type {DocumentSheet[]}
     */
    static get registeredSheets(): DocumentSheet[];
    /**
     * Reference the set of Folders which contain documents in this collection
     * @type {Collection<string, Folder>}
     */
    get folders(): Collection<string, Folder>;
    /**
     * Return a reference to the SidebarDirectory application for this WorldCollection.
     * @type {DocumentDirectory}
     */
    get directory(): DocumentDirectory;
    /** @override */
    override _getVisibleTreeContents(entry: any): any;
    /**
     * Import a Document from a Compendium collection, adding it to the current World.
     * @param {CompendiumCollection} pack The CompendiumCollection instance from which to import
     * @param {string} id             The ID of the compendium entry to import
     * @param {object} [updateData]   Optional additional data used to modify the imported Document before it is created
     * @param {object} [options]      Optional arguments passed to the {@link WorldCollection#fromCompendium} and
     *                                {@link Document.create} methods
     * @returns {Promise<Document>}   The imported Document instance
     */
    importFromCompendium(pack: CompendiumCollection, id: string, updateData?: object, options?: object): Promise<Document>;
    /**
     * Apply data transformations when importing a Document from a Compendium pack
     * @param {Document|object} document    The source Document, or a plain data object
     * @param {object} [options]            Additional options which modify how the document is imported
     * @param {boolean} [options.addFlags=true]         Add flags which track the import source
     * @param {boolean} [options.clearFolder=false]     Clear the currently assigned folder
     * @param {boolean} [options.clearSort=true]        Clear the currently assigned folder and sort order
     * @param {boolean} [options.clearOwnership=true]   Clear document ownership
     * @param {boolean} [options.keepId=false]          Retain the Document id from the source Compendium
     * @returns {object}                    The processed data ready for world Document creation
     */
    fromCompendium(document: Document | object, { addFlags, clearFolder, clearSort, clearOwnership, keepId }?: {
        addFlags?: boolean;
        clearFolder?: boolean;
        clearSort?: boolean;
        clearOwnership?: boolean;
        keepId?: boolean;
    }): object;
}
