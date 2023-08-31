/**
 * The client-side Cards document which extends the common BaseCards model.
 * Each Cards document contains CardsData which defines its data schema.
 * @extends documents.BaseCards
 * @mixes ClientDocumentMixin
 *
 * @see {@link CardStacks}                        The world-level collection of Cards documents
 * @see {@link CardsConfig}                       The Cards configuration application
 */
declare class Cards {
    /** @inheritdoc */
    static createDocuments(data?: any[], context?: {}): Promise<any>;
    /** @override */
    static override createDialog(data?: {}, { parent, pack, ...options }?: {
        parent?: any;
        pack?: any;
    }): Promise<any>;
    /**
     * Provide a thumbnail image path used to represent this document.
     * @type {string}
     */
    get thumbnail(): string;
    /**
     * The Card documents within this stack which are available to be drawn.
     * @type {Card[]}
     */
    get availableCards(): Card[];
    /**
     * The Card documents which belong to this stack but have already been drawn.
     * @type {Card[]}
     */
    get drawnCards(): Card[];
    /**
     * Returns the localized Label for the type of Card Stack this is
     * @type {string}
     */
    get typeLabel(): string;
    /**
     * Can this Cards document be cloned in a duplicate workflow?
     * @type {boolean}
     */
    get canClone(): boolean;
    /** @inheritDoc */
    _preCreate(data: any, options: any, user: any): Promise<void>;
    /**
     * Deal one or more cards from this Cards document to each of a provided array of Cards destinations.
     * Cards are allocated from the top of the deck in cyclical order until the required number of Cards have been dealt.
     * @param {Cards[]} to              An array of other Cards documents to which cards are dealt
     * @param {number} [number=1]       The number of cards to deal to each other document
     * @param {object} [options={}]     Options which modify how the deal operation is performed
     * @param {number} [options.how=0]          How to draw, a value from CONST.CARD_DRAW_MODES
     * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the deal operation,
     *                                          for example the displayed face
     * @param {string} [options.action=deal]    The name of the action being performed, used as part of the dispatched
     *                                          Hook event
     * @param {boolean} [options.chatNotification=true] Create a ChatMessage which notifies that this action has occurred
     * @returns {Promise<Cards>}        This Cards document after the deal operation has completed
     */
    deal(to: Cards[], number?: number, { action, how, updateData, chatNotification }?: {
        how?: number;
        updateData?: object;
        action?: string;
        chatNotification?: boolean;
    }): Promise<Cards>;
    /**
     * Pass an array of specific Card documents from this document to some other Cards stack.
     * @param {Cards} to                Some other Cards document that is the destination for the pass operation
     * @param {string[]} ids            The embedded Card ids which should be passed
     * @param {object} [options={}]     Additional options which modify the pass operation
     * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the pass operation,
     *                                          for example the displayed face
     * @param {string} [options.action=pass]    The name of the action being performed, used as part of the dispatched
     *                                          Hook event
     * @param {boolean} [options.chatNotification=true] Create a ChatMessage which notifies that this action has occurred
     * @returns {Promise<Card[]>}       An array of the Card embedded documents created within the destination stack
     */
    pass(to: Cards, ids: string[], { updateData, action, chatNotification }?: {
        updateData?: object;
        action?: string;
        chatNotification?: boolean;
    }): Promise<Card[]>;
    /**
     * Draw one or more cards from some other Cards document.
     * @param {Cards} from              Some other Cards document from which to draw
     * @param {number} [number=1]       The number of cards to draw
     * @param {object} [options={}]     Options which modify how the draw operation is performed
     * @param {number} [options.how=0]          How to draw, a value from CONST.CARD_DRAW_MODES
     * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the draw operation,
     *                                          for example the displayed face
     * @returns {Promise<Card[]>}       An array of the Card documents which were drawn
     */
    draw(from: Cards, number?: number, { how, updateData, ...options }?: {
        how?: number;
        updateData?: object;
    }): Promise<Card[]>;
    /**
     * Shuffle this Cards stack, randomizing the sort order of all the cards it contains.
     * @param {object} [options={}]     Options which modify how the shuffle operation is performed.
     * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the shuffle operation,
     *                                          for example the displayed face.
     * @param {boolean} [options.chatNotification=true] Create a ChatMessage which notifies that this action has occurred
     * @returns {Promise<Cards>}        The Cards document after the shuffle operation has completed
     */
    shuffle({ updateData, chatNotification }?: {
        updateData?: object;
        chatNotification?: boolean;
    }): Promise<Cards>;
    /**
     * Recall the Cards stack, retrieving all original cards from other stacks where they may have been drawn if this is a
     * deck, otherwise returning all the cards in this stack to the decks where they originated.
     * @param {object} [options={}]             Options which modify the recall operation
     * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the recall operation,
     *                                          for example the displayed face
     * @param {boolean} [options.chatNotification=true] Create a ChatMessage which notifies that this action has occurred
     * @returns {Promise<Cards>}                The Cards document after the recall operation has completed.
     */
    recall(options?: {
        updateData?: object;
        chatNotification?: boolean;
    }): Promise<Cards>;
    /**
     * Perform a reset operation for a deck, retrieving all original cards from other stacks where they may have been
     * drawn.
     * @param {object} [options={}]              Options which modify the reset operation.
     * @param {object} [options.updateData={}]           Modifications to make to each Card as part of the reset operation
     * @param {boolean} [options.chatNotification=true]  Create a ChatMessage which notifies that this action has occurred
     * @returns {Promise<Cards>}                 The Cards document after the reset operation has completed.
     * @protected
     */
    protected _resetDeck({ updateData, chatNotification }?: {
        updateData?: object;
        chatNotification?: boolean;
    }): Promise<Cards>;
    /**
     * Return all cards in this stack to their original decks.
     * @param {object} [options={}]              Options which modify the return operation.
     * @param {object} [options.updateData={}]          Modifications to make to each Card as part of the return operation
     * @param {boolean} [options.chatNotification=true] Create a ChatMessage which notifies that this action has occurred
     * @returns {Promise<Cards>}                 The Cards document after the return operation has completed.
     * @protected
     */
    protected _resetStack({ updateData, chatNotification }?: {
        updateData?: object;
        chatNotification?: boolean;
    }): Promise<Cards>;
    /**
     * A sorting function that is used to determine the standard order of Card documents within an un-shuffled stack.
     * @param {Card} a     The card being sorted
     * @param {Card} b     Another card being sorted against
     * @returns {number}
     * @protected
     */
    protected sortStandard(a: Card, b: Card): number;
    /**
     * A sorting function that is used to determine the order of Card documents within a shuffled stack.
     * @param {Card} a     The card being sorted
     * @param {Card} b     Another card being sorted against
     * @returns {number}
     * @protected
     */
    protected sortShuffled(a: Card, b: Card): number;
    /**
     * An internal helper method for drawing a certain number of Card documents from this Cards stack.
     * @param {number} number       The number of cards to draw
     * @param {number} how          A draw mode from CONST.CARD_DRAW_MODES
     * @returns {Card[]}            An array of drawn Card documents
     * @protected
     */
    protected _drawCards(number: number, how: number): Card[];
    /**
     * Create a ChatMessage which provides a notification of the operation which was just performed.
     * Visibility of the resulting message is linked to the default roll mode selected in the chat log dropdown.
     * @param {Cards} source        The source Cards document from which the action originated
     * @param {string} action       The localization key which formats the chat message notification
     * @param {object} context      Data passed to the Localization#format method for the localization key
     * @returns {ChatMessage}       A created ChatMessage document
     * @protected
     */
    protected _postChatNotification(source: Cards, action: string, context: object): ChatMessage;
    /** @override */
    override _onUpdate(data: any, options: any, userId: any): void;
    _sheet: any;
    /** @inheritdoc */
    _preDelete(options: any, user: any): Promise<any>;
    /**
     * Display a dialog which prompts the user to deal cards to some number of hand-type Cards documents.
     * @see {@link Cards#deal}
     * @returns {Promise<Cards|null>}
     */
    dealDialog(): Promise<Cards | null>;
    /**
     * Display a dialog which prompts the user to draw cards from some other deck-type Cards documents.
     * @see {@link Cards#draw}
     * @returns {Promise<Card[]|null>}
     */
    drawDialog(): Promise<Card[] | null>;
    /**
     * Display a dialog which prompts the user to pass cards from this document to some other Cards document.
     * @see {@link Cards#deal}
     * @returns {Promise<Cards|null>}
     */
    passDialog(): Promise<Cards | null>;
    /**
     * Display a dialog which prompts the user to play a specific Card to some other Cards document
     * @see {@link Cards#pass}
     * @param {Card} card     The specific card being played as part of this dialog
     * @returns {Promise<Card[]|null>}
     */
    playDialog(card: Card): Promise<Card[] | null>;
    /**
     * Display a confirmation dialog for whether or not the user wishes to reset a Cards stack
     * @see {@link Cards#recall}
     * @returns {Promise<Cards|false|null>}
     */
    resetDialog(): Promise<Cards | false | null>;
    /** @inheritdoc */
    deleteDialog(options?: {}): Promise<any>;
}
