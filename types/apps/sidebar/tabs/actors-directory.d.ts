/**
 * The sidebar directory which organizes and displays world-level Actor documents.
 */
declare class ActorDirectory extends DocumentDirectory {
    constructor(...args: any[]);
    /** @override */
    override _canDragStart(selector: any): any;
    /** @override */
    override _onDragStart(event: any): boolean;
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
