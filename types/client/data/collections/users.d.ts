/**
 * The singleton collection of User documents which exist within the active World.
 * This Collection is accessible within the Game object as game.users.
 * @extends {WorldCollection}
 *
 * @see {@link User} The User document
 */
declare class Users extends WorldCollection {
    static _activateSocketListeners(socket: any): void;
    /**
     * Handle receipt of activity data from another User connected to the Game session
     * @param {string} userId               The User id who generated the activity data
     * @param {ActivityData} activityData   The object of activity data
     * @private
     */
    private static _handleUserActivity;
    constructor(...args: any[]);
    /**
     * The User document of the currently connected user
     * @type {User|null}
     */
    current: User | null;
    /**
     * Get the users with player roles
     * @returns {User[]}
     */
    get players(): User[];
    /**
     * Get one User who is an active Gamemaster, or null if no active GM is available.
     * This can be useful for workflows which occur on all clients, but where only one user should take action.
     * @type {User|null}
     */
    get activeGM(): User;
}
