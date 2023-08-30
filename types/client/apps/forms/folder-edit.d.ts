/**
 * The Application responsible for configuring a single Folder document.
 * @extends {DocumentSheet}
 * @param {Folder} object                   The {@link Folder} object to configure.
 * @param {DocumentSheetOptions} [options]  Application configuration options.
 */
declare class FolderConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @override */
    override get title(): any;
    /** @override */
    override getData(options?: {}): Promise<{
        folder: any;
        name: any;
        newName: any;
        safeColor: any;
        sortingModes: {
            a: string;
            m: string;
        };
        submitText: any;
    }>;
}
