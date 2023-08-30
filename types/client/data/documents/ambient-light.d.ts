/**
 * The client-side AmbientLight document which extends the common BaseAmbientLight document model.
 * @extends documents.BaseAmbientLight
 * @mixes ClientDocumentMixin
 *
 * @see {@link Scene}                     The Scene document type which contains AmbientLight documents
 * @see {@link AmbientLightConfig}        The AmbientLight configuration application
 */
declare class AmbientLightDocument {
    /** @inheritdoc */
    _onUpdate(data: any, options: any, userId: any): void;
    /**
     * Is this ambient light source global in nature?
     * @type {boolean}
     */
    get isGlobal(): boolean;
}
