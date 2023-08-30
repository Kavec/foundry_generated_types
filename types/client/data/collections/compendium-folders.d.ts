/**
 * A Collection of Compendium Folders
 * @extends {DocumentCollection}
 * @type {DocumentCollection}
 */
declare class CompendiumFolderCollection extends DocumentCollection {
    constructor(pack: any, data?: any[]);
    /**
     * The CompendiumPack instance which contains this CompendiumFolderCollection
     * @type {CompendiumPack}
     */
    pack: CompendiumPack;
    /** @inheritdoc */
    get documentName(): string;
}
