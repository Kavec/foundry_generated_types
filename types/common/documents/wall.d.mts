export default BaseWall;
export type WallThresholdData = {
    /**
     * Minimum distance from a light source for which this wall blocks light
     */
    light?: number;
    /**
     * Minimum distance from a vision source for which this wall blocks vision
     */
    sight?: number;
    /**
     * Minimum distance from a sound source for which this wall blocks sound
     */
    sound?: number;
    /**
     * Whether to attenuate the source radius when passing through the wall
     */
    attenuation?: boolean;
};
export type WallData = {
    /**
     * The _id which uniquely identifies the embedded Wall document
     */
    _id: string;
    /**
     * The wall coordinates, a length-4 array of finite numbers [x0,y0,x1,y1]
     */
    c: number[];
    /**
     * The illumination restriction type of this wall
     */
    light?: number;
    /**
     * The movement restriction type of this wall
     */
    move?: number;
    /**
     * The visual restriction type of this wall
     */
    sight?: number;
    /**
     * The auditory restriction type of this wall
     */
    sound?: number;
    /**
     * The direction of effect imposed by this wall
     */
    dir?: number;
    /**
     * The type of door which this wall contains, if any
     */
    door?: number;
    /**
     * The state of the door this wall contains, if any
     */
    ds?: number;
    /**
     * Configuration of threshold data for this wall
     */
    threshold: WallThresholdData;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} WallThresholdData
 * @property {number} [light=0]           Minimum distance from a light source for which this wall blocks light
 * @property {number} [sight=0]           Minimum distance from a vision source for which this wall blocks vision
 * @property {number} [sound=0]           Minimum distance from a sound source for which this wall blocks sound
 * @property {boolean} [attenuation=true] Whether to attenuate the source radius when passing through the wall
 */
/**
 * @typedef {Object} WallData
 * @property {string} _id                 The _id which uniquely identifies the embedded Wall document
 * @property {number[]} c                 The wall coordinates, a length-4 array of finite numbers [x0,y0,x1,y1]
 * @property {number} [light=0]           The illumination restriction type of this wall
 * @property {number} [move=0]            The movement restriction type of this wall
 * @property {number} [sight=0]           The visual restriction type of this wall
 * @property {number} [sound=0]           The auditory restriction type of this wall
 * @property {number} [dir=0]             The direction of effect imposed by this wall
 * @property {number} [door=0]            The type of door which this wall contains, if any
 * @property {number} [ds=0]              The state of the door this wall contains, if any
 * @property {WallThresholdData} threshold  Configuration of threshold data for this wall
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for a Wall.
 * Defines the DataSchema and common behaviors for a Wall which are shared between both client and server.
 * @extends abstract.Document
 * @mixes WallData
 * @memberof documents
 *
 * @param {WallData} data                         Initial data from which to construct the Wall
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseWall {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        c: fields.ArrayField;
        light: fields.NumberField;
        move: fields.NumberField;
        sight: fields.NumberField;
        sound: fields.NumberField;
        dir: fields.NumberField;
        door: fields.NumberField;
        ds: fields.NumberField;
        doorSound: fields.StringField;
        threshold: fields.SchemaField;
        flags: fields.ObjectField;
    };
    /**
     * Is a user able to update an existing Wall?
     * @private
     */
    private static "__#18@#canUpdate";
    /** @inheritdoc */
    static migrateData(data: any): any;
}
import * as fields from "../data/fields.mjs";
