/**
 * @typedef {FormApplicationOptions} ImagePopoutOptions
 * @property {string} [caption]           Caption text to display below the image.
 * @property {string|null} [uuid=null]    The UUID of some related {@link Document}.
 * @property {boolean} [showTitle]        Force showing or hiding the title.
 */
/**
 * An Image Popout Application which features a single image in a lightbox style frame.
 * Furthermore, this application allows for sharing the display of an image with other connected players.
 * @param {string} src                    The image URL.
 * @param {ImagePopoutOptions} [options]  Application configuration options.
 *
 * @example Creating an Image Popout
 * ```js
 * // Construct the Application instance
 * const ip = new ImagePopout("path/to/image.jpg", {
 *   title: "My Featured Image",
 *   uuid: game.actors.getName("My Hero").uuid
 * });
 *
 * // Display the image popout
 * ip.render(true);
 *
 * // Share the image with other connected players
 * ip.share();
 * ```
 */
declare class ImagePopout extends FormApplication {
    /**
     * Determine the correct position and dimensions for the displayed image
     * @param {string} img  The image URL.
     * @returns {Object}    The positioning object which should be used for rendering
     */
    static getPosition(img: string): any;
    /**
     * Determine the Image dimensions given a certain path
     * @param {string} path  The image source.
     * @returns {Promise<[number, number]>}
     */
    static getImageSize(path: string): Promise<[number, number]>;
    /**
     * Determine the dimensions of the given video file.
     * @param {string} src  The URL to the video.
     * @returns {Promise<[number, number]>}
     */
    static getVideoSize(src: string): Promise<[number, number]>;
    /**
     * Handle a received request to display an image.
     * @param {ShareImageConfig} config  The image configuration data.
     * @returns {ImagePopout}
     * @internal
     */
    static _handleShareImage({ image, title, caption, uuid, showTitle }?: {
        /**
         * The image URL to share.
         */
        image: string;
        /**
         * The image title.
         */
        title: string;
        /**
         * The UUID of a Document related to the image, used to determine permission to see
         *         the image title.
         */
        uuid?: string;
        /**
         * If this is provided, the permissions of the related Document will be ignored and
         *   the title will be shown based on this parameter.
         */
        showTitle?: boolean;
        /**
         * A list of user IDs to show the image to.
         */
        users?: string[];
    }): ImagePopout;
    /**
     * Whether the application should display video content.
     * @type {boolean}
     */
    get isVideo(): boolean;
    /** @override */
    override getData(options?: {}): Promise<{
        image: any;
        options: any;
        title: string;
        caption: any;
        showTitle: boolean;
        isVideo: boolean;
    }>;
    /**
     * Test whether the title of the image popout should be visible to the user
     * @returns {boolean}
     */
    isTitleVisible(): boolean;
    /**
     * Provide a reference to the Document referenced by this popout, if one exists
     * @returns {Promise<ClientDocument>}
     */
    getRelatedObject(): Promise<ClientDocument>;
    /** @override */
    override _render(...args: any[]): Promise<void>;
    /**
     * @typedef {object} ShareImageConfig
     * @property {string} image         The image URL to share.
     * @property {string} title         The image title.
     * @property {string} [uuid]        The UUID of a Document related to the image, used to determine permission to see
     *                                  the image title.
     * @property {boolean} [showTitle]  If this is provided, the permissions of the related Document will be ignored and
     *                                  the title will be shown based on this parameter.
     * @property {string[]} [users]     A list of user IDs to show the image to.
     */
    /**
     * Share the displayed image with other connected Users
     * @param {ShareImageConfig} [options]
     */
    shareImage(options?: {
        /**
         * The image URL to share.
         */
        image: string;
        /**
         * The image title.
         */
        title: string;
        /**
         * The UUID of a Document related to the image, used to determine permission to see
         *         the image title.
         */
        uuid?: string;
        /**
         * If this is provided, the permissions of the related Document will be ignored and
         *   the title will be shown based on this parameter.
         */
        showTitle?: boolean;
        /**
         * A list of user IDs to show the image to.
         */
        users?: string[];
    }): void;
    #private;
}
type ShareImageConfig = {
    /**
     * The image URL to share.
     */
    image: string;
    /**
     * The image title.
     */
    title: string;
    /**
     * The UUID of a Document related to the image, used to determine permission to see
     *         the image title.
     */
    uuid?: string;
    /**
     * If this is provided, the permissions of the related Document will be ignored and
     *   the title will be shown based on this parameter.
     */
    showTitle?: boolean;
    /**
     * A list of user IDs to show the image to.
     */
    users?: string[];
};
type ImagePopoutOptions = FormApplicationOptions;
