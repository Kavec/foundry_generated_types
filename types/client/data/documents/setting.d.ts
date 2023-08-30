/**
 * The client-side Setting document which extends the common BaseSetting model.
 * @extends documents.BaseSetting
 * @mixes ClientDocumentMixin
 *
 * @see {@link WorldSettings}       The world-level collection of Setting documents
 */
declare class Setting {
    /**
     * The types of settings which should be constructed as a function call rather than as a class constructor.
     */
    static "__#64@#PRIMITIVE_TYPES": readonly (SymbolConstructor | StringConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor | BigIntConstructor)[];
    /**
     * The setting configuration for this setting document.
     * @type {SettingsConfig|undefined}
     */
    get config(): SettingsConfig;
    /** @inheritDoc */
    _initialize(options?: {}): void;
    value: any;
    /** @override */
    override _onCreate(data: any, options: any, userId: any): void;
    /** @override */
    override _onUpdate(changed: any, options: any, userId: any): void;
    /**
     * Cast the value of the Setting into its defined type.
     * @returns {*}     The initialized type of the Setting document.
     * @protected
     */
    protected _castType(): any;
}
