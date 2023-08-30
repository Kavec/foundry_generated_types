export class VelocityTracker {
    static register(core: any): void;
    static track(targets: any, properties: any, types: any): any[];
    static untrack(targets: any, properties: any): void;
    static isTracking(target: any, property: any): any;
    static getVelocity(target: any, property: any): any;
    constructor(target: any, property: any);
    target: any;
    _props: {};
    get(property: any, skipRecentTick: any): number;
    getAll(): {};
    isTracking(property: any): boolean;
    add(property: any, type: any): void;
    remove(property: any): void;
    kill(shallow: any): void;
}
export namespace VelocityTracker {
    export { _getByTarget as getByTarget };
}
export { VelocityTracker as default };
/*!
 * VelocityTracker: 3.11.0
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _getByTarget(target: any): any;
