/**
 * Audio/Video Conferencing Configuration Sheet
 * @extends {FormApplication}
 *
 * @param {AVMaster} object                   The {@link AVMaster} instance being configured.
 * @param {FormApplicationOptions} [options]  Application configuration options.
 */
declare class AVConfig extends FormApplication {
    /** @override */
    static override get defaultOptions(): any;
    constructor(object: any, options: any);
    /** @override */
    override getData(options?: {}): Promise<{
        user: User;
        modes: {
            [x: number]: string;
        };
        voiceModes: {};
        serverTypes: {
            FVTT: string;
            custom: string;
        };
        turnTypes: {
            server: string;
            custom: string;
        };
        settings: any;
        canSelectMode: boolean;
        noSSL: boolean;
        videoSources: any;
        audioSources: any;
        audioSinks: any;
        videoSrcUnavailable: boolean;
        audioSrcUnavailable: boolean;
        audioSinkUnavailable: boolean;
        audioDisabled: boolean;
        videoDisabled: boolean;
        nameplates: {
            [x: number]: string;
        };
        nameplateSetting: any;
        dockPositions: {
            [k: string]: any;
        };
    }>;
    /**
     * Set a section's input to enabled or disabled
     * @param {string} selector    Selector for the section to enable or disable
     * @param {boolean} enabled    Whether to enable or disable this section
     * @protected
     */
    protected _setConfigSectionEnabled(selector: string, enabled?: boolean): void;
    /**
     * Determine whether a given video or audio source, or audio sink has become
     * unavailable since the last time it was set.
     * @param {object} sources The available devices
     * @param {string} source  The selected device
     * @protected
     */
    protected _isSourceUnavailable(sources: object, source: string): boolean;
    /**
     * Callback when the turn server type changes
     * Will enable or disable the turn section based on whether the user selected a custom turn or not
     * @param {Event} event   The event that triggered the turn server type change
     * @protected
     */
    protected _onTurnTypeChanged(event: Event): void;
    /** @override */
    override _updateObject(event: any, formData: any): Promise<void>;
}
