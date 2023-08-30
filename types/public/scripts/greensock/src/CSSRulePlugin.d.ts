export namespace CSSRulePlugin {
    export let version: string;
    export let name: string;
    export function init(target: any, value: any, tween: any, index: any, targets: any): boolean;
    export function render(ratio: any, data: any): void;
    export function getRule(selector: any): any;
    export { _initCore as register };
}
export { CSSRulePlugin as default };
/*!
 * CSSRulePlugin 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _initCore(core: any): void;
