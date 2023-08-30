export default BaseSetting;
export type SettingData = {
    /**
     * The _id which uniquely identifies this Setting document
     */
    _id: string;
    /**
     * The setting key, a composite of {scope}.{name}
     */
    key: string;
    /**
     * The setting value, which is serialized to JSON
     */
    value: any;
    /**
     * An object of creation and access information
     */
    _stats?: DocumentStats;
};
/**
 * @typedef {Object} SettingData
 * @property {string} _id                 The _id which uniquely identifies this Setting document
 * @property {string} key                 The setting key, a composite of {scope}.{name}
 * @property {*} value                    The setting value, which is serialized to JSON
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for a Setting.
 * Defines the DataSchema and common behaviors for a Setting which are shared between both client and server.
 * @extends abstract.Document
 * @mixes SettingData
 * @memberof documents
 *
 * @param {SettingData} data                      Initial data from which to construct the Setting
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseSetting {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        key: fields.StringField;
        value: fields.JSONField;
        _stats: fields.DocumentStatsField;
    };
}
import * as fields from "../data/fields.mjs";
