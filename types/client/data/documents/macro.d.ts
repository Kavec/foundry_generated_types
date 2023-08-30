/**
 * The client-side Macro document which extends the common BaseMacro model.
 * @extends documents.BaseMacro
 * @mixes ClientDocumentMixin
 *
 * @see {@link Macros}                       The world-level collection of Macro documents
 * @see {@link MacroConfig}                  The Macro configuration application
 */
declare class Macro {
    /**
     * Is the current User the author of this macro?
     * @type {boolean}
     */
    get isAuthor(): boolean;
    /**
     * Test whether the current user is capable of executing a Macro script
     * @type {boolean}
     */
    get canExecute(): boolean;
    /**
     * Provide a thumbnail image path used to represent this document.
     * @type {string}
     */
    get thumbnail(): string;
    /**
     * Execute the Macro command.
     * @param {object} [scope={}]     Macro execution scope which is passed to script macros
     * @param {Actor} [scope.actor]     An Actor who is the protagonist of the executed action
     * @param {Token} [scope.token]     A Token which is the protagonist of the executed action
     * @returns {ChatMessage|*}       A created ChatMessage from chat macros or returned value from script macros
     */
    execute(scope?: {
        actor?: Actor;
        token?: Function;
    }): ChatMessage | any;
    /** @inheritdoc */
    _onClickDocumentLink(event: any): any;
    #private;
}
