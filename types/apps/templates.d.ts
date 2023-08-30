/**
 * Get a template from the server by fetch request and caching the retrieved result
 * @param {string} path           The web-accessible HTML template URL
 * @param {string} [id]           An ID to register the partial with.
 * @returns {Promise<Function>}   A Promise which resolves to the compiled Handlebars template
 */
declare function getTemplate(path: string, id?: string): Promise<Function>;
/**
 * Load and cache a set of templates by providing an Array of paths
 * @param {string[]|Object<string>} paths  An array of template file paths to load, or an object of Handlebars partial
 *                                         IDs to paths.
 * @returns {Promise<Function[]>}
 *
 * @example Loading a list of templates.
 * ```js
 * await loadTemplates(["templates/apps/foo.html", "templates/apps/bar.html"]);
 * ```
 * ```hbs
 * <!-- Include a pre-loaded template as a partial -->
 * {{> "templates/apps/foo.html" }}
 * ```
 *
 * @example Loading an object of templates.
 * ```js
 * await loadTemplates({
 *   foo: "templates/apps/foo.html",
 *   bar: "templates/apps/bar.html"
 * });
 * ```
 * ```hbs
 * <!-- Include a pre-loaded template as a partial -->
 * {{> foo }}
 * ```
 */
declare function loadTemplates(paths: string[] | any): Promise<Function[]>;
/**
 * Get and render a template using provided data and handle the returned HTML
 * Support asynchronous file template file loading with a client-side caching layer
 *
 * Allow resolution of prototype methods and properties since this all occurs within the safety of the client.
 * @see {@link https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access}
 *
 * @param {string} path             The file path to the target HTML template
 * @param {Object} data             A data object against which to compile the template
 *
 * @returns {Promise<string>}        Returns the compiled and rendered template as a string
 */
declare function renderTemplate(path: string, data: any): Promise<string>;
/**
 * A collection of Handlebars template helpers which can be used within HTML templates.
 */
