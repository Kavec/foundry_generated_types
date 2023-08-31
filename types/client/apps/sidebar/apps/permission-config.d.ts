/**
 * An application for configuring the permissions which are available to each User role.
 */
declare class PermissionConfig extends FormApplication {
    /** @override */
    static override get defaultOptions(): any;
    /** @override */
    override getData(options?: {}): Promise<{
        roles: {};
        permissions: any[];
    }>;
    /**
     * Prepare the permissions object used to render the configuration template
     * @param {object} current      The current permission configuration
     * @returns {object[]}          Permission data for sheet rendering
     * @protected
     */
    protected _getPermissions(current: object): object[];
    /**
     * Handle button click to reset default settings
     * @param {Event} event   The initial button click event
     * @protected
     */
    protected _onResetDefaults(event: Event): Promise<Application>;
    /** @override */
    override _onSubmit(event: any, options: any): Promise<any>;
    /** @override */
    override _updateObject(event: any, formData: any): Promise<void>;
}
