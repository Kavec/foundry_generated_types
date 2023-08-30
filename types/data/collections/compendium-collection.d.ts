/**
 * @typedef {SocketRequest} ManageCompendiumRequest
 * @property {string} action                      The request action.
 * @property {PackageCompendiumData|string} data  The compendium creation data, or the ID of the compendium to delete.
 * @property {object} [options]                   Additional options.
 */
/**
 * @typedef {SocketResponse} ManageCompendiumResponse
 * @property {ManageCompendiumRequest} request      The original request.
 * @property {PackageCompendiumData|string} result  The compendium creation data, or the collection name of the
 *                                                  deleted compendium.
 */
/**
 * A collection of Document objects contained within a specific compendium pack.
 * Each Compendium pack has its own associated instance of the CompendiumCollection class which contains its contents.
 * @extends {DocumentCollection}
 * @abstract
 * @see {Game#packs}
 *
 * @param {object} metadata   The compendium metadata, an object provided by game.data
 */
declare class CompendiumCollection extends DocumentCollection {
    /**
     * The amount of time that Document instances within this CompendiumCollection are held in memory.
     * Accessing the contents of the Compendium pack extends the duration of this lifetime.
     * @type {number}
     */
    static CACHE_LIFETIME_SECONDS: number;
    /**
     * The named game setting which contains Compendium configurations.
     * @type {string}
     */
    static CONFIG_SETTING: string;
    /** @override */
    static override _sortStandard(a: any, b: any): number;
    /**
     * Activate the Socket event listeners used to receive responses to compendium management events.
     * @param {Socket} socket  The active game socket.
     * @internal
     */
    static _activateSocketListeners(socket: Socket): void;
    /**
     * Create a new Compendium Collection using provided metadata.
     * @param {object} metadata   The compendium metadata used to create the new pack
     * @param {object} options   Additional options which modify the Compendium creation request
     * @returns {Promise<CompendiumCollection>}
     */
    static createCompendium(metadata: object, options?: object): Promise<CompendiumCollection>;
    /**
     * Handle a response from the server where a compendium was created.
     * @param {ManageCompendiumResponse} response  The server response.
     * @returns {CompendiumCollection}
     */
    static "__#38@#handleCreateCompendium"({ result }: SocketResponse): CompendiumCollection;
    /**
     * Handle a response from the server where a compendium was deleted.
     * @param {ManageCompendiumResponse} response  The server response.
     * @returns {CompendiumCollection}
     */
    static "__#38@#handleDeleteCompendium"({ result }: SocketResponse): CompendiumCollection;
    constructor(metadata: any);
    /**
     * The compendium metadata which defines the compendium content and location
     * @type {object}
     */
    metadata: object;
    /**
     * A subsidiary collection which contains the more minimal index of the pack
     * @type {Collection<string, object>}
     */
    index: Collection<string, any>;
    /**
     * A debounced function which will clear the contents of the Compendium pack if it is not accessed frequently.
     * @type {Function}
     * @private
     */
    private _flush;
    /**
     * The canonical Compendium name - comprised of the originating package and the pack name
     * @type {string}
     */
    get collection(): string;
    /**
     * The banner image for this Compendium pack, or the default image for the pack type if no image is set.
     * @returns {string}
     */
    get banner(): string;
    /**
     * A reference to the Application class which provides an interface to interact with this compendium content.
     * @type {typeof Application}
     */
    applicationClass: typeof Application;
    get folders(): CompendiumFolderCollection;
    /** @override */
    override get maxFolderDepth(): number;
    /**
     * Get the Folder that this Compendium is displayed within
     * @returns {Folder|null}
     */
    get folder(): Folder;
    /**
     * Assign this CompendiumCollection to be organized within a specific Folder.
     * @param {Folder|string|null} folder     The desired Folder within the World or null to clear the folder
     * @returns {Promise<void>}               A promise which resolves once the transaction is complete
     */
    setFolder(folder: Folder | string | null): Promise<void>;
    /**
     * Get the sort order for this Compendium
     * @returns {number}
     */
    get sort(): number;
    /** @override */
    override _getVisibleTreeContents(): any;
    /**
     * Access the compendium configuration data for this pack
     * @type {object}
     */
    get config(): any;
    /**
     * Track whether the Compendium Collection is locked for editing
     * @type {boolean}
     */
    get locked(): boolean;
    /**
     * The visibility configuration of this compendium pack.
     * A value in CONST.USER_ROLES
     * @type {number}
     */
    get ownership(): number;
    /**
     * Is this Compendium pack visible to the current game User?
     * @type {boolean}
     */
    get visible(): boolean;
    /**
     * A convenience reference to the label which should be used as the title for the Compendium pack.
     * @type {string}
     */
    get title(): string;
    /**
     * The index fields which should be loaded for this compendium pack
     * @type {Set<string>}
     */
    get indexFields(): Set<string>;
    /**
     * Has this compendium pack been fully indexed?
     * @type {boolean}
     */
    get indexed(): boolean;
    /** @inheritdoc */
    get(key: any, options: any): Document;
    /**
     * Load the Compendium index and cache it as the keys and values of the Collection.
     * @param {object} [options]    Options which customize how the index is created
     * @param {string[]} [options.fields]  An array of fields to return as part of the index
     * @returns {Promise<Collection>}
     */
    getIndex({ fields }?: {
        fields?: string[];
    }): Promise<Collection>;
    /**
     * Get a single Document from this Compendium by ID.
     * The document may already be locally cached, otherwise it is retrieved from the server.
     * @param {string} id               The requested Document id
     * @returns {Promise<Document>|undefined}     The retrieved Document instance
     */
    getDocument(id: string): Promise<Document> | undefined;
    /**
     * Load multiple documents from the Compendium pack using a provided query object.
     * @param {object} query            A database query used to retrieve documents from the underlying database
     * @returns {Promise<Document[]>}   The retrieved Document instances
     */
    getDocuments(query?: object): Promise<Document[]>;
    /**
     * Get the ownership level that a User has for this Compendium pack.
     * @param {documents.User} user     The user being tested
     * @returns {number}                The ownership level in CONST.DOCUMENT_OWNERSHIP_LEVELS
     */
    getUserLevel(user?: documents.User): number;
    /**
     * Test whether a certain User has a requested permission level (or greater) over the Compendium pack
     * @param {documents.BaseUser} user       The User being tested
     * @param {string|number} permission      The permission level from DOCUMENT_OWNERSHIP_LEVELS to test
     * @param {object} options                Additional options involved in the permission test
     * @param {boolean} [options.exact=false]     Require the exact permission level requested?
     * @returns {boolean}                      Does the user have this permission level over the Compendium pack?
     */
    testUserPermission(user: documents.BaseUser, permission: string | number, { exact }?: {
        exact?: boolean;
    }): boolean;
    /**
     * Import a Document into this Compendium Collection.
     * @param {Document} document     The existing Document you wish to import
     * @param {object} [options]      Additional options which modify how the data is imported.
     *                                See {@link ClientDocumentMixin#toCompendium}
     * @returns {Promise<Document>}   The imported Document instance
     */
    importDocument(document: Document, options?: object): Promise<Document>;
    /**
     * Import a Folder into this Compendium Collection.
     * @param {Folder} folder                         The existing Folder you wish to import
     * @param {object} [options]                      Additional options which modify how the data is imported.
     * @param {boolean} [options.importParents=true]  Import any parent folders which are not already present in the Compendium
     * @returns {Promise<void>}
     */
    importFolder(folder: Folder, { importParents, ...options }?: {
        importParents?: boolean;
    }): Promise<void>;
    /**
     * Import an array of Folders into this Compendium Collection.
     * @param {Folder[]} folders                      The existing Folders you wish to import
     * @param {object} [options]                      Additional options which modify how the data is imported.
     * @param {boolean} [options.importParents=true]  Import any parent folders which are not already present in the Compendium
     * @returns {Promise<void>}
     */
    importFolders(folders: Folder[], { importParents, ...options }?: {
        importParents?: boolean;
    }): Promise<void>;
    /**
     * Fully import the contents of a Compendium pack into a World folder.
     * @param {object} [options={}]     Options which modify the import operation. Additional options are forwarded to
     *                                  {@link WorldCollection#fromCompendium} and {@link Document.createDocuments}
     * @param {string|null} [options.folderId]  An existing Folder _id to use.
     * @param {string} [options.folderName]     A new Folder name to create.
     * @returns {Promise<Document[]>}   The imported Documents, now existing within the World
     */
    importAll({ folderId, folderName, ...options }?: {
        folderId?: string | null;
        folderName?: string;
    }): Promise<Document[]>;
    /**
     * Provide a dialog form that prompts the user to import the full contents of a Compendium pack into the World.
     * @param {object} [options={}] Additional options passed to the Dialog.confirm method
     * @returns {Promise<Document[]|boolean|null>} A promise which resolves in the following ways: an array of imported
     *                            Documents if the "yes" button was pressed, false if the "no" button was pressed, or
     *                            null if the dialog was closed without making a choice.
     */
    importDialog(options?: object): Promise<Document[] | boolean | null>;
    /**
     * Add a Document to the index, capturing its relevant index attributes
     * @param {Document} document       The document to index
     */
    indexDocument(document: Document): void;
    /**
     * Prompt the gamemaster with a dialog to configure ownership of this Compendium pack.
     * @returns {Promise<Object<string>>}   The configured ownership for the pack
     */
    configureOwnershipDialog(): Promise<any>;
    /**
     * Generate a UUID for a given primary document ID within this Compendium pack
     * @param {string} id     The document ID to generate a UUID for
     * @returns {string}      The generated UUID, in the form of "Compendium.<collection>.<documentName>.<id>"
     */
    getUuid(id: string): string;
    /**
     * Assign configuration metadata settings to the compendium pack
     * @param {object} configuration  The object of compendium settings to define
     * @returns {Promise}             A Promise which resolves once the setting is updated
     */
    configure(configuration?: object): Promise<any>;
    /**
     * Delete an existing world-level Compendium Collection.
     * This action may only be performed for world-level packs by a Gamemaster User.
     * @returns {Promise<CompendiumCollection>}
     */
    deleteCompendium(): Promise<CompendiumCollection>;
    /**
     * Duplicate a compendium pack to the current World.
     * @param {string} label    A new Compendium label
     * @returns {Promise<CompendiumCollection>}
     */
    duplicateCompendium({ label }?: string): Promise<CompendiumCollection>;
    /**
     * Migrate a compendium pack.
     * This operation re-saves all documents within the compendium pack to disk, applying the current data model.
     * If the document type has system data, the latest system data template will also be applied to all documents.
     * @returns {Promise<CompendiumCollection>}
     */
    migrate(): Promise<CompendiumCollection>;
    /** @inheritdoc */
    updateAll(transformation: any, condition?: any, options?: {}): Promise<Document[]>;
    /** @inheritdoc */
    _onCreateDocuments(documents: any, result: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onUpdateDocuments(documents: any, result: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDeleteDocuments(documents: any, result: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDeleteFolder(parentFolder: any, deleteFolderId: any, deleteContents: any): any[];
    /**
     * Follow-up actions taken when Documents within this Compendium pack are modified
     * @private
     */
    private _onModifyContents;
    /**
     * @deprecated since v11
     * @ignore
     */
    get private(): boolean;
    /**
     * @deprecated since v11
     * @ignore
     */
    get isOpen(): boolean;
    #private;
}
type ManageCompendiumRequest = SocketRequest;
type ManageCompendiumResponse = SocketResponse;
