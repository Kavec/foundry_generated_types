/**
 * A tour for demonstrating an aspect of Canvas functionality.
 * Automatically activates a certain canvas layer or tool depending on the needs of the step.
 */
declare class CanvasTour extends Tour {
    /** @override */
    override start(): Promise<void>;
    #private;
}
