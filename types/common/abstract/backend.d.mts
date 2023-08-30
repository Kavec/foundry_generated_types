export default DatabaseBackend;
/**
 * An interface shared by both the client and server-side which defines how creation, update, and deletion operations are transacted.
 * @abstract
 * @interface
 * @memberof abstract
 */
declare class DatabaseBackend {
    /**
     * Retrieve Documents based on provided query parameters
     * @param {Function} documentClass        The Document definition
     * @param {object} context                Context for the requested operation
     * @param {BaseUser} [user]               The requesting User
     * @returns {Promise<Document[]>}         The created Document instances
     */
    get(documentClass: Function, context: object, user?: BaseUser): Promise<Document[]>;
    /**
     * Validate the arguments passed to the get operation
     * @param {object} context                The requested operation
     * @param {object} [context.query={}]     A document search query to execute
     * @param {object} [context.options={}]   Operation options
     * @param {string} [context.pack]         A Compendium pack identifier
     * @private
     */
    private _getArgs;
    /**
     * Get primary Document instances
     * @protected
     */
    protected _getDocuments(documentClass: any, request: any, user: any): Promise<void>;
    /**
     * Get the parent Document (if any) associated with a request context.
     * @param {object} context                The requested operation
     * @return {Promise<Document|null>}       The parent Document, or null
     * @private
     */
    private _getParent;
    /**
     * Perform document creation operations
     * @param {Function} documentClass        The Document definition
     * @param {object} context                Context for the requested operation
     * @param {BaseUser} [user]               The requesting User
     * @returns {Promise<Document[]>}         The created Document instances
     */
    create(documentClass: Function, context: object, user?: BaseUser): Promise<Document[]>;
    /**
     * Validate the arguments passed to the create operation
     * @param {object} context                The requested operation
     * @param {object[]} context.data         An array of document data
     * @param {object} [context.options={}]   Operation options
     * @param {string} [context.pack]         A Compendium pack identifier
     * @private
     */
    private _createArgs;
    /**
     * Create primary Document instances
     * @returns {Promise<Document[]>}
     * @protected
     */
    protected _createDocuments(documentClass: any, context: any, user: any): Promise<Document[]>;
    /**
     * Perform document update operations
     * @param {Function} documentClass        The Document definition
     * @param {object} context                Context for the requested operation
     * @param {BaseUser} [user]               The requesting User
     * @returns {Promise<Document[]>}         The updated Document instances
     */
    update(documentClass: Function, context: object, user?: BaseUser): Promise<Document[]>;
    /**
     * Validate the arguments passed to the update operation
     * @param {object} context                The requested operation
     * @param {object[]} context.updates      An array of document data
     * @param {object} [context.options={}]   Operation options
     * @param {string} [context.pack]         A Compendium pack identifier
     * @private
     */
    private _updateArgs;
    /**
     * Update primary Document instances
     * @returns {Promise<Document[]>}
     * @protected
     */
    protected _updateDocuments(documentClass: any, context: any, user: any): Promise<Document[]>;
    /**
     * Perform document deletion operations
     * @param {Function} documentClass        The Document definition
     * @param {object} context                Context for the requested operation
     * @param {BaseUser} [user]               The requesting User
     * @returns {Promise<Document[]>}         The deleted Document instances
     */
    delete(documentClass: Function, context: object, user?: BaseUser): Promise<Document[]>;
    /**
     * Validate the arguments passed to the delete operation
     * @param {object} context                The requested operation
     * @param {string[]} context.ids          An array of document ids
     * @param {object} [context.options={}]   Operation options
     * @param {string} [context.pack]         A Compendium pack identifier
     * @private
     */
    private _deleteArgs;
    /**
     * Delete primary Document instances
     * @returns {Promise<Document[]>}
     * @protected
     */
    protected _deleteDocuments(documentClass: any, context: any, user: any): Promise<Document[]>;
    /**
     * Describe the scopes which are suitable as the namespace for a flag key
     * @returns {string[]}
     */
    getFlagScopes(): string[];
    /**
     * Describe the scopes which are suitable as the namespace for a flag key
     * @returns {string[]}
     */
    getCompendiumScopes(): string[];
    /**
     * Provide the Logger implementation that should be used for database operations
     * @return {Logger|Console}
     * @protected
     */
    protected _getLogger(): Logger | Console;
    /**
     * Log a database operation for an embedded document, capturing the action taken and relevant IDs
     * @param {string} action                       The action performed
     * @param {string} type                         The document type
     * @param {abstract.Document[]} documents       The documents modified
     * @param {string} [level=info]                 The logging level
     * @param {abstract.Document} [parent]          A parent document
     * @param {string} [pack]                       A compendium pack within which the operation occurred
     * @protected
     */
    protected _logOperation(action: string, type: string, documents: abstract.Document[], { parent, pack, level }?: string): void;
    /**
     * Construct a standardized error message given the context of an attempted operation
     * @returns {string}
     * @protected
     */
    protected _logError(user: any, action: any, subject: any, { parent, pack }?: {
        parent: any;
        pack: any;
    }): string;
    /**
     * Determine a string suffix for a log message based on the parent and/or compendium context.
     * @returns {string}
     * @private
     */
    private _logContext;
}
import Document from "./document.mjs";
