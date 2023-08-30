/**
 * The client-side Scene document which extends the common BaseScene model.
 * @extends documents.BaseItem
 * @mixes ClientDocumentMixin
 *
 * @see {@link Scenes}            The world-level collection of Scene documents
 * @see {@link SceneConfig}       The Scene configuration application
 */
declare class Scene {
    /**
     * @deprecated since v10
     * @ignore
     */
    static getDimensions(data: any): void;
    /**
     * Track the viewed position of each scene (while in memory only, not persisted)
     * When switching back to a previously viewed scene, we can automatically pan to the previous position.
     * @type {CanvasViewPosition}
     */
    _viewPosition: CanvasViewPosition;
    /**
     * Track whether the scene is the active view
     * @type {boolean}
     */
    _view: boolean;
    /**
     * Determine the canvas dimensions this Scene would occupy, if rendered
     * @type {object}
     */
    dimensions: object;
    /**
     * Provide a thumbnail image path used to represent this document.
     * @type {string}
     */
    get thumbnail(): string;
    /**
     * A convenience accessor for whether the Scene is currently viewed
     * @type {boolean}
     */
    get isView(): boolean;
    /**
     * Set this scene as currently active
     * @returns {Promise<Scene>}  A Promise which resolves to the current scene once it has been successfully activated
     */
    activate(): Promise<Scene>;
    /**
     * Set this scene as the current view
     * @returns {Promise<Scene>}
     */
    view(): Promise<Scene>;
    /** @override */
    override clone(createData?: {}, options?: {}): any;
    /** @override */
    override reset(): void;
    /** @inheritdoc */
    prepareBaseData(): void;
    playlistSound: any;
    foregroundElevation: any;
    /**
     * @typedef {object} SceneDimensions
     * @property {number} width        The width of the canvas.
     * @property {number} height       The height of the canvas.
     * @property {number} size         The grid size.
     * @property {Rectangle} rect      The canvas rectangle.
     * @property {number} sceneX       The X coordinate of the scene rectangle within the larger canvas.
     * @property {number} sceneY       The Y coordinate of the scene rectangle within the larger canvas.
     * @property {number} sceneWidth   The width of the scene.
     * @property {number} sceneHeight  The height of the scene.
     * @property {Rectangle} sceneRect The scene rectangle.
     * @property {number} distance     The number of distance units in a single grid space.
     * @property {number} ratio        The aspect ratio of the scene rectangle.
     * @property {number} maxR               The length of the longest line that can be drawn on the canvas.
     */
    /**
     * Get the Canvas dimensions which would be used to display this Scene.
     * Apply padding to enlarge the playable space and round to the nearest 2x grid size to ensure symmetry.
     * The rounding accomplishes that the padding buffer around the map always contains whole grid spaces.
     * @returns {SceneDimensions}
     */
    getDimensions(): {
        /**
         * The width of the canvas.
         */
        width: number;
        /**
         * The height of the canvas.
         */
        height: number;
        /**
         * The grid size.
         */
        size: number;
        /**
         * The canvas rectangle.
         */
        rect: Rectangle;
        /**
         * The X coordinate of the scene rectangle within the larger canvas.
         */
        sceneX: number;
        /**
         * The Y coordinate of the scene rectangle within the larger canvas.
         */
        sceneY: number;
        /**
         * The width of the scene.
         */
        sceneWidth: number;
        /**
         * The height of the scene.
         */
        sceneHeight: number;
        /**
         * The scene rectangle.
         */
        sceneRect: Rectangle;
        /**
         * The number of distance units in a single grid space.
         */
        distance: number;
        /**
         * The aspect ratio of the scene rectangle.
         */
        ratio: number;
        /**
         * The length of the longest line that can be drawn on the canvas.
         */
        maxR: number;
    };
    /** @inheritdoc */
    _onClickDocumentLink(event: any): any;
    /** @override */
    override _preCreate(data: any, options: any, user: any): Promise<any>;
    /** @override */
    override _onCreate(data: any, options: any, userId: any): void;
    /** @override */
    override _preUpdate(data: any, options: any, user: any): Promise<any>;
    /**
     * Handle repositioning of placed objects when the Scene dimensions change
     * @private
     */
    private _repositionObjects;
    /** @override */
    override _onUpdate(data: any, options: any, userId: any): any;
    thumb: any;
    /** @inheritdoc */
    _preDelete(options: any, user: any): Promise<void>;
    /** @override */
    override _onDelete(options: any, userId: any): void;
    /**
     * Handle Scene activation workflow if the active state is changed to true
     * @param {boolean} active    Is the scene now active?
     * @protected
     */
    protected _onActivate(active: boolean): any;
    /** @inheritdoc */
    _preCreateDescendantDocuments(parent: any, collection: any, data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _preUpdateDescendantDocuments(parent: any, collection: any, changes: any, options: any, userId: any): void;
    /** @inheritdoc */
    _preDeleteDescendantDocuments(parent: any, collection: any, ids: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onUpdateDescendantDocuments(parent: any, collection: any, documents: any, changes: any, options: any, userId: any): void;
    /** @inheritdoc */
    toCompendium(pack: any, options?: {}): any;
    /**
     * Create a 300px by 100px thumbnail image for this scene background
     * @param {object} [options]      Options which modify thumbnail creation
     * @param {string|null} [options.img]  A background image to use for thumbnail creation, otherwise the current scene
     *                          background is used.
     * @param {number} [options.width]        The desired thumbnail width. Default is 300px
     * @param {number} [options.height]       The desired thumbnail height. Default is 100px;
     * @param {string} [options.format]       Which image format should be used? image/png, image/jpg, or image/webp
     * @param {number} [options.quality]      What compression quality should be used for jpeg or webp, between 0 and 1
     * @returns {Promise<object>}      The created thumbnail data.
     */
    createThumbnail({ img, width, height, format, quality }?: {
        img?: string | null;
        width?: number;
        height?: number;
        format?: string;
        quality?: number;
    }): Promise<object>;
}
type SceneDimensions = {
    /**
     * The width of the canvas.
     */
    width: number;
    /**
     * The height of the canvas.
     */
    height: number;
    /**
     * The grid size.
     */
    size: number;
    /**
     * The canvas rectangle.
     */
    rect: Rectangle;
    /**
     * The X coordinate of the scene rectangle within the larger canvas.
     */
    sceneX: number;
    /**
     * The Y coordinate of the scene rectangle within the larger canvas.
     */
    sceneY: number;
    /**
     * The width of the scene.
     */
    sceneWidth: number;
    /**
     * The height of the scene.
     */
    sceneHeight: number;
    /**
     * The scene rectangle.
     */
    sceneRect: Rectangle;
    /**
     * The number of distance units in a single grid space.
     */
    distance: number;
    /**
     * The aspect ratio of the scene rectangle.
     */
    ratio: number;
    /**
     * The length of the longest line that can be drawn on the canvas.
     */
    maxR: number;
};
