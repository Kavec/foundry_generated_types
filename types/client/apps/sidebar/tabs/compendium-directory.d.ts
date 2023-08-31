/**
 * A compendium of knowledge arcane and mystical!
 * Renders the sidebar directory of compendium packs
 * @extends {SidebarTab}
 * @mixes {DirectoryApplication}
 */
declare class CompendiumDirectory extends SidebarTab {
    /** @override */
    static override entryPartial: string;
    get activeFilters(): string[];
    /** @override */
    override entryType: string;
    /** @override */
    override _entryAlreadyExists(entry: any): any;
    /** @override */
    override _getEntryDragData(entryId: any): {
        type: string;
        id: any;
    };
    /** @override */
    override _entryIsSelf(entry: any, otherEntry: any): boolean;
    /** @override */
    override _sortRelative(entry: any, sortData: any): Promise<void>;
    /** @override */
    override activateListeners(html: any): void;
    /**
     * Display a menu of compendium types to filter by
     * @param {PointerEvent} event    The originating pointer event
     * @returns {Promise<void>}
     * @protected
     */
    protected _displayFilterCompendiumMenu(event: PointerEvent): Promise<void>;
    /**
     * Handle toggling a compendium type filter
     * @param {PointerEvent} event    The originating pointer event
     * @param {string|null} type      The compendium type to filter by. If null, clear all filters.
     * @protected
     */
    protected _onToggleCompendiumFilterType(event: PointerEvent, type: string | null): void;
    /**
     * The collection of Compendium Packs which are displayed in this Directory
     * @returns {CompendiumPacks<string, CompendiumCollection>}
     */
    get collection(): any;
    /**
     * Get the dropped Entry from the drop data
     * @param {object} data         The data being dropped
     * @returns {Promise<object>}   The dropped Entry
     * @protected
     */
    protected _getDroppedEntryFromData(data: object): Promise<object>;
    /** @override */
    override _createDroppedEntry(document: any, folder: any): Promise<void>;
    /** @override */
    override _getEntryName(entry: any): any;
    /** @override */
    override _getEntryId(entry: any): any;
    /** @override */
    override render(force?: boolean, options?: {}): Promise<Application>;
    /** @override */
    override _getEntryContextOptions(): ({
        name: string;
        icon: string;
        callback: (li: any) => any;
        condition?: undefined;
    } | {
        name: string;
        icon: string;
        condition: (header: any) => boolean;
        callback: (header: any) => void;
    })[];
    /** @override */
    override _onClickEntryName(event: any): Promise<void>;
    /** @override */
    override _onCreateEntry(event: any): Promise<any>;
    /**
     * Handle a Compendium Pack deletion request
     * @param {object} pack   The pack object requested for deletion
     * @protected
     */
    protected _onDeleteCompendium(pack: object): Promise<any>;
    #private;
}
