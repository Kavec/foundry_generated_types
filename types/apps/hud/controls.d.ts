/**
 * @typedef {Object} SceneControlTool
 * @property {string} name
 * @property {string} title
 * @property {string} icon
 * @property {boolean} visible
 * @property {boolean} toggle
 * @property {boolean} active
 * @property {boolean} button
 * @property {Function} onClick
 * @property {ToolclipConfiguration} toolclip  Configuration for rendering the tool's toolclip.
 */
/**
 * @typedef {Object} SceneControl
 * @property {string} name
 * @property {string} title
 * @property {string} layer
 * @property {string} icon
 * @property {boolean} visible
 * @property {SceneControlTool[]} tools
 * @property {string} activeTool
 */
/**
 * @typedef {object} ToolclipConfiguration
 * @property {string} src                         The filename of the toolclip video.
 * @property {string} heading                     The heading string.
 * @property {ToolclipConfigurationItem[]} items  The items in the toolclip body.
 */
/**
 * @typedef {object} ToolclipConfigurationItem
 * @property {string} [paragraph]  A plain paragraph of content for this item.
 * @property {string} [heading]    A heading for the item.
 * @property {string} [content]    Content for the item.
 * @property {string} [reference]  If the item is a single key reference, use this instead of content.
 */
/**
 * Scene controls navigation menu
 * @extends {Application}
 */
declare class SceneControls extends Application {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * The Array of Scene Control buttons which are currently rendered
     * @type {SceneControl[]}
     */
    controls: SceneControl[];
    /**
     * The currently active control set
     * @type {string}
     */
    get activeControl(): string;
    /**
     * The currently active tool in the control palette
     * @type {string}
     */
    get activeTool(): string;
    /**
     * Return the active control set
     * @type {SceneControl|null}
     */
    get control(): SceneControl;
    /**
     * Return the actively controlled tool
     * @type {SceneControlTool|null}
     */
    get tool(): SceneControlTool;
    /**
     * Initialize the Scene Controls by obtaining the set of control buttons and rendering the HTML
     * @param {object} options      Options which modify how the controls UI is initialized
     * @param {string} [options.control]      An optional control set to set as active
     * @param {string} [options.layer]        An optional layer name to target as the active control
     * @param {string} [options.tool]         A specific named tool to set as active for the palette
     */
    initialize({ control, layer, tool }?: {
        control?: string;
        layer?: string;
        tool?: string;
    }): void;
    /** @inheritdoc */
    getData(options?: {}): Promise<{
        controls: any[];
        active: boolean;
        cssClass: string;
    }>;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Handle click events on a Control set
     * @param {Event} event   A click event on a tool control
     * @private
     */
    private _onClickLayer;
    /**
     * Handle click events on Tool controls
     * @param {Event} event   A click event on a tool control
     * @private
     */
    private _onClickTool;
    /**
     * Get the set of Control sets and tools that are rendered as the Scene Controls.
     * These controls may be extended using the "getSceneControlButtons" Hook.
     * @returns {SceneControl[]}
     * @private
     */
    private _getControlButtons;
    /**
     * @deprecated since v10
     * @ignore
     */
    get isRuler(): boolean;
    #private;
}
type SceneControlTool = {
    name: string;
    title: string;
    icon: string;
    visible: boolean;
    toggle: boolean;
    active: boolean;
    button: boolean;
    onClick: Function;
    /**
     * Configuration for rendering the tool's toolclip.
     */
    toolclip: ToolclipConfiguration;
};
type SceneControl = {
    name: string;
    title: string;
    layer: string;
    icon: string;
    visible: boolean;
    tools: SceneControlTool[];
    activeTool: string;
};
type ToolclipConfiguration = {
    /**
     * The filename of the toolclip video.
     */
    src: string;
    /**
     * The heading string.
     */
    heading: string;
    /**
     * The items in the toolclip body.
     */
    items: ToolclipConfigurationItem[];
};
type ToolclipConfigurationItem = {
    /**
     * A plain paragraph of content for this item.
     */
    paragraph?: string;
    /**
     * A heading for the item.
     */
    heading?: string;
    /**
     * Content for the item.
     */
    content?: string;
    /**
     * If the item is a single key reference, use this instead of content.
     */
    reference?: string;
};
