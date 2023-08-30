/**
 * A data structure for quickly retrieving objects by a string prefix.
 * Note that this works well for languages with alphabets (latin, cyrillic, korean, etc.), but may need more nuanced
 * handling for languages that compose characters and letters.
 */
declare class WordTree {
    /**
     * Create a new node.
     * @returns {WordTreeNode}
     */
    get node(): {
        /**
         * Any leaves at this node.
         */
        leaves: {
            /**
             * An object that this entry represents.
             */
            entry: Document | object;
            /**
             * The document type.
             */
            documentName: string;
            /**
             * The document's UUID.
             */
            uuid: string;
            /**
             * The pack ID.
             */
            pack?: string;
        }[];
    };
    /**
     * Insert an entry into the tree.
     * @param {string} string        The string key for the entry.
     * @param {WordTreeEntry} entry  The entry to store.
     * @returns {WordTreeNode}       The node the entry was added to.
     */
    addLeaf(string: string, entry: {
        /**
         * An object that this entry represents.
         */
        entry: Document | object;
        /**
         * The document type.
         */
        documentName: string;
        /**
         * The document's UUID.
         */
        uuid: string;
        /**
         * The pack ID.
         */
        pack?: string;
    }): {
        /**
         * Any leaves at this node.
         */
        leaves: {
            /**
             * An object that this entry represents.
             */
            entry: Document | object;
            /**
             * The document type.
             */
            documentName: string;
            /**
             * The document's UUID.
             */
            uuid: string;
            /**
             * The pack ID.
             */
            pack?: string;
        }[];
    };
    /**
     * Return entries that match the given string prefix.
     * @param {string} prefix              The prefix.
     * @param {object} [options]           Additional options to configure behaviour.
     * @param {number} [options.limit=10]  The maximum number of items to retrieve. It is important to set this value as
     *                                     very short prefixes will naturally match large numbers of entries.
     * @returns {WordTreeEntry[]}          A number of entries that have the given prefix.
     */
    lookup(prefix: string, { limit }?: {
        limit?: number;
    }): {
        /**
         * An object that this entry represents.
         */
        entry: Document | object;
        /**
         * The document type.
         */
        documentName: string;
        /**
         * The document's UUID.
         */
        uuid: string;
        /**
         * The pack ID.
         */
        pack?: string;
    }[];
    /**
     * Returns the node at the given prefix.
     * @param {string} prefix  The prefix.
     * @returns {WordTreeNode}
     */
    nodeAtPrefix(prefix: string): {
        /**
         * Any leaves at this node.
         */
        leaves: {
            /**
             * An object that this entry represents.
             */
            entry: Document | object;
            /**
             * The document type.
             */
            documentName: string;
            /**
             * The document's UUID.
             */
            uuid: string;
            /**
             * The pack ID.
             */
            pack?: string;
        }[];
    };
    /**
     * Perform a breadth-first search starting from the given node and retrieving any entries along the way, until we
     * reach the limit.
     * @param {WordTreeNode} node          The starting node.
     * @param {WordTreeEntry[]} entries    The accumulated entries.
     * @param {WordTreeNode[]} queue       The working queue of nodes to search.
     * @param {object} [options]           Additional options for the search.
     * @param {number} [options.limit=10]  The maximum number of entries to retrieve before stopping.
     * @protected
     */
    protected _breadthFirstSearch(node: {
        /**
         * Any leaves at this node.
         */
        leaves: {
            /**
             * An object that this entry represents.
             */
            entry: Document | object;
            /**
             * The document type.
             */
            documentName: string;
            /**
             * The document's UUID.
             */
            uuid: string;
            /**
             * The pack ID.
             */
            pack?: string;
        }[];
    }, entries: {
        /**
         * An object that this entry represents.
         */
        entry: Document | object;
        /**
         * The document type.
         */
        documentName: string;
        /**
         * The document's UUID.
         */
        uuid: string;
        /**
         * The pack ID.
         */
        pack?: string;
    }[], queue: {
        /**
         * Any leaves at this node.
         */
        leaves: {
            /**
             * An object that this entry represents.
             */
            entry: Document | object;
            /**
             * The document type.
             */
            documentName: string;
            /**
             * The document's UUID.
             */
            uuid: string;
            /**
             * The pack ID.
             */
            pack?: string;
        }[];
    }[], { limit }?: {
        limit?: number;
    }): void;
    #private;
}
/**
 * This class is responsible for indexing all documents available in the world and storing them in a word tree structure
 * that allows for fast searching.
 */
