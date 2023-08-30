/**
 * @typedef {ApplicationOptions} FormApplicationOptions
 * @property {boolean} [closeOnSubmit=true]     Whether to automatically close the application when it's contained
 *                                              form is submitted.
 * @property {boolean} [submitOnChange=false]   Whether to automatically submit the contained HTML form when an input
 *                                              or select element is changed.
 * @property {boolean} [submitOnClose=false]    Whether to automatically submit the contained HTML form when the
 *                                              application window is manually closed.
 * @property {boolean} [editable=true]          Whether the application form is editable - if true, it's fields will
 *                                              be unlocked and the form can be submitted. If false, all form fields
 *                                              will be disabled and the form cannot be submitted.
 * @property {boolean} [sheetConfig=false]      Support configuration of the sheet type used for this application.
 */
/**
 * An abstract pattern for defining an Application responsible for updating some object using an HTML form
 *
 * A few critical assumptions:
 * 1) This application is used to only edit one object at a time
 * 2) The template used contains one (and only one) HTML form as it's outer-most element
 * 3) This abstract layer has no knowledge of what is being updated, so the implementation must define _updateObject
 *
 * @extends {Application}
 * @abstract
 * @interface
 *
 * @param {object} object                     Some object which is the target data structure to be updated by the form.
 * @param {FormApplicationOptions} [options]  Additional options which modify the rendering of the sheet.
 */
declare class FormApplication extends Application {
    constructor(object?: {}, options?: {});
    /**
     * The object target which we are using this form to modify
     * @type {*}
     */
    object: any;
    /**
     * A convenience reference to the form HTMLElement
     * @type {HTMLElement}
     */
    form: HTMLElement;
    /**
     * Keep track of any FilePicker instances which are associated with this form
     * The values of this Array are inner-objects with references to the FilePicker instances and other metadata
     * @type {FilePicker[]}
     */
    filepickers: FilePicker[];
    /**
     * Keep track of any mce editors which may be active as part of this form
     * The values of this object are inner-objects with references to the MCE editor and other metadata
     * @type {Object<string, object>}
     */
    editors: {
        [x: string]: object;
    };
    /**
     * Is the Form Application currently editable?
     * @type {boolean}
     */
    get isEditable(): boolean;
    /**
     * @inheritdoc
     * @returns {object|Promise<object>}
     */
    getData(options?: {}): object | Promise<object>;
    /** @inheritdoc */
    _render(force: any, options: any): Promise<void>;
    /** @inheritdoc */
    _renderInner(...args: any[]): Promise<JQueryStatic>;
    /** @inheritdoc */
    _activateCoreListeners(html: any): void;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * If the form is not editable, disable its input fields
     * @param {HTMLElement} form    The form HTML
     * @protected
     */
    protected _disableFields(form: HTMLElement): void;
    /**
     * Handle standard form submission steps
     * @param {Event} event               The submit event which triggered this handler
     * @param {object | null} [updateData]  Additional specific data keys/values which override or extend the contents of
     *                                    the parsed form. This can be used to update other flags or data fields at the
     *                                    same time as processing a form submission to avoid multiple database operations.
     * @param {boolean} [preventClose]    Override the standard behavior of whether to close the form on submit
     * @param {boolean} [preventRender]   Prevent the application from re-rendering as a result of form submission
     * @returns {Promise}                 A promise which resolves to the validated update data
     * @protected
     */
    protected _onSubmit(event: Event, { updateData, preventClose, preventRender }?: object | null): Promise<any>;
    _submitting: boolean;
    /**
     * Get an object of update data used to update the form's target object
     * @param {object} updateData     Additional data that should be merged with the form data
     * @returns {object}               The prepared update data
     * @protected
     */
    protected _getSubmitData(updateData?: object): object;
    /**
     * Handle changes to an input element, submitting the form if options.submitOnChange is true.
     * Do not preventDefault in this handler as other interactions on the form may also be occurring.
     * @param {Event} event  The initial change event
     * @protected
     */
    protected _onChangeInput(event: Event): Promise<any>;
    /**
     * Handle the change of a color picker input which enters it's chosen value into a related input field
     * @param {Event} event   The color picker change event
     * @protected
     */
    protected _onChangeColorPicker(event: Event): void;
    /**
     * Handle changes to a range type input by propagating those changes to the sibling range-value element
     * @param {Event} event  The initial change event
     * @protected
     */
    protected _onChangeRange(event: Event): void;
    /**
     * Additional handling which should trigger when a FilePicker contained within this FormApplication is submitted.
     * @param {string} selection          The target path which was selected
     * @param {FilePicker} filePicker     The FilePicker instance which was submitted
     * @protected
     */
    protected _onSelectFile(selection: string, filePicker: FilePicker): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param {Event} event       The initial triggering submission event
     * @param {object} formData   The object of validated form data with which to update the object
     * @returns {Promise}         A Promise which resolves once the update operation has completed
     * @abstract
     */
    _updateObject(event: Event, formData: object): Promise<any>;
    /**
     * Activate a named TinyMCE text editor
     * @param {string} name             The named data field which the editor modifies.
     * @param {object} options          Editor initialization options passed to {@link TextEditor.create}.
     * @param {string} initialContent   Initial text content for the editor area.
     * @returns {Promise<TinyMCE.Editor|ProseMirror.EditorView>}
     */
    activateEditor(name: string, options?: object, initialContent?: string): Promise<TinyMCE.Editor | ProseMirror.EditorView>;
    /**
     * Handle saving the content of a specific editor by name
     * @param {string} name           The named editor to save
     * @param {boolean} [remove]      Remove the editor after saving its content
     * @returns {Promise<void>}
     */
    saveEditor(name: string, { remove }?: boolean): Promise<void>;
    /**
     * Activate an editor instance present within the form
     * @param {HTMLElement} div  The element which contains the editor
     * @protected
     */
    protected _activateEditor(div: HTMLElement): void;
    /**
     * Configure ProseMirror plugins for this sheet.
     * @param {string} name                    The name of the editor.
     * @param {object} [options]               Additional options to configure the plugins.
     * @param {boolean} [options.remove=true]  Whether the editor should destroy itself on save.
     * @returns {object}
     * @protected
     */
    protected _configureProseMirrorPlugins(name: string, { remove }?: {
        remove?: boolean;
    }): object;
    /**
     * Activate a FilePicker instance present within the form
     * @param {PointerEvent} event    The mouse click event on a file picker activation button
     * @protected
     */
    protected _activateFilePicker(event: PointerEvent): Promise<any>;
    /**
     * Determine the configuration options used to initialize a FilePicker instance within this FormApplication.
     * Subclasses can extend this method to customize the behavior of pickers within their form.
     * @param {PointerEvent} event        The initiating mouse click event which opens the picker
     * @returns {object}                  Options passed to the FilePicker constructor
     * @protected
     */
    protected _getFilePickerOptions(event: PointerEvent): object;
    /** @inheritdoc */
    close(options?: {}): Promise<void>;
    /**
     * Submit the contents of a Form Application, processing its content as defined by the Application
     * @param {object} [options]        Options passed to the _onSubmit event handler
     * @returns {FormApplication}       Return a self-reference for convenient method chaining
     */
    submit(options?: object): FormApplication;
}
/**
 * @typedef {FormApplicationOptions} DocumentSheetOptions
 * @property {number} viewPermission                The default permissions required to view this Document sheet.
 * @property {HTMLSecretConfiguration[]} [secrets]  An array of {@link HTMLSecret} configuration objects.
 */
