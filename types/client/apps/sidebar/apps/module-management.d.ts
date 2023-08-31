/**
 * The Module Management Application.
 * This application provides a view of which modules are available to be used and allows for configuration of the
 * set of modules which are active within the World.
 */
declare class ModuleManagement extends FormApplication {
    /**
     * The named game setting which persists module configuration.
     * @type {string}
     */
    static CONFIG_SETTING: string;
    /** @inheritdoc */
    static get defaultOptions(): any;
    constructor(...args: any[]);
    _filter: string;
    _expanded: boolean;
    /** @inheritdoc */
    get isEditable(): any;
    /** @inheritdoc */
    getData(options?: {}): {
        editable: any;
        filters: {
            id: string;
            label: any;
            count: any;
        }[];
        modules: any;
        expanded: boolean;
    };
    /**
     * Given a module, determines if it meets minimum and maximum compatibility requirements of its dependencies.
     * If not, it is marked as being unable to be activated.
     * If the package does not meet verified requirements, it is marked with a warning instead.
     * @param {object} module  The module.
     * @protected
     */
    protected _evaluateDependencies(module: object): void;
    /**
     * Given a module, determine if it meets the minimum and maximum system compatibility requirements.
     * @param {object} module  The module.
     * @protected
     */
    protected _evaluateSystemCompatibility(module: object): void;
    /** @inheritdoc */
    _getSubmitData(updateData?: {}): any;
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<any>;
    /**
     * Handle changes to a module checkbox to prompt for whether to enable dependencies.
     * @param {Event} event  The change event.
     * @protected
     */
    protected _onChangeCheckbox(event: Event): Promise<any>;
    /**
     * Indicate if any Documents would become unavailable if the module were disabled, and confirm if the user wishes to
     * proceed.
     * @param {Module} module       The module being disabled.
     * @returns {Promise<boolean>}  A Promise which resolves to true if disabling should continue.
     * @protected
     */
    protected _confirmDocumentsUnavailable(module: Module): Promise<boolean>;
    /**
     * Handle a button-click to deactivate all modules
     * @protected
     */
    protected _onDeactivateAll(event: any): void;
    /**
     * Handle expanding or collapsing the display of descriptive elements
     * @protected
     */
    protected _onExpandCollapse(event: any): void;
    /**
     * Handle switching the module list filter.
     * @protected
     */
    protected _onFilterList(event: any): void;
    /** @inheritdoc */
    _onSearchFilter(event: any, query: any, rgx: any, html: any): void;
    /**
     * Format a document count collection for display.
     * @param {ModuleSubTypeCounts} counts  An object of sub-type counts.
     * @param {boolean} isActive            Whether the module is active.
     * @protected
     */
    protected _formatDocumentSummary(counts: ModuleSubTypeCounts, isActive: boolean): string;
    #private;
}
type ImpactedDependency = {
    /**
     * The dependency ID
     */
    id: string;
    /**
     * The dependency title
     */
    title: string;
    /**
     * The reason the dependency is related to this package
     */
    reason: string;
    /**
     * Whether the dependency is required
     */
    required: boolean;
    /**
     * A note to display to the user
     */
    note: string;
};
