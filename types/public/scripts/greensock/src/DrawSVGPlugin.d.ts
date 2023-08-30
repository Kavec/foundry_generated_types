export namespace DrawSVGPlugin {
    export let version: string;
    export let name: string;
    export function register(core: any): void;
    export function init(target: any, value: any, tween: any, index: any, targets: any): number | false;
    export function render(ratio: any, data: any): void;
    export { _getLength as getLength };
    export { _getPosition as getPosition };
}
export { DrawSVGPlugin as default };
/*!
 * DrawSVGPlugin 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _getLength(target: any): any;
/*!
 * DrawSVGPlugin 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _getPosition(target: any, length: any): number[];
