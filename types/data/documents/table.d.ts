/**
 * @typedef {Object} RollTableDraw      An object containing the executed Roll and the produced results
 * @property {Roll} roll                The Dice roll which generated the draw
 * @property {TableResult[]} results    An array of drawn TableResult documents
 */
/**
 * The client-side RollTable document which extends the common BaseRollTable model.
 * @extends documents.BaseRollTable
 * @mixes ClientDocumentMixin
 *
 * @see {@link RollTables}                      The world-level collection of RollTable documents
 * @see {@link TableResult}                     The embedded TableResult document
 * @see {@link RollTableConfig}                 The RollTable configuration application
 */
declare class RollTable {
    /**
     * Create a new RollTable document using all of the Documents from a specific Folder as new results.
     * @param {Folder} folder       The Folder document from which to create a roll table
     * @param {object} options      Additional options passed to the RollTable.create method
     * @returns {Promise<RollTable>}
     */
    static fromFolder(folder: Folder, options?: object): Promise<RollTable>;
    /**
     * Provide a thumbnail image path used to represent this document.
     * @type {string}
     */
    get thumbnail(): string;
    /**
     * Display a result drawn from a RollTable in the Chat Log along.
     * Optionally also display the Roll which produced the result and configure aspects of the displayed messages.
     *
     * @param {TableResult[]} results         An Array of one or more TableResult Documents which were drawn and should
     *                                        be displayed.
     * @param {object} [options={}]           Additional options which modify message creation
     * @param {Roll} [options.roll]                 An optional Roll instance which produced the drawn results
     * @param {Object} [options.messageData={}]     Additional data which customizes the created messages
     * @param {Object} [options.messageOptions={}]  Additional options which customize the created messages
     */
    toMessage(results: TableResult[], { roll, messageData, messageOptions }?: {
        roll?: Roll;
        messageData?: any;
        messageOptions?: any;
    }): Promise<any>;
    /**
     * Draw a result from the RollTable based on the table formula or a provided Roll instance
     * @param {object} [options={}]         Optional arguments which customize the draw behavior
     * @param {Roll} [options.roll]                   An existing Roll instance to use for drawing from the table
     * @param {boolean} [options.recursive=true]      Allow drawing recursively from inner RollTable results
     * @param {TableResult[]} [options.results]       One or more table results which have been drawn
     * @param {boolean} [options.displayChat=true]    Whether to automatically display the results in chat
     * @param {string} [options.rollMode]             The chat roll mode to use when displaying the result
     * @returns {Promise<{RollTableDraw}>}  A Promise which resolves to an object containing the executed roll and the
     *                                      produced results.
     */
    draw({ roll, recursive, results, displayChat, rollMode }?: {
        roll?: Roll;
        recursive?: boolean;
        results?: TableResult[];
        displayChat?: boolean;
        rollMode?: string;
    }): Promise<{
        RollTableDraw;
    }>;
    /**
     * Draw multiple results from a RollTable, constructing a final synthetic Roll as a dice pool of inner rolls.
     * @param {number} number               The number of results to draw
     * @param {object} [options={}]         Optional arguments which customize the draw
     * @param {Roll} [options.roll]                   An optional pre-configured Roll instance which defines the dice
     *                                                roll to use
     * @param {boolean} [options.recursive=true]      Allow drawing recursively from inner RollTable results
     * @param {boolean} [options.displayChat=true]    Automatically display the drawn results in chat? Default is true
     * @param {string} [options.rollMode]             Customize the roll mode used to display the drawn results
     * @returns {Promise<{RollTableDraw}>}  The drawn results
     */
    drawMany(number: number, { roll, recursive, displayChat, rollMode }?: {
        roll?: Roll;
        recursive?: boolean;
        displayChat?: boolean;
        rollMode?: string;
    }): Promise<{
        RollTableDraw;
    }>;
    /**
     * Normalize the probabilities of rolling each item in the RollTable based on their assigned weights
     * @returns {Promise<RollTable>}
     */
    normalize(): Promise<RollTable>;
    /**
     * Reset the state of the RollTable to return any drawn items to the table
     * @returns {Promise<RollTable>}
     */
    resetResults(): Promise<RollTable>;
    /**
     * Evaluate a RollTable by rolling its formula and retrieving a drawn result.
     *
     * Note that this function only performs the roll and identifies the result, the RollTable#draw function should be
     * called to formalize the draw from the table.
     *
     * @param {object} [options={}]       Options which modify rolling behavior
     * @param {Roll} [options.roll]                   An alternative dice Roll to use instead of the default table formula
     * @param {boolean} [options.recursive=true]   If a RollTable document is drawn as a result, recursively roll it
     * @param {number} [options._depth]            An internal flag used to track recursion depth
     * @returns {Promise<RollTableDraw>}  The Roll and results drawn by that Roll
     *
     * @example Draw results using the default table formula
     * ```js
     * const defaultResults = await table.roll();
     * ```
     *
     * @example Draw results using a custom roll formula
     * ```js
     * const roll = new Roll("1d20 + @abilities.wis.mod", actor.getRollData());
     * const customResults = await table.roll({roll});
     * ```
     */
    roll({ roll, recursive, _depth }?: {
        roll?: Roll;
        recursive?: boolean;
        _depth?: number;
    }): Promise<RollTableDraw>;
    /**
     * Get an Array of valid results for a given rolled total
     * @param {number} value    The rolled value
     * @returns {TableResult[]} An Array of results
     */
    getResultsForRoll(value: number): TableResult[];
    /** @inheritdoc */
    _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void;
    /** @override */
    override toCompendium(pack: any, options?: {}): any;
}
/**
 * An object containing the executed Roll and the produced results
 */
type RollTableDraw = {
    /**
     * The Dice roll which generated the draw
     */
    roll: Roll;
    /**
     * An array of drawn TableResult documents
     */
    results: TableResult[];
};
