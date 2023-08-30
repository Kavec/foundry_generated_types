/**
 * A singleton Tour Collection class responsible for registering and activating Tours, accessible as game.tours
 * @see {Game#tours}
 * @extends Map
 */
declare class Tours extends Map<any, any> {
    constructor();
    /**
     * Register a new Tour
     * @param {string} namespace          The namespace of the Tour
     * @param {string} id                 The machine-readable id of the Tour
     * @param {Tour} tour                 The constructed Tour
     * @returns {void}
     */
    register(namespace: string, id: string, tour: Tour): void;
    /**
     * @inheritDoc
     * @override
     */
    override set(key: any, tour: any): this;
}
