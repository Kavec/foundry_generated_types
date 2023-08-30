export type LightAnimationData = {
    /**
     * The animation type which is applied
     */
    type: string;
    /**
     * The speed of the animation, a number between 0 and 10
     */
    speed: number;
    /**
     * The intensity of the animation, a number between 1 and 10
     */
    intensity: number;
    /**
     * Reverse the direction of animation.
     */
    reverse: boolean;
};
/**
 * @typedef {Object} LightAnimationData
 * @property {string} type          The animation type which is applied
 * @property {number} speed         The speed of the animation, a number between 0 and 10
 * @property {number} intensity     The intensity of the animation, a number between 1 and 10
 * @property {boolean} reverse      Reverse the direction of animation.
 */
/**
 * A reusable document structure for the internal data used to render the appearance of a light source.
 * This is re-used by both the AmbientLightData and TokenData classes.
 * @extends DataModel
 * @memberof data
 *
 * @property {number} alpha               An opacity for the emitted light, if any
 * @property {number} angle               The angle of emission for this point source
 * @property {number} bright              The allowed radius of bright vision or illumination
 * @property {number} color               A tint color for the emitted light, if any
 * @property {number} coloration          The coloration technique applied in the shader
 * @property {number} contrast            The amount of contrast this light applies to the background texture
 * @property {number} dim                 The allowed radius of dim vision or illumination
 * @property {number} attenuation         Fade the difference between bright, dim, and dark gradually?
 * @property {number} luminosity          The luminosity applied in the shader
 * @property {number} saturation          The amount of color saturation this light applies to the background texture
 * @property {number} shadows             The depth of shadows this light applies to the background texture
 * @property {LightAnimationData} animation  An animation configuration for the source
 * @property {{min: number, max: number}} darkness  A darkness range (min and max) for which the source should be active
 */
export class LightData extends DataModel {
    static defineSchema(): {
        alpha: fields.AlphaField;
        angle: fields.AngleField;
        bright: fields.NumberField;
        color: fields.ColorField;
        coloration: fields.NumberField;
        dim: fields.NumberField;
        attenuation: fields.AlphaField;
        luminosity: fields.NumberField;
        saturation: fields.NumberField;
        contrast: fields.NumberField;
        shadows: fields.NumberField;
        animation: fields.SchemaField;
        darkness: fields.SchemaField;
    };
    /** @inheritdoc */
    static migrateData(data: any): any;
}
/**
 * Extend the base TokenData to define a PrototypeToken which exists within a parent Actor.
 * @extends abstract.DataModel
 * @memberof data
 * @property {boolean} randomImg      Does the prototype token use a random wildcard image?
 */
export class PrototypeToken {
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        displayName: fields.NumberField;
        actorId: fields.ForeignDocumentField;
        actorLink: fields.BooleanField;
        delta: import("../documents/token.mjs").ActorDeltaField;
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
     * @see ClientDocument.database
     * @ignore
     */
    static get database(): any;
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    constructor(data?: {}, options?: {});
    /**
     * The Actor which owns this Prototype Token
     * @type {documents.BaseActor}
     */
    get actor(): documents.BaseActor;
    /** @inheritdoc */
    toObject(source?: boolean): any;
    /**
     * @see abstract.Document#update
     * @ignore
     */
    update(data: any, options: any): any;
    /**
     * @see abstract.Document#getFlag
     * @ignore
     */
    getFlag(...args: any[]): any;
    /**
     * @see abstract.Document#getFlag
     * @ignore
     */
    setFlag(...args: any[]): any;
    /**
     * @see abstract.Document#unsetFlag
     * @ignore
     */
    unsetFlag(...args: any[]): Promise<any>;
    /**
     * @see abstract.Document#testUserPermission
     * @ignore
     */
    testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
    /**
     * @see documents.BaseActor#isOwner
     * @ignore
     */
    get isOwner(): any;
}
/**
 * @deprecated since v10
 * @see PrototypeToken
 * @ignore
 */
export class PrototypeTokenData extends PrototypeToken {
    constructor(...args: any[]);
}
/**
 * A data model intended to be used as an inner EmbeddedDataField which defines a geometric shape.
 * @extends DataModel
 * @memberof data
 *
 * @property {string} type                The type of shape, a value in ShapeData.TYPES.
 *                                        For rectangles, the x/y coordinates are the top-left corner.
 *                                        For circles, the x/y coordinates are the center of the circle.
 *                                        For polygons, the x/y coordinates are the first point of the polygon.
 * @property {number} [width]             For rectangles, the pixel width of the shape.
 * @property {number} [height]            For rectangles, the pixel width of the shape.
 * @property {number} [radius]            For circles, the pixel radius of the shape.
 * @property {number[]} [points]          For polygons, the array of polygon coordinates which comprise the shape.
 */
export class ShapeData extends DataModel {
    static defineSchema(): {
        type: fields.StringField;
        width: fields.NumberField;
        height: fields.NumberField;
        radius: fields.NumberField;
        points: fields.ArrayField;
    };
    /**
     * The primitive shape types which are supported
     * @enum {string}
     */
    static TYPES: {
        RECTANGLE: string;
        CIRCLE: string;
        ELLIPSE: string;
        POLYGON: string;
    };
}
/**
 * A {@link fields.SchemaField} subclass used to represent texture data.
 * @property {string|null} src          The URL of the texture source.
 * @property {number} [scaleX=1]        The scale of the texture in the X dimension.
 * @property {number} [scaleY=1]        The scale of the texture in the Y dimension.
 * @property {number} [offsetX=0]       The X offset of the texture with (0,0) in the top left.
 * @property {number} [offsetY=0]       The Y offset of the texture with (0,0) in the top left.
 * @property {number} [rotation]        An angle of rotation by which this texture is rotated around its center.
 * @property {string|null} [tint=null]  An optional color string used to tint the texture.
 */
export class TextureData extends fields.SchemaField {
    /**
     * @param {DataFieldOptions} options          Options which are forwarded to the SchemaField constructor
     * @param {FilePathFieldOptions} srcOptions   Additional options for the src field
     */
    constructor(options?: DataFieldOptions, { categories, initial, wildcard, label }?: FilePathFieldOptions);
}
/**
 * A minimal data model used to represent a tombstone entry inside an {@link EmbeddedCollectionDelta}.
 * @see {EmbeddedCollectionDelta}
 * @extends DataModel
 * @memberof data
 *
 * @property {string} _id              The _id of the base Document that this tombstone represents.
 * @property {boolean} _tombstone      A property that identifies this entry as a tombstone.
 * @property {DocumentStats} [_stats]  An object of creation and access information.
 */
export class TombstoneData extends DataModel {
    /** @override */
    static override defineSchema(): {
        _id: fields.DocumentIdField;
        _tombstone: fields.BooleanField;
        _stats: fields.DocumentStatsField;
    };
}
import { DataModel } from "../abstract/module.mjs";
import * as fields from "./fields.mjs";
import * as documents from "../documents/module.mjs";
