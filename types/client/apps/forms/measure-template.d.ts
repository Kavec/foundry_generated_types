/**
 * The Application responsible for configuring a single MeasuredTemplate document within a parent Scene.
 * @param {MeasuredTemplate} object         The {@link MeasuredTemplate} being configured.
 * @param {DocumentSheetOptions} [options]  Application configuration options.
 */
declare class MeasuredTemplateConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    getData(): any;
}
