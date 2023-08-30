/**
 * The singleton collection of Actor documents which exist within the active World.
 * This Collection is accessible within the Game object as game.actors.
 * @extends {WorldCollection}
 * @category - Collections
 *
 * @see {@link Actor} The Actor document
 * @see {@link ActorDirectory} The ActorDirectory sidebar directory
 *
 * @example Retrieve an existing Actor by its id
 * ```js
 * let actor = game.actors.get(actorId);
 * ```
 */
declare class Actors extends WorldCollection {
    /**
     * A mapping of synthetic Token Actors which are currently active within the viewed Scene.
     * Each Actor is referenced by the Token.id.
     * @type {Object<string, Actor>}
     */
    get tokens(): {
        [x: string]: Actor;
    };
    /** @inheritdoc */
    fromCompendium(document: any, options?: {}): any;
}
