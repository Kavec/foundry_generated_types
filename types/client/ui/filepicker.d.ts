/**
 * @typedef {ApplicationOptions} FilePickerOptions
 * @property {string} [type="any"]         A type of file to target, in "audio", "image", "video", "imagevideo",
 *                                         "folder", "font", "graphics", "text", or "any"
 * @property {string} [current]            The current file path being modified, if any
 * @property {string} [activeSource=data]  A current file source in "data", "public", or "s3"
 * @property {Function} [callback]         A callback function to trigger once a file has been selected
 * @property {boolean} [allowUpload=true]  A flag which permits explicitly disallowing upload, true by default
 * @property {HTMLElement} [field]         An HTML form field that the result of this selection is applied to
 * @property {HTMLButtonElement} [button]  An HTML button element which triggers the display of this picker
 * @property {Map<string, FavoriteFolder>} [favorites] The picker display mode in FilePicker.DISPLAY_MODES
 * @property {string} [displayMode]        The picker display mode in FilePicker.DISPLAY_MODES
 * @property {boolean} [tileSize=false]    Display the tile size configuration.
 * @property {string[]} [redirectToRoot]   Redirect to the root directory rather than starting in the source directory
 *                                         of one of these files.
 */
/**
 * The FilePicker application renders contents of the server-side public directory.
 * This app allows for navigating and uploading files to the public path.
 *
 * @param {FilePickerOptions} [options={}]  Options that configure the behavior of the FilePicker
 */
