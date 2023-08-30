/**
 * The client-side TableResult document which extends the common BaseTableResult document model.
 * @extends documents.BaseTableResult
 * @mixes ClientDocumentMixin
 *
 * @see {@link RollTable}                The RollTable document type which contains TableResult documents
 */
declare class TableResult {
    /**
     * A path reference to the icon image used to represent this result
     */
    get icon(): any;
    /**
     * Prepare a string representation for the result which (if possible) will be a dynamic link or otherwise plain text
     * @returns {string}  The text to display
     */
    getChatText(): string;
}