/**
 * Extend the FormApplication pattern to incorporate specific logic for viewing or editing Document instances.
 * See the FormApplication documentation for more complete description of this interface.
 *
 * @extends {FormApplication}
 * @abstract
 * @interface
 */
declare class DocumentSheet extends FormApplication {
    /**
     * @param {Document} object                    A Document instance which should be managed by this form.
     * @param {DocumentSheetOptions} [options={}]  Optional configuration parameters for how the form behaves.
     */
    constructor(object: Document, options?: DocumentSheetOptions);
    /**
     * The list of handlers for secret block functionality.
     * @type {HTMLSecret[]}
     * @protected
     */
    protected _secrets: HTMLSecret[];
    /**
     * A semantic convenience reference to the Document instance which is the target object for this form.
     * @type {ClientDocument}
     */
    get document(): ClientDocument;
    /** @inheritdoc */
    get isEditable(): any;
    /** @inheritdoc */
    getData(options?: {}): {
        cssClass: string;
        editable: any;
        document: ClientDocument;
        data: any;
        limited: any;
        options: any;
        owner: any;
        title: string;
    };
    /** @inheritdoc */
    activateEditor(name: any, options?: {}, initialContent?: string): Promise<any>;
    /** @inheritdoc */
    render(force?: boolean, options?: {}): any;
    /**
     * Create an ID link button in the document sheet header which displays the document ID and copies to clipboard
     * @param {jQuery} html
     * @protected
     */
    protected _createDocumentIdLink(html: JQueryStatic): void;
    /**
     * Test whether a certain User has permission to view this Document Sheet.
     * @param {User} user     The user requesting to render the sheet
     * @returns {boolean}     Does the User have permission to view this sheet?
     * @protected
     */
    protected _canUserView(user: User): boolean;
    /**
     * Create objects for managing the functionality of secret blocks within this Document's content.
     * @returns {HTMLSecret[]}
     * @protected
     */
    protected _createSecretHandlers(): HTMLSecret[];
    /**
     * Get the HTML content that a given secret block is embedded in.
     * @param {HTMLElement} secret  The secret block.
     * @returns {string}
     * @protected
     */
    protected _getSecretContent(secret: HTMLElement): string;
    /**
     * Update the HTML content that a given secret block is embedded in.
     * @param {HTMLElement} secret         The secret block.
     * @param {string} content             The new content.
     * @returns {Promise<ClientDocument>}  The updated Document.
     * @protected
     */
    protected _updateSecret(secret: HTMLElement, content: string): Promise<ClientDocument>;
    /**
     * Handle requests to configure the default sheet used by this Document
     * @param event
     * @private
     */
    private _onConfigureSheet;
    /**
     * Handle changing a Document's image.
     * @param {MouseEvent} event  The click event.
     * @returns {Promise}
     * @protected
     */
    protected _onEditImage(event: MouseEvent): Promise<any>;
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<any>;
}
type FormApplicationOptions = ApplicationOptions;
type DocumentSheetOptions = FormApplicationOptions;
