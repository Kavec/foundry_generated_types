export namespace CSSPlugin {
    export let name: string;
    export { _initCore as register };
    export function targetTest(target: any): any;
    export function init(target: any, vars: any, tween: any, index: any, targets: any): void;
    export function render(ratio: any, data: any): void;
    export { _get as get };
    export { _propertyAliases as aliases };
    export function getSetter(target: any, property: any, plugin: any): (target: any, property: any, value: any, data: any, ratio: any) => void;
    export namespace core {
        export { _removeProperty };
        export { _getMatrix };
    }
}
declare function _initCore(): void;
declare function _get(target: any, property: any, unit: any, uncache: any): any;
declare namespace _propertyAliases {
    let autoAlpha: string;
    let scale: string;
    let alpha: string;
}
declare function _removeProperty(target: any, property: any): void;
declare function _getMatrix(target: any, force2D: any): any;
export function _getBBox(target: any): any;
export function _createElement(type: any, ns: any): any;
declare function _checkPropPrefix(property: any, element: any, preferPrefix: any): any;
export { CSSPlugin as default, _checkPropPrefix as checkPrefix };
