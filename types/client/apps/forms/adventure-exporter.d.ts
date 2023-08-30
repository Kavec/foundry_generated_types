/**
 * An interface for packaging Adventure content and loading it to a compendium pack.
 * // TODO - add a warning if you are building the adventure with any missing content
 * // TODO - add a warning if you are building an adventure that sources content from a different package' compendium
 */
declare class AdventureExporter extends DocumentSheet {
    /** @inheritDoc */
    static get defaultOptions(): any;
    constructor(document: any, options?: {});
    /**
     * An alias for the Adventure document
     * @type {Adventure}
     */
    adventure: Adventure;
    /**
     * @typedef {Object} AdventureContentTreeNode
     * @property {string} id        An alias for folder.id
     * @property {string} name      An alias for folder.name
     * @property {Folder} folder    The Folder at this node level
     * @property {string} state     The modification state of the Folder
     * @property {AdventureContentTreeNode[]} children  An array of child nodes
     * @property {{id: string, name: string, document: ClientDocument, state: string}[]} documents  An array of documents
     */
    /**
     * @typedef {AdventureContentTreeNode} AdventureContentTreeRoot
     * @property {null} id                The folder ID is null at the root level
     * @property {string} documentName    The Document name contained in this tree
     * @property {string} collection      The Document collection name of this tree
     * @property {string} name            The name displayed at the root level of the tree
     * @property {string} icon            The icon displayed at the root level of the tree
     * @property {string} collapseIcon    The icon which represents the current collapsed state of the tree
     * @property {string} cssClass        CSS classes which describe the display of the tree
     * @property {number} documentCount   The number of documents which are present in the tree
     */
    /**
     * The prepared document tree which is displayed in the form.
     * @type {Object<AdventureContentTreeRoot>}
     */
    contentTree: any;
    /** @override */
    override getData(options?: {}): Promise<{
        adventure: Adventure;
        contentTree: any;
    }>;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
    /**
     * Stage a document for addition to the Adventure.
     * This adds the document locally, the change is not yet submitted to the database.
     * @param {Folder|ClientDocument} document    Some document to be added to the Adventure.
     */
    addContent(document: Folder | ClientDocument): void;
    /**
     * Remove a single Document from the Adventure.
     * @param {ClientDocument} document       The Document being removed from the Adventure.
     */
    removeContent(document: ClientDocument): any;
    #private;
}
type AdventureContentTreeNode = {
    /**
     * An alias for folder.id
     */
    id: string;
    /**
     * An alias for folder.name
     */
    name: string;
    /**
     * The Folder at this node level
     */
    folder: Folder;
    /**
     * The modification state of the Folder
     */
    state: string;
    /**
     * An array of child nodes
     */
    children: any[];
    /**
     * An array of documents
     */
    documents: {
        id: string;
        name: string;
        document: ClientDocument;
        state: string;
    }[];
};
type AdventureContentTreeRoot = {
    /**
     * An alias for folder.id
     */
    id: string;
    /**
     * An alias for folder.name
     */
    name: string;
    /**
     * The Folder at this node level
     */
    folder: Folder;
    /**
     * The modification state of the Folder
     */
    state: string;
    /**
     * An array of child nodes
     */
    children: any[];
    /**
     * An array of documents
     */
    documents: {
        id: string;
        name: string;
        document: ClientDocument;
        state: string;
    }[];
};
