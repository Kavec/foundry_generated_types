/**
 * The Application responsible for displaying and editing a single RollTable document.
 * @param {RollTable} table                 The RollTable document being configured
 * @param {DocumentSheetOptions} [options]  Additional application configuration options
 */
declare class RollTableConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    getData(options?: {}): Promise<any>;
    /**
     * Handle creating a TableResult in the RollTable document
     * @param {MouseEvent} event        The originating mouse event
     * @param {object} [resultData]     An optional object of result data to use
     * @returns {Promise}
     * @protected
     */
    protected _onCreateResult(event: MouseEvent, resultData?: object): Promise<any>;
    /**
     * Submit the entire form when a table result type is changed, in case there are other active changes
     * @param {Event} event
     * @protected
     */
    protected _onChangeResultType(event: Event): Promise<any>;
    /**
     * Handle deleting a TableResult from the RollTable document
     * @param {MouseEvent} event        The originating click event
     * @returns {Promise<TableResult>}   The deleted TableResult document
     * @protected
     */
    protected _onDeleteResult(event: MouseEvent): Promise<TableResult>;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
    /**
     * Handle changing the actor profile image by opening a FilePicker
     * @param {Event} event
     * @protected
     */
    protected _onEditImage(event: Event): Promise<any>;
    /**
     * Handle a button click to re-normalize dice result ranges across all RollTable results
     * @param {Event} event
     * @protected
     */
    protected _onNormalizeResults(event: Event): Promise<any>;
    /**
     * Handle toggling the drawn status of the result in the table
     * @param {Event} event
     * @protected
     */
    protected _onLockResult(event: Event): any;
    /**
     * Reset the Table to it's original composition with all options unlocked
     * @param {Event} event
     * @protected
     */
    protected _onResetTable(event: Event): any;
    /**
     * Handle drawing a result from the RollTable
     * @param {Event} event
     * @protected
     */
    protected _onRollTable(event: Event): Promise<void>;
    /**
     * Configure the update object workflow for the Roll Table configuration sheet
     * Additional logic is needed here to reconstruct the results array from the editable fields on the sheet
     * @param {Event} event            The form submission event
     * @param {Object} formData        The validated FormData translated into an Object for submission
     * @returns {Promise}
     * @protected
     */
    protected _updateObject(event: Event, formData: any): Promise<any>;
    /**
     * Display a roulette style animation when a Roll Table result is drawn from the sheet
     * @param {TableResult[]} results     An Array of drawn table results to highlight
     * @returns {Promise}                  A Promise which resolves once the animation is complete
     * @protected
     */
    protected _animateRoll(results: TableResult[]): Promise<any>;
    /**
     * Animate a "roulette" through the table until arriving at the final loop and a drawn result
     * @param {HTMLOListElement} ol     The list element being iterated
     * @param {Set<string>} drawnIds    The result IDs which have already been drawn
     * @param {number} nLoops           The number of times to loop through the animation
     * @param {number} animTime         The desired animation time in milliseconds
     * @param {number} animOffset       The desired pixel offset of the result within the list
     * @returns {Promise}               A Promise that resolves once the animation is complete
     * @protected
     */
    protected _animateRoulette(ol: HTMLOListElement, drawnIds: Set<string>, nLoops: number, animTime: number, animOffset: number): Promise<any>;
    /**
     * Display a flashing animation on the selected result to emphasize the draw
     * @param {HTMLElement} item      The HTML &lt;li> item of the winning result
     * @returns {Promise}              A Promise that resolves once the animation is complete
     * @protected
     */
    protected _flashResult(item: HTMLElement): Promise<any>;
}
