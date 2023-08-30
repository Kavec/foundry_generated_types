/**
 * Allows for viewing and editing of Keybinding Actions
 */
declare class KeybindingsConfig extends PackageConfiguration {
    /**
     * Transforms a Binding into a human-readable string representation
     * @param {KeybindingActionBinding} binding   The Binding
     * @returns {string}                           A human readable string
     * @private
     */
    private static _humanizeBinding;
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
     * @private
     */
    private _addMouseControlsReference;
    /**
     * Given an Binding and its parent Action, detects other Actions that might conflict with that binding
     * @param {string} actionId                   The namespaced Action ID the Binding belongs to
     * @param {KeybindingActionConfig} action     The Action config
     * @param {KeybindingActionBinding} binding   The Binding
     * @returns {KeybindingAction[]}
     * @private
     */
    private _detectConflictingActions;
    /** @override */
    override _onResetDefaults(event: any): Promise<any>;
    /**
     * Handle Control clicks
     * @param {MouseEvent} event
     * @private
     */
    private _onClickBindingControl;
    /**
     * Handle left-click events to show / hide a certain category
     * @param {MouseEvent} event
     * @private
     */
    private _onClickAdd;
    /**
     * Handle left-click events to show / hide a certain category
     * @param {MouseEvent} event
     * @private
     */
    private _onClickDelete;
    /**
     * Inserts a Binding into the Pending Edits object, creating a new Map entry as needed
     * @param {string} namespace
     * @param {string} action
     * @param {number} bindingIndex
     * @param {KeybindingActionBinding} binding
     * @private
     */
    private _addPendingEdit;
    /**
     * Toggle visibility of the Edit / Save UI
     * @param {MouseEvent} event
     * @private
     */
    private _onClickEditableBinding;
    /**
     * Toggle visibility of the Edit UI
     * @param {MouseEvent} event
     * @private
     */
    private _onDoubleClickKey;
    /**
     * Save the new Binding value and update the display of the UI
     * @param {MouseEvent} event
     * @private
     */
    private _onClickSaveBinding;
    /**
     * Given a clicked Action element, finds the parent Action
     * @param {MouseEvent|KeyboardEvent} event
     * @returns {{namespace: string, action: string, actionHtml: *}}
     * @private
     */
    private _getParentAction;
    /**
     * Given a Clicked binding control element, finds the parent Binding
     * @param {MouseEvent|KeyboardEvent} event
     * @returns {{bindingHtml: *, bindingId: string}}
     * @private
     */
    private _getParentBinding;
    /**
     * Iterates over all Pending edits, merging them in with unedited Bindings and then saving and resetting the UI
     * @returns {Promise<void>}
     * @private
     */
    private _savePendingEdits;
    /**
     * Processes input from the keyboard to form a list of pending Binding edits
     * @param {KeyboardEvent} event   The keyboard event
     * @private
     */
    private _onKeydownBindingInput;
    #private;
}
