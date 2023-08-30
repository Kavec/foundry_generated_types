/**
 * A Macro configuration sheet
 * @extends {DocumentSheet}
 *
 * @param {Macro} object                    The Macro Document which is being configured
 * @param {DocumentSheetOptions} [options]  Application configuration options.
 */
declare class MacroConfig extends DocumentSheet {
    /** @override */
    static override get defaultOptions(): any;
    /** @inheritdoc */
    _disableFields(form: any): void;
    /**
     * Save and execute the macro using the button on the configuration sheet
     * @param {MouseEvent} event      The originating click event
     * @return {Promise<void>}
     * @private
     */
    private _onExecute;
}
