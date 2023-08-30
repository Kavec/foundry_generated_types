/**
 * Game Invitation Links Reference
 * @extends {Application}
 */
declare class InvitationLinks extends Application {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    getData(options?: {}): Promise<any>;
    /** @inheritdoc */
    activateListeners(html: any): void;
}
