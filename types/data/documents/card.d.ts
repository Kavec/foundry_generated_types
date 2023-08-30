/**
 * The client-side Card document which extends the common BaseCard document model.
 * @extends documents.BaseCard
 * @mixes ClientDocumentMixin
 *
 * @see {@link Cards}                    The Cards document type which contains Card embedded documents
 * @see {@link CardConfig}               The Card configuration application
 */
declare class Card {
    /**
     * The current card face
     * @type {CardFaceData|null}
     */
    get currentFace(): any;
    /**
     * The image of the currently displayed card face or back
     * @type {string}
     */
    get img(): string;
    /**
     * A reference to the source Cards document which defines this Card.
     * @type {Cards|null}
     */
    get source(): Cards;
    /**
     * A convenience property for whether the Card is within its source Cards stack. Cards in decks are always
     * considered home.
     * @type {boolean}
     */
    get isHome(): boolean;
    /**
     * Whether to display the face of this card?
     * @type {boolean}
     */
    get showFace(): boolean;
    /**
     * Does this Card have a next face available to flip to?
     * @type {boolean}
     */
    get hasNextFace(): boolean;
    /**
     * Does this Card have a previous face available to flip to?
     * @type {boolean}
     */
    get hasPreviousFace(): boolean;
    /** @override */
    override prepareDerivedData(): void;
    name: any;
    /**
     * Flip this card to some other face. A specific face may be requested, otherwise:
     * If the card currently displays a face the card is flipped to the back.
     * If the card currently displays the back it is flipped to the first face.
     * @param {number|null} [face]      A specific face to flip the card to
     * @returns {Promise<Card>}         A reference to this card after the flip operation is complete
     */
    flip(face?: number | null): Promise<Card>;
    /**
     * Pass this Card to some other Cards document.
     * @param {Cards} to                A new Cards document this card should be passed to
     * @param {object} [options={}]     Options which modify the pass operation
     * @param {object} [options.updateData={}]  Modifications to make to the Card as part of the pass operation,
     *                                  for example the displayed face
     * @returns {Promise<Card>}         A reference to this card after it has been passed to another parent document
     */
    pass(to: Cards, { updateData, ...options }?: {
        updateData?: object;
    }): Promise<Card>;
    /**
     * @alias Card#pass
     * @see Card#pass
     * @inheritdoc
     */
    play(to: any, { updateData, ...options }?: {
        updateData?: {};
    }): Promise<any>;
    /**
     * @alias Card#pass
     * @see Card#pass
     * @inheritdoc
     */
    discard(to: any, { updateData, ...options }?: {
        updateData?: {};
    }): Promise<any>;
    /**
     * Recall this Card to its original Cards parent.
     * @param {object} [options={}]   Options which modify the recall operation
     * @returns {Promise<Card>}       A reference to the recalled card belonging to its original parent
     */
    recall(options?: object): Promise<Card>;
    /**
     * Create a chat message which displays this Card.
     * @param {object} [messageData={}] Additional data which becomes part of the created ChatMessageData
     * @param {object} [options={}]     Options which modify the message creation operation
     * @returns {Promise<ChatMessage>}  The created chat message
     */
    toMessage(messageData?: object, options?: object): Promise<ChatMessage>;
}
