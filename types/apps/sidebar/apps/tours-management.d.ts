/**
 * A management app for configuring which Tours are available or have been completed.
 */
declare class ToursManagement extends PackageConfiguration {
    /** @override */
    override _prepareCategoryData(): {
        categories: Map<any, any>;
        total: number;
    };
    /** @override */
    override _onResetDefaults(event: any): Promise<any>;
    /**
     * Handle Control clicks
     * @param {MouseEvent} event
     * @private
     */
    private _onClickControl;
}
