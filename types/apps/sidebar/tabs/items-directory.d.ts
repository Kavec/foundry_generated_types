/**
 * The sidebar directory which organizes and displays world-level Item documents.
 */
declare class ItemDirectory extends DocumentDirectory {
    /** @override */
    override _canDragDrop(selector: any): any;
    /** @override */
    override _getEntryContextOptions(): {
        name: string;
        icon: string;
        condition: (li: any) => boolean;
        callback: (li: any) => void;
    }[];
}
