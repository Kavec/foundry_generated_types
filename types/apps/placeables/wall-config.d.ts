/**
 * The Application responsible for configuring a single Wall document within a parent Scene.
 * @param {Wall} object                       The Wall object for which settings are being configured
 * @param {FormApplicationOptions} [options]  Additional options which configure the rendering of the configuration
 *                                            sheet.
 */
declare class WallConfig extends DocumentSheet {
    /**
     * An array of Wall ids that should all be edited when changes to this config form are submitted
     * @type {string[]}
     */
    editTargets: string[];
    /** @inheritdoc */
    get title(): any;
    /** @inheritdoc */
    render(force: any, options: any): any;
    /** @inheritDoc */
    _onChangeInput(event: any): Promise<any>;
    /** @inheritdoc */
    _getSubmitData(updateData?: {}): any;
    #private;
}
