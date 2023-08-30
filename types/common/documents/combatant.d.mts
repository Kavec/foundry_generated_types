export default BaseCombatant;
export type CombatantData = {
    /**
     * The _id which uniquely identifies this Combatant embedded document
     */
    _id: string;
    /**
     * The _id of an Actor associated with this Combatant
     */
    actorId?: string;
    /**
     * The _id of a Token associated with this Combatant
     */
    tokenId?: string;
    /**
     * A customized name which replaces the name of the Token in the tracker
     */
    name?: string;
    /**
     * A customized image which replaces the Token image in the tracker
     */
    img?: string;
    /**
     * The initiative score for the Combatant which determines its turn order
     */
    initiative?: number;
    /**
     * Is this Combatant currently hidden?
     */
    hidden?: boolean;
    /**
     * Has this Combatant been defeated?
     */
    defeated?: boolean;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} CombatantData
 * @property {string} _id                 The _id which uniquely identifies this Combatant embedded document
 * @property {string} [actorId]           The _id of an Actor associated with this Combatant
 * @property {string} [tokenId]           The _id of a Token associated with this Combatant
 * @property {string} [name]              A customized name which replaces the name of the Token in the tracker
 * @property {string} [img]               A customized image which replaces the Token image in the tracker
 * @property {number} [initiative]        The initiative score for the Combatant which determines its turn order
 * @property {boolean} [hidden=false]     Is this Combatant currently hidden?
 * @property {boolean} [defeated=false]   Has this Combatant been defeated?
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for a Combatant.
 * Defines the DataSchema and common behaviors for a Combatant which are shared between both client and server.
 * @extends abstract.Document
 * @mixes CombatantData
 * @memberof documents
 *
 * @param {CombatantData} data                    Initial data from which to construct the Combatant
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseCombatant {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        actorId: fields.ForeignDocumentField;
        tokenId: fields.ForeignDocumentField;
        sceneId: fields.ForeignDocumentField;
        name: fields.StringField;
        img: fields.FilePathField;
        initiative: fields.NumberField;
        hidden: fields.BooleanField;
        defeated: fields.BooleanField;
        flags: fields.ObjectField;
    };
    /**
     * Is a user able to update an existing Combatant?
     * @private
     */
    private static "__#11@#canUpdate";
    /**
     * Is a user able to create this Combatant?
     * @private
     */
    private static "__#11@#canCreate";
}
import * as fields from "../data/fields.mjs";
