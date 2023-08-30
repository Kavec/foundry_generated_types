export class MotionPathHelper {
    constructor(targetOrTween: any, vars?: {});
    offset: {
        x: number;
        y: number;
    };
    editor: PathEditor;
    animation: any;
    getString(): any;
}
export namespace MotionPathHelper {
    export { _initCore as register };
    export function create(target: any, vars: any): MotionPathHelper;
    export function editPath(path: any, vars: any): PathEditor;
    export let version: string;
}
export { MotionPathHelper as default };
import PathEditor from "./utils/PathEditor.js";
declare function _initCore(core: any, required: any): void;
