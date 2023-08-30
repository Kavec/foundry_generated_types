export namespace InertiaPlugin {
    let version: string;
    let name: string;
    function register(core: any): void;
    function init(target: any, vars: any, tween: any, index: any, targets: any): number;
    function render(ratio: any, data: any): void;
}
import { VelocityTracker } from "./utils/VelocityTracker.js";
export { InertiaPlugin as default, VelocityTracker };
