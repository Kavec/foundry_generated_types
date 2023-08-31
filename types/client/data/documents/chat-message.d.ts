/**
 * The client-side ChatMessage document which extends the common BaseChatMessage model.
 *
 * @extends documents.BaseChatMessage
 * @mixes ClientDocumentMixin
 *
 * @see {@link documents.Messages}                The world-level collection of ChatMessage documents
 *
 * @property {Roll[]} rolls                       The prepared array of Roll instances
 */
declare class ChatMessage {
    /**
     * Transform a provided object of ChatMessage data by applying a certain rollMode to the data object.
     * @param {object} chatData     The object of ChatMessage data prior to applying a rollMode preference
     * @param {string} rollMode     The rollMode preference to apply to this message data
     * @returns {object}            The modified ChatMessage data with rollMode preferences applied
     */
    static applyRollMode(chatData: object, rollMode: string): object;
    /**
     * Attempt to determine who is the speaking character (and token) for a certain Chat Message
     * First assume that the currently controlled Token is the speaker
     *
     * @param {object} [options={}]   Options which affect speaker identification
     * @param {Scene} [options.scene]         The Scene in which the speaker resides
     * @param {Actor} [options.actor]         The Actor who is speaking
     * @param {TokenDocument} [options.token] The Token who is speaking
     * @param {string} [options.alias]        The name of the speaker to display
     *
     * @returns {object}              The identified speaker data
     */
    static getSpeaker({ scene, actor, token, alias }?: {
        scene?: Scene;
        actor?: Actor;
        token?: TokenDocument;
        alias?: string;
    }): object;
    /**
     * A helper to prepare the speaker object based on a target TokenDocument
     * @param {object} [options={}]       Options which affect speaker identification
     * @param {TokenDocument} options.token        The TokenDocument of the speaker
     * @param {string} [options.alias]             The name of the speaker to display
     * @returns {object}                  The identified speaker data
     * @protected
     */
    protected static _getSpeakerFromToken({ token, alias }?: {
        token: TokenDocument;
        alias?: string;
    }): object;
    /**
     * A helper to prepare the speaker object based on a target Actor
     * @param {object} [options={}]       Options which affect speaker identification
     * @param {Scene} [options.scene]             The Scene is which the speaker resides
     * @param {Actor} [options.actor]             The Actor that is speaking
     * @param {string} [options.alias]            The name of the speaker to display
     * @returns {Object}                  The identified speaker data
     * @protected
     */
    protected static _getSpeakerFromActor({ scene, actor, alias }?: {
        scene?: Scene;
        actor?: Actor;
        alias?: string;
    }): any;
    /**
     * A helper to prepare the speaker object based on a target User
     * @param {object} [options={}]       Options which affect speaker identification
     * @param {Scene} [options.scene]             The Scene in which the speaker resides
     * @param {User} [options.user]               The User who is speaking
     * @param {string} [options.alias]            The name of the speaker to display
     * @returns {Object}                  The identified speaker data
     * @protected
     */
    protected static _getSpeakerFromUser({ scene, user, alias }?: {
        scene?: Scene;
        user?: User;
        alias?: string;
    }): any;
    /**
     * Obtain an Actor instance which represents the speaker of this message (if any)
     * @param {Object} speaker    The speaker data object
     * @returns {Actor|null}
     */
    static getSpeakerActor(speaker: any): Actor | null;
    /**
     * Given a string whisper target, return an Array of the user IDs which should be targeted for the whisper
     *
     * @param {string} name   The target name of the whisper target
     * @returns {User[]}      An array of User instances
     */
    static getWhisperRecipients(name: string): User[];
    /**
     * Is the display of dice rolls in this message collapsed (false) or expanded (true)
     * @type {boolean}
     * @protected
     */
    protected _rollExpanded: boolean;
    /**
     * Is this ChatMessage currently displayed in the sidebar ChatLog?
     * @type {boolean}
     */
    logged: boolean;
    /**
     * Return the recommended String alias for this message.
     * The alias could be a Token name in the case of in-character messages or dice rolls.
     * Alternatively it could be the name of a User in the case of OOC chat or whispers.
     * @type {string}
     */
    get alias(): string;
    /**
     * Is the current User the author of this message?
     * @type {boolean}
     */
    get isAuthor(): boolean;
    /**
     * Return whether the content of the message is visible to the current user.
     * For certain dice rolls, for example, the message itself may be visible while the content of that message is not.
     * @type {boolean}
     */
    get isContentVisible(): boolean;
    /**
     * Test whether the chat message contains a dice roll
     * @type {boolean}
     */
    get isRoll(): boolean;
    /**
     * Return whether the ChatMessage is visible to the current User.
     * Messages may not be visible if they are private whispers.
     * @type {boolean}
     */
    get visible(): boolean;
    /** @inheritdoc */
    prepareDerivedData(): void;
    rolls: any;
    /**
     * Update the data of a ChatMessage instance to apply a requested rollMode
     * @param {string} rollMode     The rollMode preference to apply to this message data
     */
    applyRollMode(rollMode: string): void;
    /**
     * Obtain a data object used to evaluate any dice rolls associated with this particular chat message
     * @returns {object}
     */
    getRollData(): object;
    /**
     * Render the HTML for the ChatMessage which should be added to the log
     * @returns {Promise<JQuery<HTMLElement>>}
     */
    getHTML(): Promise<JQuery<HTMLElement>>;
    /**
     * Render the inner HTML content for ROLL type messages.
     * @param {object} messageData      The chat message data used to render the message HTML
     * @returns {Promise}
     * @protected
     */
    protected _renderRollContent(messageData: object): Promise<any>;
    /**
     * Render HTML for the array of Roll objects included in this message.
     * @param {boolean} isPrivate   Is the chat message private?
     * @returns {Promise<string>}   The rendered HTML string
     * @protected
     */
    protected _renderRollHTML(isPrivate: boolean): Promise<string>;
    /** @override */
    override _preCreate(data: any, options: any, user: any): Promise<void>;
    /** @override */
    override _onCreate(data: any, options: any, userId: any): void;
    /** @override */
    override _onUpdate(data: any, options: any, userId: any): void;
    /** @override */
    override _onDelete(options: any, userId: any): void;
    /**
     * Export the content of the chat message into a standardized log format
     * @returns {string}
     */
    export(): string;
    /**
     * Return the first Roll instance contained in this chat message, if one is present
     * @deprecated since v10
     * @ignore
     * @type {Roll|null}
     */
    get roll(): Roll;
}
