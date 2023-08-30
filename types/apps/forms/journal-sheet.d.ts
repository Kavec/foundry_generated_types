/**
 * @typedef {DocumentSheetOptions} JournalSheetOptions
 * @property {string|null} [sheetMode]  The current display mode of the journal. Either 'text' or 'image'.
 */
/**
 * The Application responsible for displaying and editing a single JournalEntry document.
 * @extends {DocumentSheet}
 * @param {JournalEntry} object            The JournalEntry instance which is being edited
 * @param {JournalSheetOptions} [options]  Application options
 */
declare class JournalSheet extends DocumentSheet {
    /**
     * Available view modes for journal entries.
     * @enum {number}
     */
    static VIEW_MODES: {
        SINGLE: number;
        MULTIPLE: number;
    };
    /**
     * The minimum amount of content that must be visible before the next page is marked as in view. Cannot be less than
     * 25% without also modifying the IntersectionObserver threshold.
     * @type {number}
     */
    static INTERSECTION_RATIO: number;
    /**
     * Icons for page ownership.
     * @enum {string}
     */
    static OWNERSHIP_ICONS: {
        [x: number]: string;
    };
    /**
     * The cached list of processed page entries.
     * This array is populated in the getData method.
     * @type {object[]}
     * @protected
     */
    protected _pages: object[];
    /**
     * Get the journal entry's current view mode.
     * @see {@link JournalSheet.VIEW_MODES}
     * @returns {number}
     */
    get mode(): number;
    /**
     * The current search mode for this journal
     * @type {string}
     */
    get searchMode(): string;
    /**
     * Toggle the search mode for this journal between "name" and "full" text search
     */
    toggleSearchMode(): void;
    /**
     * The pages that are currently scrolled into view and marked as 'active' in the sidebar.
     * @type {HTMLElement[]}
     */
    get pagesInView(): HTMLElement[];
    /**
     * The index of the currently viewed page.
     * @type {number}
     */
    get pageIndex(): number;
    /**
     * The currently active IntersectionObserver.
     * @type {IntersectionObserver}
     */
    get observer(): IntersectionObserver;
    /**
     * Is the table-of-contents sidebar currently collapsed?
     * @type {boolean}
     */
    get sidebarCollapsed(): boolean;
    /**
     * Prepare pages for display.
     * @returns {JournalEntryPage[]}  The sorted list of pages.
     * @protected
     */
    protected _getPageData(): JournalEntryPage[];
    /**
     * Identify which page of the journal sheet should be currently rendered.
     * This can be controlled by options passed into the render method or by a subclass override.
     * @param {object} options    Sheet rendering options
     * @param {number} [options.pageIndex]    A numbered index of page to render
     * @param {string} [options.pageId]       The ID of a page to render
     * @returns {number}      The currently displayed page index
     * @protected
     */
    protected _getCurrentPage({ pageIndex, pageId }?: {
        pageIndex?: number;
        pageId?: string;
    }): number;
    /**
     * Activate listeners after page content has been injected.
     * @protected
     */
    protected _activatePageListeners(): void;
    /**
     * @inheritdoc
     * @param {number} [options.mode]       Render the sheet in a given view mode, see {@link JournalSheet.VIEW_MODES}.
     * @param {string} [options.pageId]     Render the sheet with the page with the given ID in view.
     * @param {number} [options.pageIndex]  Render the sheet with the page at the given index in view.
     * @param {string} [options.anchor]     Render the sheet with the given anchor for the given page in view.
     * @param {boolean} [options.tempOwnership]  Whether the journal entry or one of its pages is being shown to players
     *                                           who might otherwise not have permission to view it.
     * @param {boolean} [options.collapsed] Render the sheet with the TOC sidebar collapsed?
     */
    _render(force: any, options?: {}): Promise<void>;
    /**
     * Update child views inside the main sheet.
     * @returns {Promise<void>}
     * @protected
     */
    protected _renderPageViews(): Promise<void>;
    /**
     * Add headings to the table of contents for the given page node.
     * @param {HTMLElement} pageNode                 The HTML node of the page's rendered contents.
     * @param {Object<JournalEntryPageHeading>} toc  The page's table of contents.
     * @protected
     */
    protected _renderHeadings(pageNode: HTMLElement, toc: any): Promise<void>;
    /**
     * Create an intersection observer to maintain a list of headings that are in view. This is much more performant than
     * calling getBoundingClientRect on all headings whenever we want to determine this list.
     * @protected
     */
    protected _observeHeadings(): void;
    /**
     * Handle clicking the previous and next page buttons.
     * @param {JQuery.TriggeredEvent} event  The button click event.
     * @protected
     */
    protected _onAction(event: JQuery.TriggeredEvent): any;
    /**
     * Prompt the user with a Dialog for creation of a new JournalEntryPage
     */
    createPage(): any;
    /**
     * Turn to the previous page.
     */
    previousPage(): any;
    /**
     * Turn to the next page.
     */
    nextPage(): any;
    /**
     * Turn to a specific page.
     * @param {string} pageId    The ID of the page to turn to.
     * @param {string} [anchor]  Optionally an anchor slug to focus within that page.
     */
    goToPage(pageId: string, anchor?: string): any;
    /**
     * Retrieve the sheet instance for rendering this page inline.
     * @param {string} pageId  The ID of the page.
     * @returns {JournalPageSheet}
     */
    getPageSheet(pageId: string): JournalPageSheet;
    /**
     * Determine whether a page is visible to the current user.
     * @param {JournalEntryPage} page  The page.
     * @returns {boolean}
     */
    isPageVisible(page: JournalEntryPage): boolean;
    /**
     * Toggle the collapsed or expanded state of the Journal Entry table-of-contents sidebar.
     */
    toggleSidebar(): void;
    /**
     * Update the disabled state of the previous and next page buttons.
     * @protected
     */
    protected _updateButtonState(): void;
    /**
     * Edit one of this JournalEntry's JournalEntryPages.
     * @param {JQuery.TriggeredEvent} event  The originating page edit event.
     * @protected
     */
    protected _onEditPage(event: JQuery.TriggeredEvent): any;
    /**
     * Handle clicking an entry in the sidebar to scroll that heading into view.
     * @param {JQuery.TriggeredEvent} event  The originating click event.
     * @protected
     */
    protected _onClickPageLink(event: JQuery.TriggeredEvent): void;
    /**
     * Handle clicking an image to pop it out for fullscreen view.
     * @param {MouseEvent} event  The click event.
     * @protected
     */
    protected _onClickImage(event: MouseEvent): void;
    /**
     * Handle new pages scrolling into view.
     * @param {IntersectionObserverEntry[]} entries  An Array of elements that have scrolled into or out of view.
     * @param {IntersectionObserver} observer        The IntersectionObserver that invoked this callback.
     * @protected
     */
    protected _onPageScroll(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
    /**
     * Highlights the currently viewed page in the sidebar.
     * @protected
     */
    protected _activatePagesInView(): void;
    /**
     * If the set of active pages has changed, various elements in the sidebar will expand and collapse. For particularly
     * long ToCs, this can leave the scroll position of the sidebar in a seemingly random state. We try to do our best to
     * sync the sidebar scroll position with the current journal viewport.
     * @protected
     */
    protected _synchronizeSidebar(): void;
    /** @inheritdoc */
    _contextMenu(html: any): void;
    /**
     * Handle opening the context menu.
     * @param {HTMLElement} target  The element the context menu has been triggered for.
     * @protected
     */
    protected _onContextMenuOpen(target: HTMLElement): void;
    /**
     * Handle closing the context menu.
     * @param {HTMLElement} target  The element the context menu has been triggered for.
     * @protected
     */
    protected _onContextMenuClose(target: HTMLElement): void;
    /**
     * Get the set of ContextMenu options which should be used for JournalEntryPages in the sidebar.
     * @returns {ContextMenuEntry[]}  The Array of context options passed to the ContextMenu instance.
     * @protected
     */
    protected _getEntryContextOptions(): ContextMenuEntry[];
    /**
     * Handle requests to show the referenced Journal Entry to other Users
     * Save the form before triggering the show request, in case content has changed
     * @param {Event} event   The triggering click event
     */
    _onShowPlayers(event: Event): Promise<void | JournalEntry | JournalEntryPage>;
    /** @inheritdoc */
    _canDragStart(selector: any): any;
    /** @inheritdoc */
    _canDragDrop(selector: any): any;
    /** @inheritdoc */
    _onDragStart(event: any): void;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
    /** @inheritdoc */
    _onSearchFilter(event: any, query: any, rgx: any, html: any): void;
    #private;
}
/**
 * Available view modes for journal entries.
 */
type VIEW_MODES = number;
/**
 * Icons for page ownership.
 */
type OWNERSHIP_ICONS = string;
type JournalSheetOptions = DocumentSheetOptions;
