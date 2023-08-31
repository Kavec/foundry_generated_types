/**
 * @typedef {Option} ChatBubbleOptions
 * @property {string[]} [cssClasses]    An optional array of CSS classes to apply to the resulting bubble
 * @property {boolean} [pan=true]       Pan to the token speaker for this bubble, if allowed by the client
 * @property {boolean} [requireVisible=false] Require that the token be visible in order for the bubble to be rendered
 */
/**
 * The Chat Bubble Class
 * This application displays a temporary message sent from a particular Token in the active Scene.
 * The message is displayed on the HUD layer just above the Token.
 */
declare class ChatBubbles {
    /**
     * Activate Socket event listeners which apply to the ChatBubbles UI.
     * @param {Socket} socket     The active web socket connection
     * @internal
     */
    static _activateSocketListeners(socket: Socket): void;
    template: string;
    /**
     * Track active Chat Bubbles
     * @type {object}
     */
    bubbles: object;
    /**
     * Track which Token was most recently panned to highlight
     * Use this to avoid repeat panning
     * @type {Token}
     * @protected
     */
    protected _panned: Function;
    /**
     * A reference to the chat bubbles HTML container in which rendered bubbles should live
     * @returns {jQuery}
     */
    get container(): JQueryStatic;
    /**
     * Create a chat bubble message for a certain token which is synchronized for display across all connected clients.
     * @param {TokenDocument} token           The speaking Token Document
     * @param {string} message                The spoken message text
     * @param {ChatBubbleOptions} [options]   Options which affect the bubble appearance
     * @returns {Promise<jQuery|null>}        A promise which resolves with the created bubble HTML, or null
     */
    broadcast(token: TokenDocument, message: string, options?: ChatBubbleOptions): Promise<JQueryStatic | null>;
    /**
     * Speak a message as a particular Token, displaying it as a chat bubble
     * @param {Token} token                   The speaking Token
     * @param {string} message                The spoken message text
     * @param {ChatBubbleOptions} [options]   Options which affect the bubble appearance
     * @returns {Promise<jQuery|null>}        A Promise which resolves to the created bubble HTML element, or null
     */
    say(token: Function, message: string, { cssClasses, requireVisible, pan }?: ChatBubbleOptions): Promise<JQueryStatic | null>;
    /**
     * Clear any existing chat bubble for a certain Token
     * @param {Token} token
     * @protected
     */
    protected _clearBubble(token: Function): Promise<any>;
    /**
     * Render the HTML template for the chat bubble
     * @param {object} data         Template data
     * @returns {Promise<string>}   The rendered HTML
     * @protected
     */
    protected _renderHTML(data: object): Promise<string>;
    /**
     * Before displaying the chat message, determine it's constrained and unconstrained dimensions
     * @param {string} message    The message content
     * @returns {object}          The rendered message dimensions
     * @protected
     */
    protected _getMessageDimensions(message: string): object;
    /**
     * Assign styling parameters to the chat bubble, toggling either a left or right display (randomly)
     * @param {Token} token             The speaking Token
     * @param {JQuery} html             Chat bubble content
     * @param {Rectangle} dimensions    Positioning data
     * @protected
     */
    protected _setPosition(token: Function, html: JQuery, dimensions: Rectangle): void;
    /**
     * Determine the length of time for which to display a chat bubble.
     * Research suggests that average reading speed is 200 words per minute.
     * Since these are short-form messages, we multiply reading speed by 1.5.
     * Clamp the result between 1 second (minimum) and 20 seconds (maximum)
     * @param {jQuery} html     The HTML message
     * @returns {number}        The number of milliseconds for which to display the message
     */
    _getDuration(html: JQueryStatic): number;
}
type ChatBubbleOptions = new (text?: string, value?: string, defaultSelected?: boolean, selected?: boolean) => HTMLOptionElement;
