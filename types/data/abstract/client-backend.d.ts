/**
 * The client-side database backend implementation which handles Document modification operations.
 */
declare class ClientDatabaseBackend {
    /**
     * Perform a standardized pre-creation workflow for all Document types. For internal use only.
     * @param {typeof Document} documentClass
     * @param {SocketRequest} request
     * @param {User} user
     */
    static "__#35@#preCreateDocumentArray"(documentClass: typeof Document, request: SocketRequest, user: User): Promise<Document[]>;
    /**
     * Perform a standardized post-creation workflow for all Document types. For internal use only.
     * @param {DocumentCollection} collection
     * @param {object[]} result
     * @param {ClientDocument} parent
     * @param {string} pack
     * @param {object} options
     * @param {string} userId
     * @returns {Array<function():Document>} An array of callback operations performed after every Document is created
     */
    static "__#35@#postCreateDocumentCallbacks"(collection: DocumentCollection, result: object[], parent: ClientDocument, pack: string, options: object, userId: string): Array<() => Document>;
    /**
     * Perform a standardized pre-update workflow for all Document types.
     * @param {DocumentCollection} collection
     * @param {SocketRequest} request
     * @param {User} user
     */
    static "__#35@#preUpdateDocumentArray"(collection: DocumentCollection, request: SocketRequest, user: User): Promise<any[]>;
    /**
     * Perform a standardized post-update workflow for all Document types.
     * @param {DocumentCollection} collection
     * @param {object[]} result
     * @param {object} options
     * @param {string} userId
     * @returns {Array<function():Document>} An array of callback operations performed after every Document is updated
     */
    static "__#35@#postUpdateDocumentCallbacks"(collection: DocumentCollection, result: object[], options: object, userId: string): Array<() => Document>;
    /**
     * Perform a standardized pre-delete workflow for all Document types.
     * @param {DocumentCollection} collection
     * @param {string[]} ids
     * @param {object} options
     * @param {User} user
     */
    static "__#35@#preDeleteDocumentArray"(collection: DocumentCollection, ids: string[], options: object, user: User): Promise<string[]>;
    /**
     * Perform a standardized post-deletion workflow for all Document types.
     * @param {DocumentCollection} collection
     * @param {string[]} ids
     * @param {object} options
     * @param {string} userId
     * @returns {Array<function():Document>} An array of callback operations performed after every Document is deleted
     */
    static "__#35@#postDeleteDocumentCallbacks"(collection: DocumentCollection, ids: string[], options: object, userId: string): Array<() => Document>;
    /**
     * Get the parent document for given request from its provided UUID, if any.
     * @param {string|null} uuid          The parent document UUID, or null
     * @param {object} [options]          Options which customize how the parent document is retrieved by UUID
     * @returns {Promise<ClientDocument>} The parent document for the transaction
     */
    static "__#35@#getParent"(uuid: string | null, options?: object): Promise<ClientDocument>;
    /**
     * Obtain the document collection for a given Document type, parent, and compendium pack.
     * @param {string} documentName           The Document name
     * @param {ClientDocument|null} parent    A parent Document, if applicable
     * @param {string} pack                   A compendium pack identifier, if applicable
     * @returns {DocumentCollection|CompendiumCollection}  The relevant collection instance for this request
     */
    static "__#35@#getCollection"(documentName: string, parent: ClientDocument | null, pack: string): DocumentCollection | CompendiumCollection;
    /**
     * Build a CRUD request.
     * @param {SocketRequest} request  The initial request data.
     * @returns {SocketRequest}
     */
    static "__#35@#buildRequest"({ documentClass, action, data, updates, ids, options, pack, parent }: SocketRequest): SocketRequest;
    /**
     * Build a CRUD response.
     * @param {object} response                      The response data.
     * @param {string} response.action               The type of response.
     * @param {ClientDocument[]} response.documents  The initial response result.
     * @param {object} response.options              The response options.
     * @returns {ClientDocument[]}
     */
    static "__#35@#buildResponse"({ action, documents, options }: {
        action: string;
        documents: ClientDocument[];
        options: object;
    }): ClientDocument[];
    /**
     * Retrieve a Document's Token ancestor, if it exists.
     * @param {ClientDocument} parent   The parent Document
     * @returns {TokenDocument|null}    The Token ancestor, or null
     */
    static "__#35@#getTokenAncestor"(parent: ClientDocument): TokenDocument | null;
    /** @inheritdoc */
    _getDocuments(documentClass: any, { query, options, pack }: {
        query: any;
        options: any;
        pack: any;
    }, user: any): Promise<any>;
    /** @inheritdoc */
    _createDocuments(documentClass: any, context: any, user: any): Promise<Document[]>;
    /** @inheritdoc */
    _updateDocuments(documentClass: any, context: any, user: any): Promise<Document[]>;
    /** @inheritdoc */
    _deleteDocuments(documentClass: any, context: any, user: any): Promise<Document[]>;
    /**
     * Activate the Socket event listeners used to receive responses from events which modify database documents
     * @param {Socket} socket   The active game socket
     */
    activateSocketListeners(socket: Socket): void;
    /** @inheritdoc */
    getFlagScopes(): any[];
    /** @inheritdoc */
    getCompendiumScopes(): any[];
    #private;
}
