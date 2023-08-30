export class SplitText {
    static create(element: any, vars: any): SplitText;
    constructor(element: any, vars: any);
    elements: any;
    chars: any[];
    words: any[];
    lines: any[];
    _originals: any[];
    vars: any;
    split(vars: any): this;
    isSplit: boolean;
    revert(): this;
}
export namespace SplitText {
    let version: string;
}
export { SplitText as default };
