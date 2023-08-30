/**
 * A class responsible for building the keyboard commands for the ProseMirror editor.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorKeyMaps extends ProseMirrorPlugin {
    /** @inheritdoc */
    static build(schema: any, options?: {}): any;
    /**
     * @param {Schema} schema              The ProseMirror schema to build keymaps for.
     * @param {object} [options]           Additional options to configure the plugin's behaviour.
     * @param {Function} [options.onSave]  A function to call when Ctrl+S is pressed.
     */
    constructor(schema: Schema, { onSave }?: {
        onSave?: Function;
    });
    /**
     * @callback ProseMirrorCommand
     * @param {EditorState} state               The current editor state.
     * @param {function(Transaction)} dispatch  A function to dispatch a transaction.
     * @param {EditorView} view                 Escape-hatch for when the command needs to interact directly with the UI.
     * @returns {boolean}                       Whether the command has performed any action and consumed the event.
     */
    /**
     * Build keyboard commands for nodes and marks present in the schema.
     * @returns {Object<ProseMirrorCommand>}  An object of keyboard shortcuts to editor functions.
     */
    buildMapping(): any;
    #private;
}
import ProseMirrorPlugin from "./plugin.mjs";
