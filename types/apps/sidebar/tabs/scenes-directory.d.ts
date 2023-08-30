/**
 * The sidebar directory which organizes and displays world-level Scene documents.
 * @extends {DocumentDirectory}
 */
declare class SceneDirectory extends DocumentDirectory {
    /** @inheritdoc */
    _render(force: any, options: any): Promise<void | this>;
}
