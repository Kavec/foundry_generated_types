/**
 * The Application responsible for displaying and editing a single JournalEntryPage document.
 * @extends {DocumentSheet}
 * @param {JournalEntryPage} object         The JournalEntryPage instance which is being edited.
 * @param {DocumentSheetOptions} [options]  Application options.
 */
declare class JournalPageSheet extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    get title(): any;
    /**
     * The table of contents for this JournalTextPageSheet.
     * @type {Object<JournalEntryPageHeading>}
     */
    toc: any;
    /** @inheritdoc */
    getData(options?: {}): any;
    /** @inheritdoc */
    _getSecretContent(secret: any): any;
    /** @inheritdoc */
    _updateSecret(secret: any, content: any): any;
    /**
     * Update the parent sheet if it is open when the server autosaves the contents of this editor.
     * @param {string} html  The updated editor contents.
     */
    onAutosave(html: string): void;
    /**
     * Update the UI appropriately when receiving new steps from another client.
     */
    onNewSteps(): void;
}
/**
 * The Application responsible for displaying and editing a single JournalEntryPage text document.
 * @extends {JournalPageSheet}
 */
declare class JournalTextPageSheet extends JournalPageSheet {
    /**
     * Bi-directional HTML <-> Markdown converter.
     * @type {showdown.Converter}
     * @protected
     */
    protected static _converter: showdown.Converter;
    /**
     * Declare the format that we edit text content in for this sheet so we can perform conversions as necessary.
     * @type {number}
     */
    static get format(): number;
    /** @inheritdoc */
    getData(options?: {}): Promise<any>;
    /**
     * Determine if any editors are dirty.
     * @returns {boolean}
     */
    isEditorDirty(): boolean;
    /**
     * Lazily convert text formats if we detect the document being saved in a different format.
     * @param {object} renderData  Render data.
     * @protected
     */
    protected _convertFormats(renderData: object): void;
    #private;
}
/**
 * The Application responsible for displaying and editing a single JournalEntryPage image document.
 * @extends {JournalPageSheet}
 */
declare class JournalImagePageSheet extends JournalPageSheet {
}
/**
 * The Application responsible for displaying and editing a single JournalEntryPage video document.
 * @extends {JournalPageSheet}
 */
declare class JournalVideoPageSheet extends JournalPageSheet {
    /**
     * Get the YouTube player parameters depending on whether the sheet is being viewed or edited.
     * @returns {object}
     * @protected
     */
    protected _getYouTubeVars(): object;
    /** @inheritdoc */
    _getSubmitData(updateData?: {}): any;
    /**
     * Convert time components to a timestamp in seconds.
     * @param {{[h]: number, [m]: number, [s]: number}} components  The time components.
     * @returns {number}                                            The timestamp, in seconds.
     * @protected
     */
    protected _timeComponentsToTimestamp({ h, m, s }?: {
        [h]: number;
        [m]: number;
        [s]: number;
    }): number;
    /**
     * Convert a timestamp in seconds into separate time components.
     * @param {number} timestamp                           The timestamp, in seconds.
     * @returns {{[h]: number, [m]: number, [s]: number}}  The individual time components.
     * @protected
     */
    protected _timestampToTimeComponents(timestamp: number): {};
}
/**
 * The Application responsible for displaying and editing a single JournalEntryPage PDF document.
 * @extends {JournalPageSheet}
 */
declare class JournalPDFPageSheet extends JournalPageSheet {
    /**
     * Maintain a cache of PDF sizes to avoid making HEAD requests every render.
     * @type {Object<number>}
     * @protected
     */
    protected static _sizes: any;
    /**
     * Handle a request to load a PDF.
     * @param {MouseEvent} event  The triggering event.
     * @protected
     */
    protected _onLoadPDF(event: MouseEvent): void;
    /**
     * Retrieve parameters to pass to the PDF viewer.
     * @returns {URLSearchParams}
     * @protected
     */
    protected _getViewerParams(): URLSearchParams;
}
/**
 * A subclass of {@link JournalTextPageSheet} that implements a markdown editor for editing the text content.
 * @extends {JournalTextPageSheet}
 */
declare class MarkdownJournalPageSheet extends JournalTextPageSheet {
    /** @inheritdoc */
    static get format(): any;
    /**
     * Store the dirty flag for this editor.
     * @type {boolean}
     * @protected
     */
    protected _isDirty: boolean;
    /** @inheritdoc */
    _onDrop(event: any): Promise<void>;
    /**
     * Handle dropping a content link onto the editor.
     * @param {object} eventData  The parsed event data.
     * @protected
     */
    protected _onDropContentLink(eventData: object): Promise<void>;
}
/**
 * A subclass of {@link JournalTextPageSheet} that implements a TinyMCE editor.
 * @extends {JournalTextPageSheet}
 */
declare class JournalTextTinyMCESheet extends JournalTextPageSheet {
    /** @inheritdoc */
    close(options?: {}): Promise<any>;
    /** @inheritdoc */
    _render(force: any, options: any): Promise<any>;
}
