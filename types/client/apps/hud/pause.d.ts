/**
 * Pause notification in the HUD
 * @extends {Application}
 */
declare class Pause extends Application {
    /** @override */
    override getData(options?: {}): {
        paused: boolean;
    };
}
