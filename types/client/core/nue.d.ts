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
     * @private
     */
    private _createInitialChatMessages;
    /**
     * Create a default scene for the new world.
     * @private
     */
    private _createDefaultScene;
    /**
     * Automatically show uncompleted Tours related to new worlds.
     * @private
     */
    private _showNewWorldTour;
    /**
     * Add event listeners to the chat card links.
     * @param {ChatMessage} msg  The ChatMessage being rendered.
     * @param {jQuery} html      The HTML content of the message.
     * @private
     */
    private _activateListeners;
    /**
     * Perform some special action triggered by clicking on a link in a NUE chat card.
     * @param {TriggeredEvent} event  The click event.
     * @private
     */
    private _onActionLink;
    /**
     * Switch to the appropriate tab when a user clicks on a link in the chat message.
     * @param {TriggeredEvent} event  The click event.
     * @private
     */
    private _onTabLink;
}
