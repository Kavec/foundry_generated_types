export default BaseAmbientSound;
export type AmbientSoundData = {
    /**
     * The _id which uniquely identifies this AmbientSound document
     */
    _id: string;
    /**
     * =0                 The x-coordinate position of the origin of the sound.
     */
    x: number;
    /**
     * =0                 The y-coordinate position of the origin of the sound.
     */
    y: number;
    /**
     * =0            The radius of the emitted sound.
     */
    radius: number;
    /**
     * The audio file path that is played by this sound
     */
    path: string;
    /**
     * Does this sound loop?
     */
    repeat?: boolean;
    /**
     * The audio volume of the sound, from 0 to 1
     */
    volume?: number;
    /**
     * =true         Whether or not this sound source is constrained by Walls.
     */
    walls: boolean;
    /**
     * =true        Whether to adjust the volume of the sound heard by the listener based on how
     *              close the listener is to the center of the sound source.
     */
    easing: boolean;
    /**
     * =false       Is the sound source currently hidden?
     */
    hidden: boolean;
    /**
     * A darkness range (min and max) for which the source should be active
     */
    darkness: {
        min: number;
        max: number;
    };
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} AmbientSoundData
 * @property {string} _id                 The _id which uniquely identifies this AmbientSound document
 * @property {number} x=0                 The x-coordinate position of the origin of the sound.
 * @property {number} y=0                 The y-coordinate position of the origin of the sound.
 * @property {number} radius=0            The radius of the emitted sound.
 * @property {string} path                The audio file path that is played by this sound
 * @property {boolean} [repeat=false]     Does this sound loop?
 * @property {number} [volume=0.5]        The audio volume of the sound, from 0 to 1
 * @property {boolean} walls=true         Whether or not this sound source is constrained by Walls.
 * @property {boolean} easing=true        Whether to adjust the volume of the sound heard by the listener based on how
 *                                        close the listener is to the center of the sound source.
 * @property {boolean} hidden=false       Is the sound source currently hidden?
 * @property {{min: number, max: number}} darkness  A darkness range (min and max) for which the source should be active
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for an AmbientSound.
 * Defines the DataSchema and common behaviors for an AmbientSound which are shared between both client and server.
 * @extends abstract.Document
 * @mixes AmbientSoundData
 * @memberof documents
 *
 * @param {AmbientSoundData} data                 Initial data from which to construct the AmbientSound
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseAmbientSound {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        x: fields.NumberField;
        y: fields.NumberField;
        radius: fields.NumberField;
        path: fields.FilePathField;
        repeat: fields.BooleanField;
        volume: fields.AlphaField;
        walls: fields.BooleanField;
        easing: fields.BooleanField;
        hidden: fields.BooleanField;
        darkness: fields.SchemaField;
        flags: fields.ObjectField;
    };
    /** @inheritdoc */
    static migrateData(data: any): any;
}
import * as fields from "../data/fields.mjs";
