/**
 * The singleton collection of FogExploration documents which exist within the active World.
 * @extends {WorldCollection}
 * @see {@link FogExploration} The FogExploration document
 */
declare class FogExplorations extends WorldCollection {
    /**
     * Activate Socket event listeners to handle for fog resets
     * @param {Socket} socket     The active web socket connection
     * @internal
     */
    static _activateSocketListeners(socket: Socket): void;
}
