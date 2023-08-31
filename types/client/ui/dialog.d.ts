/**
 * @typedef {ApplicationOptions} DialogOptions
 * @property {boolean} [jQuery=true]  Whether to provide jQuery objects to callback functions (if true) or plain
 *                                    HTMLElement instances (if false). This is currently true by default but in the
 *                                    future will become false by default.
 */
/**
 * @typedef {Object} DialogButton
 * @property {string} icon                  A Font Awesome icon for the button
 * @property {string} label                 The label for the button
 * @property {boolean} disabled             Whether the button is disabled
 * @property {function(JQuery<HTMLElement>)} [callback]  A callback function that fires when the button is clicked
 */
/**
 * @typedef {object} DialogData
 * @property {string} title                 The window title displayed in the dialog header
 * @property {string} content               HTML content for the dialog form
 * @property {Object<DialogButton>} buttons The buttons which are displayed as action choices for the dialog
 * @property {string} [default]             The name of the default button which should be triggered on Enter keypress
 * @property {function(JQuery<HTMLElement>)} [render]    A callback function invoked when the dialog is rendered
 * @property {function(JQuery<HTMLElement>)} [close]     Common callback operations to perform when the dialog is closed
 */
/**
 * Create a dialog window displaying a title, a message, and a set of buttons which trigger callback functions.
 * @param {DialogData} data          An object of dialog data which configures how the modal window is rendered
 * @param {DialogOptions} [options]  Dialog rendering options, see {@link Application}.
 *
 * @example Constructing a custom dialog instance
 * ```js
 * let d = new Dialog({
 *  title: "Test Dialog",
 *  content: "<p>You must choose either Option 1, or Option 2</p>",
 *  buttons: {
 *   one: {
 *    icon: '<i class="fas fa-check"></i>',
 *    label: "Option One",
 *    callback: () => console.log("Chose One")
 *   },
 *   two: {
 *    icon: '<i class="fas fa-times"></i>',
 *    label: "Option Two",
 *    callback: () => console.log("Chose Two")
 *   }
 *  },
 *  default: "two",
 *  render: html => console.log("Register interactivity in the rendered dialog"),
 *  close: html => console.log("This always is logged no matter which option is chosen")
 * });
 * d.render(true);
 * ```
 */
declare class Dialog extends Application {
    /**
     * A helper factory method to create simple confirmation dialog windows which consist of simple yes/no prompts.
     * If you require more flexibility, a custom Dialog instance is preferred.
     *
     * @param {DialogData} config                   Confirmation dialog configuration
     * @param {Function} [config.yes]               Callback function upon yes
     * @param {Function} [config.no]                Callback function upon no
     * @param {boolean} [config.defaultYes=true]    Make "yes" the default choice?
     * @param {boolean} [config.rejectClose=false]  Reject the Promise if the Dialog is closed without making a choice.
     * @param {DialogOptions} [config.options={}]   Additional rendering options passed to the Dialog
     *
     * @returns {Promise<any>}                      A promise which resolves once the user makes a choice or closes the
     *                                              window.
     *
     * @example Prompt the user with a yes or no question
     * ```js
     * let d = Dialog.confirm({
     *  title: "A Yes or No Question",
     *  content: "<p>Choose wisely.</p>",
     *  yes: () => console.log("You chose ... wisely"),
     *  no: () => console.log("You chose ... poorly"),
     *  defaultYes: false
     * });
     * ```
     */
    static confirm({ title, content, yes, no, render, defaultYes, rejectClose, options }?: DialogData): Promise<any>;
    /**
     * A helper factory method to display a basic "prompt" style Dialog with a single button
     * @param {DialogData} config                  Dialog configuration options
     * @param {Function} [config.callback]         A callback function to fire when the button is clicked
     * @param {boolean} [config.rejectClose=true]  Reject the promise if the dialog is closed without confirming the
     *                                             choice, otherwise resolve as null
     * @param {DialogOptions} [config.options]     Additional dialog options
     * @returns {Promise<any>}                     The returned value from the provided callback function, if any
     */
    static prompt({ title, content, label, callback, render, rejectClose, options }?: DialogData): Promise<any>;
    /**
     * Wrap the Dialog with an enclosing Promise which resolves or rejects when the client makes a choice.
     * @param {DialogData} [data]        Data passed to the Dialog constructor.
     * @param {DialogOptions} [options]  Options passed to the Dialog constructor.
     * @param {object} [renderOptions]   Options passed to the Dialog render call.
     * @returns {Promise<any>}           A Promise that resolves to the chosen result.
     */
    static wait(data?: DialogData, options?: DialogOptions, renderOptions?: object): Promise<any>;
    constructor(data: any, options: any);
    data: any;
    /** @inheritdoc */
    get title(): any;
    /** @inheritdoc */
    getData(options?: {}): {
        content: any;
        buttons: {};
    };
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Handle a left-mouse click on one of the dialog choice buttons
     * @param {MouseEvent} event    The left-mouse click event
     * @protected
     */
    protected _onClickButton(event: MouseEvent): void;
    /**
     * Handle a keydown event while the dialog is active
     * @param {KeyboardEvent} event   The keydown event
     * @protected
     */
    protected _onKeyDown(event: KeyboardEvent): void | Promise<void>;
    /**
     * Submit the Dialog by selecting one of its buttons
     * @param {Object} button         The configuration of the chosen button
     * @param {PointerEvent} event    The originating click event
     * @protected
     */
    protected submit(button: any, event: PointerEvent): void;
    /** @inheritdoc */
    close(options?: {}): Promise<void>;
    #private;
}
type DialogOptions = ApplicationOptions;
type DialogButton = {
    /**
     * A Font Awesome icon for the button
     */
    icon: string;
    /**
     * The label for the button
     */
    label: string;
    /**
     * Whether the button is disabled
     */
    disabled: boolean;
    /**
     * A callback function that fires when the button is clicked
     */
    callback?: (arg0: JQuery<HTMLElement>) => any;
};
type DialogData = {
    /**
     * The window title displayed in the dialog header
     */
    title: string;
    /**
     * HTML content for the dialog form
     */
    content: string;
    /**
     * The buttons which are displayed as action choices for the dialog
     */
    buttons: any;
    /**
     * The name of the default button which should be triggered on Enter keypress
     */
    default?: string;
    /**
     * A callback function invoked when the dialog is rendered
     */
    render?: (arg0: JQuery<HTMLElement>) => any;
    /**
     * Common callback operations to perform when the dialog is closed
     */
    close?: (arg0: JQuery<HTMLElement>) => any;
};
