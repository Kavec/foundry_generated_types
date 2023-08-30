/**
 * @typedef {Object} ActiveEffectData
 * @property {string} _id                 The _id which uniquely identifies the ActiveEffect within a parent Actor or Item
 * @property {string} name                The name of the which describes the name of the ActiveEffect
 * @property {EffectChangeData[]} changes The array of EffectChangeData objects which the ActiveEffect applies
 * @property {boolean} [disabled=false]   Is this ActiveEffect currently disabled?
 * @property {EffectDurationData} [duration] An EffectDurationData object which describes the duration of the ActiveEffect
 * @property {string} [description]       The HTML text description for this ActiveEffect document.
 * @property {string} [icon]              An icon image path used to depict the ActiveEffect
 * @property {string} [origin]            A UUID reference to the document from which this ActiveEffect originated
 * @property {string} [tint=null]         A color string which applies a tint to the ActiveEffect icon
 * @property {boolean} [transfer=false]   Does this ActiveEffect automatically transfer from an Item to an Actor?
 * @property {Set<string>} [statuses]     Special status IDs that pertain to this effect
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * @typedef {Object} EffectDurationData
 * @property {number} [startTime]         The world time when the active effect first started
 * @property {number} [seconds]           The maximum duration of the effect, in seconds
 * @property {string} [combat]            The _id of the CombatEncounter in which the effect first started
 * @property {number} [rounds]            The maximum duration of the effect, in combat rounds
 * @property {number} [turns]             The maximum duration of the effect, in combat turns
 * @property {number} [startRound]        The round of the CombatEncounter in which the effect first started
 * @property {number} [startTurn]         The turn of the CombatEncounter in which the effect first started
 */
/**
 * @typedef {Object} EffectChangeData
 * @property {string} key                 The attribute path in the Actor or Item data which the change modifies
 * @property {string} value               The value of the change effect
 * @property {number} mode                The modification mode with which the change is applied
 * @property {number} priority            The priority level with which this change is applied
 */
/**
 * The data schema for an ActiveEffect document.
 * @extends abstract.Document
 * @mixes ActiveEffectData
 * @memberof documents
 *
 * @param {ActiveEffectData} data                 Initial data from which to construct the ActiveEffect
 * @param {DocumentConstructionContext} context   Construction context options
 */
export default class BaseActiveEffect {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        changes: fields.ArrayField;
        disabled: fields.BooleanField;
        duration: fields.SchemaField;
        description: fields.HTMLField;
        icon: fields.FilePathField;
        origin: fields.StringField;
        tint: fields.ColorField;
        transfer: fields.BooleanField;
        statuses: fields.SetField;
        flags: fields.ObjectField;
    };
    /** @inheritDoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    /** @inheritdoc */
    canUserModify(user: any, action: any, data?: {}): any;
    /** @inheritdoc */
    testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
    /** @inheritdoc */
    _preCreate(data: any, options: any, user: any): Promise<void>;
    /** @inheritDoc */
    _initialize(options: any): void;
}
export type ActiveEffectData = {
    /**
     * The _id which uniquely identifies the ActiveEffect within a parent Actor or Item
     */
    _id: string;
    /**
     * The name of the which describes the name of the ActiveEffect
     */
    name: string;
    /**
     * The array of EffectChangeData objects which the ActiveEffect applies
     */
    changes: EffectChangeData[];
    /**
     * Is this ActiveEffect currently disabled?
     */
    disabled?: boolean;
    /**
     * An EffectDurationData object which describes the duration of the ActiveEffect
     */
    duration?: EffectDurationData;
    /**
     * The HTML text description for this ActiveEffect document.
     */
    description?: string;
    /**
     * An icon image path used to depict the ActiveEffect
     */
    icon?: string;
    /**
     * A UUID reference to the document from which this ActiveEffect originated
     */
    origin?: string;
    /**
     * A color string which applies a tint to the ActiveEffect icon
     */
    tint?: string;
    /**
     * Does this ActiveEffect automatically transfer from an Item to an Actor?
     */
    transfer?: boolean;
    /**
     * Special status IDs that pertain to this effect
     */
    statuses?: Set<string>;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
export type EffectDurationData = {
    /**
     * The world time when the active effect first started
     */
    startTime?: number;
    /**
     * The maximum duration of the effect, in seconds
     */
    seconds?: number;
    /**
     * The _id of the CombatEncounter in which the effect first started
     */
    combat?: string;
    /**
     * The maximum duration of the effect, in combat rounds
     */
    rounds?: number;
    /**
     * The maximum duration of the effect, in combat turns
     */
    turns?: number;
    /**
     * The round of the CombatEncounter in which the effect first started
     */
    startRound?: number;
    /**
     * The turn of the CombatEncounter in which the effect first started
     */
    startTurn?: number;
};
export type EffectChangeData = {
    /**
     * The attribute path in the Actor or Item data which the change modifies
     */
    key: string;
    /**
     * The value of the change effect
     */
    value: string;
    /**
     * The modification mode with which the change is applied
     */
    mode: number;
    /**
     * The priority level with which this change is applied
     */
    priority: number;
};
import * as fields from "../data/fields.mjs";
