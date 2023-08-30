import DOMParser from "./dom-parser.mjs";
import ProseMirrorPlugin from "./plugin.mjs";
import ProseMirrorContentLinkPlugin from "./content-link-plugin.mjs";
import ProseMirrorHighlightMatchesPlugin from "./highlight-matches-plugin.mjs";
import ProseMirrorDirtyPlugin from "./dirty-plugin.mjs";
import ProseMirrorImagePlugin from "./image-plugin.mjs";
import ProseMirrorClickHandler from "./click-handler.mjs";
import ProseMirrorInputRules from "./input-rules.mjs";
import ProseMirrorKeyMaps from "./keymaps.mjs";
import ProseMirrorMenu from "./menu.mjs";
export namespace defaultPlugins {
    let inputRules: any;
    let keyMaps: any;
    let menu: any;
    let isDirty: any;
    let clickHandler: any;
    let pasteTransformer: any;
    let baseKeyMap: any;
    let dropCursor: any;
    let gapCursor: any;
    let history: any;
    let columnResizing: any;
    let tables: any;
}
import { schema as defaultSchema } from "./schema.mjs";
export namespace dom {
    export let parser: any;
    export let serializer: any;
    export { parseHTMLString as parseString };
    export { serializeHTMLString as serializeString };
}
import { parseHTMLString } from "./util.mjs";
import { serializeHTMLString } from "./util.mjs";
export { AllSelection, TextSelection, DOMParser, DOMSerializer, EditorState, EditorView, Schema, Step, Plugin, PluginKey, ProseMirrorPlugin, ProseMirrorContentLinkPlugin, ProseMirrorHighlightMatchesPlugin, ProseMirrorDirtyPlugin, ProseMirrorImagePlugin, ProseMirrorClickHandler, ProseMirrorInputRules, ProseMirrorKeyMaps, ProseMirrorMenu, collab, defaultSchema, keymap };
