export function ScrollTrigger(vars: any, animation: any): void;
export namespace ScrollTrigger {
    export let version: string;
    export function saveStyles(targets: any): any;
    export function revert(soft: any, media: any): void;
    export function create(vars: any, animation: any): any;
    export function refresh(safe: any): void;
    export { _updateAll as update };
    export { _clearScrollMemory as clearScrollMemory };
    export function maxScroll(element: any, horizontal: any): number;
    export function getScrollFunc(element: any, horizontal: any): any;
    export function getById(id: any): any;
    export function getAll(): any[];
    export function isScrolling(): boolean;
    export { _snapDirectional as snapDirectional };
    export function addEventListener(type: any, callback: any): void;
    export function removeEventListener(type: any, callback: any): void;
    export function batch(targets: any, vars: any): any[];
    export function sort(func: any): any[];
    export function observe(vars: any): any;
    export function normalizeScroll(vars: any): any;
    export namespace core {
        export { _getVelocityProp };
        export { _inputObserver };
        export { _scrollers };
        export { _proxies };
        export namespace bridge {
            function ss(): void;
            function ref(): any;
        }
    }
}
export { ScrollTrigger as default };
declare function _updateAll(): void;
declare function _clearScrollMemory(): void;
declare function _snapDirectional(snapIncrementOrArray: any): (value: any, direction: any, threshold: any) => any;
import { _getVelocityProp } from "./Observer.js";
declare function _inputObserver(target: any, type: any, inputs: any, nested: any): any;
import { _scrollers } from "./Observer.js";
import { _proxies } from "./Observer.js";
