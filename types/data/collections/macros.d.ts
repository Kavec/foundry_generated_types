/**
 * The singleton collection of Macro documents which exist within the active World.
 * This Collection is accessible within the Game object as game.macros.
 * @extends {WorldCollection}
 *
 * @see {@link Macro} The Macro document
 * @see {@link MacroDirectory} The MacroDirectory sidebar directory
 */
declare class Macros extends WorldCollection {
    /** @override */
    override get directory(): any;
    /** @inheritdoc */
    fromCompendium(document: any, options?: {}): any;
}
