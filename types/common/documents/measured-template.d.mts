export default BaseMeasuredTemplate;
export type MeasuredTemplateData = {
    /**
     * The _id which uniquely identifies this BaseMeasuredTemplate embedded document
     */
    _id: string;
    /**
     * The _id of the user who created this measured template
     */
    user: string;
    /**
     * The value in CONST.MEASURED_TEMPLATE_TYPES which defines the geometry type of this template
     */
    t?: string;
    /**
     * The x-coordinate position of the origin of the template effect
     */
    x?: number;
    /**
     * The y-coordinate position of the origin of the template effect
     */
    y?: number;
    /**
     * The distance of the template effect
     */
    distance?: number;
    /**
     * The angle of rotation for the measured template
     */
    direction?: number;
    /**
     * The angle of effect of the measured template, applies to cone types
     */
    angle?: number;
    /**
     * The width of the measured template, applies to ray types
     */
    width?: number;
    /**
     * 000000] A color string used to tint the border of the template shape
     */
    borderColor?: string;
    /**
     * A color string used to tint the fill of the template shape
     */
    fillColor?: string;
    /**
     * A repeatable tiling texture used to add a texture fill to the template shape
     */
    texture?: string;
    /**
     * Is the template currently hidden?
     */
    hidden?: boolean;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} MeasuredTemplateData
 * @property {string} _id                 The _id which uniquely identifies this BaseMeasuredTemplate embedded document
 * @property {string} user                The _id of the user who created this measured template
 * @property {string} [t=circle]          The value in CONST.MEASURED_TEMPLATE_TYPES which defines the geometry type of this template
 * @property {number} [x=0]               The x-coordinate position of the origin of the template effect
 * @property {number} [y=0]               The y-coordinate position of the origin of the template effect
 * @property {number} [distance]          The distance of the template effect
 * @property {number} [direction=0]       The angle of rotation for the measured template
 * @property {number} [angle=360]         The angle of effect of the measured template, applies to cone types
 * @property {number} [width]             The width of the measured template, applies to ray types
 * @property {string} [borderColor=#000000] A color string used to tint the border of the template shape
 * @property {string} [fillColor=#FF0000] A color string used to tint the fill of the template shape
 * @property {string} [texture]           A repeatable tiling texture used to add a texture fill to the template shape
 * @property {boolean} [hidden=false]     Is the template currently hidden?
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for a MeasuredTemplate.
 * Defines the DataSchema and common behaviors for a MeasuredTemplate which are shared between both client and server.
 * @extends abstract.Document
 * @mixes MeasuredTemplateData
 * @memberof documents
 *
 * @param {MeasuredTemplateData} data             Initial data from which to construct the MeasuredTemplate
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseMeasuredTemplate {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        user: fields.ForeignDocumentField;
        t: fields.StringField;
        x: fields.NumberField;
        y: fields.NumberField;
        distance: fields.NumberField;
        direction: fields.AngleField;
        angle: fields.AngleField;
        width: fields.NumberField;
        borderColor: fields.ColorField;
        fillColor: fields.ColorField;
        texture: fields.FilePathField;
        hidden: fields.BooleanField;
        flags: fields.ObjectField;
    };
    /**
     * Is a user able to create a new MeasuredTemplate?
     * @param {User} user                     The user attempting the creation operation.
     * @param {BaseMeasuredTemplate} doc      The MeasuredTemplate being created.
     * @returns {boolean}
     * @private
     */
    private static "__#14@#canCreate";
    /**
     * Is a user able to modify an existing MeasuredTemplate?
     * @param {User} user                     The user attempting the modification.
     * @param {BaseMeasuredTemplate} doc      The MeasuredTemplate being modified.
     * @param {object} [data]                 Data being changed.
     * @returns {boolean}
     * @private
     */
    private static "__#14@#canModify";
    /** @inheritdoc */
    testUserPermission(user: any, permission: any, { exact }?: {
        exact?: boolean;
    }): any;
}
import * as fields from "../data/fields.mjs";
