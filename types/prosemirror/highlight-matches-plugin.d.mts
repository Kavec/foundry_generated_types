/**
 * A ProseMirrorPlugin wrapper around the {@link PossibleMatchesTooltip} class.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorHighlightMatchesPlugin extends ProseMirrorPlugin {
    /** @inheritdoc */
    static build(schema: any, options?: {}): any;
    /**
     * @param {Schema} schema                     The ProseMirror schema.
     * @param {ProseMirrorMenuOptions} [options]  Additional options to configure the plugin's behaviour.
     */
    constructor(schema: Schema, options?: ProseMirrorMenuOptions);
    options: ProseMirrorMenuOptions;
}
import ProseMirrorPlugin from "./plugin.mjs";
