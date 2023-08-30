/**
 * The singleton collection of Folder documents which exist within the active World.
 * This Collection is accessible within the Game object as game.folders.
 * @extends {WorldCollection}
 *
 * @see {@link Folder} The Folder document
 */
declare class Folders extends WorldCollection {
    constructor(...args: any[]);
    /**
     * Track which Folders are currently expanded in the UI
     */
    _expanded: {};
    /** @override */
    override render(force: any, context: any): any;
    /**
     * Refresh the display of any active JournalSheet instances where the folder list will change.
     * @private
     */
    private _refreshJournalEntrySheets;
}
