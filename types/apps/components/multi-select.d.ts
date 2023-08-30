/**
 * An abstract base class designed to standardize the behavior for a multi-select UI component.
 * Multi-select components return an array of values as part of form submission.
 * Different implementations may provide different experiences around how inputs are presented to the user.
 * @abstract
 * @internal
 * @category - Custom HTML Elements
 * @fires change
 */
declare class AbstractMultiSelectElement extends HTMLElement {
    /**
     * The "change" event is emitted when the values of the multi-select element are changed.
     * @param {Event} event     A "change" event passed to event listeners.
     * @event change
     */
    static onChange: any;
    /**
     * Predefined <option> and <optgroup> elements which were defined in the original HTML.
     * @type {(HTMLOptionElement|HTMLOptgroupElement)[]}
     * @protected
     */
    protected _options: (HTMLOptionElement | HTMLOptgroupElement)[];
    /**
     * An object which maps option values to displayed labels.
     * @type {Object<string, string>}
     * @protected
     */
    protected _choices: {
        [x: string]: string;
    };
    /**
     * An array of identifiers which have been chosen.
     * @type {Set<string>}
     * @protected
     */
    protected _chosen: Set<string>;
    /**
     * The form this custom element belongs to, if any.
     * @type {HTMLFormElement|null}
     */
    form: HTMLFormElement | null;
    /**
     * Preserve existing <option> and <optgroup> elements which are defined in the original HTML.
     * @protected
     */
    protected _initializeOptions(): void;
    set name(arg: string);
    /**
     * The name of the multi-select input element.
     * @type {string}
     */
    get name(): string;
    set value(arg: string[]);
    /**
     * The values of the multi-select input are expressed as an array of strings.
     * @type {string[]}
     */
    get value(): string[];
    /**
     * Activate the custom element when it is attached to the DOM.
     * @inheritDoc
     */
    connectedCallback(): void;
    /**
     * Deactivate the custom element when it is detached from the DOM.
     * @inheritDoc
     */
    disconnectedCallback(): void;
    /**
     * Mark a choice as selected.
     * @param {string} value      The value to add to the chosen set
     */
    select(value: string): void;
    /**
     * Mark a choice as un-selected.
     * @param {string} value      The value to delete from the chosen set
     */
    unselect(value: string): void;
    /**
     * Create the HTML elements that should be included in this custom element.
     * Elements are returned as an array of ordered children.
     * @returns {HTMLElement[]}
     * @protected
     */
    protected _buildElements(): HTMLElement[];
    /**
     * Refresh the active state of the custom element by reflecting changes to the _chosen set.
     * @protected
     */
    protected _refresh(): void;
    /**
     * Activate event listeners which add dynamic behavior to the custom element.
     * @protected
     */
    protected _activateListeners(): void;
    #private;
}
/**
 * Provide a multi-select workflow using a select element as the input mechanism.
 * @internal
 * @category - Custom HTML Elements
 *
 * @example Multi-Select HTML Markup
 * ```html
 * <multi-select name="select-many-things">
 *   <optgroup label="Basic Options">
 *     <option value="foo">Foo</option>
 *     <option value="bar">Bar</option>
 *     <option value="baz">Baz</option>
 *   </optgroup>
 *   <optgroup label="Advanced Options">
 *    <option value="fizz">Fizz</option>
 *     <option value="buzz">Buzz</option>
 *   </optgroup>
 * </multi-select>
 * ```
 */
declare class HTMLMultiSelectElement extends AbstractMultiSelectElement {
    /** @override */
    override _buildElements(): (HTMLDivElement | HTMLSelectElement)[];
    #private;
}
/**
 * Provide a multi-select workflow as a grid of input checkbox elements.
 * @internal
 * @category - Custom HTML Elements
 *
 * @example Multi-Checkbox HTML Markup
 * ```html
 * <multi-checkbox name="check-many-boxes">
 *   <optgroup label="Basic Options">
 *     <option value="foo">Foo</option>
 *     <option value="bar">Bar</option>
 *     <option value="baz">Baz</option>
 *   </optgroup>
 *   <optgroup label="Advanced Options">
 *    <option value="fizz">Fizz</option>
 *     <option value="buzz">Buzz</option>
 *   </optgroup>
 * </multi-checkbox>
 * ```
 */
declare class HTMLMultiCheckboxElement extends AbstractMultiSelectElement {
    /** @override */
    override _buildElements(): (HTMLFieldSetElement | HTMLLabelElement)[];
    #private;
}
