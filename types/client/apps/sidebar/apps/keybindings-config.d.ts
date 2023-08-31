/**
 * Allows for viewing and editing of Keybinding Actions
 */
declare class KeybindingsConfig extends PackageConfiguration {
    /**
     * Transforms a Binding into a human-readable string representation
     * @param {KeybindingActionBinding} binding   The Binding
     * @returns {string}                           A human readable string
     * @protected
     */
    protected static _humanizeBinding(binding: KeybindingActionBinding): string;
    /** @inheritDoc */
    _categorizeEntry(namespace: any): {
        id: string;
        title: string;
    };
    /** @inheritDoc */
    _prepareCategoryData(): {
        categories: object[];
        total: number;
    } | {
        categories: Map<any, any>;
        total: number;
    };
    /**
     * Add faux-keybind actions that represent the possible Mouse Controls
     * @param {Map} categories    The current Map of Categories to add to
     * @returns {number}           The number of Actions added
     * @protected
     */
    protected _addMouseControlsReference(categories: Map<any, any>): number;
    /**
     * Given an Binding and its parent Action, detects other Actions that might conflict with that binding
     * @param {string} actionId                   The namespaced Action ID the Binding belongs to
     * @param {KeybindingActionConfig} action     The Action config
     * @param {KeybindingActionBinding} binding   The Binding
     * @returns {KeybindingAction[]}
     * @protected
     */
    protected _detectConflictingActions(actionId: string, action: KeybindingActionConfig, binding: KeybindingActionBinding): KeybindingAction[];
    /** @override */
    override _onResetDefaults(event: any): Promise<any>;
    /**
     * Handle Control clicks
     * @param {MouseEvent} event
     * @protected
     */
    protected _onClickBindingControl(event: MouseEvent): void | Promise<void>;
    /**
     * Handle left-click events to show / hide a certain category
     * @param {MouseEvent} event
     * @protected
     */
    protected _onClickAdd(event: MouseEvent): Promise<void>;
    /**
     * Handle left-click events to show / hide a certain category
     * @param {MouseEvent} event
     * @protected
     */
    protected _onClickDelete(event: MouseEvent): Promise<void>;
    /**
     * Inserts a Binding into the Pending Edits object, creating a new Map entry as needed
     * @param {string} namespace
     * @param {string} action
     * @param {number} bindingIndex
     * @param {KeybindingActionBinding} binding
     * @protected
     */
    protected _addPendingEdit(namespace: string, action: string, bindingIndex: number, binding: KeybindingActionBinding): void;
    /**
     * Toggle visibility of the Edit / Save UI
     * @param {MouseEvent} event
     * @protected
     */
    protected _onClickEditableBinding(event: MouseEvent): void;
    /**
     * Toggle visibility of the Edit UI
     * @param {MouseEvent} event
     * @protected
     */
    protected _onDoubleClickKey(event: MouseEvent): void;
    /**
     * Save the new Binding value and update the display of the UI
     * @param {MouseEvent} event
     * @protected
     */
    protected _onClickSaveBinding(event: MouseEvent): Promise<void>;
    /**
     * Given a clicked Action element, finds the parent Action
     * @param {MouseEvent|KeyboardEvent} event
     * @returns {{namespace: string, action: string, actionHtml: *}}
     * @protected
     */
    protected _getParentAction(event: MouseEvent | KeyboardEvent): {
        namespace: string;
        action: string;
        actionHtml: any;
    };
    /**
     * Given a Clicked binding control element, finds the parent Binding
     * @param {MouseEvent|KeyboardEvent} event
     * @returns {{bindingHtml: *, bindingId: string}}
     * @protected
     */
    protected _getParentBinding(event: MouseEvent | KeyboardEvent): {
        bindingHtml: any;
        bindingId: string;
    };
    /**
     * Iterates over all Pending edits, merging them in with unedited Bindings and then saving and resetting the UI
     * @returns {Promise<void>}
     * @protected
     */
    protected _savePendingEdits(): Promise<void>;
    /**
     * Processes input from the keyboard to form a list of pending Binding edits
     * @param {KeyboardEvent} event   The keyboard event
     * @protected
     */
    protected _onKeydownBindingInput(event: KeyboardEvent): void;
    #private;
}
