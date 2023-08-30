/**
 * The main menu application which is toggled via the ESC key.
 * @extends {Application}
 */
declare class MainMenu extends Application {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * The structure of menu items
     * @returns {Object<{label: string, icon: string, enabled: boolean, onClick: Function}>}
     */
    get items(): any;
    /** @inheritdoc */
    getData(options?: {}): {
        items: any;
    };
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Toggle display of the menu (or render it in the first place)
     */
    toggle(): void;
}
