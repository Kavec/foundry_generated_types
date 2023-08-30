export default BaseTile;
export type TileOcclusionData = {
    /**
     * The occlusion mode from CONST.TILE_OCCLUSION_MODES
     */
    mode: number;
    /**
     * The occlusion alpha between 0 and 1
     */
    alpha: number;
    /**
     * An optional radius of occlusion used for RADIAL mode
     */
    radius?: number;
};
export type TileVideoData = {
    /**
     * Automatically loop the video?
     */
    loop: boolean;
    /**
     * Should the video play automatically?
     */
    autoplay: boolean;
    /**
     * The volume level of any audio that the video file contains
     */
    volume: number;
};
export type TileData = {
    /**
     * The _id which uniquely identifies this Tile embedded document
     */
    _id: string;
    /**
     * An image or video texture which this tile displays.
     */
    texture?: TextureData;
    /**
     * The pixel width of the tile
     */
    width?: number;
    /**
     * The pixel height of the tile
     */
    height?: number;
    /**
     * The x-coordinate position of the top-left corner of the tile
     */
    x?: number;
    /**
     * The y-coordinate position of the top-left corner of the tile
     */
    y?: number;
    /**
     * The z-index ordering of this tile relative to its siblings
     */
    z?: number;
    /**
     * The angle of rotation for the tile between 0 and 360
     */
    rotation?: number;
    /**
     * The tile opacity
     */
    alpha?: number;
    /**
     * Is the tile currently hidden?
     */
    hidden?: boolean;
    /**
     * Is the tile currently locked?
     */
    locked?: boolean;
    /**
     * Is the tile an overhead tile?
     */
    overhead?: boolean;
    /**
     * The tile's occlusion settings
     */
    occlusion?: TileOcclusionData;
    /**
     * The tile's video settings
     */
    video?: TileVideoData;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} TileOcclusionData
 * @property {number} mode        The occlusion mode from CONST.TILE_OCCLUSION_MODES
 * @property {number} alpha       The occlusion alpha between 0 and 1
 * @property {number} [radius]    An optional radius of occlusion used for RADIAL mode
 */
/**
 * @typedef {Object} TileVideoData
 * @property {boolean} loop       Automatically loop the video?
 * @property {boolean} autoplay   Should the video play automatically?
 * @property {number} volume      The volume level of any audio that the video file contains
 */
/**
 * @typedef {Object} TileData
 * @property {string} _id                 The _id which uniquely identifies this Tile embedded document
 * @property {TextureData} [texture]      An image or video texture which this tile displays.
 * @property {number} [width=0]           The pixel width of the tile
 * @property {number} [height=0]          The pixel height of the tile
 * @property {number} [x=0]               The x-coordinate position of the top-left corner of the tile
 * @property {number} [y=0]               The y-coordinate position of the top-left corner of the tile
 * @property {number} [z=100]             The z-index ordering of this tile relative to its siblings
 * @property {number} [rotation=0]        The angle of rotation for the tile between 0 and 360
 * @property {number} [alpha=1]           The tile opacity
 * @property {boolean} [hidden=false]     Is the tile currently hidden?
 * @property {boolean} [locked=false]     Is the tile currently locked?
 * @property {boolean} [overhead=false]   Is the tile an overhead tile?
 * @property {TileOcclusionData} [occlusion]  The tile's occlusion settings
 * @property {TileVideoData} [video]      The tile's video settings
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for a Tile.
 * Defines the DataSchema and common behaviors for a Tile which are shared between both client and server.
 * @extends abstract.Document
 * @mixes TileData
 * @memberof documents
 *
 * @param {TileData} data                         Initial data from which to construct the Tile
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseTile {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        texture: TextureData;
        width: fields.NumberField;
        height: fields.NumberField;
        x: fields.NumberField;
        y: fields.NumberField;
        z: fields.NumberField;
        rotation: fields.AngleField;
        alpha: fields.AlphaField;
        hidden: fields.BooleanField;
        locked: fields.BooleanField;
        overhead: fields.BooleanField;
        roof: fields.BooleanField;
        occlusion: fields.SchemaField;
        video: fields.SchemaField;
        flags: fields.ObjectField;
    };
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
}
import { TextureData } from "../data/data.mjs";
import * as fields from "../data/fields.mjs";
