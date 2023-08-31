/**
 * The Application responsible for configuring a single User document.
 * @extends {DocumentSheet}
 *
 * @param {User} user                       The User document being configured.
 * @param {DocumentSheetOptions} [options]  Additional rendering options which modify the behavior of the form.
 */
declare class UserConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    getData(options?: {}): {
        user: any;
        actors: any;
        options: any;
    };
    /**
     * Handle changing the user avatar image by opening a FilePicker
     * @protected
     */
    protected _onEditAvatar(event: any): Promise<any>;
}
