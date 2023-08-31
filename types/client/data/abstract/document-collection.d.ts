/**
 * An abstract subclass of the Collection container which defines a collection of Document instances.
 * @extends {Collection}
 * @abstract
 *
 * @param {object[]} data      An array of data objects from which to create document instances
 */
declare class DocumentCollection {
    /**
     * The base Document type which is contained within this DocumentCollection
     * @type {string}
     */
    static documentName: string;
    /**
     * The cache of search fields for each data model
     * @type {Map<string, Set<string>>}
     */
    static "__#58@#dataModelSearchFieldsCache": Map<string, Set<string>>;
    /**
     * Get the searchable fields for a given document or index, based on its data model
     * @param {string} documentName         The document type name
     * @param {string} [documentSubtype=""] The document subtype name
     * @param {boolean} [isEmbedded=false]  Whether the document is an embedded object
     * @returns {Set<string>}               The dot-delimited property paths of searchable fields
     */
    static getSearchableFields(documentName: string, documentSubtype?: string, isEmbedded?: boolean): Set<string>;
    constructor(data?: any[]);
    /**
     * An Array of application references which will be automatically updated when the collection content changes
     * @type {Application[]}
     */
    apps: Application[];
    /**
     * Initialize the DocumentCollection by constructing any initially provided Document instances
     * @protected
     */
    protected _initialize(): void;
    /**
     * A reference to the Document class definition which is contained within this DocumentCollection.
     * @type {Function}
     */
    get documentClass(): Function;
    /** @inheritdoc */
    get documentName(): any;
    /**
     * Record the set of document ids where the Document was not initialized because of invalid source data
     * @type {Set<string>}
     */
    invalidDocumentIds: Set<string>;
    /**
     * The Collection class name
     * @type {string}
     */
    get name(): string;
    /**
     * Instantiate a Document for inclusion in the Collection.
     * @param {object} data       The Document data.
     * @param {object} [context]  Document creation context.
     * @returns {Document}
     */
    createDocument(data: object, context?: object): Document;
    /**
     * Obtain a temporary Document instance for a document id which currently has invalid source data.
     * @param {string} id                      A document ID with invalid source data.
     * @param {object} [options]               Additional options to configure retrieval.
     * @param {boolean} [options.strict=true]  Throw an Error if the requested ID is not in the set of invalid IDs for
     *                                         this collection.
     * @returns {Document}                     An in-memory instance for the invalid Document
     * @throws If strict is true and the requested ID is not in the set of invalid IDs for this collection.
     */
    getInvalid(id: string, { strict }?: {
        strict?: boolean;
    }): Document;
    /**
     * Get an element from the DocumentCollection by its ID.
     * @param {string} id                        The ID of the Document to retrieve.
     * @param {object} [options]                 Additional options to configure retrieval.
     * @param {boolean} [options.strict=false]   Throw an Error if the requested Document does not exist.
     * @param {boolean} [options.invalid=false]  Allow retrieving an invalid Document.
     * @returns {Document}
     * @throws If strict is true and the Document cannot be found.
     */
    get(id: string, { invalid, strict }?: {
        strict?: boolean;
        invalid?: boolean;
    }): Document;
    /** @inheritdoc */
    set(id: any, document: any): void;
    /** @inheritdoc */
    delete(id: any): void;
    /**
     * Render any Applications associated with this DocumentCollection.
     */
    render(force: any, options: any): void;
    /**
     * Find all Documents which match a given search term using a full-text search against their indexed HTML fields and their name.
     * If filters are provided, results are filtered to only those that match the provided values.
     * @param {object} search                      An object configuring the search
     * @param {string} [search.query]              A case-insensitive search string
     * @param {FieldFilter[]} [search.filters]     An array of filters to apply
     * @param {string[]} [search.exclude]          An array of document IDs to exclude from search results
     * @returns {string[]}
     */
    search({ query, filters, exclude }: {
        query?: string;
        filters?: FieldFilter[];
        exclude?: string[];
    }): string[];
    /**
     * Update all objects in this DocumentCollection with a provided transformation.
     * Conditionally filter to only apply to Entities which match a certain condition.
     * @param {Function|object} transformation    An object of data or function to apply to all matched objects
     * @param {Function|null}  condition          A function which tests whether to target each object
     * @param {object} [options]                  Additional options passed to Document.update
     * @return {Promise<Document[]>}              An array of updated data once the operation is complete
     */
    updateAll(transformation: Function | object, condition?: Function | null, options?: object): Promise<Document[]>;
    /**
     * Preliminary actions taken before a set of Documents in this Collection are created.
     * @param {object[]} result       An Array of created data objects
     * @param {object} options        Options which modified the creation operation
     * @param {string} userId         The ID of the User who triggered the operation
     * @internal
     */
    _preCreateDocuments(result: object[], options: object, userId: string): void;
    /**
     * Follow-up actions taken after a set of Documents in this Collection are created.
     * @param {Document[]} documents  An Array of created Documents
     * @param {object[]} result       An Array of created data objects
     * @param {object} options        Options which modified the creation operation
     * @param {string} userId         The ID of the User who triggered the operation
     * @internal
     */
    _onCreateDocuments(documents: Document[], result: object[], options: object, userId: string): void;
    /**
     * Preliminary actions taken before a set of Documents in this Collection are updated.
     * @param {object[]} result       An Array of incremental data objects
     * @param {object} options        Options which modified the update operation
     * @param {string} userId         The ID of the User who triggered the operation
     * @internal
     */
    _preUpdateDocuments(result: object[], options: object, userId: string): void;
    /**
     * Follow-up actions taken after a set of Documents in this Collection are updated.
     * @param {Document[]} documents  An Array of updated Documents
     * @param {object[]} result       An Array of incremental data objects
     * @param {object} options        Options which modified the update operation
     * @param {string} userId         The ID of the User who triggered the operation
     * @internal
     */
    _onUpdateDocuments(documents: Document[], result: object[], options: object, userId: string): void;
    /**
     * Preliminary actions taken before a set of Documents in this Collection are deleted.
     * @param {string[]} result       An Array of document IDs being deleted
     * @param {object} options        Options which modified the deletion operation
     * @param {string} userId         The ID of the User who triggered the operation
     * @internal
     */
    _preDeleteDocuments(result: string[], options: object, userId: string): void;
    /**
     * Follow-up actions taken after a set of Documents in this Collection are deleted.
     * @param {Document[]} documents  An Array of deleted Documents
     * @param {string[]} result       An Array of document IDs being deleted
     * @param {object} options        Options which modified the deletion operation
     * @param {string} userId         The ID of the User who triggered the operation
     * @internal
     */
    _onDeleteDocuments(documents: Document[], result: string[], options: object, userId: string): void;
    /**
     * Handle shifting documents in a deleted folder to a new parent folder.
     * @param {Folder} parentFolder     The parent folder to which documents should be shifted
     * @param {string} deleteFolderId   The ID of the folder being deleted
     * @param {boolean} deleteContents  Whether to delete the contents of the folder
     * @returns {string[]}              An array of document IDs to deleted
     * @internal
     */
    _onDeleteFolder(parentFolder: Folder, deleteFolderId: string, deleteContents: boolean): string[];
    /**
     * Generate the render context information provided for CRUD operations.
     * @param {string} action           The CRUD operation.
     * @param {Document[]} documents    The documents being operated on.
     * @param {object[]|string[]} data  An array of creation or update objects, or an array of document IDs, depending on
     *                                  the operation.
     * @returns {{action: string, documentType: string, documents: Document[], data: object[]|string[]}}
     * @protected
     */
    protected _getRenderContext(action: string, documents: Document[], data: object[] | string[]): {
        action: string;
        documentType: string;
        documents: Document[];
        data: object[] | string[];
    };
}
