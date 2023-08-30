export namespace MotionPathPlugin {
    export let version: string;
    export let name: string;
    export function register(core: any, Plugin: any, propTween: any): void;
    export function init(target: any, vars: any, tween: any): boolean;
    export function render(ratio: any, data: any): void;
    export function getLength(path: any): any;
    export { sliceRawPath };
    export { getRawPath };
    export { pointsToSegment };
    export { stringToRawPath };
    export { rawPathToString };
    export { transformRawPath };
    export { getGlobalMatrix };
    export { getPositionOnPath };
    export { cacheRawPathMeasurements };
    export function convertToPath(targets: any, swap: any): any;
    export function convertCoordinates(fromElement: any, toElement: any, point: any): any;
    export { _getAlignMatrix as getAlignMatrix };
    export function getRelativePosition(fromElement: any, toElement: any, fromOrigin: any, toOrigin: any): {
        x: any;
        y: any;
    };
    export function arrayToRawPath(value: any, vars: any): any[];
}
export { MotionPathPlugin as default };
import { sliceRawPath } from "./utils/paths.js";
import { getRawPath } from "./utils/paths.js";
import { pointsToSegment } from "./utils/paths.js";
import { stringToRawPath } from "./utils/paths.js";
import { rawPathToString } from "./utils/paths.js";
import { transformRawPath } from "./utils/paths.js";
import { getGlobalMatrix } from "./utils/matrix.js";
import { getPositionOnPath } from "./utils/paths.js";
import { cacheRawPathMeasurements } from "./utils/paths.js";
declare function _getAlignMatrix(fromElement: any, toElement: any, fromOrigin: any, toOrigin: any): any;
