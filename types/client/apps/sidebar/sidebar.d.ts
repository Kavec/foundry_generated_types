/**
 * Render the Sidebar container, and after rendering insert Sidebar tabs.
 */
declare class Sidebar extends Application {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * Singleton application instances for each sidebar tab
     * @type {Object<SidebarTab>}
     */
    tabs: any;
    /**
     * Track whether the sidebar container is currently collapsed
     * @type {boolean}
     */
    _collapsed: boolean;
    /**
     * Return the name of the active Sidebar tab
     * @type {string}
     */
    get activeTab(): string;
    /**
     * Singleton application instances for each popout tab
     * @type {Object<SidebarTab>}
     */
    get popouts(): any;
    /** @override */
    override getData(options?: {}): {
        tabs: {
            chat: {
                tooltip: any;
                icon: any;
                notification: string;
            };
            combat: {
                tooltip: any;
                icon: any;
            };
            scenes: {
                tooltip: any;
                icon: any;
            };
            actors: {
                tooltip: any;
                icon: any;
            };
            items: {
                tooltip: any;
                icon: any;
            };
            journal: {
                tooltip: string;
                icon: any;
            };
            tables: {
                tooltip: any;
                icon: any;
            };
            cards: {
                tooltip: any;
                icon: any;
            };
            playlists: {
                tooltip: any;
                icon: any;
            };
            compendium: {
                tooltip: string;
                icon: string;
            };
            settings: {
                tooltip: string;
                icon: string;
            };
        };
    };
    /** @inheritdoc */
    _render(force: any, options: any): Promise<void>;
    /**
     * Expand the Sidebar container from a collapsed state.
     * Take no action if the sidebar is already expanded.
     */
    expand(): void;
    /**
     * Collapse the sidebar to a minimized state.
     * Take no action if the sidebar is already collapsed.
     */
    collapse(): void;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /** @override */
    override _onChangeTab(event: any, tabs: any, active: any): void;
    /**
     * Handle the special case of left-clicking a tab when the sidebar is collapsed.
     * @param {MouseEvent} event  The originating click event
     * @protected
     */
    protected _onLeftClickTab(event: MouseEvent): void;
    /**
     * Handle right-click events on tab controls to trigger pop-out containers for each tab
     * @param {Event} event     The originating contextmenu event
     * @protected
     */
    protected _onRightClickTab(event: Event): void;
    /**
     * Handle toggling of the Sidebar container's collapsed or expanded state
     * @param {Event} event
     * @protected
     */
    protected _onToggleCollapse(event: Event): void;
}
