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
     * @protected
     */
    protected static _handleUserActivity(userId: string, activityData?: {
        /**
         * The ID of the scene that the user is viewing.
         */
        sceneId?: string;
        /**
         * The position of the user's cursor.
         */
        cursor?: {
            x: number;
            y: number;
        };
        /**
         * The state of the user's ruler, if they are currently using one.
         */
        ruler?: {
            /**
             * The ruler measurement state.
             */
            _state: number;
            /**
             * A unique name for the ruler containing the owning user's ID.
             */
            name: string;
            /**
             * The current point the ruler has been extended to.
             */
            destination: PIXI.Point;
            /**
             * The class name of this ruler instance.
             */
            class: string;
            /**
             * Additional waypoints along the ruler's length, including the starting point.
             */
            waypoints: PIXI.Point[];
        };
        /**
         * The IDs of the tokens the user has targeted in the currently viewed
         *               scene.
         */
        targets?: string[];
        /**
         * Whether the user has an open WS connection to the server or not.
         */
        active?: boolean;
        /**
         * Is the user emitting a ping at the cursor coordinates?
         */
        ping?: {
            /**
             * Pulls all connected clients' views to the pinged co-ordinates.
             */
            pull?: boolean;
            /**
             * The ping style, see CONFIG.Canvas.pings.
             */
            style: string;
            /**
             * The ID of the scene that was pinged.
             */
            scene: string;
            /**
             * The zoom level at which the ping was made.
             */
            zoom: number;
        };
        /**
         * The state of the user's AV settings.
         */
        av?: AVSettingsData;
    }): void;
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
