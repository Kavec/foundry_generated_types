export default BaseChatMessage;
export type ChatMessageData = {
    /**
     * The _id which uniquely identifies this ChatMessage document
     */
    _id: string;
    /**
     * The message type from CONST.CHAT_MESSAGE_TYPES
     */
    type?: number;
    /**
     * The _id of the User document who generated this message
     */
    user: string;
    /**
     * The timestamp at which point this message was generated
     */
    timestamp: number;
    /**
     * An optional flavor text message which summarizes this message
     */
    flavor?: string;
    /**
     * The HTML content of this chat message
     */
    content: string;
    /**
     * A ChatSpeakerData object which describes the origin of the ChatMessage
     */
    speaker: ChatSpeakerData;
    /**
     * An array of User _id values to whom this message is privately whispered
     */
    whisper: string[];
    /**
     * Is this message sent blindly where the creating User cannot see it?
     */
    blind?: boolean;
    /**
     * Serialized content of any Roll instances attached to the ChatMessage
     */
    rolls?: string[];
    /**
     * The URL of an audio file which plays when this message is received
     */
    sound?: string;
    /**
     * Is this message styled as an emote?
     */
    emote?: boolean;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
export type ChatSpeakerData = {
    /**
     * The _id of the Scene where this message was created
     */
    scene?: string;
    /**
     * The _id of the Actor who generated this message
     */
    actor?: string;
    /**
     * The _id of the Token who generated this message
     */
    token?: string;
    /**
     * An overridden alias name used instead of the Actor or Token name
     */
    alias?: string;
};
/**
 * @typedef {Object} ChatMessageData
 * @property {string} _id                 The _id which uniquely identifies this ChatMessage document
 * @property {number} [type=0]            The message type from CONST.CHAT_MESSAGE_TYPES
 * @property {string} user                The _id of the User document who generated this message
 * @property {number} timestamp           The timestamp at which point this message was generated
 * @property {string} [flavor]            An optional flavor text message which summarizes this message
 * @property {string} content             The HTML content of this chat message
 * @property {ChatSpeakerData} speaker    A ChatSpeakerData object which describes the origin of the ChatMessage
 * @property {string[]} whisper           An array of User _id values to whom this message is privately whispered
 * @property {boolean} [blind=false]      Is this message sent blindly where the creating User cannot see it?
 * @property {string[]} [rolls]           Serialized content of any Roll instances attached to the ChatMessage
 * @property {string} [sound]             The URL of an audio file which plays when this message is received
 * @property {boolean} [emote=false]      Is this message styled as an emote?
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * @typedef {Object} ChatSpeakerData
 * @property {string} [scene]       The _id of the Scene where this message was created
 * @property {string} [actor]       The _id of the Actor who generated this message
 * @property {string} [token]       The _id of the Token who generated this message
 * @property {string} [alias]       An overridden alias name used instead of the Actor or Token name
 */
/**
 * The Document definition for a ChatMessage.
 * Defines the DataSchema and common behaviors for a ChatMessage which are shared between both client and server.
 * @extends abstract.Document
 * @mixes ChatMessageData
 * @memberof documents
 *
 * @param {ChatMessageData} data                  Initial data from which to construct the ChatMessage
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseChatMessage {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        type: fields.NumberField;
        user: fields.ForeignDocumentField;
        timestamp: fields.NumberField;
        flavor: fields.HTMLField;
        content: fields.HTMLField;
        speaker: fields.SchemaField;
        whisper: fields.ArrayField;
        blind: fields.BooleanField;
        rolls: fields.ArrayField;
        sound: fields.FilePathField;
        emote: fields.BooleanField;
        flags: fields.ObjectField;
    };
    /**
     * Is a user able to create a new chat message?
     * @private
     */
    private static "__#9@#canCreate";
    /**
     * Is a user able to update an existing chat message?
     * @private
     */
    private static "__#9@#canUpdate";
    /**
     * Is a user able to delete an existing chat message?
     * @private
     */
    private static "__#9@#canDelete";
    /**
     * Validate that Rolls belonging to the ChatMessage document are valid
     * @param {string} rollJSON     The serialized Roll data
     */
    static "__#9@#validateRoll"(rollJSON: string): void;
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
}
import * as fields from "../data/fields.mjs";
