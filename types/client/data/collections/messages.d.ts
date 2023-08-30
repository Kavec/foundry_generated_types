/**
 * The singleton collection of ChatMessage documents which exist within the active World.
 * This Collection is accessible within the Game object as game.messages.
 * @extends {WorldCollection}
 *
 * @see {@link ChatMessage} The ChatMessage document
 * @see {@link ChatLog} The ChatLog sidebar directory
 */
declare class Messages extends WorldCollection {
    /**
     * @override
     * @returns {SidebarTab}
     * */
    override get directory(): SidebarTab;
    /** @override */
    override render(force?: boolean): void;
    /**
     * If requested, dispatch a Chat Bubble UI for the newly created message
     * @param {ChatMessage} message     The ChatMessage document to say
     * @private
     */
    private sayBubble;
    /**
     * Handle export of the chat log to a text file
     * @private
     */
    private export;
    /**
     * Allow for bulk deletion of all chat messages, confirm first with a yes/no dialog.
     * @see {@link Dialog.confirm}
     */
    flush(): Promise<any>;
}
