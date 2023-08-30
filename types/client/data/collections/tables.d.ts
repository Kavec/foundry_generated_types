/**
 * The singleton collection of RollTable documents which exist within the active World.
 * This Collection is accessible within the Game object as game.tables.
 * @extends {WorldCollection}
 *
 * @see {@link RollTable} The RollTable document
 * @see {@link RollTableDirectory} The RollTableDirectory sidebar directory
 */
declare class RollTables extends WorldCollection {
    /**
     * Register world settings related to RollTable documents
     */
    static registerSettings(): void;
    /** @override */
    override get directory(): any;
}
