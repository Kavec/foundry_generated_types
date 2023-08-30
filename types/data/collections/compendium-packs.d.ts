declare class CompendiumPacks {
    /** @override */
    static override _sortAlphabetical(a: any, b: any): any;
    /**
     * Get a Collection of Folders which contain Compendium Packs
     * @returns {Collection<Folder>}
     */
    get folders(): Collection<Folder>;
    /** @override */
    override _getVisibleTreeContents(): any;
}
