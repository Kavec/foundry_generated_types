/**
 * The client-side User document which extends the common BaseUser model.
 * Each User document contains UserData which defines its data schema.
 *
 * @extends documents.BaseUser
 * @mixes ClientDocumentMixin
 *
 * @see {@link documents.Users}             The world-level collection of User documents
 * @see {@link applications.UserConfig}     The User configuration application
 */
declare class User {
    /**
     * Track whether the user is currently active in the game
     * @type {boolean}
     */
    active: boolean;
    /**
     * Track references to the current set of Tokens which are targeted by the User
     * @type {Set<Token>}
     */
    targets: Set<Function>;
    /**
     * Track the ID of the Scene that is currently being viewed by the User
     * @type {string|null}
     */
    viewedScene: string | null;
    /**
     * A flag for whether the current User is a Trusted Player
     * @type {boolean}
     */
    get isTrusted(): boolean;
    /**
     * A flag for whether this User is the connected client
     * @type {boolean}
     */
    get isSelf(): boolean;
    /** @inheritdoc */
    prepareDerivedData(): void;
    avatar: any;
    border: any;
    /**
     * Assign a Macro to a numbered hotbar slot between 1 and 50
     * @param {Macro|null} macro      The Macro document to assign
     * @param {number|string} [slot]  A specific numbered hotbar slot to fill
     * @param {number} [fromSlot]     An optional origin slot from which the Macro is being shifted
     * @returns {Promise<User>}       A Promise which resolves once the User update is complete
     */
    assignHotbarMacro(macro: Macro | null, slot?: number | string, { fromSlot }?: number): Promise<User>;
    /**
     * Assign a specific boolean permission to this user.
     * Modifies the user permissions to grant or restrict access to a feature.
     *
     * @param {string} permission    The permission name from USER_PERMISSIONS
     * @param {boolean} allowed      Whether to allow or restrict the permission
     */
    assignPermission(permission: string, allowed: boolean): any;
    /**
     * @typedef {object} PingData
     * @property {boolean} [pull=false]  Pulls all connected clients' views to the pinged co-ordinates.
     * @property {string} style          The ping style, see CONFIG.Canvas.pings.
     * @property {string} scene          The ID of the scene that was pinged.
     * @property {number} zoom           The zoom level at which the ping was made.
     */
    /**
     * @typedef {object} ActivityData
     * @property {string|null} [sceneId]           The ID of the scene that the user is viewing.
     * @property {{x: number, y: number}} [cursor] The position of the user's cursor.
     * @property {RulerData|null} [ruler]          The state of the user's ruler, if they are currently using one.
     * @property {string[]} [targets]              The IDs of the tokens the user has targeted in the currently viewed
     *                                             scene.
     * @property {boolean} [active]                Whether the user has an open WS connection to the server or not.
     * @property {PingData} [ping]                 Is the user emitting a ping at the cursor coordinates?
     * @property {AVSettingsData} [av]             The state of the user's AV settings.
     */
    /**
     * Submit User activity data to the server for broadcast to other players.
     * This type of data is transient, persisting only for the duration of the session and not saved to any database.
     * Activity data uses a volatile event to prevent unnecessary buffering if the client temporarily loses connection.
     * @param {ActivityData} activityData  An object of User activity data to submit to the server for broadcast.
     * @param {object} [options]
     * @param {boolean|undefined} [options.volatile]  If undefined, volatile is inferred from the activity data.
     */
    broadcastActivity(activityData?: {
        /**
         * The ID of the scene that the user is viewing.
         */
        sceneId?: string | null;
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
        ruler?: RulerData | null;
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
    }, { volatile }?: {
        volatile?: boolean | undefined;
    }): void;
    /**
     * Get an Array of Macro Documents on this User's Hotbar by page
     * @param {number} page     The hotbar page number
     * @returns {Array<{slot: number, macro: Macro|null}>}
     */
    getHotbarMacros(page?: number): Array<{
        slot: number;
        macro: Macro | null;
    }>;
    /**
     * Update the set of Token targets for the user given an array of provided Token ids.
     * @param {string[]} targetIds      An array of Token ids which represents the new target set
     */
    updateTokenTargets(targetIds?: string[]): void;
    /** @inheritdoc  */
    _onUpdate(data: any, options: any, userId: any): any;
    /** @inheritdoc  */
    _onDelete(options: any, userId: any): void;
}
type PingData = {
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
type ActivityData = {
    /**
     * The ID of the scene that the user is viewing.
     */
    sceneId?: string | null;
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
    ruler?: RulerData | null;
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
};
