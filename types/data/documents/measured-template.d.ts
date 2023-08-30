/**
 * The client-side MeasuredTemplate document which extends the common BaseMeasuredTemplate document model.
 * @extends documents.BaseMeasuredTemplate
 * @mixes ClientDocumentMixin
 *
 * @see {@link Scene}                     The Scene document type which contains MeasuredTemplate documents
 * @see {@link MeasuredTemplateConfig}    The MeasuredTemplate configuration application
 */
declare class MeasuredTemplateDocument {
    /**
     * A reference to the User who created the MeasuredTemplate document.
     * @type {User|null}
     */
    get author(): User;
    /**
     * Rotation is an alias for direction
     * @returns {number}
     */
    get rotation(): number;
}
