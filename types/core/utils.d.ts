/**
 * Export data content to be saved to a local file
 * @param {string} data       Data content converted to a string
 * @param {string} type       The type of
 * @param {string} filename   The filename of the resulting download
 */
declare function saveDataToFile(data: string, type: string, filename: string): void;
/**
 * Read text data from a user provided File object
 * @param {File} file           A File object
 * @return {Promise.<String>}   A Promise which resolves to the loaded text data
 */
declare function readTextFromFile(file: File): Promise<string>;
/**
 * Retrieve a Document by its Universally Unique Identifier (uuid).
 * @param {string} uuid                      The uuid of the Document to retrieve.
 * @param {object} [options]                 Options to configure how a UUID is resolved.
 * @param {Document} [options.relative]      A Document to resolve relative UUIDs against.
 * @param {boolean} [options.invalid=false]  Allow retrieving an invalid Document.
 * @returns {Promise<Document|null>}         Returns the Document if it could be found, otherwise null.
 */
declare function fromUuid(uuid: string, options?: {
    relative?: Document;
    invalid?: boolean;
}): Promise<Document | null>;
/**
 * Retrieve a Document by its Universally Unique Identifier (uuid) synchronously. If the uuid resolves to a compendium
 * document, that document's index entry will be returned instead.
 * @param {string} uuid                      The uuid of the Document to retrieve.
 * @param {object} [options]                 Options to configure how a UUID is resolved.
 * @param {Document} [options.relative]      A Document to resolve relative UUIDs against.
 * @param {boolean} [options.invalid=false]  Allow retrieving an invalid Document.
 * @param {boolean} [options.strict=true]    Throw an error if the UUID cannot be resolved synchronously.
 * @returns {Document|object|null}           The Document or its index entry if it resides in a Compendium, otherwise
 *                                           null.
 * @throws If the uuid resolves to a Document that cannot be retrieved synchronously, and the strict option is true.
 */
declare function fromUuidSync(uuid: string, options?: {
    relative?: Document;
    invalid?: boolean;
    strict?: boolean;
}): Document | object | null;
/**
 * Resolve a series of embedded document UUID parts against a parent Document.
 * @param {Document} parent                  The parent Document.
 * @param {string[]} parts                   A series of Embedded Document UUID parts.
 * @param {object} [options]                 Additional options to configure Embedded Document resolution.
 * @param {boolean} [options.invalid=false]  Allow retrieving an invalid Embedded Document.
 * @returns {Document}                       The resolved Embedded Document.
 * @private
 */
declare function _resolveEmbedded(parent: Document, parts: string[], { invalid }?: {
    invalid?: boolean;
}): Document;
/**
 * Return a reference to the Document class implementation which is configured for use.
 * @param {string} documentName     The canonical Document name, for example "Actor"
 * @returns {typeof Document}       The configured Document class implementation
 */
declare function getDocumentClass(documentName: string): typeof Document;
