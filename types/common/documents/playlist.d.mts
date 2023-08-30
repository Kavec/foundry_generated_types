export default BasePlaylist;
export type PlaylistData = {
    /**
     * The _id which uniquely identifies this Playlist document
     */
    _id: string;
    /**
     * The name of this playlist
     */
    name: string;
    /**
     * The description of this playlist
     */
    description: string;
    /**
     * A Collection of PlaylistSounds embedded documents which belong to this playlist
     */
    sounds: Collection<BasePlaylistSound>;
    /**
     * The playback mode for sounds in this playlist
     */
    mode?: number;
    /**
     * Is this playlist currently playing?
     */
    playing?: boolean;
    /**
     * A duration in milliseconds to fade volume transition
     */
    fade?: number;
    /**
     * The _id of a Folder which contains this playlist
     */
    folder: string | null;
    /**
     * The sorting mode used for this playlist.
     */
    sorting: string;
    /**
     * The numeric sort value which orders this playlist relative to its siblings
     */
    sort?: number;
    /**
     * A seed used for playlist randomization to guarantee that all clients generate the same random order.
     */
    seed?: number;
    /**
     * An object which configures ownership of this Playlist
     */
    ownership?: object;
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
 * @typedef {Object} PlaylistData
 * @property {string} _id                 The _id which uniquely identifies this Playlist document
 * @property {string} name                The name of this playlist
 * @property {string} description         The description of this playlist
 * @property {Collection<BasePlaylistSound>} sounds A Collection of PlaylistSounds embedded documents which belong to this playlist
 * @property {number} [mode=0]            The playback mode for sounds in this playlist
 * @property {boolean} [playing=false]    Is this playlist currently playing?
 * @property {number} [fade]              A duration in milliseconds to fade volume transition
 * @property {string|null} folder         The _id of a Folder which contains this playlist
 * @property {string} sorting             The sorting mode used for this playlist.
 * @property {number} [sort]              The numeric sort value which orders this playlist relative to its siblings
 * @property {number} [seed]              A seed used for playlist randomization to guarantee that all clients generate the same random order.
 * @property {object} [ownership]         An object which configures ownership of this Playlist
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for a Playlist.
 * Defines the DataSchema and common behaviors for a Playlist which are shared between both client and server.
 * @extends abstract.Document
 * @mixes PlaylistData
 * @memberof documents
 *
 * @param {PlaylistData} data                     Initial data from which to construct the Playlist
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BasePlaylist {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        description: fields.StringField;
        sounds: fields.EmbeddedCollectionField;
        mode: fields.NumberField;
        playing: fields.BooleanField;
        fade: fields.NumberField;
        folder: fields.ForeignDocumentField;
        sorting: fields.StringField;
        seed: fields.NumberField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
}
import * as fields from "../data/fields.mjs";
