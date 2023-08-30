/**
 * The Application responsible for configuring the CombatTracker and its contents.
 * @extends {FormApplication}
 */
declare class CombatTrackerConfig extends FormApplication {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @override */
    override getData(options?: {}): Promise<{
        settings: any;
        attributeChoices: any;
        combatTheme: any;
        selectedTheme: any;
        user: User;
    }>;
    /** @override */
    override _updateObject(event: any, formData: any): Promise<any>;
    /** @override */
    override _onChangeInput(event: any): Promise<any>;
    #private;
}
