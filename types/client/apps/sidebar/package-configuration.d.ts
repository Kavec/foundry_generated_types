/**
 * An application for configuring data across all installed and active packages.
 */
declare class PackageConfiguration extends FormApplication {
    static get categoryOrder(): string[];
    /** @override */
    static override get defaultOptions(): any;
    /**
     * The name of the currently active tab.
     * @type {string}
     */
    get activeCategory(): string;
    /** @override */
    override getData(options?: {}): {
        categories: any[];
        total: number;
    };
    /**
     * Prepare the structure of category data which is rendered in this configuration form.
     * @abstract
     * @protected
     */
    protected _prepareCategoryData(): {
        categories: any[];
        total: number;
    };
    /**
     * Classify what Category an Action belongs to
     * @param {string} namespace                The entry to classify
     * @returns {{id: string, title: string}}   The category the entry belongs to
     * @protected
     */
    protected _categorizeEntry(namespace: string): {
        id: string;
        title: string;
    };
    /**
     * Reusable logic for how categories are sorted in relation to each other.
     * @param {object} a
     * @param {object} b
     * @protected
     */
    protected _sortCategories(a: object, b: object): any;
    /** @inheritDoc */
    _render(force: any, { activeCategory, ...options }?: {
        activeCategory: any;
    }): Promise<void>;
    /** @override */
    override _onChangeTab(event: any, tabs: any, active: any): void;
    /** @override */
    override _onSearchFilter(event: any, query: any, rgx: any, html: any): void;
    /**
     * Handle button click to reset default settings
     * @param {Event} event   The initial button click event
     * @abstract
     * @protected
     */
    protected _onResetDefaults(event: Event): void;
}
