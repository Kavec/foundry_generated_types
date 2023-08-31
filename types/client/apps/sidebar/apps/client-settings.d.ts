/**
 * The Application responsible for displaying and editing the client and world settings for this world.
 * This form renders the settings defined via the game.settings.register API which have config = true
 */
declare class SettingsConfig extends PackageConfiguration {
    /**
     * Confirm if the user wishes to reload the application.
     * @param {object} [options]               Additional options to configure the prompt.
     * @param {boolean} [options.world=false]  Whether to reload all connected clients as well.
     * @returns {Promise<void>}
     */
    static reloadConfirm({ world }?: {
        world?: boolean;
    }): Promise<void>;
    /** @inheritDoc */
    _prepareCategoryData(): {
        categories: Map<any, any>;
        total: number;
        user: User;
        canConfigure: any;
    };
    /**
     * Handle activating the button to configure User Role permissions
     * @param {Event} event   The initial button click event
     * @protected
     */
    protected _onClickSubmenu(event: Event): any;
    /**
     * Preview font scaling as the setting is changed.
     * @param {Event} event  The triggering event.
     * @protected
     */
    protected _previewFontScaling(event: Event): void;
    /** @override */
    override _updateObject(event: any, formData: any): Promise<void>;
}
