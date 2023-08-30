/**
 * The client-side Folder document which extends the common BaseFolder model.
 * @extends documents.BaseFolder
 * @mixes ClientDocumentMixin
 *
 * @see {@link Folders}                     The world-level collection of Folder documents
 * @see {@link FolderConfig}                The Folder configuration application
 */
declare class Folder {
    /**
     * Present a Dialog form to create a new Folder.
     * @see ClientDocumentMixin.createDialog
     * @param {object} data              Initial data with which to populate the creation form
     * @param {object} [context={}]      Additional context options or dialog positioning options
     * @param {object} [context.options={}] Dialog options
     * @param {string} [context.options.pack=""] The name of a Compendium pack to which the folder should be created in
     * @returns {Promise<Folder|null>}   A Promise which resolves to the created Folder, or null if the dialog was
     *                                   closed.
     */
    static createDialog(data?: object, options?: {}): Promise<Folder | null>;
    /**
     * The depth of this folder in its sidebar tree
     * @type {number}
     */
    depth: number;
    /**
     * An array of other Folders which are the displayed children of this one. This differs from the results of
     * {@link Folder.getSubfolders} because reports the subset of child folders which  are displayed to the current User
     * in the UI.
     * @type {Folder[]}
     */
    children: Folder[];
    /**
     * Return whether the folder is displayed in the sidebar to the current User.
     * @type {boolean}
     */
    displayed: boolean;
    set contents(arg: any[]);
    /**
     * The array of the Document instances which are contained within this Folder,
     * unless it's a Folder inside a Compendium pack, in which case it's the array
     * of objects inside the index of the pack that are contained in this Folder.
     * @type {(ClientDocument|object)[]}
     */
    get contents(): any[];
    /**
     * The reference to the Document type which is contained within this Folder.
     * @type {Function}
     */
    get documentClass(): Function;
    /**
     * The reference to the WorldCollection instance which provides Documents to this Folder,
     * unless it's a Folder inside a Compendium pack, in which case it's the index of the pack.
     * @type {WorldCollection|Collection}
     */
    get documentCollection(): any;
    /**
     * Return whether the folder is currently expanded within the sidebar interface.
     * @type {boolean}
     */
    get expanded(): boolean;
    /**
     * Return the list of ancestors of this folder, starting with the parent.
     * @type {Folder[]}
     */
    get ancestors(): Folder[];
    /** @override */
    override _preCreate(data: any, options: any, user: any): Promise<void>;
    /**
     * Export all Documents contained in this Folder to a given Compendium pack.
     * Optionally update existing Documents within the Pack by name, otherwise append all new entries.
     * @param {CompendiumCollection} pack       A Compendium pack to which the documents will be exported
     * @param {object} [options]                Additional options which customize how content is exported.
     *                                          See {@link ClientDocumentMixin#toCompendium}
     * @param {boolean} [options.updateByName=false]    Update existing entries in the Compendium pack, matching by name
     * @param {boolean} [options.keepId=false]          Retain the original _id attribute when updating an entity
     * @param {boolean} [options.keepFolders=false]     Retain the existing Folder structure
     * @param {string} [options.folder]                 A target folder id to which the documents will be exported
     * @returns {Promise<CompendiumCollection>}  The updated Compendium Collection instance
     */
    exportToCompendium(pack: CompendiumCollection, options?: {
        updateByName?: boolean;
        keepId?: boolean;
        keepFolders?: boolean;
        folder?: string;
    }): Promise<CompendiumCollection>;
    /**
     * Provide a dialog form that allows for exporting the contents of a Folder into an eligible Compendium pack.
     * @param {string} pack       A pack ID to set as the default choice in the select input
     * @param {object} options    Additional options passed to the Dialog.prompt method
     * @returns {Promise<void>}   A Promise which resolves or rejects once the dialog has been submitted or closed
     */
    exportDialog(pack: string, options?: object): Promise<void>;
    /**
     * Get the Folder documents which are sub-folders of the current folder, either direct children or recursively.
     * @param {boolean} [recursive=false] Identify child folders recursively, if false only direct children are returned
     * @returns {Folder[]}  An array of Folder documents which are subfolders of this one
     */
    getSubfolders(recursive?: boolean): Folder[];
    /**
     * Get the Folder documents which are parent folders of the current folder or any if its parents.
     * @returns {Folder[]}    An array of Folder documents which are parent folders of this one
     */
    getParentFolders(): Folder[];
    /**
     * @deprecated since v10
     * @ignore
     */
    get content(): any[];
    #private;
}
