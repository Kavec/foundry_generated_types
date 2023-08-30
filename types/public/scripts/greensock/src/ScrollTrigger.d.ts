export class ScrollTrigger {
    static register(core: any): any;
    static defaults(config: any): {
        toggleActions: string;
        anticipatePin: number;
    };
    static disable(reset: any, kill: any): void;
    static enable(): void;
    static config(vars: any): void;
    static scrollerProxy(target: any, vars: any): void;
    static clearMatchMedia(query: any): void;
    static isInViewport(element: any, ratio: any, horizontal: any): boolean;
    static positionInViewport(element: any, referencePoint: any, horizontal: any): number;
    static killAll(allowListeners: any): void;
    constructor(vars: any, animation: any);
    init(vars: any, animation: any): void;
    progress: number;
    start: number;
    update: ((v: any) => any) | ((reset: any, recordVelocity: any, forceFake: any) => void);
    refresh: ((v: any) => any) | ((soft: any, force: any) => void);
    kill: ((v: any) => any) | ((revert: any, allowAnimation: any) => void);
    _dir: {
        s: string;
        p: string;
        p2: string;
        os: string;
        os2: string;
        d: string;
        d2: string;
        a: string;
        sc: {
            (value: any): any;
            offset: number;
        };
    };
    scroller: any;
    scroll: any;
    vars: any;
    tweenTo: any;
    scrubDuration: (value: any) => void;
    trigger: any;
    markerStart: any;
    markerEnd: any;
    previous: () => any;
    next: () => any;
    revert: (revert: any, temp: any) => any;
    getVelocity: () => number;
    endAnimation: () => void;
    labelToScroll: (label: any) => any;
    getTrailing: (name: any) => any[];
    enable: (reset: any, refresh: any) => void;
    getTween: (snap: any) => any;
    setPositions: (newStart: any, newEnd: any) => void;
    disable: (reset: any, allowAnimation: any) => void;
}
export namespace ScrollTrigger {
    export let version: string;
    export function saveStyles(targets: any): any;
    export function revert(soft: any, media: any): void;
    export function create(vars: any, animation: any): ScrollTrigger;
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
    export function observe(vars: any): Observer;
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
declare function _snapDirectional(snapIncrementOrArray: any): (value: any, direction: any, threshold?: number) => any;
import { Observer } from "./Observer.js";
import { _getVelocityProp } from "./Observer.js";
declare function _inputObserver(target: any, type: any, inputs: any, nested: any): Observer;
import { _scrollers } from "./Observer.js";
import { _proxies } from "./Observer.js";
