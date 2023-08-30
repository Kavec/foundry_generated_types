/**
 * @typedef {FormApplicationOptions} WorldConfigOptions
 * @property {boolean} [create=false]  Whether the world is being created or updated.
 */
/**
 * The World Management setup application
 * @param {World} object                      The world being configured.
 * @param {WorldConfigOptions} [options]      Application configuration options.
 */
declare class WorldConfig extends FormApplication {
    /**
     * The website knowledge base URL.
     * @type {string}
     * @private
     */
    private static "__#22@#WORLD_KB_URL";
    /**
     * A semantic alias for the World object which is being configured by this form.
     * @type {World}
     */
    get world(): World;
    /** @override */
    override get title(): any;
    /** @override */
    override getData(options?: {}): {
        world: World;
        isCreate: any;
        submitText: any;
        nextDate: any;
        nextTime: any;
        worldKbUrl: string;
        inWorld: boolean;
        themes: any;
    };
    /** @inheritDoc */
    _getSubmitData(updateData?: {}): any;
    /** @override */
    override _updateObject(event: any, formData: any): Promise<any>;
    /** @inheritDoc */
    activateEditor(name: any, options?: {}, initialContent?: string): Promise<any>;
    #private;
}
type WorldConfigOptions = FormApplicationOptions;
