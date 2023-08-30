export default BaseAmbientLight;
export type AmbientLightData = {
    /**
     * The _id which uniquely identifies this BaseAmbientLight embedded document
     */
    _id: string;
    /**
     * The x-coordinate position of the origin of the light
     */
    x?: number;
    /**
     * The y-coordinate position of the origin of the light
     */
    y?: number;
    /**
     * The angle of rotation for the tile between 0 and 360
     */
    rotation?: number;
    /**
     * Whether or not this light source is constrained by Walls
     */
    walls?: boolean;
    /**
     * Whether or not this light source provides a source of vision
     */
    vision?: boolean;
    /**
     * Light configuration data
     */
    config: LightData;
    /**
     * Is the light source currently hidden?
     */
    hidden?: boolean;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} AmbientLightData
 * @property {string} _id                 The _id which uniquely identifies this BaseAmbientLight embedded document
 * @property {number} [x=0]               The x-coordinate position of the origin of the light
 * @property {number} [y=0]               The y-coordinate position of the origin of the light
 * @property {number} [rotation=0]        The angle of rotation for the tile between 0 and 360
 * @property {boolean} [walls=true]       Whether or not this light source is constrained by Walls
 * @property {boolean} [vision=false]     Whether or not this light source provides a source of vision
 * @property {LightData} config           Light configuration data
 * @property {boolean} [hidden=false]     Is the light source currently hidden?
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for an AmbientLight.
 * Defines the DataSchema and common behaviors for an AmbientLight which are shared between both client and server.
 * @extends abstract.Document
 * @mixes AmbientLightData
 * @memberof documents
 *
 * @param {AmbientLightData} data                 Initial data from which to construct the AmbientLight
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseAmbientLight {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        x: fields.NumberField;
        y: fields.NumberField;
        rotation: fields.AngleField;
        walls: fields.BooleanField;
        vision: fields.BooleanField;
        config: fields.EmbeddedDataField;
        hidden: fields.BooleanField;
        flags: fields.ObjectField;
    };
    /** @inheritdoc */
    static migrateData(data: any): any;
}
import { LightData } from "../data/data.mjs";
import * as fields from "../data/fields.mjs";
