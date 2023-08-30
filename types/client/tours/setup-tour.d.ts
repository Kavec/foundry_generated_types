/**
 * A Tour subclass that handles controlling the UI state of the Setup screen
 */
declare class SetupTour extends Tour {
    /**
     * Stores a currently open Application for future steps
     * @type {Application}
     */
    focusedApp: Application;
    /**
     * Handle Step setup for the Installing a System Tour
     * @returns {Promise<void>}
     * @private
     */
    private _installingASystem;
    /**
     * Handle Step setup for the Creating a World Tour
     * @returns {Promise<void>}
     * @private
     */
    private _creatingAWorld;
}
