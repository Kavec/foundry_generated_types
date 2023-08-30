/**
 * A class responsible for handling the dropping of Documents onto the editor and creating content links for them.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorContentLinkPlugin extends ProseMirrorPlugin {
    /** @inheritdoc */
    static build(schema: any, options?: {}): any;
    /**
     * @typedef {object} ProseMirrorContentLinkOptions
     * @property {ClientDocument} [document]      The parent document housing this editor.
     * @property {boolean} [relativeLinks=false]  Whether to generate links relative to the parent document.
     */
    /**
     * @param {Schema} schema                          The ProseMirror schema.
     * @param {ProseMirrorContentLinkOptions} options  Additional options to configure the plugin's behaviour.
     */
    constructor(schema: Schema, { document, relativeLinks }?: {
        /**
         * The parent document housing this editor.
         */
        document?: ClientDocument;
        /**
         * Whether to generate links relative to the parent document.
         */
        relativeLinks?: boolean;
    });
    /**
     * Handle a drop onto the editor.
     * @param {EditorView} view  The ProseMirror editor view.
     * @param {DragEvent} event  The drop event.
     * @param {Slice} slice      A slice of editor content.
     * @param {boolean} moved    Whether the slice has been moved from a different part of the editor.
     * @protected
     */
    protected _onDrop(view: EditorView, event: DragEvent, slice: Slice, moved: boolean): boolean;
}
import ProseMirrorPlugin from "./plugin.mjs";