declare class FilePicker extends Application {
    /**
     * Record the last-browsed directory path so that re-opening a different FilePicker instance uses the same target
     * @type {string}
     */
    static LAST_BROWSED_DIRECTORY: string;
    /**
     * Record the last-configured tile size which can automatically be applied to new FilePicker instances
     * @type {number|null}
     */
    static LAST_TILE_SIZE: number | null;
    /**
     * Record the last-configured display mode so that re-opening a different FilePicker instance uses the same mode.
     * @type {string}
     */
    static LAST_DISPLAY_MODE: string;
    /**
     * Enumerate the allowed FilePicker display modes
     * @type {string[]}
     */
    static DISPLAY_MODES: string[];
    /**
     * Cache the names of S3 buckets which can be used
     * @type {Array|null}
     */
    static S3_BUCKETS: any[] | null;
    /**
     * Set favorite folders for quick access
     * @param {Map<string, FavoriteFolder>} favorites  An object of Favorite Folders
    */
    static set favorites(arg: string[]);
    /**
     * @typedef FavoriteFolder
     * @property {string} source        The source of the folder (e.g. "data", "public")
     * @property {string} path          The full path to the folder
     * @property {string} label         The label for the path
     */
    /**
     * Get favorite folders for quick access
     * @type {string[]}
     * @return {Map<string, FavoriteFolder>}
     */
    static get favorites(): string[];
    /**
     * Add the given path for the source to the favorites
     * @param {string} source     The source of the folder (e.g. "data", "public")
     * @param {string} path       The path to a folder
     */
    static setFavorite(source: string, path: string): Promise<any>;
    /**
     * Remove the given path from the favorites
     * @param {string} source     The source of the folder (e.g. "data", "public")
     * @param {string} path       The path to a folder
     */
    static removeFavorite(source: string, path: string): Promise<void>;
    /**
     * Test a URL to see if it matches a well known s3 key pattern
     * @param {string} url          An input URL to test
     * @returns {RegExpMatchArray|null}  A regular expression match
     */
    static matchS3URL(url: string): RegExpMatchArray | null;
    /**
     * Return the upload URL to which the FilePicker should post uploaded files
     * @type {string}
     */
    static get uploadURL(): string;
    /**
     * Browse files for a certain directory location
     * @param {string} source     The source location in which to browse. See FilePicker#sources for details
     * @param {string} target     The target within the source location
     * @param {object} options                Optional arguments
     * @param {string} [options.bucket]       A bucket within which to search if using the S3 source
     * @param {string[]} [options.extensions] An Array of file extensions to filter on
     * @param {boolean} [options.wildcard]    The requested dir represents a wildcard path
     *
     * @returns {Promise}          A Promise which resolves to the directories and files contained in the location
     */
    static browse(source: string, target: string, options?: {
        bucket?: string;
        extensions?: string[];
        wildcard?: boolean;
    }): Promise<any>;
    /**
     * Configure metadata settings regarding a certain file system path
     * @param {string} source     The source location in which to browse. See FilePicker#sources for details
     * @param {string} target     The target within the source location
     * @param {object} options    Optional arguments which modify the request
     * @returns {Promise<object>}
     */
    static configurePath(source: string, target: string, options?: object): Promise<object>;
    /**
     * Create a subdirectory within a given source. The requested subdirectory path must not already exist.
     * @param {string} source     The source location in which to browse. See FilePicker#sources for details
     * @param {string} target     The target within the source location
     * @param {object} options    Optional arguments which modify the request
     * @returns {Promise<object>}
     */
    static createDirectory(source: string, target: string, options?: object): Promise<object>;
    /**
     * General dispatcher method to submit file management commands to the server
     * @param {object} data         Request data dispatched to the server
     * @param {object} options      Options dispatched to the server
     * @returns {Promise<object>}   The server response
     * @private
     */
    private static _manageFiles;
    /**
     * Dispatch a POST request to the server containing a directory path and a file to upload
     * @param {string} source   The data source to which the file should be uploaded
     * @param {string} path     The destination path
     * @param {File} file       The File object to upload
     * @param {object} [body={}]  Additional file upload options sent in the POST body
     * @param {object} [options]  Additional options to configure how the method behaves
     * @param {boolean} [options.notify=true] Display a UI notification when the upload is processed
     * @returns {Promise<object>}  The response object
     */
    static upload(source: string, path: string, file: File, body?: object, { notify }?: {
        notify?: boolean;
    }): Promise<object>;
    /**
     * A convenience function that uploads a file to a given package's persistent /storage/ directory
     * @param {string} packageId                The id of the package to which the file should be uploaded. Only supports Systems and Modules.
     * @param {string} path                     The relative path in the package's storage directory the file should be uploaded to
     * @param {File} file                       The File object to upload
     * @param {object} [body={}]                Additional file upload options sent in the POST body
     * @param {object} [options]                Additional options to configure how the method behaves
     * @param {boolean} [options.notify=true]   Display a UI notification when the upload is processed
     * @returns {Promise<object>}               The response object
     */
    static uploadPersistent(packageId: string, path: string, file: File, body?: object, { notify }?: {
        notify?: boolean;
    }): Promise<object>;
    /**
     * Bind the file picker to a new target field.
     * Assumes the user will provide a HTMLButtonElement which has the data-target and data-type attributes
     * The data-target attribute should provide the name of the input field which should receive the selected file
     * The data-type attribute is a string in ["image", "audio"] which sets the file extensions which will be accepted
     *
     * @param {HTMLButtonElement} button     The button element
     */
    static fromButton(button: HTMLButtonElement): FilePicker;
    /**
     * @deprecated since v10
     * @ignore
     */
    static parseS3URL(key: any): {
        bucket: string;
        keyPrefix: string;
    };
    /**
     * The full requested path given by the user
     * @type {string}
     */
    request: string;
    /**
     * The file sources which are available for browsing
     * @type {object}
     */
    sources: object;
    /**
     * Track the active source tab which is being browsed
     * @type {string}
     */
    activeSource: string;
    /**
     * A callback function to trigger once a file has been selected
     * @type {Function}
     */
    callback: Function;
    /**
     * The latest set of results browsed from the server
     * @type {object}
     */
    results: object;
    /**
     * The general file type which controls the set of extensions which will be accepted
     * @type {string}
     */
    type: string;
    /**
     * The target HTML element this file picker is bound to
     * @type {HTMLElement}
     */
    field: HTMLElement;
    /**
     * A button which controls the display of the picker UI
     * @type {HTMLElement}
     */
    button: HTMLElement;
    /**
     * The display mode of the FilePicker UI
     * @type {string}
     */
    displayMode: string;
    /**
     * The current set of file extensions which are being filtered upon
     * @type {string[]}
     */
    extensions: string[];
    _loaded: boolean;
    /**
     * Given a current file path, determine the directory it belongs to
     * @param {string} target   The currently requested target path
     * @returns {string[]}      An array of the inferred source and target directory path
     */
    _inferCurrentDirectory(target: string): string[];
    /**
     * Get the valid file extensions for a given named file picker type
     * @param {string} type
     * @returns {string[]}
     * @private
     */
    private _getExtensions;
    /** @override */
    override get title(): any;
    /**
     * Return the source object for the currently active source
     * @type {object}
     */
    get source(): any;
    /**
     * Return the target directory for the currently active source
     * @type {string}
     */
    get target(): string;
    /**
     * Return a flag for whether the current user is able to upload file content
     * @type {boolean}
     */
    get canUpload(): boolean;
    /** @override */
    override getData(options?: {}): Promise<{
        bucket: any;
        canGoBack: boolean;
        canUpload: boolean;
        canSelect: boolean;
        cssClass: string;
        dirs: any;
        displayMode: string;
        extensions: string[];
        files: any;
        isS3: boolean;
        noResults: boolean;
        selected: string;
        source: any;
        sources: any;
        target: string;
        tileSize: any;
        user: User;
        submitText: string;
        favorites: string[];
    }>;
    /** @inheritdoc */
    setPosition(pos?: {}): void | {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
    };
    /**
     * Browse to a specific location for this FilePicker instance
     * @param {string} [target]   The target within the currently active source location.
     * @param {object} [options]  Browsing options
     */
    browse(target?: string, options?: object): Promise<any>;
    result: any;
    /** @inheritDoc */
    render(force: any, options: any): Application | this;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Handle a click event to change the display mode of the File Picker
     * @param {MouseEvent} event    The triggering click event
     * @private
     */
    private _onChangeDisplayMode;
    /** @override */
    override _onChangeTab(event: any, tabs: any, active: any): void;
    /** @override */
    override _canDragStart(selector: any): boolean;
    /** @override */
    override _canDragDrop(selector: any): boolean;
    /** @override */
    override _onDragStart(event: any): void;
    /** @override */
    override _onDrop(event: any): Promise<any>;
    /**
     * Handle user submission of the address bar to request an explicit target
     * @param {KeyboardEvent} event     The originating keydown event
     * @private
     */
    private _onRequestTarget;
    /**
     * Handle user interaction with the favorites
     * @param {MouseEvent} event     The originating click event
     * @private
     */
    private _onClickFavorite;
    /**
     * Handle requests from the IntersectionObserver to lazily load an image file
     * @param {...any} args
     * @private
     */
    private _onLazyLoadImages;
    /**
     * Handle file or folder selection within the file picker
     * @param {Event} event     The originating click event
     * @private
     */
    private _onPick;
    /**
     * Handle backwards navigation of the folder structure.
     * @param {PointerEvent} event    The triggering click event
     * @private
     */
    private _onClickDirectoryControl;
    /**
     * Present the user with a dialog to create a subdirectory within their currently browsed file storage location.
     * @param {object} source     The data source being browsed
     * @private
     */
    private _createDirectoryDialog;
    /**
     * Handle changes to the bucket selector
     * @param {Event} event     The S3 bucket select change event
     * @private
     */
    private _onChangeBucket;
    /**
     * Handle changes to the tile size.
     * @param {Event} event  The triggering event.
     * @protected
     */
    protected _onChangeTileSize(event: Event): void;
    /** @override */
    override _onSearchFilter(event: any, query: any, rgx: any, html: any): void;
    /** @inheritdoc */
    _onSubmit(ev: any): any;
    /**
     * Handle file upload
     * @param {Event} ev      The file upload event
     * @private
     */
    private _onUpload;
}
type FavoriteFolder = {
    /**
     * The source of the folder (e.g. "data", "public")
     */
    source: string;
    /**
     * The full path to the folder
     */
    path: string;
    /**
     * The label for the path
     */
    label: string;
};
type FilePickerOptions = ApplicationOptions;
