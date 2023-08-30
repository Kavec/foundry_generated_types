export class Flip {
    static getState(targets: any, vars: any): FlipState;
    static from(state: any, vars: any): any;
    static to(state: any, vars: any): any;
    static fromTo(fromState: any, toState: any, vars: any): any;
    static fit(fromEl: any, toEl: any, vars: any): any;
    static makeAbsolute(targetsOrStates: any, vars: any): any;
    static batch(id: any): any;
    static killFlipsOf(targets: any, complete: any): void;
    static isFlipping(target: any): any;
    static getByTarget(target: any): any;
    static getElementState(target: any, props: any): ElementState;
    static convertCoordinates(fromElement: any, toElement: any, point: any): any;
    static register(core: any): void;
}
export namespace Flip {
    let version: string;
}
export { Flip as default };
declare class FlipState {
    constructor(targets: any, vars: any, targetsAreElementStates: any);
    props: any;
    simple: boolean;
    targets: any;
    elementStates: any;
    update(soft: any): this;
    clear(): this;
    fit(state: any, scale: any, nested: any): this;
    getProperty(element: any, property: any): any;
    add(state: any): this;
    interrupted: boolean;
    compare(state: any): {
        changed: any[];
        unchanged: any[];
        enter: any[];
        leave: any[];
    };
    recordInlineStyles(): void;
    interrupt(soft: any): void;
    updateVisibility(): void;
    getElementState(element: any): any;
    makeAbsolute(): any;
}
declare class ElementState {
    constructor(element: any, props: any, simple: any);
    element: any;
    isDifferent(state: any): boolean;
    update(props: any, simple: any): void;
    getProp: any;
    id: any;
    matrix: any;
    cache: any;
    bounds: any;
    isVisible: boolean;
    display: any;
    position: any;
    parent: any;
    x: any;
    y: any;
    scaleX: any;
    scaleY: any;
    rotation: any;
    skewX: any;
    opacity: any;
    width: any;
    height: any;
    ctm: any;
    simple: any;
    uncache: number;
}
