/**
 * A DocumentSheet application responsible for displaying and editing a single embedded Card document.
 * @extends {DocumentSheet}
 * @param {Card} object                     The {@link Card} object being configured.
 * @param {DocumentSheetOptions} [options]  Application configuration options.
 */
declare class CardConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    getData(options?: {}): any;
    /**
     * Handle card face control actions which modify single cards on the sheet.
     * @param {PointerEvent} event          The originating click event
     * @returns {Promise}                   A Promise which resolves once the handler has completed
     * @protected
     */
    protected _onFaceControl(event: PointerEvent): Promise<any>;
}
