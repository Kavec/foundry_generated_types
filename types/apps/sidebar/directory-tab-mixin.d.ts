/**
 * @typedef {Object} DirectoryMixinEntry
 * @property {string} id                The unique id of the entry
 * @property {Folder|string} folder     The folder id or folder object to which this entry belongs
 * @property {string} [img]             An image path to display for the entry
 * @property {string} [sort]            A numeric sort value which orders this entry relative to others
 * @interface
 */
/**
 * Augment an Application instance with functionality that supports rendering as a directory of foldered entries.
 * @param {typeof Application} Base           The base Application class definition
 * @returns {typeof DirectoryApplication}     The decorated DirectoryApplication class definition
 */
declare function DirectoryApplicationMixin(Base: typeof Application): any;
type DirectoryMixinEntry = {
    /**
     * The unique id of the entry
     */
    id: string;
    /**
     * The folder id or folder object to which this entry belongs
     */
    folder: Folder | string;
    /**
     * An image path to display for the entry
     */
    img?: string;
    /**
     * A numeric sort value which orders this entry relative to others
     */
    sort?: string;
};
