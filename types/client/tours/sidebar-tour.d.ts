/**
 * A Tour subclass for the Sidebar Tour
 */
declare class SidebarTour extends Tour {
    /** @override */
    override start(): Promise<void>;
    _updateSidebarTab(): Promise<void>;
}
