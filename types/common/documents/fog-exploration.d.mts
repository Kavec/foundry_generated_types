export default BaseFogExploration;
export type FogExplorationData = {
    /**
     * The _id which uniquely identifies this FogExploration document
     */
    _id: string;
    /**
     * The _id of the Scene document to which this fog applies
     */
    scene: string;
    /**
     * The _id of the User document to which this fog applies
     */
    user: string;
    /**
     * The base64 image/jpeg of the explored fog polygon
     */
    explored: string;
    /**
     * The object of scene positions which have been explored at a certain vision radius
     */
    positions: object;
    /**
     * The timestamp at which this fog exploration was last updated
     */
    timestamp: number;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} FogExplorationData
 * @property {string} _id                 The _id which uniquely identifies this FogExploration document
 * @property {string} scene               The _id of the Scene document to which this fog applies
 * @property {string} user                The _id of the User document to which this fog applies
 * @property {string} explored            The base64 image/jpeg of the explored fog polygon
 * @property {object} positions           The object of scene positions which have been explored at a certain vision radius
 * @property {number} timestamp           The timestamp at which this fog exploration was last updated
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for FogExploration.
 * Defines the DataSchema and common behaviors for FogExploration which are shared between both client and server.
 * @extends abstract.Document
 * @mixes FogExplorationData
 * @memberof documents
 *
 * @param {FogExplorationData} data               Initial data from which to construct the FogExploration
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseFogExploration {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        scene: fields.ForeignDocumentField;
        user: fields.ForeignDocumentField;
        explored: fields.FilePathField;
        positions: fields.ObjectField;
        timestamp: fields.NumberField;
        flags: fields.ObjectField;
    };
    /**
     * Test whether a User can modify a FogExploration document.
     * @private
     */
    private static "__#13@#canModify";
    /** @inheritdoc */
    _preUpdate(changed: any, options: any, user: any): Promise<void>;
}
import * as fields from "../data/fields.mjs";
