export function SlowMo(p: any): any;
export namespace SlowMo {
    export { SlowMo as ease };
    export { _createSlowMo as config };
}
export function ExpoScaleEase(p: any): number;
export namespace ExpoScaleEase {
    export { _createExpoScale as config };
}
export function RoughEase(p: any): any;
export namespace RoughEase {
    export { RoughEase as ease };
    export { _createRoughEase as config };
}
export namespace EasePack {
    export { SlowMo };
    export { RoughEase };
    export { ExpoScaleEase };
}
export { EasePack as default };
/*!
 * EasePack 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _createSlowMo(linearRatio: any, power: any, yoyoMode: any): (p: any) => any;
/*!
 * EasePack 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _createExpoScale(start: any, end: any, ease: any): (p: any) => number;
/*!
 * EasePack 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _createRoughEase(vars: any): (p: any) => any;
