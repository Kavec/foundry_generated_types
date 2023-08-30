/**
 * An abstract pattern followed by the different tabs of the sidebar
 * @abstract
 * @interface
 */
declare class SidebarTab extends Application {
    /** @override */
    static override get defaultOptions(): any;
    constructor(...args: any[]);
    /**
     * A reference to the pop-out variant of this SidebarTab, if one exists
     * @type {SidebarTab}
     * @protected
     */
    protected _popout: SidebarTab;
    /**
     * Denote whether this is the original version of the sidebar tab, or a pop-out variant
     * @type {SidebarTab}
     */
    _original: SidebarTab;
    /**
     * The base name of this sidebar tab
     * @type {string}
     */
    get tabName(): string;
    /** @override */
    override getData(options?: {}): Promise<{
        cssId: string;
        cssClass: any;
        tabName: string;
        user: User;
    }>;
    /** @override */
    override _render(force?: boolean, options?: {}): Promise<void>;
    /** @override */
    override _renderInner(data: any): Promise<JQueryStatic>;
    /**
     * Activate this SidebarTab, switching focus to it
     */
    activate(): void;
    /**
     * Create a second instance of this SidebarTab class which represents a singleton popped-out container
     * @returns {SidebarTab}   The popped out sidebar tab instance
     */
    createPopout(): SidebarTab;
    /**
     * Render the SidebarTab as a pop-out container
     */
    renderPopout(): void;
    /**
     * Handle lazy loading for sidebar images to only load them once they become observed
     * @param {HTMLElement[]} entries               The entries which are now observed
     * @param {IntersectionObserver} observer       The intersection observer instance
     */
    _onLazyLoadImage(entries: HTMLElement[], observer: IntersectionObserver): void;
}
