/**
 * A helper class to manage requesting clipboard permissions and provide common functionality for working with the
 * clipboard.
 */
declare class ClipboardHelper {
    /**
     * Copies plain text to the clipboard in a cross-browser compatible way.
     * @param {string} text  The text to copy.
     * @returns {Promise<void>}
     */
    copyPlainText(text: string): Promise<void>;
}
