export namespace PixiPlugin {
    let version: string;
    let name: string;
    function register(core: any, Plugin: any, propTween: any): void;
    function registerPIXI(pixi: any): void;
    function init(target: any, values: any, tween: any, index: any, targets: any): boolean;
}
export { PixiPlugin as default };