declare class DocumentIndex {
    /**
     * Returns a Promise that resolves when the indexing process is complete.
     * @returns {Promise<void>|null}
     */
    get ready(): Promise<void>;
    /**
     * Index all available documents in the world and store them in a word tree.
     * @returns {Promise<void>}
     */
    index(): Promise<void>;
    /**
     * Return entries that match the given string prefix.
     * @param {string} prefix                     The prefix.
     * @param {object} [options]                  Additional options to configure behaviour.
     * @param {string[]} [options.documentTypes]  Optionally provide an array of document types. Only entries of that type
     *                                            will be searched for.
     * @param {number} [options.limit=10]         The maximum number of items per document type to retrieve. It is
     *                                            important to set this value as very short prefixes will naturally match
     *                                            large numbers of entries.
     * @returns {Object<WordTreeEntry[]>}         A number of entries that have the given prefix, grouped by document
     *                                            type.
     */
    lookup(prefix: string, { limit, documentTypes }?: {
        documentTypes?: string[];
        limit?: number;
    }): any;
    /**
     * Add an entry to the index.
     * @param {Document} doc  The document entry.
     */
    addDocument(doc: Document): void;
    /**
     * Remove an entry from the index.
     * @param {Document} doc  The document entry.
     */
    removeDocument(doc: Document): void;
    /**
     * Replace an entry in the index with an updated one.
     * @param {Document} doc  The document entry.
     */
    replaceDocument(doc: Document): void;
    /**
     * Add a leaf node to the word tree index.
     * @param {Document|object} doc                  The document or compendium index entry to add.
     * @param {object} [options]                     Additional information for indexing.
     * @param {CompendiumCollection} [options.pack]  The compendium that the index belongs to.
     * @protected
     */
    protected _addLeaf(doc: Document | object, { pack }?: {
        pack?: CompendiumCollection;
    }): void;
    /**
     * Aggregate the compendium index and add it to the word tree index.
     * @param {CompendiumCollection} pack  The compendium pack.
     * @protected
     */
    protected _indexCompendium(pack: CompendiumCollection): void;
    /**
     * Add all of a parent document's embedded documents to the index.
     * @param {Document} parent  The parent document.
     * @protected
     */
    protected _indexEmbeddedDocuments(parent: Document): void;
    /**
     * Aggregate all documents and embedded documents in a world collection and add them to the index.
     * @param {string} documentName  The name of the documents to index.
     * @protected
     */
    protected _indexWorldCollection(documentName: string): void;
    #private;
}
/**
 * A leaf entry in the tree.
 */
type WordTreeEntry = {
    /**
     * An object that this entry represents.
     */
    entry: Document | object;
    /**
     * The document type.
     */
    documentName: string;
    /**
     * The document's UUID.
     */
    uuid: string;
    /**
     * The pack ID.
     */
    pack?: string;
};
/**
 * A word tree node consists of zero or more 1-character keys, and a leaves property that contains any objects that
 * terminate at the current string prefix.
 */
type WordTreeNode = {
    /**
     * Any leaves at this node.
     */
    leaves: {
        /**
         * An object that this entry represents.
         */
        entry: any;
        /**
         * The document type.
         */
        documentName: string;
        /**
         * The document's UUID.
         */
        uuid: string;
        /**
         * The pack ID.
         */
        pack?: string;
    }[];
};
