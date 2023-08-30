/**
 * The Application responsible for configuring a single Note document within a parent Scene.
 * @param {NoteDocument} note               The Note object for which settings are being configured
 * @param {DocumentSheetOptions} [options]  Additional Application configuration options
 */
declare class NoteConfig extends DocumentSheet {
    /** @override */
    static override get defaultOptions(): any;
    /** @override */
    override getData(options?: {}): any;
    /** @inheritdoc */
    _onChangeInput(event: any): Promise<any>;
    /**
     * Update disabled state of the custom icon field.
     * @protected
     */
    protected _updateCustomIcon(): void;
    /**
     * Update the list of pages.
     * @protected
     */
    protected _updatePageList(): void;
    /** @inheritdoc */
    _getSubmitData(updateData?: {}): any;
    /** @override */
    override close(options: any): Promise<void>;
}
