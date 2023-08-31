/**
 * The UI element which displays the Scene documents which are currently enabled for quick navigation.
 */
declare class SceneNavigation extends Application {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * Display progress of some major operation like loading Scene textures.
     * @param {object} options    Options for how the progress bar is displayed
     * @param {string} options.label  A text label to display
     * @param {number} options.pct    A percentage of progress between 0 and 100
     */
    static displayProgressBar({ label, pct }?: {
        label: string;
        pct: number;
    }): void;
    constructor(options: any);
    /**
     * Navigation collapsed state
     * @type {boolean}
     */
    _collapsed: boolean;
    /**
     * Return an Array of Scenes which are displayed in the Navigation bar
     * @returns {Scene[]}
     */
    get scenes(): Scene[];
    /** @inheritdoc */
    render(force: any, context?: {}): any;
    /** @inheritdoc */
    _render(force: any, options: any): Promise<void>;
    /** @inheritdoc */
    getData(options?: {}): {
        collapsed: boolean;
        scenes: {
            id: any;
            active: any;
            name: string;
            tooltip: any;
            users: any;
            visible: any;
            css: any;
        }[];
    };
    /**
     * A hook event that fires when the SceneNavigation menu is expanded or collapsed.
     * @function collapseSceneNavigation
     * @memberof hookEvents
     * @param {SceneNavigation} sceneNavigation The SceneNavigation application
     * @param {boolean} collapsed               Whether the SceneNavigation is now collapsed or not
     */
    /**
     * Expand the SceneNavigation menu, sliding it down if it is currently collapsed
     */
    expand(): true | Promise<any>;
    /**
     * Collapse the SceneNavigation menu, sliding it up if it is currently expanded
     * @returns {Promise<boolean>}
     */
    collapse(): Promise<boolean>;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Get the set of ContextMenu options which should be applied for Scenes in the menu
     * @returns {object[]}   The Array of context options passed to the ContextMenu instance
     * @protected
     */
    protected _getContextMenuOptions(): object[];
    /**
     * Handle left-click events on the scenes in the navigation menu
     * @param {PointerEvent} event
     * @protected
     */
    protected _onClickScene(event: PointerEvent): void;
    /** @override */
    override _onDragStart(event: any): void;
    /** @override */
    override _onDrop(event: any): Promise<any>;
    /**
     * Handle navigation menu toggle click events
     * @param {Event} event
     * @protected
     */
    protected _onToggleNav(event: Event): true | Promise<any>;
}
