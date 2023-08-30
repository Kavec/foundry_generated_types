/**
 * An extension of the base DataModel which defines a Document.
 * Documents are special in that they are persisted to the database and referenced by _id.
 * @extends abstract.DataModel
 * @memberof abstract
 * @abstract
 *
 * @param {object} data                           Initial data from which to construct the Document
 * @param {DocumentConstructionContext} context   Construction context options
 */
export default class Document {
    /** @override */
    static override _initializationOrder(): Generator<any[], void, unknown>;
    /**
     * Default metadata which applies to each instance of this Document type.
     * @type {object}
     */
    static metadata: object;
    /**
     * The database backend used to execute operations and handle results.
     * @type {abstract.DatabaseBackend}
     */
    static get database(): abstract.DatabaseBackend;
    /**
     * Return a reference to the configured subclass of this base Document type.
     * @type {Class}
     */
    static get implementation(): Class;
    /**
     * The named collection to which this Document belongs.
     * @type {string}
     */
    static get collectionName(): string;
    /**
     * The canonical name of this Document type, for example "Actor".
     * @type {string}
     */
    static get documentName(): string;
    /**
     * Does this Document support additional sub-types?
     * @type {boolean}
     */
    static get hasTypeData(): boolean;
    /**
     * The Embedded Document hierarchy for this Document.
     * @returns {Object<DataField>}
     */
    static get hierarchy(): any;
    /**
     * Test whether a given User has a sufficient role in order to create Documents of this type in general.
     * @param {documents.BaseUser} user       The User being tested
     * @return {boolean}                      Does the User have a sufficient role to create?
     */
    static canUserCreate(user: documents.BaseUser): boolean;
    /**
     * Create multiple Documents using provided input data.
     * Data is provided as an array of objects where each individual object becomes one new Document.
     *
     * @param {object[]} data                     An array of data objects used to create multiple documents
     * @param {DocumentModificationContext} [context={}] Additional context which customizes the creation workflow
     * @return {Promise<Document[]>}              An array of created Document instances
     *
     * @example Create a single Document
     * ```js
     * const data = [{name: "New Actor", type: "character", img: "path/to/profile.jpg"}];
     * const created = await Actor.createDocuments(data);
     * ```
     *
     * @example Create multiple Documents
     * ```js
     * const data = [{name: "Tim", type: "npc"], [{name: "Tom", type: "npc"}];
     * const created = await Actor.createDocuments(data);
     * ```
     *
     * @example Create multiple embedded Documents within a parent
     * ```js
     * const actor = game.actors.getName("Tim");
     * const data = [{name: "Sword", type: "weapon"}, {name: "Breastplate", type: "equipment"}];
     * const created = await Item.createDocuments(data, {parent: actor});
     * ```
     *
     * @example Create a Document within a Compendium pack
     * ```js
     * const data = [{name: "Compendium Actor", type: "character", img: "path/to/profile.jpg"}];
     * const created = await Actor.createDocuments(data, {pack: "mymodule.mypack"});
     * ```
     */
    static createDocuments(data?: object[], context?: DocumentModificationContext): Promise<Document[]>;
    /**
     * Update multiple Document instances using provided differential data.
     * Data is provided as an array of objects where each individual object updates one existing Document.
     *
     * @param {object[]} updates                  An array of differential data objects, each used to update a single Document
     * @param {DocumentModificationContext} [context={}] Additional context which customizes the update workflow
     * @return {Promise<Document[]>}              An array of updated Document instances
     *
     * @example Update a single Document
     * ```js
     * const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}];
     * const updated = await Actor.updateDocuments(updates);
     * ```
     *
     * @example Update multiple Documents
     * ```js
     * const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}, {_id: "kj549dk48k34jk34", name: "Thomas"}]};
     * const updated = await Actor.updateDocuments(updates);
     * ```
     *
     * @example Update multiple embedded Documents within a parent
     * ```js
     * const actor = game.actors.getName("Timothy");
     * const updates = [{_id: sword.id, name: "Magic Sword"}, {_id: shield.id, name: "Magic Shield"}];
     * const updated = await Item.updateDocuments(updates, {parent: actor});
     * ```
     *
     * @example Update Documents within a Compendium pack
     * ```js
     * const actor = await pack.getDocument(documentId);
     * const updated = await Actor.updateDocuments([{_id: actor.id, name: "New Name"}], {pack: "mymodule.mypack"});
     * ```
     */
    static updateDocuments(updates?: object[], context?: DocumentModificationContext): Promise<Document[]>;
    /**
     * Delete one or multiple existing Documents using an array of provided ids.
     * Data is provided as an array of string ids for the documents to delete.
     *
     * @param {string[]} ids                      An array of string ids for the documents to be deleted
     * @param {DocumentModificationContext} [context={}] Additional context which customizes the deletion workflow
     * @return {Promise<Document[]>}              An array of deleted Document instances
     *
     * @example Delete a single Document
     * ```js
     * const tim = game.actors.getName("Tim");
     * const deleted = await Actor.deleteDocuments([tim.id]);
     * ```
     *
     * @example Delete multiple Documents
     * ```js
     * const tim = game.actors.getName("Tim");
     * const tom = game.actors.getName("Tom");
     * const deleted = await Actor.deleteDocuments([tim.id, tom.id]);
     * ```
     *
     * @example Delete multiple embedded Documents within a parent
     * ```js
     * const tim = game.actors.getName("Tim");
     * const sword = tim.items.getName("Sword");
     * const shield = tim.items.getName("Shield");
     * const deleted = await Item.deleteDocuments([sword.id, shield.id], parent: actor});
     * ```
     *
     * @example Delete Documents within a Compendium pack
     * ```js
     * const actor = await pack.getDocument(documentId);
     * const deleted = await Actor.deleteDocuments([actor.id], {pack: "mymodule.mypack"});
     * ```
     */
    static deleteDocuments(ids?: string[], context?: DocumentModificationContext): Promise<Document[]>;
    /**
     * Create a new Document using provided input data, saving it to the database.
     * @see {@link Document.createDocuments}
     * @param {object} [data={}]                  Initial data used to create this Document
     * @param {DocumentModificationContext} [context={}] Additional context which customizes the creation workflow
     * @return {Promise<Document>}                The created Document instance
     *
     * @example Create a World-level Item
     * ```js
     * const data = [{name: "Special Sword", type: "weapon"}];
     * const created = await Item.create(data);
     * ```
     *
     * @example Create an Actor-owned Item
     * ```js
     * const data = [{name: "Special Sword", type: "weapon"}];
     * const actor = game.actors.getName("My Hero");
     * const created = await Item.create(data, {parent: actor});
     * ```
     *
     * @example Create an Item in a Compendium pack
     * ```js
     * const data = [{name: "Special Sword", type: "weapon"}];
     * const created = await Item.create(data, {pack: "mymodule.mypack"});
     * ```
     */
    static create(data?: object, context?: DocumentModificationContext): Promise<Document>;
    /**
     * Get a World-level Document of this type by its id.
     * @param {string} documentId         The Document ID
     * @param {object} [options={}]       Additional options which customize the request
     * @returns {abstract.Document|null}  The retrieved Document, or null
     */
    static get(documentId: string, options?: object): abstract.Document | null;
    /**
     * A compatibility method that returns the appropriate name of an embedded collection within this Document.
     * @param {string} name    An existing collection name or a document name.
     * @returns {string|null}  The provided collection name if it exists, the first available collection for the
     *                         document name provided, or null if no appropriate embedded collection could be found.
     * @example Passing an existing collection name.
     * ```js
     * Actor.getCollectionName("items");
     * // returns "items"
     * ```
     *
     * @example Passing a document name.
     * ```js
     * Actor.getCollectionName("Item");
     * // returns "items"
     * ```
     */
    static getCollectionName(name: string): string | null;
    /**
     * Perform follow-up operations when a set of Documents of this type are created.
     * This is where side effects of creation should be implemented.
     * Post-creation side effects are performed only for the client which requested the operation.
     * @param {Document[]} documents                    The Document instances which were created
     * @param {DocumentModificationContext} context     The context for the modification operation
     * @protected
     */
    protected static _onCreateDocuments(documents: Document[], context: DocumentModificationContext): Promise<void>;
    /**
     * Perform follow-up operations when a set of Documents of this type are updated.
     * This is where side effects of updates should be implemented.
     * Post-update side effects are performed only for the client which requested the operation.
     * @param {Document[]} documents                    The Document instances which were updated
     * @param {DocumentModificationContext} context     The context for the modification operation
     * @protected
     */
    protected static _onUpdateDocuments(documents: Document[], context: DocumentModificationContext): Promise<void>;
    /**
     * Perform follow-up operations when a set of Documents of this type are deleted.
     * This is where side effects of deletion should be implemented.
     * Post-deletion side effects are performed only for the client which requested the operation.
     * @param {Document[]} documents                    The Document instances which were deleted
     * @param {DocumentModificationContext} context     The context for the modification operation
     * @protected
     */
    protected static _onDeleteDocuments(documents: Document[], context: DocumentModificationContext): Promise<void>;
    /**
     * Configure whether V10 Document Model migration warnings should be logged for this class.
     * @ignore
     */
    static LOG_V10_COMPATIBILITY_WARNINGS: boolean;
    /**
     * @deprecated since v11
     * @ignore
     */
    static get hasSystemData(): boolean;
    /**
     * A reusable helper for adding migration shims.
     * @protected
     * @ignore
     */
    protected static _addDataFieldShims(data: any, shims: any, options: any): void;
    /**
     * A reusable helper for adding a migration shim
     * @protected
     * @ignore
     */
    protected static _addDataFieldShim(data: any, oldKey: any, newKey: any, options?: {}): void;
    /**
     * Define a simple migration from one field name to another.
     * The value of the data can be transformed during the migration by an optional application function.
     * @param {object} data     The data object being migrated
     * @param {string} oldKey   The old field name
     * @param {string} newKey   The new field name
     * @param {function(data: object): any} [apply] An application function, otherwise the old value is applied
     * @internal
     */
    static _addDataFieldMigration(data: object, oldKey: string, newKey: string, apply: any): void;
    /** @protected */
    protected static _logDataFieldMigration(oldKey: any, newKey: any, options?: {}): void;
    /** @protected */
    protected static _logV10CompatibilityWarning(options: any): void;
    /** @override */
    override _configure({ pack, parentCollection }?: {
        pack?: any;
        parentCollection?: any;
    }): void;
    /** @inheritdoc */
    _initialize(options?: {}): void;
    get collectionName(): any;
    get documentName(): any;
    /**
     * Determine the collection this Document exists in on its parent, if any.
     * @param {string} [parentCollection]  An explicitly provided parent collection name.
     * @returns {string|null}
     * @private
     */
    private _getParentCollection;
    /**
     * The canonical identifier for this Document.
     * @type {string|null}
     */
    get id(): string;
    /**
     * Test whether this Document is embedded within a parent Document
     * @type {boolean}
     */
    get isEmbedded(): boolean;
    /**
     * Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT_OWNERSHIP_LEVELS.
     * This method returns the value recorded in Document ownership, regardless of the User's role.
     * To test whether a user has a certain capability over the document, testUserPermission should be used.
     * @param {documents.BaseUser} user     The User being tested
     * @returns {number|null}               A numeric permission level from CONST.DOCUMENT_OWNERSHIP_LEVELS or null
     */
    getUserLevel(user: documents.BaseUser): number | null;
    /**
     * Test whether a certain User has a requested permission level (or greater) over the Document
     * @param {documents.BaseUser} user       The User being tested
     * @param {string|number} permission      The permission level from DOCUMENT_OWNERSHIP_LEVELS to test
     * @param {object} options                Additional options involved in the permission test
     * @param {boolean} [options.exact=false]     Require the exact permission level requested?
     * @return {boolean}                      Does the user have this permission level over the Document?
     */
    testUserPermission(user: documents.BaseUser, permission: string | number, { exact }?: {
        exact?: boolean;
    }): boolean;
    /**
     * Test whether a given User has permission to perform some action on this Document
     * @param {documents.BaseUser} user   The User attempting modification
     * @param {string} action             The attempted action
     * @param {object} [data]             Data involved in the attempted action
     * @return {boolean}                  Does the User have permission?
     */
    canUserModify(user: documents.BaseUser, action: string, data?: object): boolean;
    /**
     * Clone a document, creating a new document by combining current data with provided overrides.
     * The cloned document is ephemeral and not yet saved to the database.
     * @param {Object} [data={}]                    Additional data which overrides current document data at the time of creation
     * @param {DocumentConstructionContext} [context={}] Additional context options passed to the create method
     * @param {boolean} [context.save=false]             Save the clone to the World database?
     * @param {boolean} [context.keepId=false]           Keep the same ID of the original document
     * @returns {Document|Promise<Document>}        The cloned Document instance
     */
    clone(data?: any, { save, keepId, ...context }?: DocumentConstructionContext): Document | Promise<Document>;
    /**
     * For Documents which include game system data, migrate the system data object to conform to its latest data model.
     * The data model is defined by the template.json specification included by the game system.
     * @returns {object}              The migrated system data object
     */
    migrateSystemData(): object;
    /**
     * Update this Document using incremental data, saving it to the database.
     * @see {@link Document.updateDocuments}
     * @param {object} [data={}]                  Differential update data which modifies the existing values of this document data
     * @param {DocumentModificationContext} [context={}] Additional context which customizes the update workflow
     * @returns {Promise<Document>}               The updated Document instance
     */
    update(data?: object, context?: DocumentModificationContext): Promise<Document>;
    /**
     * Delete this Document, removing it from the database.
     * @see {@link Document.deleteDocuments}
     * @param {DocumentModificationContext} [context={}] Additional context which customizes the deletion workflow
     * @returns {Promise<Document>}               The deleted Document instance
     */
    delete(context?: DocumentModificationContext): Promise<Document>;
    /**
     * Obtain a reference to the Array of source data within the data object for a certain embedded Document name
     * @param {string} embeddedName   The name of the embedded Document type
     * @return {DocumentCollection}   The Collection instance of embedded Documents of the requested type
     */
    getEmbeddedCollection(embeddedName: string): DocumentCollection;
    /**
     * Get an embedded document by its id from a named collection in the parent document.
     * @param {string} embeddedName              The name of the embedded Document type
     * @param {string} id                        The id of the child document to retrieve
     * @param {object} [options]                 Additional options which modify how embedded documents are retrieved
     * @param {boolean} [options.strict=false]   Throw an Error if the requested id does not exist. See Collection#get
     * @param {boolean} [options.invalid=false]  Allow retrieving an invalid Embedded Document.
     * @return {Document}                        The retrieved embedded Document instance, or undefined
     * @throws If the embedded collection does not exist, or if strict is true and the Embedded Document could not be
     *         found.
     */
    getEmbeddedDocument(embeddedName: string, id: string, { invalid, strict }?: {
        strict?: boolean;
        invalid?: boolean;
    }): Document;
    /**
     * Create multiple embedded Document instances within this parent Document using provided input data.
     * @see {@link Document.createDocuments}
     * @param {string} embeddedName               The name of the embedded Document type
     * @param {object[]} data                     An array of data objects used to create multiple documents
     * @param {DocumentModificationContext} [context={}] Additional context which customizes the creation workflow
     * @return {Promise<Document[]>}              An array of created Document instances
     */
    createEmbeddedDocuments(embeddedName: string, data?: object[], context?: DocumentModificationContext): Promise<Document[]>;
    /**
     * Update multiple embedded Document instances within a parent Document using provided differential data.
     * @see {@link Document.updateDocuments}
     * @param {string} embeddedName               The name of the embedded Document type
     * @param {object[]} updates                  An array of differential data objects, each used to update a single Document
     * @param {DocumentModificationContext} [context={}] Additional context which customizes the update workflow
     * @return {Promise<Document[]>}              An array of updated Document instances
     */
    updateEmbeddedDocuments(embeddedName: string, updates?: object[], context?: DocumentModificationContext): Promise<Document[]>;
    /**
     * Delete multiple embedded Document instances within a parent Document using provided string ids.
     * @see {@link Document.deleteDocuments}
     * @param {string} embeddedName               The name of the embedded Document type
     * @param {string[]} ids                      An array of string ids for each Document to be deleted
     * @param {DocumentModificationContext} [context={}] Additional context which customizes the deletion workflow
     * @return {Promise<Document[]>}              An array of deleted Document instances
     */
    deleteEmbeddedDocuments(embeddedName: string, ids: string[], context?: DocumentModificationContext): Promise<Document[]>;
    /**
     * Get the value of a "flag" for this document
     * See the setFlag method for more details on flags
     *
     * @param {string} scope        The flag scope which namespaces the key
     * @param {string} key          The flag key
     * @return {*}                  The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this document.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     *
     * @param {string} scope        The flag scope which namespaces the key
     * @param {string} key          The flag key
     * @param {*} value             The flag value
     * @return {Promise<Document>}  A Promise resolving to the updated document
     */
    setFlag(scope: string, key: string, value: any): Promise<Document>;
    /**
     * Remove a flag assigned to the document
     * @param {string} scope        The flag scope which namespaces the key
     * @param {string} key          The flag key
     * @return {Promise<Document>}  The updated document instance
     */
    unsetFlag(scope: string, key: string): Promise<Document>;
    /**
     * Perform preliminary operations before a Document of this type is created.
     * Pre-creation operations only occur for the client which requested the operation.
     * Modifications to the pending document before it is persisted should be performed with this.updateSource().
     * @param {object} data               The initial data object provided to the document creation request
     * @param {object} options            Additional options which modify the creation request
     * @param {documents.BaseUser} user   The User requesting the document creation
     * @returns {Promise<boolean|void>}   A return value of false indicates the creation operation should be cancelled.
     * @protected
     */
    protected _preCreate(data: object, options: object, user: documents.BaseUser): Promise<boolean | void>;
    /**
     * Perform preliminary operations before a Document of this type is updated.
     * Pre-update operations only occur for the client which requested the operation.
     * @param {object} changed            The differential data that is changed relative to the documents prior values
     * @param {object} options            Additional options which modify the update request
     * @param {documents.BaseUser} user   The User requesting the document update
     * @returns {Promise<boolean|void>}   A return value of false indicates the update operation should be cancelled.
     * @protected
     */
    protected _preUpdate(changed: object, options: object, user: documents.BaseUser): Promise<boolean | void>;
    /**
     * Perform preliminary operations before a Document of this type is deleted.
     * Pre-delete operations only occur for the client which requested the operation.
     * @param {object} options            Additional options which modify the deletion request
     * @param {documents.BaseUser} user   The User requesting the document deletion
     * @returns {Promise<boolean|void>}   A return value of false indicates the deletion operation should be cancelled.
     * @protected
     */
    protected _preDelete(options: object, user: documents.BaseUser): Promise<boolean | void>;
    /**
     * Perform follow-up operations after a Document of this type is created.
     * Post-creation operations occur for all clients after the creation is broadcast.
     * @param {object} data               The initial data object provided to the document creation request
     * @param {object} options            Additional options which modify the creation request
     * @param {string} userId             The id of the User requesting the document update
     * @protected
     */
    protected _onCreate(data: object, options: object, userId: string): void;
    /**
     * Perform follow-up operations after a Document of this type is updated.
     * Post-update operations occur for all clients after the update is broadcast.
     * @param {object} changed            The differential data that was changed relative to the documents prior values
     * @param {object} options            Additional options which modify the update request
     * @param {string} userId             The id of the User requesting the document update
     * @protected
     */
    protected _onUpdate(changed: object, options: object, userId: string): void;
    /**
     * Perform follow-up operations after a Document of this type is deleted.
     * Post-deletion operations occur for all clients after the deletion is broadcast.
     * @param {object} options            Additional options which modify the deletion request
     * @param {string} userId             The id of the User requesting the document update
     * @protected
     */
    protected _onDelete(options: object, userId: string): void;
    /**
     * @deprecated since v10
     * @ignore
     */
    get data(): any;
    /** @inheritdoc */
    toObject(source?: boolean): any;
}
