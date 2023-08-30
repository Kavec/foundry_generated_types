/**
 * The client-side FogExploration document which extends the common BaseFogExploration model.
 * @extends documents.BaseFogExploration
 * @mixes ClientDocumentMixin
 */
declare class FogExploration {
    /**
     * Obtain the fog of war exploration progress for a specific Scene and User.
     * @param {object} [query]        Parameters for which FogExploration document is retrieved
     * @param {string} [query.scene]    A certain Scene ID
     * @param {string} [query.user]     A certain User ID
     * @param {object} [options={}]   Additional options passed to DatabaseBackend#get
     * @returns {Promise<FogExploration|null>}
     */
    static get({ scene, user }?: {
        scene?: string;
        user?: string;
    }, options?: object): Promise<FogExploration | null>;
    /**
     * Transform the explored base64 data into a PIXI.Texture object
     * @returns {PIXI.Texture|null}
     */
    getTexture(): PIXI.Texture | null;
    /** @override */
    override _onCreate(data: any, options: any, userId: any): void;
    /** @override */
    override _onUpdate(data: any, options: any, userId: any): void;
    /** @override */
    override _onDelete(options: any, userId: any): void;
    /**
     * @deprecated since v11
     * @ignore
     */
    explore(source: any, force?: boolean): boolean;
}
