/**
 * A common framework for displaying notifications to the client.
 * Submitted notifications are added to a queue, and up to 3 notifications are displayed at once.
 * Each notification is displayed for 5 seconds at which point further notifications are pulled from the queue.
 *
 * @extends {Application}
 *
 * @example Displaying Notification Messages
 * ```js
 * ui.notifications.info("This is an info message");
 * ui.notifications.warn("This is a warning message");
 * ui.notifications.error("This is an error message");
 * ui.notifications.info("This is a 4th message which will not be shown until the first info message is done");
 * ```
 */
declare class Notifications extends Application {
    /** @override */
    static override get defaultOptions(): any;
    constructor(options: any);
    /**
     * Submitted notifications which are queued for display
     * @type {object[]}
     */
    queue: object[];
    /**
     * Notifications which are currently displayed
     * @type {object[]}
     */
    active: object[];
    /**
     * Initialize the Notifications system by displaying any system-generated messages which were passed from the server.
     */
    initialize(): void;
    /** @override */
    override _renderInner(...args: any[]): Promise<JQuery<HTMLElement>>;
    /** @override */
    override _render(...args: any[]): Promise<void>;
    /**
     * @typedef {Object} NotifyOptions
     * @property {boolean} [permanent=false]      Should the notification be permanently displayed until dismissed
     * @property {boolean} [localize=false]       Whether to localize the message content before displaying it
     * @property {boolean} [console=true]         Whether to log the message to the console
     */
    /**
     * Push a new notification into the queue
     * @param {string} message                   The content of the notification message
     * @param {string} type                      The type of notification, "info", "warning", and "error" are supported
     * @param {NotifyOptions} [options={}]       Additional options which affect the notification
     * @returns {number}                         The ID of the notification
     */
    notify(message: string, type?: string, { localize, permanent, console }?: {
        /**
         * Should the notification be permanently displayed until dismissed
         */
        permanent?: boolean;
        /**
         * Whether to localize the message content before displaying it
         */
        localize?: boolean;
        /**
         * Whether to log the message to the console
         */
        console?: boolean;
    }): number;
    /**
     * Display a notification with the "info" type
     * @param {string} message           The content of the notification message
     * @param {NotifyOptions} options    Notification options passed to the notify function
     * @returns {number}                 The ID of the notification
     */
    info(message: string, options: {
        /**
         * Should the notification be permanently displayed until dismissed
         */
        permanent?: boolean;
        /**
         * Whether to localize the message content before displaying it
         */
        localize?: boolean;
        /**
         * Whether to log the message to the console
         */
        console?: boolean;
    }): number;
    /**
     * Display a notification with the "warning" type
     * @param {string} message           The content of the notification message
     * @param {NotifyOptions} options    Notification options passed to the notify function
     * @returns {number}                 The ID of the notification
     */
    warn(message: string, options: {
        /**
         * Should the notification be permanently displayed until dismissed
         */
        permanent?: boolean;
        /**
         * Whether to localize the message content before displaying it
         */
        localize?: boolean;
        /**
         * Whether to log the message to the console
         */
        console?: boolean;
    }): number;
    /**
     * Display a notification with the "error" type
     * @param {string} message           The content of the notification message
     * @param {NotifyOptions} options    Notification options passed to the notify function
     * @returns {number}                 The ID of the notification
     */
    error(message: string, options: {
        /**
         * Should the notification be permanently displayed until dismissed
         */
        permanent?: boolean;
        /**
         * Whether to localize the message content before displaying it
         */
        localize?: boolean;
        /**
         * Whether to log the message to the console
         */
        console?: boolean;
    }): number;
    /**
     * Remove the notification linked to the ID.
     * @param {number} id                 The ID of the notification
     */
    remove(id: number): void;
    /**
     * Clear all notifications.
     */
    clear(): void;
    /**
     * Retrieve a pending notification from the queue and display it
     * @protected
     * @returns {void}
     */
    protected fetch(): void;
    #private;
}
type NotifyOptions = {
    /**
     * Should the notification be permanently displayed until dismissed
     */
    permanent?: boolean;
    /**
     * Whether to localize the message content before displaying it
     */
    localize?: boolean;
    /**
     * Whether to log the message to the console
     */
    console?: boolean;
};
