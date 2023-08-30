/**
 * The Collection of Setting documents which exist within the active World.
 * This collection is accessible as game.settings.storage.get("world")
 * @extends {WorldCollection}
 *
 * @see {@link Setting} The Setting document
 */
declare class WorldSettings extends WorldCollection {
    /** @override */
    override get directory(): any;
    /**
     * Return the Setting document with the given key.
     * @param {string} key        The setting key
     * @returns {Setting}         The Setting
     */
    getSetting(key: string): Setting;
    /**
     * Return the serialized value of the world setting as a string
     * @param {string} key    The setting key
     * @returns {string|null}  The serialized setting string
     */
    getItem(key: string): string | null;
}
