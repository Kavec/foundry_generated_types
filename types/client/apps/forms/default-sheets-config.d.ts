/**
 * An Application responsible for allowing GMs to configure the default sheets that are used for the Documents in their
 * world.
 */
declare class DefaultSheetsConfig extends PackageConfiguration {
    /** @inheritdoc */
    _prepareCategoryData(): {
        categories: {
            title: any;
            id: any;
            count: any;
            subTypes: any;
        }[];
        total: number;
    };
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<any>;
    /** @inheritdoc */
    _onResetDefaults(event: any): Promise<void>;
}
