/**
 * Document Sheet Configuration Application
 */
declare class DocumentSheetConfig extends FormApplication {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * An array of pending sheet assignments which are submitted before other elements of the framework are ready.
     * @type {object[]}
     * @protected
     */
    protected static "__#34@#pending": object[];
    /**
     * Marshal information on the available sheet classes for a given document type and sub-type, and format it for
     * display.
     * @param {string} documentName  The Document type.
     * @param {string} subType       The Document sub-type.
     * @returns {{sheetClasses: object, defaultClasses: object, defaultClass: string}}
     */
    static getSheetClassesForSubType(documentName: string, subType: string): {
        sheetClasses: object;
        defaultClasses: object;
        defaultClass: string;
    };
    /**
     * Initialize the configured Sheet preferences for Documents which support dynamic Sheet assignment
     * Create the configuration structure for supported documents
     * Process any pending sheet registrations
     * Update the default values from settings data
     */
    static initializeSheets(): void;
    static _getDocumentTypes(cls: any, types?: any[]): any;
    /**
     * Register a sheet class as a candidate which can be used to display documents of a given type
     * @param {typeof ClientDocument} documentClass  The Document class for which to register a new Sheet option
     * @param {string} scope                         Provide a unique namespace scope for this sheet
     * @param {typeof DocumentSheet} sheetClass      A defined Application class used to render the sheet
     * @param {object} [config]                      Additional options used for sheet registration
     * @param {string|Function} [config.label]       A human-readable label for the sheet name, which will be localized
     * @param {string[]} [config.types]              An array of document types for which this sheet should be used
     * @param {boolean} [config.makeDefault=false]   Whether to make this sheet the default for provided types
     * @param {boolean} [config.canBeDefault=true]   Whether this sheet is available to be selected as a default sheet for
     *                                               all Documents of that type.
     * @param {boolean} [config.canConfigure=true]   Whether this sheet appears in the sheet configuration UI for users.
     */
    static registerSheet(documentClass: any, scope: string, sheetClass: typeof DocumentSheet, { label, types, makeDefault, canBeDefault, canConfigure }?: {
        label?: string | Function;
        types?: string[];
        makeDefault?: boolean;
        canBeDefault?: boolean;
        canConfigure?: boolean;
    }): void;
    /**
     * Perform the sheet registration.
     * @param {object} config                               Configuration for how the sheet should be registered
     * @param {typeof ClientDocument} config.documentClass  The Document class being registered
     * @param {string} config.id                            The sheet ID being registered
     * @param {string} config.label                         The human-readable sheet label
     * @param {typeof DocumentSheet} config.sheetClass      The sheet class definition being registered
     * @param {object[]} config.types                       An array of types for which this sheet is added
     * @param {boolean} config.makeDefault                  Make this sheet the default for provided types?
     * @param {boolean} config.canBeDefault                 Whether this sheet is available to be selected as a default
     *                                                      sheet for all Documents of that type.
     * @param {boolean} config.canConfigure                 Whether the sheet appears in the sheet configuration UI for
     *                                                      users.
     */
    static "__#34@#registerSheet"({ documentClass, id, label, sheetClass, types, makeDefault, canBeDefault, canConfigure }?: {
        documentClass: typeof ClientDocument;
        id: string;
        label: string;
        sheetClass: typeof DocumentSheet;
        types: object[];
        makeDefault: boolean;
        canBeDefault: boolean;
        canConfigure: boolean;
    }): void;
    /**
     * Unregister a sheet class, removing it from the list of available Applications to use for a Document type
     * @param {typeof ClientDocument} documentClass  The Document class for which to register a new Sheet option
     * @param {string} scope                         Provide a unique namespace scope for this sheet
     * @param {typeof DocumentSheet} sheetClass      A defined DocumentSheet subclass used to render the sheet
     * @param {object} [config]
     * @param {object[]} [config.types]              An Array of types for which this sheet should be removed
     */
    static unregisterSheet(documentClass: any, scope: string, sheetClass: typeof DocumentSheet, { types }?: {
        types?: object[];
    }): void;
    /**
     * Perform the sheet de-registration.
     * @param {object} config                               Configuration for how the sheet should be un-registered
     * @param {typeof ClientDocument} config.documentClass  The Document class being unregistered
     * @param {string} config.id                            The sheet ID being unregistered
     * @param {object[]} config.types                       An array of types for which this sheet is removed
     */
    static "__#34@#unregisterSheet"({ documentClass, id, types }?: {
        documentClass: typeof ClientDocument;
        id: string;
        types: object[];
    }): void;
    /**
     * Update the current default Sheets using a new core world setting.
     * @param {object} setting
     */
    static updateDefaultSheets(setting?: object): void;
    /**
     * Initialize default sheet configurations for all document types.
     * @protected
     */
    protected static _registerDefaultSheets(): void;
    /** @inheritDoc */
    getData(options?: {}): {
        isGM: any;
        object: any;
        options: any;
        sheetClass: any;
        blankLabel: any;
        sheetClasses: any;
        defaultClass: any;
        defaultClasses: any;
    };
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<any>;
}
