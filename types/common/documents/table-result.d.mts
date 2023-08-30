export default BaseTableResult;
export type TableResultData = {
    /**
     * The _id which uniquely identifies this TableResult embedded document
     */
    _id: string;
    /**
     * A result subtype from CONST.TABLE_RESULT_TYPES
     */
    type?: number;
    /**
     * The text which describes the table result
     */
    text?: string;
    /**
     * An image file url that represents the table result
     */
    img?: string;
    /**
     * A named collection from which this result is drawn
     */
    documentCollection?: string;
    /**
     * The _id of a Document within the collection this result references
     */
    documentId?: string;
    /**
     * The probabilistic weight of this result relative to other results
     */
    weight?: number;
    /**
     * A length 2 array of ascending integers which defines the range of dice roll
     *            totals which produce this drawn result
     */
    range?: number[];
    /**
     * Has this result already been drawn (without replacement)
     */
    drawn?: boolean;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
};
/**
 * @typedef {Object} TableResultData
 * @property {string} _id                 The _id which uniquely identifies this TableResult embedded document
 * @property {number} [type=0]            A result subtype from CONST.TABLE_RESULT_TYPES
 * @property {string} [text]              The text which describes the table result
 * @property {string} [img]               An image file url that represents the table result
 * @property {string} [documentCollection] A named collection from which this result is drawn
 * @property {string} [documentId]        The _id of a Document within the collection this result references
 * @property {number} [weight=1]          The probabilistic weight of this result relative to other results
 * @property {number[]} [range]           A length 2 array of ascending integers which defines the range of dice roll
 *                                        totals which produce this drawn result
 * @property {boolean} [drawn=false]      Has this result already been drawn (without replacement)
 * @property {object} [flags]             An object of optional key/value flags
 */
/**
 * The Document definition for a TableResult.
 * Defines the DataSchema and common behaviors for a TableResult which are shared between both client and server.
 * @extends abstract.Document
 * @mixes TableResultData
 * @memberof documents
 *
 * @param {TableResultData} data                  Initial data from which to construct the TableResult
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseTableResult {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        type: fields.NumberField;
        text: fields.HTMLField;
        img: fields.FilePathField;
        documentCollection: fields.StringField;
        documentId: fields.ForeignDocumentField;
        weight: fields.NumberField;
        range: fields.ArrayField;
        drawn: fields.BooleanField;
        flags: fields.ObjectField;
    };
    /**
     * Is a user able to update an existing TableResult?
     * @private
     */
    private static "__#15@#canUpdate";
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
