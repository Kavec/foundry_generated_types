/**
 * The UI element which displays the list of Users who are currently playing within the active World.
 * @extends {Application}
 */
declare class PlayerList extends Application {
    /** @override */
    static override get defaultOptions(): any;
    constructor(options: any);
    /**
     * An internal toggle for whether to show offline players or hide them
     * @type {boolean}
     * @protected
     */
    protected _showOffline: boolean;
    /**
     * Whether the players list is in a configuration where it is hidden.
     * @returns {boolean}
     */
    get isHidden(): boolean;
    /** @override */
    override render(force: any, context?: {}): any;
    /** @override */
    override getData(options?: {}): {
        users: any;
        hide: boolean;
        showOffline: boolean;
    };
    /**
     * Prepare a displayed name string for the User which includes their name, pronouns, character, or GM tag.
     * @returns {string}
     * @protected
     */
    protected _getDisplayName(user: any): string;
    /**
     * Position this Application in the main DOM appropriately.
     * @protected
     */
    protected _positionInDOM(): void;
    /** @override */
    override activateListeners(html: any): void;
    /**
     * Return the default context options available for the Players application
     * @returns {object[]}
     * @protected
     */
    protected _getUserContextOptions(): object[];
    /**
     * Toggle display of the Players hud setting for whether to display offline players
     * @param {Event} event   The originating click event
     * @protected
     */
    protected _onToggleOfflinePlayers(event: Event): void;
    #private;
}
