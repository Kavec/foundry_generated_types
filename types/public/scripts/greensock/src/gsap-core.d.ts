export class GSCache {
    constructor(target: any, harness: any);
    id: number;
    target: any;
    harness: any;
    get: any;
    set: any;
}
export class Animation {
    constructor(vars: any);
    vars: any;
    _delay: number;
    _repeat: any;
    _rDelay: any;
    _yoyo: boolean;
    _ts: number;
    data: any;
    _ctx: any;
    delay(value: any): number | this;
    duration(value: any, ...args: any[]): any;
    totalDuration(value: any, ...args: any[]): any;
    _dirty: number;
    totalTime(totalTime: any, suppressEvents: any, ...args: any[]): any;
    _pTime: any;
    time(value: any, suppressEvents: any, ...args: any[]): any;
    totalProgress(value: any, suppressEvents: any, ...args: any[]): any;
    progress(value: any, suppressEvents: any, ...args: any[]): any;
    iteration(value: any, suppressEvents: any, ...args: any[]): any;
    timeScale(value: any, ...args: any[]): any;
    _rts: number;
    paused(value: any, ...args: any[]): any;
    _ps: any;
    _act: number;
    startTime(value: any, ...args: any[]): any;
    _start: any;
    endTime(includeRepeats: any): any;
    rawTime(wrapRepeats: any): any;
    revert(config?: {
        suppressEvents: boolean;
    }): this;
    globalTime(rawTime: any, ...args: any[]): any;
    repeat(value: any, ...args: any[]): any;
    repeatDelay(value: any, ...args: any[]): any;
    yoyo(value: any, ...args: any[]): boolean | this;
    seek(position: any, suppressEvents: any): any;
    restart(includeDelay: any, suppressEvents: any): any;
    play(from: any, suppressEvents: any): any;
    reverse(from: any, suppressEvents: any): any;
    pause(atTime: any, suppressEvents: any): any;
    resume(): any;
    reversed(value: any, ...args: any[]): boolean | this;
    invalidate(): this;
    _initted: number;
    _zTime: number;
    isActive(): boolean;
    eventCallback(type: any, callback: any, params: any, ...args: any[]): any;
    _onUpdate: any;
    then(onFulfilled: any): Promise<any>;
    kill(): void;
}
export class Timeline extends Animation {
    static updateRoot(time: any): void;
    constructor(vars: {}, position: any);
    labels: {};
    smoothChildTiming: boolean;
    autoRemoveChildren: boolean;
    _sort: boolean;
    to(targets: any, vars: any, position: any, ...args: any[]): this;
    from(targets: any, vars: any, position: any, ...args: any[]): this;
    fromTo(targets: any, fromVars: any, toVars: any, position: any, ...args: any[]): this;
    set(targets: any, vars: any, position: any): this;
    call(callback: any, params: any, position: any): any;
    staggerTo(targets: any, duration: any, vars: any, stagger: any, position: any, onCompleteAll: any, onCompleteAllParams: any): this;
    staggerFrom(targets: any, duration: any, vars: any, stagger: any, position: any, onCompleteAll: any, onCompleteAllParams: any): this;
    staggerFromTo(targets: any, duration: any, fromVars: any, toVars: any, stagger: any, position: any, onCompleteAll: any, onCompleteAllParams: any): this;
    render(totalTime: any, suppressEvents: any, force: any): any;
    _lock: number;
    _tTime: any;
    _time: any;
    add(child: any, position: any): any;
    getChildren(nested?: boolean, tweens?: boolean, timelines?: boolean, ignoreBeforeTime?: number): any[];
    getById(id: any): any;
    remove(child: any): any;
    _recent: any;
    _forcing: number;
    addLabel(label: any, position: any): this;
    removeLabel(label: any): this;
    addPause(position: any, callback: any, params: any): any;
    _hasPause: number;
    removePause(position: any): void;
    killTweensOf(targets: any, props: any, onlyActive: any): this;
    getTweensOf(targets: any, onlyActive: any): any[];
    tweenTo(position: any, vars: any): any;
    tweenFromTo(fromPosition: any, toPosition: any, vars: any): any;
    recent(): any;
    nextLabel(afterTime?: any): string;
    previousLabel(beforeTime?: any): string;
    currentLabel(value: any, ...args: any[]): any;
    shiftChildren(amount: any, adjustLabels: any, ignoreBeforeTime?: number): any;
    invalidate(): this;
    clear(includeLabels?: boolean): any;
}
export namespace Timeline {
    let version: string;
}
export class Tween extends Animation {
    static to(targets: any, vars: any, ...args: any[]): Tween;
    static from(targets: any, vars: any, ...args: any[]): Tween;
    static delayedCall(delay: any, callback: any, params: any, scope: any): Tween;
    static fromTo(targets: any, fromVars: any, toVars: any, ...args: any[]): Tween;
    static set(targets: any, vars: any): Tween;
    static killTweensOf(targets: any, props: any, onlyActive: any): any;
    constructor(targets: any, vars: any, position: any, skipInherit: any);
    _targets: any;
    _ptLookup: any[];
    _overwrite: any;
    timeline: number | Timeline;
    _delay: any;
    _tTime: number;
    render(totalTime: any, suppressEvents: any, force: any): any;
    _lock: number;
    _time: any;
    _lazy: any;
    ratio: any;
    targets(): any;
    invalidate(): this;
    _pt: any;
    _op: any;
    _startAt: any;
    resetTo(property: any, value: any, start: any, startIsRelative: any): any;
    kill(targets: any, vars?: string): any;
}
export namespace Tween {
    let version_1: string;
    export { version_1 as version };
}
export class PropTween {
    constructor(next: any, target: any, prop: any, start: any, change: any, renderer: any, data: any, setter: any, priority: any);
    t: any;
    s: any;
    c: any;
    p: any;
    r: any;
    d: any;
    set: any;
    pr: any;
    _next: any;
    modifier(func: any, tween: any, target: any): void;
    mSet: any;
    m: any;
    mt: any;
    tween: any;
}
export namespace gsap {
    let version_2: string;
    export { version_2 as version };
}
export const Power0: any;
export const Power1: any;
export const Power2: any;
export const Power3: any;
export const Power4: any;
export namespace Linear {
    let easeNone: any;
}
export const Quad: any;
export const Cubic: any;
export const Quart: any;
export const Quint: any;
export const Strong: any;
export const Elastic: any;
export const Back: any;
export namespace SteppedEase {
    function config(steps: number, immediateStart: any): (p: any) => number;
}
export const Bounce: any;
export const Sine: any;
export const Expo: any;
export const Circ: any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function wrap(min: any, max: any, value: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function wrapYoyo(min: any, max: any, value: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function distribute(v: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function random(min: any, max: any, roundingIncrement: any, returnFunction: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function snap(snapTo: any, value: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function normalize(min: any, max: any, value: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function getUnit(value: any, v: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function clamp(min: any, max: any, value: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function splitColor(v: any, toHSL: any, forceAlpha: any): number | number[];
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function toArray(value: any, scope: any, leaveStrings: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function selector(value: any): (v: any) => any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function mapRange(inMin: any, inMax: any, outMin: any, outMax: any, value: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function pipe(...functions: any[]): (value: any) => any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function unitize(func: any, unit: any): (value: any) => any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function interpolate(start: any, end: any, progress: any, mutate: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function shuffle(a: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _getProperty(target: any, property: any, v: any): any;
export let _numExp: RegExp;
export let _numWithUnitExp: RegExp;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _isString(value: any): boolean;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _isUndefined(value: any): boolean;
export function _renderComplexString(ratio: any, data: any): void;
export let _relExp: RegExp;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _setDefaults(obj: any, defaults: any): any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _removeLinkedListItem(parent: any, child: any, firstProp?: string, lastProp?: string): void;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _forEachName(names: any, func: any): any;
export function _sortPropTweensByPriority(parent: any): void;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _colorStringFilter(a: any): boolean;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _replaceRandom(value: any): string;
export function _checkPlugin(property: any, vars: any, tween: any, index: any, target: any, targets: any): any;
export let _plugins: {};
export namespace _ticker {
    export let time: number;
    export let frame: number;
    export function tick(): void;
    export function deltaRatio(fps: any): number;
    export function wake(): void;
    export function sleep(): void;
    export function lagSmoothing(threshold: any, adjustedLag: any): void;
    export function fps(fps: any): void;
    export function add(callback: any, once: any, prioritize: any): any;
    export function remove(callback: any, i: any): void;
    export { _listeners };
}
export namespace _config {
    export { _colorStringFilter as stringFilter };
}
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _roundModifier(v: any): (raw: any) => any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _round(value: any): number;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _missingPlugin(property: any, value: any): void;
export function _getSetter(target: any, property: any): (target: any, property: any, value: any) => any;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _getCache(target: any): any;
export let _colorExp: RegExp;
/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _parseRelative(start: any, value: any): any;
declare let _listeners: {};
export { Tween as TweenMax, Tween as TweenLite, Timeline as TimelineMax, Timeline as TimelineLite, gsap as default };