declare class HandlebarsHelpers {
    /**
     * For checkboxes, if the value of the checkbox is true, add the "checked" property, otherwise add nothing.
     * @returns {string}
     *
     * @example
     * ```hbs
     * <label>My Checkbox</label>
     * <input type="checkbox" name="myCheckbox" {{checked myCheckbox}}>
     * ```
     */
    static checked(value: any): string;
    /**
     * For use in form inputs. If the supplied value is truthy, add the "disabled" property, otherwise add nothing.
     * @returns {string}
     *
     * @example
     * ```hbs
     * <button type="submit" {{disabled myValue}}>Submit</button>
     * ```
     */
    static disabled(value: any): string;
    /**
     * Concatenate a number of string terms into a single string.
     * This is useful for passing arguments with variable names.
     * @param {string[]} values             The values to concatenate
     * @returns {Handlebars.SafeString}
     *
     * @example Concatenate several string parts to create a dynamic variable
     * ```hbs
     * {{filePicker target=(concat "faces." i ".img") type="image"}}
     * ```
     */
    static concat(...values: string[]): Handlebars.SafeString;
    /**
     * Render a pair of inputs for selecting a color.
     * @param {object} options              Helper options
     * @param {string} [options.name]       The name of the field to create
     * @param {string} [options.value]      The current color value
     * @param {string} [options.default]    A default color string if a value is not provided
     * @returns {Handlebars.SafeString}
     *
     * @example
     * ```hbs
     * {{colorPicker name="myColor" value=myColor default="#000000"}}
     * ```
     */
    static colorPicker(options: {
        name?: string;
        value?: string;
        default?: string;
    }): Handlebars.SafeString;
    /**
     * @typedef {object} TextEditorOptions
     * @property {string} [target]             The named target data element
     * @property {boolean} [button]            Include a button used to activate the editor later?
     * @property {string} [class]              A specific CSS class to add to the editor container
     * @property {boolean} [editable=true]     Is the text editor area currently editable?
     * @property {string} [engine=tinymce]     The editor engine to use, see {@link TextEditor.create}.
     * @property {boolean} [collaborate=false] Whether to turn on collaborative editing features for ProseMirror.
     *
     * The below options are deprecated since v10 and should be avoided.
     * @property {boolean} [owner]             Is the current user an owner of the data?
     * @property {boolean} [documents=true]    Replace dynamic document links?
     * @property {Object|Function} [rollData]  The data object providing context for inline rolls
     * @property {string} [content=""]         The original HTML content as a string
     */
    /**
     * Construct an editor element for rich text editing with TinyMCE or ProseMirror.
     * @param {[string, TextEditorOptions]} args  The content to display and edit, followed by handlebars options.
     * @returns {Handlebars.SafeString}
     *
     * @example
     * ```hbs
     * {{editor world.description target="description" button=false engine="prosemirror" collaborate=false}}
     * ```
     */
    static editor(args_0: string, args_1: {
        /**
         * The named target data element
         */
        target?: string;
        /**
         * Include a button used to activate the editor later?
         */
        button?: boolean;
        /**
         * A specific CSS class to add to the editor container
         */
        class?: string;
        /**
         * Is the text editor area currently editable?
         */
        editable?: boolean;
        /**
         * The editor engine to use, see {@link TextEditor.create }.
         */
        engine?: string;
        /**
         * Whether to turn on collaborative editing features for ProseMirror.
         *
         * The below options are deprecated since v10 and should be avoided.
         */
        collaborate?: boolean;
        /**
         * Is the current user an owner of the data?
         */
        owner?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * The data object providing context for inline rolls
         */
        rollData?: any | Function;
        /**
         * The original HTML content as a string
         */
        content?: string;
    }): Handlebars.SafeString;
    /**
     * Render a file-picker button linked to an `<input>` field
     * @param {object} options              Helper options
     * @param {string} [options.type]       The type of FilePicker instance to display
     * @param {string} [options.target]     The field name in the target data
     * @returns {Handlebars.SafeString|string}
     *
     * @example
     * ```hbs
     * {{filePicker type="image" target="img"}}
     * ```
     */
    static filePicker(options: {
        type?: string;
        target?: string;
    }): Handlebars.SafeString | string;
    /**
     * A ternary expression that allows inserting A or B depending on the value of C.
     * @param {boolean} criteria    The test criteria
     * @param {string} ifTrue       The string to output if true
     * @param {string} ifFalse      The string to output if false
     * @returns {string}            The ternary result
     *
     * @example Ternary if-then template usage
     * ```hbs
     * {{ifThen true "It is true" "It is false"}}
     * ```
     */
    static ifThen(criteria: boolean, ifTrue: string, ifFalse: string): string;
    /**
     * Translate a provided string key by using the loaded dictionary of localization strings.
     * @returns {string}
     *
     * @example Translate a provided localization string, optionally including formatting parameters
     * ```hbs
     * <label>{{localize "ACTOR.Create"}}</label> <!-- "Create Actor" -->
     * <label>{{localize "CHAT.InvalidCommand" command=foo}}</label> <!-- "foo is not a valid chat message command." -->
     * ```
     */
    static localize(value: any, options: any): string;
    /**
     * A string formatting helper to display a number with a certain fixed number of decimals and an explicit sign.
     * @param {number} value              A numeric value to format
     * @param {object} options            Additional options which customize the resulting format
     * @param {number} [options.decimals=0]   The number of decimal places to include in the resulting string
     * @param {boolean} [options.sign=false]  Whether to include an explicit "+" sign for positive numbers   *
     * @returns {Handlebars.SafeString}   The formatted string to be included in a template
     *
     * @example
     * ```hbs
     * {{formatNumber 5.5}} <!-- 5.5 -->
     * {{formatNumber 5.5 decimals=2}} <!-- 5.50 -->
     * {{formatNumber 5.5 decimals=2 sign=true}} <!-- +5.50 -->
    *  ```
     */
    static numberFormat(value: number, options: {
        decimals?: number;
        sign?: boolean;
    }): Handlebars.SafeString;
    /**
     * Render a form input field of type number with value appropriately rounded to step size.
     * @returns {Handlebars.SafeString}
     *
     * @example
     * ```hbs
     * {{numberInput value name="numberField" step=1 min=0 max=10}}
     * ```
     */
    static numberInput(value: any, options: any): Handlebars.SafeString;
    /**
     * A helper to create a set of radio checkbox input elements in a named set.
     * The provided keys are the possible radio values while the provided values are human readable labels.
     *
     * @param {string} name         The radio checkbox field name
     * @param {object} choices      A mapping of radio checkbox values to human readable labels
     * @param {object} options      Options which customize the radio boxes creation
     * @param {string} options.checked    Which key is currently checked?
     * @param {boolean} options.localize  Pass each label through string localization?
     * @returns {Handlebars.SafeString}
     *
     * @example The provided input data
     * ```js
     * let groupName = "importantChoice";
     * let choices = {a: "Choice A", b: "Choice B"};
     * let chosen = "a";
     * ```
     *
     * @example The template HTML structure
     * ```hbs
     * <div class="form-group">
     *   <label>Radio Group Label</label>
     *   <div class="form-fields">
     *     {{radioBoxes groupName choices checked=chosen localize=true}}
     *   </div>
     * </div>
     * ```
     */
    static radioBoxes(name: string, choices: object, options: {
        checked: string;
        localize: boolean;
    }): Handlebars.SafeString;
    /**
     * Render a pair of inputs for selecting a value in a range.
     * @param {object} options            Helper options
     * @param {string} [options.name]     The name of the field to create
     * @param {number} [options.value]    The current range value
     * @param {number} [options.min]      The minimum allowed value
     * @param {number} [options.max]      The maximum allowed value
     * @param {number} [options.step]     The allowed step size
     * @returns {Handlebars.SafeString}
     *
     * @example
     * ```hbs
     * {{rangePicker name="foo" value=bar min=0 max=10 step=1}}
     * ```
     */
    static rangePicker(options: {
        name?: string;
        value?: number;
        min?: number;
        max?: number;
        step?: number;
    }): Handlebars.SafeString;
    /**
    * A helper to assign an `<option>` within a `<select>` block as selected based on its value
    * Escape the string as handlebars would, then escape any regexp characters in it
    * @param {string} value    The value of the option
    * @returns {Handlebars.SafeString}
     *
     * @example
     * ```hbs
     * <select>
     * {{#select selected}}
     *   <option value="a">Choice A</option>
     *   <option value="b">Choice B</option>
     * {{/select}}
     * </select>
    */
    static select(selected: any, options: any): Handlebars.SafeString;
    /**
     * A helper to create a set of &lt;option> elements in a &lt;select> block based on a provided dictionary.
     * The provided keys are the option values while the provided values are human readable labels.
     * This helper supports both single-select as well as multi-select input fields.
     *
     * @param {object|Array<object>>} choices      A mapping of radio checkbox values to human-readable labels
     * @param {object} options                     Helper options
     * @param {string|string[]} [options.selected] Which key or array of keys that are currently selected?
     * @param {boolean} [options.localize=false]   Pass each label through string localization?
     * @param {string} [options.blank]             Add a blank option as the first option with this label
     * @param {boolean} [options.sort]             Sort the options by their label after localization
     * @param {string} [options.nameAttr]          Look up a property in the choice object values to use as the option value
     * @param {string} [options.labelAttr]         Look up a property in the choice object values to use as the option label
     * @param {boolean} [options.inverted=false]   Use the choice object value as the option value, and the key as the label
     *                                             instead of vice-versa
     * @returns {Handlebars.SafeString}
     *
     * @example The provided input data
     * ```js
     * let choices = {a: "Choice A", b: "Choice B"};
     * let value = "a";
     * ```
     * The template HTML structure
     * ```hbs
     * <select name="importantChoice">
     *   {{selectOptions choices selected=value localize=true}}
     * </select>
     * ```
     * The resulting HTML
     * ```html
     * <select name="importantChoice">
     *   <option value="a" selected>Choice A</option>
     *   <option value="b">Choice B</option>
     * </select>
     * ```
     *
     * @example Using inverted choices
     * ```js
     * let choices = {"Choice A": "a", "Choice B": "b"};
     * let value = "a";
     * ```
     *  The template HTML structure
     *  ```hbs
     * <select name="importantChoice">
     *   {{selectOptions choices selected=value inverted=true}}
     * </select>
     * ```
     *
     * @example Using nameAttr and labelAttr with objects
     * ```js
     * let choices = {foo: {key: "a", label: "Choice A"}, bar: {key: "b", label: "Choice B"}};
     * let value = "b";
     * ```
     * The template HTML structure
     * ```hbs
     * <select name="importantChoice">
     *   {{selectOptions choices selected=value nameAttr="key" labelAttr="label"}}
     * </select>
     * ```
     *
     * @example Using nameAttr and labelAttr with arrays
     * ```js
     * let choices = [{key: "a", label: "Choice A"}, {key: "b", label: "Choice B"}];
     * let value = "b";
     * ```
     * The template HTML structure
     * ```hbs
     * <select name="importantChoice">
     *   {{selectOptions choices selected=value nameAttr="key" labelAttr="label"}}
     * </select>
     * ```
     */
    static selectOptions(choices: any, options: {
        selected?: string | string[];
        localize?: boolean;
        blank?: string;
        sort?: boolean;
        nameAttr?: string;
        labelAttr?: string;
        inverted?: boolean;
    }): Handlebars.SafeString;
}
type TextEditorOptions = {
    /**
     * The named target data element
     */
    target?: string;
    /**
     * Include a button used to activate the editor later?
     */
    button?: boolean;
    /**
     * A specific CSS class to add to the editor container
     */
    class?: string;
    /**
     * Is the text editor area currently editable?
     */
    editable?: boolean;
    /**
     * The editor engine to use, see {@link TextEditor.create }.
     */
    engine?: string;
    /**
     * Whether to turn on collaborative editing features for ProseMirror.
     *
     * The below options are deprecated since v10 and should be avoided.
     */
    collaborate?: boolean;
    /**
     * Is the current user an owner of the data?
     */
    owner?: boolean;
    /**
     * Replace dynamic document links?
     */
    documents?: boolean;
    /**
     * The data object providing context for inline rolls
     */
    rollData?: any | Function;
    /**
     * The original HTML content as a string
     */
    content?: string;
};
