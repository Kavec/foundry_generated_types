/**
 * Runtime configuration settings for Foundry VTT which exposes a large number of variables which determine how
 * aspects of the software behaves.
 *
 * Unlike the CONST analog which is frozen and immutable, the CONFIG object may be updated during the course of a
 * session or modified by system and module developers to adjust how the application behaves.
 *
 * @type {object}
 */
declare const CONFIG: object;
/**
 * Configured roll terms and the classes they map to.
 */
type terms = typeof DiceTerm;
type polygonBackends = typeof PointSourcePolygon;
/**
 * Available Weather Effects implementations
 */
type WeatherAmbienceConfiguration = any;
/**
 * Available Weather Effects implementations
 */
type WeatherEffectConfiguration = any;
type FontDefinition = FontFaceDescriptors;
type FontFamilyDefinition = {
    /**
     * Whether the font is available in the rich text editor. This will also enable it
     * for notes and drawings.
     */
    editor: boolean;
    /**
     * Individual font face definitions for this font family. If this is empty, the
     * font family may only be loaded from the client's OS-installed fonts.
     */
    fonts: FontFaceDescriptors[];
};
/**
 * A mapping of status effect IDs which provide some additional mechanical integration.
 */
type specialStatusEffects = string;
/**
 * Configuration for the AmbientLight embedded document type and its representation on the game Canvas
 */
type AmbientLight = Function;
/**
 * Configuration for the AmbientSound embedded document type and its representation on the game Canvas
 */
type AmbientSound = Function;
/**
 * Configuration for the Combatant embedded document type within a Combat document
 */
type Combatant = Function;
/**
 * Configuration for the Drawing embedded document type and its representation on the game Canvas
 */
type Drawing = Function;
/**
 * Configuration for the MeasuredTemplate embedded document type and its representation on the game Canvas
 */
type MeasuredTemplate = Function;
/**
 * Configuration for the Note embedded document type and its representation on the game Canvas
 */
type Note = Function;
/**
 * Configuration for the Tile embedded document type and its representation on the game Canvas
 */
type Tile = Function;
/**
 * Configuration for the Token embedded document type and its representation on the game Canvas
 */
type Token = Function;
type WallDoorSound = {
    /**
     * A localization string label
     */
    label: string;
    /**
     * A sound path when the door is closed
     */
    close: string;
    /**
     * A sound path when the door becomes locked
     */
    lock: string;
    /**
     * A sound path when opening the door
     */
    open: string;
    /**
     * A sound path when attempting to open a locked door
     */
    test: string;
    /**
     * A sound path when the door becomes unlocked
     */
    unlock: string;
};
type TextEditorEnricher = (match: RegExpMatchArray, options?: {
    /**
     * Include unrevealed secret tags in the final HTML? If false, unrevealed
     *       secret blocks will be removed.
     */
    secrets?: boolean;
    /**
     * Replace dynamic document links?
     */
    documents?: boolean;
    /**
     * Replace hyperlink content?
     */
    links?: boolean;
    /**
     * Replace inline dice rolls?
     */
    rolls?: boolean;
    /**
     * The data object providing context for inline rolls, or a function that
     *    produces it.
     */
    rollData?: any;
    /**
     * Perform the operation asynchronously returning a Promise
     */
    async?: boolean;
    /**
     * A document to resolve relative UUIDs against.
     */
    relativeTo?: ClientDocument;
}) => Promise<HTMLElement | null>;
type TextEditorEnricherConfig = {
    /**
     * The string pattern to match. Must be flagged as global.
     */
    pattern: RegExp;
    /**
     * The function that will be called on each match. It is expected that this
     * returns an HTML element to be inserted into the final enriched content.
     */
    enricher: (match: RegExpMatchArray, options?: {
        /**
         * Include unrevealed secret tags in the final HTML? If false, unrevealed
         *       secret blocks will be removed.
         */
        secrets?: boolean;
        /**
         * Replace dynamic document links?
         */
        documents?: boolean;
        /**
         * Replace hyperlink content?
         */
        links?: boolean;
        /**
         * Replace inline dice rolls?
         */
        rolls?: boolean;
        /**
         * The data object providing context for inline rolls, or a function that
         *    produces it.
         */
        rollData?: any;
        /**
         * Perform the operation asynchronously returning a Promise
         */
        async?: boolean;
        /**
         * A document to resolve relative UUIDs against.
         */
        relativeTo?: ClientDocument;
    }) => Promise<HTMLElement>;
};
