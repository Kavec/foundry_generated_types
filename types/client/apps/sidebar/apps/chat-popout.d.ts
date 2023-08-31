/**
 * A simple application which supports popping a ChatMessage out to a separate UI window.
 * @extends {Application}
 * @param {ChatMessage} object            The {@link ChatMessage} object that is being popped out.
 * @param {ApplicationOptions} [options]  Application configuration options.
 */
declare class ChatPopout extends Application {
    /** @inheritdoc */
    static get defaultOptions(): any;
    constructor(message: any, options: any);
    /**
     * The displayed Chat Message document
     * @type {ChatMessage}
     */
    message: ChatMessage;
    /** @inheritdoc */
    _renderInner(data: any, options: any): Promise<JQuery<HTMLElement>>;
}
