/**
 * The Application responsible for displaying a basic sheet for any Document sub-types that do not have a sheet
 * registered.
 * @extends {DocumentSheet}
 */
declare class BaseSheet extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    getData(options?: {}): Promise<{
        cssClass: string;
        editable: any;
        document: ClientDocument;
        data: any;
        limited: any;
        options: any;
        owner: any;
        title: string;
    }>;
}
