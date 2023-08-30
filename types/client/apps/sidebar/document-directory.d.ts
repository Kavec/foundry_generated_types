/**
 * @typedef {ApplicationOptions} DocumentDirectoryOptions
 * @property {string[]} [renderUpdateKeys]   A list of data property keys that will trigger a rerender of the tab if
 *                                           they are updated on a Document that this tab is responsible for.
 * @property {string} [contextMenuSelector]  The CSS selector that activates the context menu for displayed Documents.
 * @property {string} [entryClickSelector]   The CSS selector for the clickable area of an entry in the tab.
 */
/**
 * A shared pattern for the sidebar directory which Actors, Items, and Scenes all use
 * @extends {SidebarTab}
 * @abstract
 * @interface
 *
 * @param {DocumentDirectoryOptions} [options]  Application configuration options.
 */
declare class DocumentDirectory extends SidebarTab {
    /**
     * A reference to the named Document type that this Sidebar Directory instance displays
     * @type {string}
     */
    static documentName: string;
    /** @override */
    static override entryPartial: string;
    /**
     * @override
     * @returns {DocumentDirectoryOptions}
     */
    static override get defaultOptions(): ApplicationOptions;
    /**
     * The WorldCollection instance which this Sidebar Directory displays.
     * @type {WorldCollection}
     */
    static get collection(): WorldCollection;
    constructor(options?: {});
    /**
     * References to the set of Documents which are displayed in the Sidebar
     * @type {ClientDocument[]}
     */
    documents: ClientDocument[];
    /**
     * Reference the set of Folders which exist in this Sidebar
     * @type {Folder[]}
     */
    folders: Folder[];
    /** @override */
    override get entryType(): any;
    /** @inheritDoc */
    get tabName(): any;
    /**
     * The collection of Documents which are displayed in this Sidebar Directory
     * @type {DocumentCollection}
     */
    get collection(): DocumentCollection;
    /**
     * Initialize the content of the directory by categorizing folders and documents into a hierarchical tree structure.
     */
    initialize(): void;
    /** @inheritdoc */
    _render(force: any, context?: {}): Promise<void | this>;
    /** @override */
    override get canCreateEntry(): any;
    /** @override */
    override get canCreateFolder(): any;
    /** @override */
    override getData(options?: {}): Promise<any>;
    /** @inheritDoc */
    activateListeners(html: any): void;
    /** @override */
    override _onClickEntryName(event: any): Promise<void>;
    /** @override */
    override _onCreateEntry(event: any, { _skipDeprecated }?: {
        _skipDeprecated?: boolean;
    }): any;
    /** @override */
    override _onDrop(event: any): any;
    /** @inheritdoc */
    _handleDroppedEntry(target: any, data: any, { _skipDeprecated }?: {
        _skipDeprecated?: boolean;
    }): any;
    /** @override */
    override _getDroppedEntryFromData(data: any): Promise<any>;
    /** @override */
    override _sortRelative(entry: any, sortData: any): Promise<any>;
    /** @override */
    override _createDroppedEntry(document: any, folderId: any): Promise<any>;
    /** @override */
    override _handleDroppedForeignFolder(folder: any, closestFolderId: any, sortData: any): Promise<{
        sortNeeded: boolean;
        folder: any;
    }>;
    /**
     * Create a dropped Folder and its children in this Collection, if they do not already exist
     * @param {Folder} folder                  The Folder being dropped
     * @param {Folder} targetFolder            The Folder to which the Folder should be added
     * @returns {Promise<Array<Folder>>}       The created Folders
     * @protected
     */
    protected _createDroppedFolderContent(folder: Folder, targetFolder: Folder): Promise<Array<Folder>>;
    /**
     * Organize a dropped Folder and its children into a list of folders to create and documents to create
     * @param {Folder} folder                  The Folder being dropped
     * @param {Folder} targetFolder            The Folder to which the Folder should be added
     * @returns {Promise<{foldersToCreate: Array<Folder>, documentsToCreate: Array<Document>}>}
     * @private
     */
    private _organizeDroppedFoldersAndDocuments;
    /**
     * Create a list of documents in a dropped Folder
     * @param {Folder} folder                  The Folder being dropped
     * @param {Array<Document>} documentsToCreate   The documents to create
     * @returns {Promise<void>}
     * @protected
     */
    protected _createDroppedFolderDocuments(folder: Folder, documentsToCreate: Array<Document>): Promise<void>;
    /**
     * Get the set of ContextMenu options which should be used for Folders in a SidebarDirectory
     * @returns {object[]}   The Array of context options passed to the ContextMenu instance
     * @protected
     */
    protected _getFolderContextOptions(): object[];
    /**
     * Get the set of ContextMenu options which should be used for Documents in a SidebarDirectory
     * @returns {object[]}   The Array of context options passed to the ContextMenu instance
     * @protected
     */
    protected _getEntryContextOptions(): object[];
    /**
     * @deprecated since v11
     * @ignore
     */
    _onCreateDocument(event: any): any;
    /**
     * @deprecated since v11
     * @ignore
     */
    _handleDroppedDocument(target: any, data: any): any;
    #private;
}
type DocumentDirectoryOptions = ApplicationOptions;
