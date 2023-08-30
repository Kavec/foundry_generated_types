export class ScrollSmoother {
    static register(core: any): any;
    constructor(vars: any);
    vars: any;
    scrollTop: (value: any, ...args: any[]) => any;
    scrollTo: (target: any, smooth: any, position: any) => void;
    offset: (target: any, position: any) => any;
    content: (element: any, ...args: any[]) => any;
    wrapper: (element: any, ...args: any[]) => any;
    effects: (targets: any, config: any) => any;
    sections: (targets: any, config: any) => any;
    render: (y: any) => void;
    getVelocity: () => any;
    smooth: (value: any, ...args: any[]) => any;
    scrollTrigger: any;
    paused: (value: any, allowNestedScroll: any, ...args: any[]) => boolean | this;
    kill: () => void;
    refresh: (soft: any, force: any) => any;
    normalizer: any;
    get progress(): number;
}
export namespace ScrollSmoother {
    let version: string;
    function create(vars: any): any;
    function get(): any;
}
export { ScrollSmoother as default };
