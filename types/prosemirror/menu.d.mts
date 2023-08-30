/**
 * A class responsible for building a menu for a ProseMirror instance.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorMenu extends ProseMirrorPlugin {
    /**
     * An enumeration of editor scopes in which a menu item can appear
     * @enum {string}
     * @protected
     */
    protected static _MENU_ITEM_SCOPES: {
        BOTH: string;
        TEXT: string;
        HTML: string;
    };
    /** @inheritdoc */
    static build(schema: any, options?: {}): any;
    /**
     * @typedef {object} ProseMirrorMenuOptions
     * @property {Function} [onSave]        A function to call when the save button is pressed.
     * @property {boolean} [destroyOnSave]  Whether this editor instance is intended to be destroyed when saved.
     * @property {boolean} [compact]        Whether to display a more compact version of the menu.
     */
    /**
     * @param {Schema} schema                     The ProseMirror schema to build a menu for.
     * @param {EditorView} view                   The editor view.
     * @param {ProseMirrorMenuOptions} [options]  Additional options to configure the plugin's behaviour.
     */
    constructor(schema: Schema, view: EditorView, options?: {
        /**
         * A function to call when the save button is pressed.
         */
        onSave?: Function;
        /**
         * Whether this editor instance is intended to be destroyed when saved.
         */
        destroyOnSave?: boolean;
        /**
         * Whether to display a more compact version of the menu.
         */
        compact?: boolean;
    });
    /**
     * Additional options to configure the plugin's behaviour.
     * @type {ProseMirrorMenuOptions}
     */
    options: {
        /**
         * A function to call when the save button is pressed.
         */
        onSave?: Function;
        /**
         * Whether this editor instance is intended to be destroyed when saved.
         */
        destroyOnSave?: boolean;
        /**
         * Whether to display a more compact version of the menu.
         */
        compact?: boolean;
    };
    get editingSource(): boolean;
    /**
     * Render the menu's HTML.
     * @returns {ProseMirrorMenu}
     */
    render(): ProseMirrorMenu;
    /**
     * Attach event listeners.
     * @param {HTMLMenuElement} html  The root menu element.
     */
    activateListeners(html: HTMLMenuElement): void;
    /**
     * Called whenever the view's state is updated.
     * @param {EditorView} view       The current editor state.
     * @param {EditorView} prevState  The previous editor state.
     */
    update(view: EditorView, prevState: EditorView): void;
    /**
     * Called when the view is destroyed or receives a state with different plugins.
     */
    destroy(): void;
    /**
     * Instantiate the ProseMirrorDropDown instances and configure them with the defined menu items.
     * @protected
     */
    protected _createDropDowns(): void;
    /**
     * @typedef {object} ProseMirrorMenuItem
     * @property {string} action             A string identifier for this menu item.
     * @property {string} title              The description of the menu item.
     * @property {string} [class]            An optional class to apply to the menu item.
     * @property {string} [style]            An optional style to apply to the title text.
     * @property {string} [icon]             The menu item's icon HTML.
     * @property {MarkType} [mark]           The mark to apply to the selected text.
     * @property {NodeType} [node]           The node to wrap the selected text in.
     * @property {object} [attrs]            An object of attributes for the node or mark.
     * @property {number} [group]            Entries with the same group number will be grouped together in the drop-down.
     *                                       Lower-numbered groups appear higher in the list.
     * @property {number} [priority]         A numeric priority which determines whether this item is displayed as the
     *                                       dropdown title. Lower priority takes precedence.
     * @property {ProseMirrorCommand} [cmd]  The command to run when the menu item is clicked.
     * @property {boolean} [active=false]    Whether the current item is active under the given selection or cursor.
     */
    /**
     * @typedef {ProseMirrorMenuItem} ProseMirrorDropDownEntry
     * @property {ProseMirrorDropDownEntry[]} [children]  Any child entries.
     */
    /**
     * @typedef {object} ProseMirrorDropDownConfig
     * @property {string} title                        The default title of the drop-down.
     * @property {string} cssClass                     The menu CSS class.
     * @property {string} [icon]                       An optional icon to use instead of a text label.
     * @property {ProseMirrorDropDownEntry[]} entries  The drop-down entries.
     */
    /**
     * Configure dropdowns for this menu. Each entry in the top-level array corresponds to a separate drop-down.
     * @returns {Object<ProseMirrorDropDownConfig>}
     * @protected
     */
    protected _getDropDownMenus(): any;
    /**
     * Configure the items for this menu.
     * @returns {ProseMirrorMenuItem[]}
     * @protected
     */
    protected _getMenuItems(): {
        /**
         * A string identifier for this menu item.
         */
        action: string;
        /**
         * The description of the menu item.
         */
        title: string;
        /**
         * An optional class to apply to the menu item.
         */
        class?: string;
        /**
         * An optional style to apply to the title text.
         */
        style?: string;
        /**
         * The menu item's icon HTML.
         */
        icon?: string;
        /**
         * The mark to apply to the selected text.
         */
        mark?: MarkType;
        /**
         * The node to wrap the selected text in.
         */
        node?: NodeType;
        /**
         * An object of attributes for the node or mark.
         */
        attrs?: object;
        /**
         * Entries with the same group number will be grouped together in the drop-down.
         *             Lower-numbered groups appear higher in the list.
         */
        group?: number;
        /**
         * A numeric priority which determines whether this item is displayed as the
         *          dropdown title. Lower priority takes precedence.
         */
        priority?: number;
        /**
         * The command to run when the menu item is clicked.
         */
        cmd?: ProseMirrorCommand;
        /**
         * Whether the current item is active under the given selection or cursor.
         */
        active?: boolean;
    }[];
    /**
     * Determine whether the given menu item is currently active or not.
     * @param {ProseMirrorMenuItem} item  The menu item.
     * @returns {boolean}                 Whether the cursor or selection is in a state represented by the given menu
     *                                    item.
     * @protected
     */
    protected _isItemActive(item: {
        /**
         * A string identifier for this menu item.
         */
        action: string;
        /**
         * The description of the menu item.
         */
        title: string;
        /**
         * An optional class to apply to the menu item.
         */
        class?: string;
        /**
         * An optional style to apply to the title text.
         */
        style?: string;
        /**
         * The menu item's icon HTML.
         */
        icon?: string;
        /**
         * The mark to apply to the selected text.
         */
        mark?: MarkType;
        /**
         * The node to wrap the selected text in.
         */
        node?: NodeType;
        /**
         * An object of attributes for the node or mark.
         */
        attrs?: object;
        /**
         * Entries with the same group number will be grouped together in the drop-down.
         *             Lower-numbered groups appear higher in the list.
         */
        group?: number;
        /**
         * A numeric priority which determines whether this item is displayed as the
         *          dropdown title. Lower priority takes precedence.
         */
        priority?: number;
        /**
         * The command to run when the menu item is clicked.
         */
        cmd?: ProseMirrorCommand;
        /**
         * Whether the current item is active under the given selection or cursor.
         */
        active?: boolean;
    }): boolean;
    /**
     * Determine whether the given menu item representing a mark is active or not.
     * @param {ProseMirrorMenuItem} item  The menu item representing a {@link MarkType}.
     * @returns {boolean}                 Whether the cursor or selection is in a state represented by the given mark.
     * @protected
     */
    protected _isMarkActive(item: {
        /**
         * A string identifier for this menu item.
         */
        action: string;
        /**
         * The description of the menu item.
         */
        title: string;
        /**
         * An optional class to apply to the menu item.
         */
        class?: string;
        /**
         * An optional style to apply to the title text.
         */
        style?: string;
        /**
         * The menu item's icon HTML.
         */
        icon?: string;
        /**
         * The mark to apply to the selected text.
         */
        mark?: MarkType;
        /**
         * The node to wrap the selected text in.
         */
        node?: NodeType;
        /**
         * An object of attributes for the node or mark.
         */
        attrs?: object;
        /**
         * Entries with the same group number will be grouped together in the drop-down.
         *             Lower-numbered groups appear higher in the list.
         */
        group?: number;
        /**
         * A numeric priority which determines whether this item is displayed as the
         *          dropdown title. Lower priority takes precedence.
         */
        priority?: number;
        /**
         * The command to run when the menu item is clicked.
         */
        cmd?: ProseMirrorCommand;
        /**
         * Whether the current item is active under the given selection or cursor.
         */
        active?: boolean;
    }): boolean;
    /**
     * Determine whether the given menu item representing a node is active or not.
     * @param {ProseMirrorMenuItem} item  The menu item representing a {@link NodeType}.
     * @returns {boolean}                 Whether the cursor or selection is currently within a block of this menu item's
     *                                    node type.
     * @protected
     */
    protected _isNodeActive(item: {
        /**
         * A string identifier for this menu item.
         */
        action: string;
        /**
         * The description of the menu item.
         */
        title: string;
        /**
         * An optional class to apply to the menu item.
         */
        class?: string;
        /**
         * An optional style to apply to the title text.
         */
        style?: string;
        /**
         * The menu item's icon HTML.
         */
        icon?: string;
        /**
         * The mark to apply to the selected text.
         */
        mark?: MarkType;
        /**
         * The node to wrap the selected text in.
         */
        node?: NodeType;
        /**
         * An object of attributes for the node or mark.
         */
        attrs?: object;
        /**
         * Entries with the same group number will be grouped together in the drop-down.
         *             Lower-numbered groups appear higher in the list.
         */
        group?: number;
        /**
         * A numeric priority which determines whether this item is displayed as the
         *          dropdown title. Lower priority takes precedence.
         */
        priority?: number;
        /**
         * The command to run when the menu item is clicked.
         */
        cmd?: ProseMirrorCommand;
        /**
         * Whether the current item is active under the given selection or cursor.
         */
        active?: boolean;
    }): boolean;
    /**
     * Handle a button press.
     * @param {MouseEvent} event  The click event.
     * @protected
     */
    protected _onAction(event: MouseEvent): void;
    /**
     * Wrap the editor view element and inject our template ready to be rendered into.
     * @protected
     */
    protected _wrapEditor(): void;
    /**
     * Handle requests to save the editor contents
     * @protected
     */
    protected _handleSave(): any;
    /**
     * Display the insert image prompt.
     * @protected
     */
    protected _insertImagePrompt(): Promise<void>;
    /**
     * Display the insert link prompt.
     * @protected
     */
    protected _insertLinkPrompt(): Promise<void>;
    /**
     * Display the insert table prompt.
     * @protected
     */
    protected _insertTablePrompt(): Promise<void>;
    /**
     * Create a dialog for a menu button.
     * @param {string} action                      The unique menu button action.
     * @param {string} template                    The dialog's template.
     * @param {object} [options]                   Additional options to configure the dialog's behaviour.
     * @param {object} [options.data={}]           Data to pass to the template.
     * @returns {HTMLDialogElement}
     * @protected
     */
    protected _showDialog(action: string, template: string, { data }?: {
        data?: object;
    }): HTMLDialogElement;
    /**
     * Clear any marks from the current selection.
     * @protected
     */
    protected _clearFormatting(): void;
    /**
     * Toggle link recommendations
     * @protected
     */
    protected _toggleMatches(): Promise<void>;
    /**
     * @callback MenuToggleBlockWrapCommand
     * @param {NodeType} node   The node to wrap the selection in.
     * @param {object} [attrs]  Attributes for the node.
     * @returns ProseMirrorCommand
     */
    /**
     * Toggle the given selection by wrapping it in a given block or lifting it out of one.
     * @param {NodeType} node                    The type of node being interacted with.
     * @param {MenuToggleBlockWrapCommand} wrap  The wrap command specific to the given node.
     * @param {object} [options]                 Additional options to configure behaviour.
     * @param {object} [options.attrs]           Attributes for the node.
     * @protected
     */
    protected _toggleBlock(node: NodeType, wrap: (node: NodeType, attrs?: object) => any, { attrs }?: {
        attrs?: object;
    }): void;
    /**
     * Toggle the given selection by wrapping it in a given text block, or reverting to a paragraph block.
     * @param {NodeType} node           The type of node being interacted with.
     * @param {object} [options]        Additional options to configure behaviour.
     * @param {object} [options.attrs]  Attributes for the node.
     * @protected
     */
    protected _toggleTextBlock(node: NodeType, { attrs }?: {
        attrs?: object;
    }): void;
    #private;
}
import ProseMirrorPlugin from "./plugin.mjs";
