/**
 * The client-side Drawing document which extends the common BaseDrawing model.
 *
 * @extends documents.BaseDrawing
 * @mixes ClientDocumentMixin
 *
 * @see {@link Scene}               The Scene document type which contains Drawing embedded documents
 * @see {@link DrawingConfig}       The Drawing configuration application
 */
declare class DrawingDocument {
    set elevation(arg: number);
    /**
     * Define an elevation property on the Drawing Document which in the future will become a part of its data schema.
     * @type {number}
     */
    get elevation(): number;
    /**
     * Define a sort property on the Drawing Document which in the future will become a core part of its data schema.
     * @type {number}
     */
    get sort(): number;
    #private;
}
