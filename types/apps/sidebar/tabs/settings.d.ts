/**
 * The sidebar tab which displays various game settings, help messages, and configuration options.
 * The Settings sidebar is the furthest-to-right using a triple-cogs icon.
 * @extends {SidebarTab}
 */
declare class Settings extends SidebarTab {
    /** @override */
    override getData(options?: {}): Promise<any>;
    /** @override */
    override activateListeners(html: any): void;
    /**
     * Delegate different actions for different settings buttons
     * @param {MouseEvent} event    The originating click event
     * @private
     */
    private _onSettingsButton;
    /**
     * Executes with the update notification pip is clicked
     * @param {MouseEvent} event    The originating click event
     * @private
     */
    private _onUpdateNotificationClick;
}
/**
 * A simple window application which shows the built documentation pages within an iframe
 * @type {Application}
 */
declare class FrameViewer extends Application {
    constructor(url: any, options: any);
    url: any;
    /** @override */
    override getData(options?: {}): Promise<{
        src: any;
    }>;
}
