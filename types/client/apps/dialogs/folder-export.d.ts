/**
 * A Dialog subclass which allows the user to configure export options for a Folder
 * @extends {Dialog}
 */
declare class FolderExport extends Dialog {
    /**
     * Handle changing the selected pack by updating the dropdown of folders available.
     * @param {Event} event   The input change event
     */
    _onPackChange(event: Event): void;
}
