/**
 * A special subclass of EmbeddedDocumentField which allows construction of the ActorDelta to be lazily evaluated.
 */
export class ActorDeltaField extends fields.EmbeddedDocumentField {
}
export default BaseToken;
export type TokenSightData = {
    /**
     * Should vision computation and rendering be active for this Token?
     */
    enabled: boolean;
    /**
     * How far in distance units the Token can see without the aid of a light source
     */
    range: number;
    /**
     * An angle at which the Token can see relative to their direction of facing
     */
    angle?: number;
    /**
     * The vision mode which is used to render the appearance of the visible area
     */
    visionMode?: string;
    /**
     * A special color which applies a hue to the visible area
     */
    color?: string;
    /**
     * A degree of attenuation which gradually fades the edges of the visible area
     */
    attenuation?: number;
    /**
     * An advanced customization for the perceived brightness of the visible area
     */
    brightness?: number;
    /**
     * An advanced customization of color saturation within the visible area
     */
    saturation?: number;
    /**
     * An advanced customization for contrast within the visible area
     */
    contrast?: number;
};
export type TokenDetectionMode = {
    /**
     * The id of the detection mode, a key from CONFIG.Canvas.detectionModes
     */
    id: string;
    /**
     * Whether or not this detection mode is presently enabled
     */
    enabled: boolean;
    /**
     * The maximum range in distance units at which this mode can detect targets
     */
    range: number;
};
export type TokenData = {
    /**
     * The Token _id which uniquely identifies it within its parent Scene
     */
    _id: string;
    /**
     * The name used to describe the Token
     */
    name: string;
    /**
     * The display mode of the Token nameplate, from CONST.TOKEN_DISPLAY_MODES
     */
    displayName?: number;
    /**
     * The _id of an Actor document which this Token represents
     */
    actorId: string | null;
    /**
     * Does this Token uniquely represent a singular Actor, or is it one of many?
     */
    actorLink?: boolean;
    /**
     * The ActorDelta embedded document which stores the differences between this
     *      token and the base actor it represents.
     */
    delta?: BaseActorDelta;
    /**
     * The token's texture on the canvas.
     */
    texture: TextureData;
    /**
     * The width of the Token in grid units
     */
    width?: number;
    /**
     * The height of the Token in grid units
     */
    height?: number;
    /**
     * The x-coordinate of the top-left corner of the Token
     */
    x?: number;
    /**
     * The y-coordinate of the top-left corner of the Token
     */
    y?: number;
    /**
     * The vertical elevation of the Token, in distance units
     */
    elevation?: number;
    /**
     * Prevent the Token image from visually rotating?
     */
    lockRotation?: boolean;
    /**
     * The rotation of the Token in degrees, from 0 to 360. A value of 0 represents a southward-facing Token.
     */
    rotation?: number;
    /**
     * An array of effect icon paths which are displayed on the Token
     */
    effects?: string[];
    /**
     * A single icon path which is displayed as an overlay on the Token
     */
    overlayEffect?: string;
    /**
     * The opacity of the token image
     */
    alpha?: number;
    /**
     * Is the Token currently hidden from player view?
     */
    hidden?: boolean;
    /**
     * A displayed Token disposition from CONST.TOKEN_DISPOSITIONS
     */
    disposition?: number;
    /**
     * The display mode of Token resource bars, from CONST.TOKEN_DISPLAY_MODES
     */
    displayBars?: number;
    /**
     * The configuration of the Token's primary resource bar
     */
    bar1?: TokenBarData;
    /**
     * The configuration of the Token's secondary resource bar
     */
    bar2?: TokenBarData;
    /**
     * Configuration of the light source that this Token emits
     */
    light?: data.LightData;
    /**
     * Configuration of sight and vision properties for the Token
     */
    sight: TokenSightData;
    /**
     * An array of detection modes which are available to this Token
     */
    detectionModes: TokenDetectionMode[];
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
export type TokenBarData = {
    /**
     * The attribute path within the Token's Actor data which should be displayed
     */
    attribute?: string;
};
import * as fields from "../data/fields.mjs";
/**
 * @typedef {Object} TokenSightData
 * @property {boolean} enabled            Should vision computation and rendering be active for this Token?
 * @property {number} range               How far in distance units the Token can see without the aid of a light source
 * @property {number} [angle=360]         An angle at which the Token can see relative to their direction of facing
 * @property {string} [visionMode=basic]  The vision mode which is used to render the appearance of the visible area
 * @property {string} [color]             A special color which applies a hue to the visible area
 * @property {number} [attenuation]       A degree of attenuation which gradually fades the edges of the visible area
 * @property {number} [brightness=0]      An advanced customization for the perceived brightness of the visible area
 * @property {number} [saturation=0]      An advanced customization of color saturation within the visible area
 * @property {number} [contrast=0]        An advanced customization for contrast within the visible area
 */
/**
 * @typedef {Object} TokenDetectionMode
 * @property {string} id                  The id of the detection mode, a key from CONFIG.Canvas.detectionModes
 * @property {boolean} enabled            Whether or not this detection mode is presently enabled
 * @property {number} range               The maximum range in distance units at which this mode can detect targets
 */
/**
 * @typedef {Object} TokenData
 * @property {string} _id                 The Token _id which uniquely identifies it within its parent Scene
 * @property {string} name                The name used to describe the Token
 * @property {number} [displayName=0]     The display mode of the Token nameplate, from CONST.TOKEN_DISPLAY_MODES
 * @property {string|null} actorId        The _id of an Actor document which this Token represents
 * @property {boolean} [actorLink=false]  Does this Token uniquely represent a singular Actor, or is it one of many?
 * @property {BaseActorDelta} [delta]     The ActorDelta embedded document which stores the differences between this
 *                                        token and the base actor it represents.
 * @property {TextureData} texture        The token's texture on the canvas.
 * @property {number} [width=1]           The width of the Token in grid units
 * @property {number} [height=1]          The height of the Token in grid units
 * @property {number} [x=0]               The x-coordinate of the top-left corner of the Token
 * @property {number} [y=0]               The y-coordinate of the top-left corner of the Token
 * @property {number} [elevation=0]       The vertical elevation of the Token, in distance units
 * @property {boolean} [lockRotation=false]  Prevent the Token image from visually rotating?
 * @property {number} [rotation=0]        The rotation of the Token in degrees, from 0 to 360. A value of 0 represents a southward-facing Token.
 * @property {string[]} [effects]         An array of effect icon paths which are displayed on the Token
 * @property {string} [overlayEffect]     A single icon path which is displayed as an overlay on the Token
 * @property {number} [alpha=1]           The opacity of the token image
 * @property {boolean} [hidden=false]     Is the Token currently hidden from player view?
 * @property {number} [disposition=-1]    A displayed Token disposition from CONST.TOKEN_DISPOSITIONS
 * @property {number} [displayBars=0]     The display mode of Token resource bars, from CONST.TOKEN_DISPLAY_MODES
 * @property {TokenBarData} [bar1]        The configuration of the Token's primary resource bar
 * @property {TokenBarData} [bar2]        The configuration of the Token's secondary resource bar
 * @property {data.LightData} [light]     Configuration of the light source that this Token emits
 * @property {TokenSightData} sight       Configuration of sight and vision properties for the Token
 * @property {TokenDetectionMode[]} detectionModes  An array of detection modes which are available to this Token
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * @typedef {Object} TokenBarData
 * @property {string} [attribute]         The attribute path within the Token's Actor data which should be displayed
 */
/**
 * The base Token model definition which defines common behavior of a Token document between both client and server.
 * @extends Document
 * @mixes {TokenData}
 * @memberof documents
 */
declare class BaseToken extends Document {
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        displayName: fields.NumberField;
        actorId: fields.ForeignDocumentField;
        actorLink: fields.BooleanField;
        delta: ActorDeltaField;
        appendNumber: fields.BooleanField;
        prependAdjective: fields.BooleanField;
        texture: TextureData;
        width: fields.NumberField;
        height: fields.NumberField;
        x: fields.NumberField;
        y: fields.NumberField;
        elevation: fields.NumberField;
        lockRotation: fields.BooleanField;
        rotation: fields.AngleField;
        effects: fields.ArrayField;
        overlayEffect: fields.StringField;
        alpha: fields.AlphaField;
        hidden: fields.BooleanField;
        disposition: fields.NumberField;
        displayBars: fields.NumberField;
        bar1: fields.SchemaField;
        bar2: fields.SchemaField;
        light: fields.EmbeddedDataField;
        sight: fields.SchemaField;
        detectionModes: fields.ArrayField;
        flags: fields.ObjectField;
    };
    /**
     * Validate the structure of the detection modes array
     * @param {object[]} modes    Configured detection modes
     * @throws                    An error if the array is invalid
     */
    static "__#16@#validateDetectionModes"(modes: object[]): void;
    /**
     * The default icon used for newly created Token documents
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /**
     * Is a user able to update an existing Token?
     * @private
     */
    private static "__#16@#canUpdate";
    /** @inheritDoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    /** @override */
    override testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
}
import { TextureData } from "../data/data.mjs";
import Document from "../abstract/document.mjs";
