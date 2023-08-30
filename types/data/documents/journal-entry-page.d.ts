/**
 * The client-side JournalEntryPage document which extends the common BaseJournalEntryPage document model.
 * @extends documents.BaseJournalEntryPage
 * @mixes ClientDocumentMixin
 *
 * @see {@link JournalEntry}  The JournalEntry document type which contains JournalEntryPage embedded documents.
 */
declare class JournalEntryPage {
    /**
     * Convert a heading into slug suitable for use as an identifier.
     * @param {HTMLHeadingElement|string} heading  The heading element or some text content.
     * @returns {string}
     */
    static slugifyHeading(heading: HTMLHeadingElement | string): string;
    /**
     * Build a table of contents for the given HTML content.
     * @param {HTMLElement[]} html                     The HTML content to generate a ToC outline for.
     * @param {object} [options]                       Additional options to configure ToC generation.
     * @param {boolean} [options.includeElement=true]  Include references to the heading DOM elements in the returned ToC.
     * @returns {Object<JournalEntryPageHeading>}
     */
    static buildTOC(html: HTMLElement[], { includeElement }?: {
        includeElement?: boolean;
    }): any;
    /**
     * Flatten the tree structure into a single object with each node's slug as the key.
     * @param {JournalEntryPageHeading[]} nodes  The root ToC nodes.
     * @returns {Object<JournalEntryPageHeading>}
     * @protected
     */
    protected static _flattenTOC(nodes: {
        /**
         * The heading level, 1-6.
         */
        level: number;
        /**
         * The raw heading text with any internal tags omitted.
         */
        text: string;
        /**
         * The generated slug for this heading.
         */
        slug: string;
        /**
         * The currently rendered element for this heading, if it exists.
         */
        element?: HTMLHeadingElement;
        /**
         * Any child headings of this one.
         */
        children: string[];
    }[]): any;
    /**
     * Construct a table of contents node from a heading element.
     * @param {HTMLHeadingElement} heading             The heading element.
     * @param {object} [options]                       Additional options to configure the returned node.
     * @param {boolean} [options.includeElement=true]  Whether to include the DOM element in the returned ToC node.
     * @returns {JournalEntryPageHeading}
     * @protected
     */
    protected static _makeHeadingNode(heading: HTMLHeadingElement, { includeElement }?: {
        includeElement?: boolean;
    }): {
        /**
         * The heading level, 1-6.
         */
        level: number;
        /**
         * The raw heading text with any internal tags omitted.
         */
        text: string;
        /**
         * The generated slug for this heading.
         */
        slug: string;
        /**
         * The currently rendered element for this heading, if it exists.
         */
        element?: HTMLHeadingElement;
        /**
         * Any child headings of this one.
         */
        children: string[];
    };
    /**
     * @typedef {object} JournalEntryPageHeading
     * @property {number} level                  The heading level, 1-6.
     * @property {string} text                   The raw heading text with any internal tags omitted.
     * @property {string} slug                   The generated slug for this heading.
     * @property {HTMLHeadingElement} [element]  The currently rendered element for this heading, if it exists.
     * @property {string[]} children             Any child headings of this one.
     */
    /**
     * The cached table of contents for this JournalEntryPage.
     * @type {Object<JournalEntryPageHeading>}
     * @protected
     */
    protected _toc: any;
    /**
     * The table of contents for this JournalEntryPage.
     * @type {Object<JournalEntryPageHeading>}
     */
    get toc(): any;
    /** @inheritdoc */
    get permission(): any;
    /**
     * Return a reference to the Note instance for this Journal Entry Page in the current Scene, if any.
     * If multiple notes are placed for this Journal Entry, only the first will be returned.
     * @type {Note|null}
     */
    get sceneNote(): Function;
    /** @inheritdoc */
    _createDocumentLink(eventData: any, { relativeTo, label }?: {
        relativeTo: any;
        label: any;
    }): any;
    /** @inheritdoc */
    _onClickDocumentLink(event: any): any;
    /** @inheritdoc */
    _onUpdate(changed: any, options: any, userId: any): void;
}
type JournalEntryPageHeading = {
    /**
     * The heading level, 1-6.
     */
    level: number;
    /**
     * The raw heading text with any internal tags omitted.
     */
    text: string;
    /**
     * The generated slug for this heading.
     */
    slug: string;
    /**
     * The currently rendered element for this heading, if it exists.
     */
    element?: HTMLHeadingElement;
    /**
     * Any child headings of this one.
     */
    children: string[];
};
