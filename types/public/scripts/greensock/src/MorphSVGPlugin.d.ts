export namespace MorphSVGPlugin {
    export let version: string;
    export let name: string;
    export let rawVars: number;
    export function register(core: any, Plugin: any): void;
    export function init(target: any, value: any, tween: any, index: any, targets: any): number | false;
    export function render(ratio: any, data: any): void;
    export function kill(property: any): void;
    export { getRawPath };
    export { stringToRawPath };
    export { rawPathToString };
    export function normalizeStrings(shape1: any, shape2: any, { shapeIndex, map }: {
        shapeIndex: any;
        map: any;
    }): any[];
    export { _pathFilter as pathFilter };
    export { _pointsFilter as pointsFilter };
    export { _getTotalSize as getTotalSize };
    export { _equalizeSegmentQuantity as equalizeSegmentQuantity };
    export function convertToPath(targets: any, swap: any): any;
    export let defaultType: string;
    export let defaultUpdateTarget: boolean;
    export let defaultMap: string;
}
export { MorphSVGPlugin as default };
import { getRawPath } from "./utils/paths.js";
import { stringToRawPath } from "./utils/paths.js";
import { rawPathToString } from "./utils/paths.js";
declare function _pathFilter(a: any, shapeIndex: any, map: any, precompile: any, fillSafe: any): void;
declare function _pointsFilter(a: any): void;
declare function _getTotalSize(rawPath: any, samplesPerBezier?: number): number;
declare function _equalizeSegmentQuantity(start: any, end: any, shapeIndex: any, map: any, fillSafe: any): any;
