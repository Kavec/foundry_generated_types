export class CustomEase {
    static create(id: any, data: any, config: any): (p: any) => any;
    static register(core: any): void;
    static get(id: any): any;
    static getSVGData(ease: any, config: any): string;
    constructor(id: any, data: any, config: any);
    id: any;
    setData(data: any, config: any): this;
    data: any;
    segment: any;
    ease: (p: any) => any;
    getSVGData(config: any): string;
}
export namespace CustomEase {
    let version: string;
}
export { CustomEase as default };
