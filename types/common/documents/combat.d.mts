export default BaseCombat;
export type CombatData = {
    /**
     * The _id which uniquely identifies this Combat document
     */
    _id: string;
    /**
     * The _id of a Scene within which this Combat occurs
     */
    scene: string;
    /**
     * A Collection of Combatant embedded Documents
     */
    combatants: Collection<BaseCombatant>;
    /**
     * Is the Combat encounter currently active?
     */
    active?: boolean;
    /**
     * The current round of the Combat encounter
     */
    round?: number;
    /**
     * The current turn in the Combat round
     */
    turn?: number | null;
    /**
     * The current sort order of this Combat relative to others in the same Scene
     */
    sort?: number;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
    /**
     * An object of creation and access information
     */
    _stats?: DocumentStats;
};
/**
 * @typedef {Object} CombatData
 * @property {string} _id                 The _id which uniquely identifies this Combat document
 * @property {string} scene               The _id of a Scene within which this Combat occurs
 * @property {Collection<BaseCombatant>} combatants A Collection of Combatant embedded Documents
 * @property {boolean} [active=false]     Is the Combat encounter currently active?
 * @property {number} [round=0]           The current round of the Combat encounter
 * @property {number|null} [turn=0]       The current turn in the Combat round
 * @property {number} [sort=0]            The current sort order of this Combat relative to others in the same Scene
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for a Combat.
 * Defines the DataSchema and common behaviors for a Combat which are shared between both client and server.
 * @extends abstract.Document
 * @mixes CombatData
 * @memberof documents
 *
 * @param {CombatData} data                       Initial data from which to construct the Combat
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseCombat {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        scene: fields.ForeignDocumentField;
        combatants: fields.EmbeddedCollectionField;
        active: fields.BooleanField;
        round: fields.NumberField;
        turn: fields.NumberField;
        sort: fields.IntegerSortField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * Is a user able to update an existing Combat?
     * @protected
     */
    protected static "__#10@#canUpdate"(user: any, doc: any, data: any): boolean;
}
import * as fields from "../data/fields.mjs";
