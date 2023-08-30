/**
 * The client-side Tile document which extends the common BaseTile document model.
 * @extends documents.BaseTile
 * @mixes ClientDocumentMixin
 *
 * @see {@link Scene}                     The Scene document type which contains Tile documents
 * @see {@link TileConfig}                The Tile configuration application
 */
declare class TileDocument {
    set elevation(arg: number);
    /**
     * Define an elevation property on the Tile Document which in the future will become a core part of its data schema.
     * @type {number}
     */
    get elevation(): number;
    /**
     * Define a sort property on the Tile Document which in the future will become a core part of its data schema.
     * @type {number}
     */
    get sort(): number;
    /** @inheritdoc */
    prepareDerivedData(): void;
    x: any;
    y: any;
    #private;
}
