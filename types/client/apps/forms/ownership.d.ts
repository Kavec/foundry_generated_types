/**
 * A generic application for configuring permissions for various Document types
 * @extends {DocumentSheet}
 */
declare class DocumentOwnershipConfig extends DocumentSheet {
    /** @override */
    static override get defaultOptions(): any;
    /** @override */
    override getData(options?: {}): {
        currentDefault: any;
        instructions: any;
        defaultLevels: any;
        playerLevels: {
            level: number;
            label: any;
        }[];
        isFolder: boolean;
        users: any;
    };
}
/**
 * @deprecated since v10
 * @ignore
 */
declare class PermissionControl extends DocumentOwnershipConfig {
    constructor(...args: any[]);
}
