export function Observer(vars: any): void;
export namespace Observer {
    export let version: string;
    export function create(vars: any): any;
    export { _initCore as register };
    export function getAll(): any[];
    export function getById(id: any): any;
}
/*!
 * Observer 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _initCore(core: any): any;
/*!
 * Observer 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _isViewport(el: any): boolean;
export var _scrollers: any[];
/*!
 * Observer 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _getScrollFunc(element: any, _ref: any): any;
/*!
 * Observer 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _getProxyProp(element: any, property: any): any;
export var _proxies: any[];
/*!
 * Observer 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _getVelocityProp(value: any, minTimeRefresh: any, useDelta: any): {
    update: (value: any, force: any) => void;
    reset: () => void;
    getVelocity: (latestValue: any) => number;
};
export namespace _vertical {
    export { _scrollTop as s };
    export let p: string;
    export let p2: string;
    export let os: string;
    export let os2: string;
    export let d: string;
    export let d2: string;
    export let a: string;
    export { _horizontal as op };
    export function sc(value: any): any;
    export namespace sc {
        let offset: number;
    }
}
export namespace _horizontal {
    export { _vertical as op };
}
/*!
 * Observer 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
export function _getTarget(t: any): any;
declare var _scrollTop: string;
export { Observer as default };
