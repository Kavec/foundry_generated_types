export namespace Physics2DPlugin {
    export let version: string;
    export let name: string;
    export { _initCore as register };
    export function init(target: any, value: any, tween: any): void;
    export function render(ratio: any, data: any): void;
    export function kill(property: any): void;
}
export { Physics2DPlugin as default };
/*!
 * Physics2DPlugin 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _initCore(core: any): void;
