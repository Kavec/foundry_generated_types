/**
 * A class responsible for applying transformations to content pasted inside the editor.
 */
export default class ProseMirrorPasteTransformer extends ProseMirrorPlugin {
    /** @override */
    static override build(schema: any, options?: {}): any;
    /**
     * Transform content before it is injected into the ProseMirror document.
     * @param {Slice} slice      The content slice.
     * @param {EditorView} view  The ProseMirror editor view.
     * @returns {Slice}          The transformed content.
     */
    _onPaste(slice: Slice, view: EditorView): Slice;
}
import ProseMirrorPlugin from "./plugin.mjs";
