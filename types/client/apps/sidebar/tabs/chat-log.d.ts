/**
 * @typedef {ApplicationOptions} ChatLogOptions
 * @property {boolean} [stream]  Is this chat log being rendered as part of the stream view?
 */
/**
 * The sidebar directory which organizes and displays world-level ChatMessage documents.
 * @extends {SidebarTab}
 * @see {Sidebar}
 * @param {ChatLogOptions} [options]  Application configuration options.
 */
declare class ChatLog extends SidebarTab {
    /**
     * @override
     * @returns {ChatLogOptions}
     */
    static override get defaultOptions(): ApplicationOptions;
    /**
     * An enumeration of regular expression patterns used to match chat messages.
     * @enum {RegExp}
     */
    static MESSAGE_PATTERNS: {
        roll: RegExp;
        gmroll: RegExp;
        blindroll: RegExp;
        selfroll: RegExp;
        publicroll: RegExp;
        ic: RegExp;
        ooc: RegExp;
        emote: RegExp;
        whisper: RegExp;
        reply: RegExp;
        gm: RegExp;
        players: RegExp;
        macro: RegExp;
        invalid: RegExp;
    };
    /**
     * The set of commands that can be processed over multiple lines.
     * @type {Set<string>}
     */
    static MULTILINE_COMMANDS: Set<string>;
    /**
     * Parse a chat string to identify the chat command (if any) which was used
     * @param {string} message    The message to match
     * @returns {string[]}        The identified command and regex match
     */
    static parse(message: string): string[];
    /**
     * Handle dropping of transferred data onto the chat editor
     * @param {DragEvent} event     The originating drop event which triggered the data transfer
     * @protected
     */
    protected static _onDropTextAreaData(event: DragEvent): Promise<void>;
    /**
     * Update roll mode select dropdowns when the setting is changed
     * @param {string} mode     The new roll mode setting
     */
    static _setRollMode(mode: string): void;
    constructor(options: any);
    /**
     * Track any pending text which the user has submitted in the chat log textarea
     * @type {string}
     * @protected
     */
    protected _pendingText: string;
    /**
     * Track the history of the past 5 sent messages which can be accessed using the arrow keys
     * @type {object[]}
     * @protected
     */
    protected _sentMessages: object[];
    /**
     * Track which remembered message is being currently displayed to cycle properly
     * @type {number}
     * @protected
     */
    protected _sentMessageIndex: number;
    /**
     * Track the time when the last message was sent to avoid flooding notifications
     * @type {number}
     * @protected
     */
    protected _lastMessageTime: number;
    /**
     * Track the id of the last message displayed in the log
     * @type {string|null}
     * @protected
     */
    protected _lastId: string | null;
    /**
     * Track the last received message which included the user as a whisper recipient.
     * @type {ChatMessage|null}
     * @protected
     */
    protected _lastWhisper: ChatMessage | null;
    /**
     * A reference to the chat text entry bound key method
     * @type {Function|null}
     * @protected
     */
    protected _onChatKeyDownBinding: Function | null;
    /**
     * Returns if the chat log is currently scrolled to the bottom
     * @returns {boolean}
     */
    get isAtBottom(): boolean;
    /**
     * A reference to the Messages collection that the chat log displays
     * @type {Messages}
     */
    get collection(): Messages;
    /** @override */
    override getData(options?: {}): Promise<any>;
    /** @inheritdoc */
    _render(force: any, options: any): Promise<void>;
    /**
     * Render a batch of additional messages, prepending them to the top of the log
     * @param {JQuery<HTMLElement>} html     The rendered jQuery HTML object
     * @param {number} size     The batch size to include
     * @returns {Promise<void>}
     * @protected
     */
    protected _renderBatch(html: JQuery<HTMLElement>, size: number): Promise<void>;
    /**
     * Delete a single message from the chat log
     * @param {string} messageId    The ChatMessage document to remove from the log
     * @param {boolean} [deleteAll] Is this part of a flush operation to delete all messages?
     */
    deleteMessage(messageId: string, { deleteAll }?: boolean): void;
    /**
     * Trigger a notification that alerts the user visually and audibly that a new chat log message has been posted
     * @param {ChatMessage} message         The message generating a notification
     */
    notify(message: ChatMessage): void;
    /**
     * Post a single chat message to the log
     * @param {ChatMessage} message   A ChatMessage document instance to post to the log
     * @param {object} [options={}]   Additional options for how the message is posted to the log
     * @param {string} [options.before] An existing message ID to append the message before, by default the new message is
     *                                  appended to the end of the log.
     * @param {boolean} [options.notify] Trigger a notification which shows the log as having a new unread message.
     * @returns {Promise<void>}       A Promise which resolves once the message is posted
     */
    postOne(message: ChatMessage, { before, notify }?: {
        before?: string;
        notify?: boolean;
    }): Promise<void>;
    /**
     * Scroll the chat log to the bottom
     * @param {object} [options]
     * @param {boolean} [options.popout=false]                 If a popout exists, scroll it to the bottom too.
     * @param {boolean} [options.waitImages=false]             Wait for any images embedded in the chat log to load first
     *                                                         before scrolling?
     * @param {ScrollIntoViewOptions} [options.scrollOptions]  Options to configure scrolling behaviour.
     */
    scrollBottom({ popout, waitImages, scrollOptions }?: {
        popout?: boolean;
        waitImages?: boolean;
        scrollOptions?: ScrollIntoViewOptions;
    }): Promise<void>;
    /**
     * Update the content of a previously posted message after its data has been replaced
     * @param {ChatMessage} message   The ChatMessage instance to update
     * @param {boolean} notify        Trigger a notification which shows the log as having a new unread message
     */
    updateMessage(message: ChatMessage, notify?: boolean): Promise<void>;
    /**
     * Update the displayed timestamps for every displayed message in the chat log.
     * Timestamps are displayed in a humanized "timesince" format.
     */
    updateTimestamps(): void;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Prepare the data object of chat message data depending on the type of message being posted
     * @param {string} message         The original string of the message content
     * @returns {Promise<Object|void>} The prepared chat data object, or void if we were executing a macro instead
     */
    processMessage(message: string): Promise<any | void>;
    /**
     * Process messages which are posted using a dice-roll command
     * @param {string} command          The chat command type
     * @param {RegExpMatchArray[]} matches Multi-line matched roll expressions
     * @param {Object} chatData         The initial chat data
     * @param {Object} createOptions    Options used to create the message
     * @protected
     */
    protected _processDiceCommand(command: string, matches: RegExpMatchArray[], chatData: any, createOptions: any): Promise<void>;
    /**
     * Process messages which are posted using a chat whisper command
     * @param {string} command          The chat command type
     * @param {RegExpMatchArray} match  The matched RegExp expressions
     * @param {Object} chatData         The initial chat data
     * @param {Object} createOptions    Options used to create the message
     * @protected
     */
    protected _processWhisperCommand(command: string, match: RegExpMatchArray, chatData: any, createOptions: any): void;
    /**
     * Process messages which are posted using a chat whisper command
     * @param {string} command          The chat command type
     * @param {RegExpMatchArray} match  The matched RegExp expressions
     * @param {Object} chatData         The initial chat data
     * @param {Object} createOptions    Options used to create the message
     * @protected
     */
    protected _processChatCommand(command: string, match: RegExpMatchArray, chatData: any, createOptions: any): void;
    /**
     * Process messages which execute a macro.
     * @param {string} command  The chat command typed.
     * @param {RegExpMatchArray} match  The RegExp matches.
     * @protected
     */
    protected _processMacroCommand(command: string, match: RegExpMatchArray): any;
    /**
     * Add a sent message to an array of remembered messages to be re-sent if the user pages up with the up arrow key
     * @param {string} message    The message text being remembered
     * @protected
     */
    protected _remember(message: string): void;
    /**
     * Recall a previously sent message by incrementing up (1) or down (-1) through the sent messages array
     * @param {number} direction    The direction to recall, positive for older, negative for more recent
     * @return {string}             The recalled message, or an empty string
     * @protected
     */
    protected _recall(direction: number): string;
    /** @inheritdoc */
    _contextMenu(html: any): void;
    /**
     * Get the ChatLog entry context options
     * @return {object[]}   The ChatLog entry context options
     * @protected
     */
    protected _getEntryContextOptions(): object[];
    /**
     * Handle keydown events in the chat entry textarea
     * @param {KeyboardEvent} event
     * @protected
     */
    protected _onChatKeyDown(event: KeyboardEvent): Promise<void>;
    /**
     * Handle setting the preferred roll mode
     * @param {Event} event
     * @protected
     */
    protected _onChangeRollMode(event: Event): void;
    /**
     * Handle single message deletion workflow
     * @param {Event} event
     * @protected
     */
    protected _onDeleteMessage(event: Event): any;
    /**
     * Handle clicking of dice tooltip buttons
     * @param {Event} event
     * @protected
     */
    protected _onDiceRollClick(event: Event): void;
    /**
     * Handle click events to export the chat log
     * @param {Event} event
     * @protected
     */
    protected _onExportLog(event: Event): void;
    /**
     * Handle click events to flush the chat log
     * @param {Event} event
     * @protected
     */
    protected _onFlushLog(event: Event): void;
    /**
     * Handle scroll events within the chat log container
     * @param {UIEvent} event   The initial scroll event
     * @protected
     */
    protected _onScrollLog(event: UIEvent): Promise<void>;
    #private;
}
/**
 * An enumeration of regular expression patterns used to match chat messages.
 */
type MESSAGE_PATTERNS = RegExp;
type ChatLogOptions = ApplicationOptions;
