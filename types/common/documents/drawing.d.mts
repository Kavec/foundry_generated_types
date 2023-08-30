export default BaseDrawing;
export type DrawingData = {
    /**
     * The _id which uniquely identifies this BaseDrawing embedded document
     */
    _id: string;
    /**
     * The _id of the user who created the drawing
     */
    author: string;
    /**
     * The geometric shape of the drawing
     */
    shape: data.ShapeData;
    /**
     * The x-coordinate position of the top-left corner of the drawn shape
     */
    x: number;
    /**
     * The y-coordinate position of the top-left corner of the drawn shape
     */
    y: number;
    /**
     * The z-index of this drawing relative to other siblings
     */
    z?: number;
    /**
     * The angle of rotation for the drawing figure
     */
    rotation?: number;
    /**
     * An amount of bezier smoothing applied, between 0 and 1
     */
    bezierFactor?: number;
    /**
     * The fill type of the drawing shape, a value from CONST.DRAWING_FILL_TYPES
     */
    fillType?: number;
    /**
     * An optional color string with which to fill the drawing geometry
     */
    fillColor?: string;
    /**
     * The opacity of the fill applied to the drawing geometry
     */
    fillAlpha?: number;
    /**
     * The width in pixels of the boundary lines of the drawing geometry
     */
    strokeWidth?: number;
    /**
     * The color of the boundary lines of the drawing geometry
     */
    strokeColor?: number;
    /**
     * The opacity of the boundary lines of the drawing geometry
     */
    strokeAlpha?: number;
    /**
     * The path to a tiling image texture used to fill the drawing geometry
     */
    texture?: string;
    /**
     * Optional text which is displayed overtop of the drawing
     */
    text?: string;
    /**
     * The font family used to display text within this drawing, defaults to
     *         CONFIG.defaultFontFamily
     */
    fontFamily?: string;
    /**
     * The font size used to display text within this drawing
     */
    fontSize?: number;
    /**
     * The color of text displayed within this drawing
     */
    textColor?: string;
    /**
     * The opacity of text displayed within this drawing
     */
    textAlpha?: number;
    /**
     * Is the drawing currently hidden?
     */
    hidden?: boolean;
    /**
     * Is the drawing currently locked?
     */
    locked?: boolean;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} DrawingData
 * @property {string} _id                 The _id which uniquely identifies this BaseDrawing embedded document
 * @property {string} author              The _id of the user who created the drawing
 * @property {data.ShapeData} shape       The geometric shape of the drawing
 * @property {number} x                   The x-coordinate position of the top-left corner of the drawn shape
 * @property {number} y                   The y-coordinate position of the top-left corner of the drawn shape
 * @property {number} [z=0]               The z-index of this drawing relative to other siblings
 * @property {number} [rotation=0]        The angle of rotation for the drawing figure
 * @property {number} [bezierFactor=0]    An amount of bezier smoothing applied, between 0 and 1
 * @property {number} [fillType=0]        The fill type of the drawing shape, a value from CONST.DRAWING_FILL_TYPES
 * @property {string} [fillColor]         An optional color string with which to fill the drawing geometry
 * @property {number} [fillAlpha=0.5]     The opacity of the fill applied to the drawing geometry
 * @property {number} [strokeWidth=8]     The width in pixels of the boundary lines of the drawing geometry
 * @property {number} [strokeColor]       The color of the boundary lines of the drawing geometry
 * @property {number} [strokeAlpha=1]     The opacity of the boundary lines of the drawing geometry
 * @property {string} [texture]           The path to a tiling image texture used to fill the drawing geometry
 * @property {string} [text]              Optional text which is displayed overtop of the drawing
 * @property {string} [fontFamily]        The font family used to display text within this drawing, defaults to
 *                                        CONFIG.defaultFontFamily
 * @property {number} [fontSize=48]       The font size used to display text within this drawing
 * @property {string} [textColor=#FFFFFF] The color of text displayed within this drawing
 * @property {number} [textAlpha=1]       The opacity of text displayed within this drawing
 * @property {boolean} [hidden=false]     Is the drawing currently hidden?
 * @property {boolean} [locked=false]     Is the drawing currently locked?
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for a Drawing.
 * Defines the DataSchema and common behaviors for a Drawing which are shared between both client and server.
 * @extends abstract.Document
 * @mixes DrawingData
 * @memberof documents
 *
 * @param {DrawingData} data                      Initial data from which to construct the Drawing
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseDrawing {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritDoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        author: fields.ForeignDocumentField;
        shape: fields.EmbeddedDataField;
        x: fields.NumberField;
        y: fields.NumberField;
        z: fields.NumberField;
        rotation: fields.AngleField;
        bezierFactor: fields.AlphaField;
        fillType: fields.NumberField;
        fillColor: fields.ColorField;
        fillAlpha: fields.AlphaField;
        strokeWidth: fields.NumberField;
        strokeColor: fields.ColorField;
        strokeAlpha: fields.AlphaField;
        texture: fields.FilePathField;
        text: fields.StringField;
        fontFamily: fields.StringField;
        fontSize: fields.NumberField;
        textColor: fields.ColorField;
        textAlpha: fields.AlphaField;
        hidden: fields.BooleanField;
        locked: fields.BooleanField;
        flags: fields.ObjectField;
    };
    /**
     * Validate whether the drawing has some visible content (as required by validation).
     * @returns {boolean}
     */
    static "__#12@#validateVisibleContent"(data: any): boolean;
    /** @inheritdoc */
    static validateJoint(data: any): void;
    /**
     * Is a user able to update or delete an existing Drawing document??
     * @private
     */
    private static "__#12@#canModify";
    /** @inheritDoc */
    static cleanData(source?: {}, options?: {}): any;
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
    /** @inheritdoc */
    testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
}
import * as fields from "../data/fields.mjs";
