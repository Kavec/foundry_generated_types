/**
 * Responsible for managing the New User Experience workflows.
 */
declare class NewUserExperience {
    /**
     * Initialize the new user experience.
     * Currently, this generates some chat messages with hints for getting started if we detect this is a new world.
     */
    initialize(): void;
    /**
     * Show chat tips for first launch.
     * @protected
     */
    protected _createInitialChatMessages(): void;
    /**
     * Create a default scene for the new world.
     * @protected
     */
    protected _createDefaultScene(): Promise<void>;
    /**
     * Automatically show uncompleted Tours related to new worlds.
     * @protected
     */
    protected _showNewWorldTour(): Promise<void>;
    /**
     * Add event listeners to the chat card links.
     * @param {ChatMessage} msg  The ChatMessage being rendered.
     * @param {JQuery<HTMLElement>} html      The HTML content of the message.
     * @protected
     */
    protected _activateListeners(msg: ChatMessage, html: JQuery<HTMLElement>): void;
    /**
     * Perform some special action triggered by clicking on a link in a NUE chat card.
     * @param {TriggeredEvent} event  The click event.
     * @protected
     */
    protected _onActionLink(event: TriggeredEvent): Application;
    /**
     * Switch to the appropriate tab when a user clicks on a link in the chat message.
     * @param {TriggeredEvent} event  The click event.
     * @protected
     */
    protected _onTabLink(event: TriggeredEvent): void;
}
