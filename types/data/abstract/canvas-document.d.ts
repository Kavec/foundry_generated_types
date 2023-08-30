/**
 * A specialized subclass of the ClientDocumentMixin which is used for document types that are intended to be
 * represented upon the game Canvas.
 * @category - Mixins
 * @param {typeof abstract.Document} Base     The base document class mixed with client and canvas features
 * @returns {typeof CanvasDocument}           The mixed CanvasDocument class definition
 */
declare function CanvasDocumentMixin(Base: any): any;
