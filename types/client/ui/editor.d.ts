/**
 * A collection of helper functions and utility methods related to the rich text editor
 */
declare class TextEditor {
    /**
     * A singleton text area used for HTML decoding.
     * @type {HTMLTextAreaElement}
     */
    static "__#70@#decoder": HTMLTextAreaElement;
    /**
     * Create a Rich Text Editor. The current implementation uses TinyMCE
     * @param {object} options                   Configuration options provided to the Editor init
     * @param {string} [options.engine=tinymce]  Which rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
     *                                           is deprecated and will be removed in a later version.
     * @param {string} content                   Initial HTML or text content to populate the editor with
     * @returns {Promise<TinyMCE.Editor|ProseMirrorEditor>}  The editor instance.
     */
    static create({ engine, ...options }?: {
        engine?: string;
    }, content?: string): Promise<TinyMCE.Editor | ProseMirrorEditor>;
    static create({ engine, ...options }?: {
        engine?: string;
    }, content?: string): Promise<any>;
    /**
     * A list of elements that are retained when truncating HTML.
     * @type {Set<string>}
     * @protected
     */
    protected static _PARAGRAPH_ELEMENTS: Set<string>;
    /**
     * Create a TinyMCE editor instance.
     * @param {object} [options]           Configuration options passed to the editor.
     * @param {string} [content=""]        Initial HTML or text content to populate the editor with.
     * @returns {Promise<TinyMCE.Editor>}  The TinyMCE editor instance.
     * @protected
     */
    protected static _createTinyMCE(options?: object, content?: string): Promise<TinyMCE.Editor>;
    protected static _createTinyMCE(options?: any, content?: string): Promise<TinyMCE.Editor>;
    /**
     * Safely decode an HTML string, removing invalid tags and converting entities back to unicode characters.
     * @param {string} html     The original encoded HTML string
     * @returns {string}        The decoded unicode string
     */
    static decodeHTML(html: string): string;
    static decodeHTML(html: string): string;
    /**
     * @typedef {object} EnrichmentOptions
     * @property {boolean} [secrets=false]      Include unrevealed secret tags in the final HTML? If false, unrevealed
     *                                          secret blocks will be removed.
     * @property {boolean} [documents=true]     Replace dynamic document links?
     * @property {boolean} [links=true]         Replace hyperlink content?
     * @property {boolean} [rolls=true]         Replace inline dice rolls?
     * @property {object|Function} [rollData]   The data object providing context for inline rolls, or a function that
     *                                          produces it.
     * @property {boolean} [async=true]         Perform the operation asynchronously returning a Promise
     * @property {ClientDocument} [relativeTo]  A document to resolve relative UUIDs against.
     */
    /**
     * Enrich HTML content by replacing or augmenting components of it
     * @param {string} content        The original HTML content (as a string)
     * @param {EnrichmentOptions} [options={}]       Additional options which configure how HTML is enriched
     * @returns {string|Promise<string>}             The enriched HTML content
     */
    static enrichHTML(content: string, options?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): string | Promise<string>;
    static enrichHTML(content: string, options?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): string | Promise<string>;
    /**
     * Convert text of the form @UUID[uuid]{name} to anchor elements.
     * @param {Text[]} text                          The existing text content
     * @param {EnrichmentOptions} [options]          Options provided to customize text enrichment
     * @param {boolean} [options.async]              Whether to resolve UUIDs asynchronously
     * @param {ClientDocument} [options.relativeTo]  A document to resolve relative UUIDs against.
     * @returns {Promise<boolean>|boolean}           Whether any content links were replaced and the text nodes need to be
     *                                               updated.
     * @protected
     */
    protected static _enrichContentLinks(text: Text[], { async, relativeTo }?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): Promise<boolean> | boolean;
    protected static _enrichContentLinks(text: Text[], { async, relativeTo }?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): boolean | Promise<boolean>;
    /**
     * Convert URLs into anchor elements.
     * @param {Text[]} text                 The existing text content
     * @param {EnrichmentOptions} [options] Options provided to customize text enrichment
     * @returns {boolean}                   Whether any hyperlinks were replaced and the text nodes need to be updated
     * @protected
     */
    protected static _enrichHyperlinks(text: Text[], options?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): boolean;
    protected static _enrichHyperlinks(text: Text[], options?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): boolean;
    /**
     * Convert text of the form [[roll]] to anchor elements.
     * @param {object|Function} rollData    The data object providing context for inline rolls.
     * @param {Text[]} text                 The existing text content.
     * @param {EnrichmentOptions} [options] Options provided to customize text enrichment
     * @param {boolean} [options.async]     Whether to resolve immediate inline rolls asynchronously.
     * @returns {Promise<boolean>|boolean}  Whether any inline rolls were replaced and the text nodes need to be updated.
     * @protected
     */
    protected static _enrichInlineRolls(rollData: object | Function, text: Text[], { async }?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): Promise<boolean> | boolean;
    protected static _enrichInlineRolls(rollData: any, text: Text[], { async }?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): boolean | Promise<boolean>;
    /**
     * Match any custom registered regex patterns and apply their replacements.
     * @param {RegExp} pattern               The pattern to match against.
     * @param {TextEditorEnricher} enricher  The function that will be run for each match.
     * @param {Text[]} text                  The existing text content.
     * @param {EnrichmentOptions} [options]  Options provided to customize text enrichment
     * @returns {Promise<boolean>}           Whether any replacements were made, requiring the text nodes to be updated.
     * @protected
     */
    protected static _applyCustomEnrichers(pattern: RegExp, enricher: (match: RegExpMatchArray, options?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }) => Promise<HTMLElement>, text: Text[], options?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): Promise<boolean>;
    protected static _applyCustomEnrichers(pattern: RegExp, enricher: (match: RegExpMatchArray, options?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }) => Promise<HTMLElement>, text: Text[], options?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: object | Function;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }): Promise<boolean>;
    /**
     * Preview an HTML fragment by constructing a substring of a given length from its inner text.
     * @param {string} content    The raw HTML to preview
     * @param {number} length     The desired length
     * @returns {string}          The previewed HTML
     */
    static previewHTML(content: string, length?: number): string;
    static previewHTML(content: string, length?: number): string;
    /**
     * Sanitises an HTML fragment and removes any non-paragraph-style text.
     * @param {HTMLElement} html       The root HTML element.
     * @returns {HTMLElement}
     */
    static truncateHTML(html: HTMLElement): HTMLElement;
    static truncateHTML(html: HTMLElement): HTMLElement;
    /**
     * Truncate a fragment of text to a maximum number of characters.
     * @param {string} text           The original text fragment that should be truncated to a maximum length
     * @param {object} [options]      Options which affect the behavior of text truncation
     * @param {number} [options.maxLength]    The maximum allowed length of the truncated string.
     * @param {boolean} [options.splitWords]  Whether to truncate by splitting on white space (if true) or breaking words.
     * @param {string|null} [options.suffix]  A suffix string to append to denote that the text was truncated.
     * @returns {string}              The truncated text string
     */
    static truncateText(text: string, { maxLength, splitWords, suffix }?: {
        maxLength?: number;
        splitWords?: boolean;
        suffix?: string | null;
    }): string;
    static truncateText(text: string, { maxLength, splitWords, suffix }?: {
        maxLength?: number;
        splitWords?: boolean;
        suffix?: string;
    }): string;
    /**
     * Recursively identify the text nodes within a parent HTML node for potential content replacement.
     * @param {HTMLElement} parent    The parent HTML Element
     * @returns {Text[]}              An array of contained Text nodes
     * @protected
     */
    protected static _getTextNodes(parent: HTMLElement): Text[];
    protected static _getTextNodes(parent: HTMLElement): Text[];
    /**
     * Facilitate the replacement of text node content using a matching regex rule and a provided replacement function.
     * @param {Text} text             The target text to replace
     * @param {RegExp} rgx            The provided regular expression for matching and replacement
     * @param {function(RegExpMatchArray): HTMLElement|Promise<HTMLElement>} func   The replacement function
     * @protected
     */
    protected static _replaceTextContent(text: Text, rgx: RegExp, func: (arg0: RegExpMatchArray) => HTMLElement | Promise<HTMLElement>): boolean | Promise<boolean>;
    protected static _replaceTextContent(text: Text, rgx: RegExp, func: (arg0: RegExpMatchArray) => HTMLElement | Promise<HTMLElement>): boolean | Promise<boolean>;
    /**
     * Replace a matched portion of a Text node with a replacement Node
     * @param {Text} text
     * @param {RegExpMatchArray} match
     * @param {Node} replacement
     * @protected
     */
    protected static _replaceTextNode(text: Text, match: RegExpMatchArray, replacement: Node): void;
    protected static _replaceTextNode(text: Text, match: RegExpMatchArray, replacement: Node): void;
    /**
     * Create a dynamic document link from a regular expression match
     * @param {RegExpMatchArray} match                          The regular expression match
     * @param {object} [options]                                Additional options to configure enrichment behaviour
     * @param {boolean} [options.async=false]                   If asynchronous evaluation is enabled, fromUuid will be
     *                                                          called, allowing comprehensive UUID lookup, otherwise
     *                                                          fromUuidSync will be used.
     * @param {ClientDocument} [options.relativeTo]             A document to resolve relative UUIDs against.
     * @returns {HTMLAnchorElement|Promise<HTMLAnchorElement>}  An HTML element for the document link, returned as a
     *                                                          Promise if async was true and the message contained a
     *                                                          UUID link.
     * @protected
     */
    protected static _createContentLink(match: RegExpMatchArray, { async, relativeTo }?: {
        async?: boolean;
        relativeTo?: ClientDocument;
    }): HTMLAnchorElement | Promise<HTMLAnchorElement>;
    protected static _createContentLink(match: RegExpMatchArray, { async, relativeTo }?: {
        async?: boolean;
        relativeTo?: ClientDocument;
    }): HTMLAnchorElement | Promise<HTMLAnchorElement>;
    /**
     * Create a dynamic document link from an old-form document link expression.
     * @param {string} type    The matched document type, or "Compendium".
     * @param {string} target  The requested match target (_id or name).
     * @param {string} name    A customized or overridden display name for the link.
     * @param {object} data    Data containing the properties of the resulting link element.
     * @returns {boolean}      Whether the resulting link is broken or not.
     * @protected
     */
    protected static _createLegacyContentLink(type: string, target: string, name: string, data: object): boolean;
    protected static _createLegacyContentLink(type: string, target: string, name: string, data: any): boolean;
    /**
     * Replace a hyperlink-like string with an actual HTML &lt;a> tag
     * @param {RegExpMatchArray} match  The regular expression match
     * @param {object} [options]        Additional options to configure enrichment behaviour
     * @returns {HTMLAnchorElement}     An HTML element for the document link
     * @protected
     */
    protected static _createHyperlink(match: RegExpMatchArray, options?: object): HTMLAnchorElement;
    protected static _createHyperlink(match: RegExpMatchArray, options?: any): HTMLAnchorElement;
    /**
     * Replace an inline roll formula with a rollable &lt;a> element or an eagerly evaluated roll result
     * @param {RegExpMatchArray} match      The regular expression match array
     * @param {object} rollData             Provided roll data for use in roll evaluation
     * @param {object} [options]            Additional options to configure enrichment behaviour
     * @returns {HTMLAnchorElement|null|Promise<HTMLAnchorElement|null>}  The replaced match, returned as a Promise if
     *                                                                    async was true and the message contained an
     *                                                                    immediate inline roll.
     */
    static _createInlineRoll(match: RegExpMatchArray, rollData: object, options?: object): HTMLAnchorElement | null | Promise<HTMLAnchorElement | null>;
    static _createInlineRoll(match: RegExpMatchArray, rollData: any, options?: any): HTMLAnchorElement | Promise<HTMLAnchorElement>;
    /**
     * Activate interaction listeners for the interior content of the editor frame.
     */
    static activateListeners(): void;
    static activateListeners(): void;
    /**
     * Handle click events on Document Links
     * @param {Event} event
     * @protected
     */
    protected static _onClickContentLink(event: Event): Promise<any>;
    protected static _onClickContentLink(event: Event): Promise<any>;
    /**
     * Handle left-mouse clicks on an inline roll, dispatching the formula or displaying the tooltip
     * @param {MouseEvent} event    The initiating click event
     * @protected
     */
    protected static _onClickInlineRoll(event: MouseEvent): Promise<any>;
    protected static _onClickInlineRoll(event: MouseEvent): Promise<any>;
    /**
     * Begin a Drag+Drop workflow for a dynamic content link
     * @param {Event} event   The originating drag event
     * @protected
     */
    protected static _onDragContentLink(event: Event): boolean;
    protected static _onDragContentLink(event: Event): boolean;
    /**
     * Handle dropping of transferred data onto the active rich text editor
     * @param {DragEvent} event     The originating drop event which triggered the data transfer
     * @param {TinyMCE} editor      The TinyMCE editor instance being dropped on
     * @protected
     */
    protected static _onDropEditorData(event: DragEvent, editor: TinyMCE): Promise<void>;
    protected static _onDropEditorData(event: DragEvent, editor: TinyMCE): Promise<void>;
    /**
     * Extract JSON data from a drag/drop event.
     * @param {DragEvent} event       The drag event which contains JSON data.
     * @returns {object}              The extracted JSON data. The object will be empty if the DragEvent did not contain
     *                                JSON-parseable data.
     */
    static getDragEventData(event: DragEvent): object;
    static getDragEventData(event: DragEvent): any;
    /**
     * Given a Drop event, returns a Content link if possible such as @Actor[ABC123], else null
     * @param {object} eventData                     The parsed object of data provided by the transfer event
     * @param {object} [options]                     Additional options to configure link creation.
     * @param {ClientDocument} [options.relativeTo]  A document to generate the link relative to.
     * @param {string} [options.label]               A custom label to use instead of the document's name.
     * @returns {Promise<string|null>}
     */
    static getContentLink(eventData: object, options?: {
        relativeTo?: ClientDocument;
        label?: string;
    }): Promise<string | null>;
    static getContentLink(eventData: any, options?: {
        relativeTo?: ClientDocument;
        label?: string;
    }): Promise<string>;
    /**
     * Upload an image to a document's asset path.
     * @param {string} uuid        The document's UUID.
     * @param {File} file          The image file to upload.
     * @returns {Promise<string>}  The path to the uploaded image.
     * @internal
     */
    static _uploadImage(uuid: string, file: File): Promise<string>;
    static _uploadImage(uuid: string, file: File): Promise<string>;
    static "__#184@#decoder": HTMLTextAreaElement;
}
type EnrichmentOptions = {
    /**
     * Include unrevealed secret tags in the final HTML? If false, unrevealed
     *       secret blocks will be removed.
     */
    secrets?: boolean;
    /**
     * Replace dynamic document links?
     */
    documents?: boolean;
    /**
     * Replace hyperlink content?
     */
    links?: boolean;
    /**
     * Replace inline dice rolls?
     */
    rolls?: boolean;
    /**
     * The data object providing context for inline rolls, or a function that
     *    produces it.
     */
    rollData?: object | Function;
    /**
     * Perform the operation asynchronously returning a Promise
     */
    async?: boolean;
    /**
     * A document to resolve relative UUIDs against.
     */
    relativeTo?: ClientDocument;
};
