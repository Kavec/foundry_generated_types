export default BasePlaylistSound;
export type PlaylistSoundData = {
    /**
     * The _id which uniquely identifies this PlaylistSound document
     */
    _id: string;
    /**
     * The name of this sound
     */
    name: string;
    /**
     * The description of this sound
     */
    description: string;
    /**
     * The audio file path that is played by this sound
     */
    path: string;
    /**
     * Is this sound currently playing?
     */
    playing?: boolean;
    /**
     * The time in seconds at which playback was paused
     */
    pausedTime?: number;
    /**
     * Does this sound loop?
     */
    repeat?: boolean;
    /**
     * The audio volume of the sound, from 0 to 1
     */
    volume?: number;
    /**
     * A duration in milliseconds to fade volume transition
     */
    fade?: number;
    /**
     * The sort order of the PlaylistSound relative to others in the same collection
     */
    sort?: number;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} PlaylistSoundData
 * @property {string} _id                 The _id which uniquely identifies this PlaylistSound document
 * @property {string} name                The name of this sound
 * @property {string} description         The description of this sound
 * @property {string} path                The audio file path that is played by this sound
 * @property {boolean} [playing=false]    Is this sound currently playing?
 * @property {number} [pausedTime=null]   The time in seconds at which playback was paused
 * @property {boolean} [repeat=false]     Does this sound loop?
 * @property {number} [volume=0.5]        The audio volume of the sound, from 0 to 1
 * @property {number} [fade]              A duration in milliseconds to fade volume transition
 * @property {number} [sort=0]            The sort order of the PlaylistSound relative to others in the same collection
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for a PlaylistSound.
 * Defines the DataSchema and common behaviors for a PlaylistSound which are shared between both client and server.
 * @extends abstract.Document
 * @mixes PlaylistSoundData
 * @memberof documents
 *
 * @param {PlaylistSoundData} data                Initial data from which to construct the PlaylistSound
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BasePlaylistSound {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        description: fields.StringField;
        path: fields.FilePathField;
        playing: fields.BooleanField;
        pausedTime: fields.NumberField;
        repeat: fields.BooleanField;
        volume: fields.AlphaField;
        fade: fields.NumberField;
        sort: fields.IntegerSortField;
        flags: fields.ObjectField;
    };
    /** @inheritdoc */
    testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
}
import * as fields from "../data/fields.mjs";
