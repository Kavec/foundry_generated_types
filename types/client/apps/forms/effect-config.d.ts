/**
 * The Application responsible for configuring a single ActiveEffect document within a parent Actor or Item.
 * @extends {DocumentSheet}
 *
 * @param {ActiveEffect} object             The target active effect being configured
 * @param {DocumentSheetOptions} [options]  Additional options which modify this application instance
 */
declare class ActiveEffectConfig extends DocumentSheet {
    /** @override */
    static override get defaultOptions(): any;
    /** @override */
    override getData(options?: {}): Promise<any>;
    /**
     * Provide centralized handling of mouse clicks on control buttons.
     * Delegate responsibility out to action-specific handlers depending on the button action.
     * @param {MouseEvent} event      The originating click event
     * @private
     */
    private _onEffectControl;
    /**
     * Handle adding a new change to the changes array.
     * @private
     */
    private _addEffectChange;
    /** @inheritdoc */
    _getSubmitData(updateData?: {}): any;
}
