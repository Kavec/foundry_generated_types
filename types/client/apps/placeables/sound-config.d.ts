/**
 * The Application responsible for configuring a single AmbientSound document within a parent Scene.
 * @extends {DocumentSheet}
 *
 * @param {AmbientSound} sound              The sound object being configured
 * @param {DocumentSheetOptions} [options]  Additional application rendering options
 */
declare class AmbientSoundConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    get title(): any;
    /** @inheritdoc */
    close(options: any): Promise<void>;
}
