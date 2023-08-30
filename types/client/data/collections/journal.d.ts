/**
 * The singleton collection of JournalEntry documents which exist within the active World.
 * This Collection is accessible within the Game object as game.journal.
 * @extends {WorldCollection}
 *
 * @see {@link JournalEntry} The JournalEntry document
 * @see {@link JournalDirectory} The JournalDirectory sidebar directory
 */
declare class Journal extends WorldCollection {
    /**
     * Display a dialog which prompts the user to show a JournalEntry or JournalEntryPage to other players.
     * @param {JournalEntry|JournalEntryPage} doc  The JournalEntry or JournalEntryPage to show.
     * @returns {Promise<JournalEntry|JournalEntryPage|void>}
     */
    static showDialog(doc: JournalEntry | JournalEntryPage): Promise<JournalEntry | JournalEntryPage | void>;
    /**
     * Show the JournalEntry or JournalEntryPage to connected players.
     * By default, the document will only be shown to players who have permission to observe it.
     * If the force parameter is passed, the document will be shown to all players regardless of normal permission.
     * @param {JournalEntry|JournalEntryPage} doc  The JournalEntry or JournalEntryPage to show.
     * @param {object} [options]                   Additional options to configure behaviour.
     * @param {boolean} [options.force=false]      Display the entry to all players regardless of normal permissions.
     * @param {string[]} [options.users]           An optional list of user IDs to show the document to. Otherwise it will
     *                                             be shown to all connected clients.
     * @returns {Promise<JournalEntry|JournalEntryPage>}  A Promise that resolves back to the shown document once the
     *                                                    request is processed.
     * @throws If the user does not own the document they are trying to show.
     */
    static show(doc: JournalEntry | JournalEntryPage, { force, users }?: {
        force?: boolean;
        users?: string[];
    }): Promise<JournalEntry | JournalEntryPage>;
    /**
     * Share an image with connected players.
     * @param {string} src                 The image URL to share.
     * @param {ShareImageConfig} [config]  Image sharing configuration.
     */
    static showImage(src: string, { users, ...options }?: {
        /**
         * The image URL to share.
         */
        image: string;
        /**
         * The image title.
         */
        title: string;
        /**
         * The UUID of a Document related to the image, used to determine permission to see
         *         the image title.
         */
        uuid?: string;
        /**
         * If this is provided, the permissions of the related Document will be ignored and
         *   the title will be shown based on this parameter.
         */
        showTitle?: boolean;
        /**
         * A list of user IDs to show the image to.
         */
        users?: string[];
    }): void;
    /**
     * Open Socket listeners which transact JournalEntry data
     * @param {Socket} socket       The open websocket
     */
    static _activateSocketListeners(socket: Socket): void;
    /**
     * Handle a received request to show a JournalEntry or JournalEntryPage to the current client
     * @param {string} uuid            The UUID of the document to display for other players
     * @param {boolean} [force=false]  Display the document regardless of normal permissions
     * @internal
     */
    static _showEntry(uuid: string, force?: boolean): Promise<void>;
}
