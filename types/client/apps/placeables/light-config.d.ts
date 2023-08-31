/**
 * The Application responsible for configuring a single AmbientLight document within a parent Scene.
 * @param {AmbientLight} light              The AmbientLight object for which settings are being configured
 * @param {DocumentSheetOptions} [options]  Additional application configuration options
 */
declare class AmbientLightConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * Maintain a copy of the original to show a real-time preview of changes.
     * @type {AmbientLightDocument}
     */
    preview: AmbientLightDocument;
    /** @inheritdoc */
    getData(options?: {}): any;
    /** @inheritdoc */
    _onChangeInput(event: any): Promise<void>;
    /**
     * Reset the values of advanced attributes to their default state.
     * @param {PointerEvent} event    The originating click event
     * @protected
     */
    protected _onResetForm(event: PointerEvent): void;
    /**
     * Preview changes to the AmbientLight document as if they were true document updates.
     * @param {object} [change]  A change to preview.
     * @protected
     */
    protected _previewChanges(change?: object): void;
    /**
     * Restore the true data for the AmbientLight document when the form is submitted or closed.
     * @protected
     */
    protected _resetPreview(): void;
    /** @inheritdoc */
    _onChangeTab(event: any, tabs: any, active: any): void;
    /** @inheritdoc */
    _getSubmitData(updateData?: {}): any;
}
