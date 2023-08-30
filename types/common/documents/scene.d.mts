export default BaseScene;
export type SceneData = {
    /**
     * The _id which uniquely identifies this Scene document
     */
    _id: string;
    /**
     * The name of this scene
     */
    name: string;
    /**
     * Is this scene currently active? Only one scene may be active at a given time
     */
    active?: boolean;
    /**
     * Is this scene displayed in the top navigation bar?
     */
    navigation?: boolean;
    /**
     * The sorting order of this Scene in the navigation bar relative to siblings
     */
    navOrder?: number;
    /**
     * A string which overrides Scene name for display in the navigation bar
     */
    navName?: string;
    /**
     * An image or video file that provides the background texture for the scene.
     */
    background?: TextureData | null;
    /**
     * An image or video file path providing foreground media for the scene
     */
    foreground?: string | null;
    /**
     * The elevation of the foreground layer where overhead tiles reside
     */
    foregroundElevation?: number;
    /**
     * A thumbnail image which depicts the scene at lower resolution
     */
    thumb?: string | null;
    /**
     * The width of the scene canvas, normally the width of the background media
     */
    width?: number;
    /**
     * The height of the scene canvas, normally the height of the background media
     */
    height?: number;
    /**
     * The proportion of canvas padding applied around the outside of the scene
     *       dimensions to provide additional buffer space
     */
    padding?: number;
    /**
     * The initial view coordinates for the scene
     */
    initial?: {
        x: number;
        y: number;
        scale: number;
    } | null;
    /**
     * 999999] The color of the canvas displayed behind the scene background
     */
    backgroundColor?: string | null;
    /**
     * Grid configuration for the scene
     */
    grid?: GridData;
    /**
     * Do Tokens require vision in order to see the Scene environment?
     */
    tokenVision?: boolean;
    /**
     * Is a global source of illumination present which provides dim light to all
     * areas of the Scene?
     */
    globalLight?: boolean;
    /**
     * The ambient darkness level in this Scene, where 0 represents midday
     *         (maximum illumination) and 1 represents midnight (maximum darkness)
     */
    darkness?: number;
    /**
     * A darkness threshold between 0 and 1. When the Scene darkness level
     * exceeds this threshold Global Illumination is automatically disabled
     */
    globalLightThreshold?: number;
    /**
     * Should fog exploration progress be tracked for this Scene?
     */
    fogExploration?: boolean;
    /**
     * The timestamp at which fog of war was last reset for this Scene.
     */
    fogReset?: number;
    /**
     * A special overlay image or video texture which is used for fog of war
     */
    fogOverlay?: string | null;
    /**
     * A color tint applied to explored regions of fog of war
     */
    fogExploredColor?: string | null;
    /**
     * A color tint applied to unexplored regions of fog of war
     */
    fogUnexploredColor?: string | null;
    /**
     * A collection of embedded Drawing objects.
     */
    drawings?: Collection<BaseDrawing>;
    /**
     * A collection of embedded Tile objects.
     */
    tiles?: Collection<BaseTile>;
    /**
     * A collection of embedded Token objects.
     */
    tokens?: Collection<BaseToken>;
    /**
     * A collection of embedded AmbientLight objects.
     */
    lights?: Collection<BaseAmbientLight>;
    /**
     * A collection of embedded Note objects.
     */
    notes?: Collection<BaseNote>;
    /**
     * A collection of embedded AmbientSound objects.
     */
    sounds?: Collection<BaseAmbientSound>;
    /**
     * A collection of embedded MeasuredTemplate objects.
     */
    templates?: Collection<BaseMeasuredTemplate>;
    /**
     * A collection of embedded Wall objects
     */
    walls?: Collection<BaseWall>;
    /**
     * A linked Playlist document which should begin automatically playing when this
     *     Scene becomes active.
     */
    playlist?: BasePlaylist;
    /**
     * A linked PlaylistSound document from the selected playlist that will
     *   begin automatically playing when this Scene becomes active
     */
    playlistSound?: BasePlaylistSound;
    /**
     * A JournalEntry document which provides narrative details about this Scene
     */
    journal?: JournalEntry;
    /**
     * A named weather effect which should be rendered in this Scene.
     */
    weather?: string;
    /**
     * The _id of a Folder which contains this Actor
     */
    folder: string | null;
    /**
     * The numeric sort value which orders this Actor relative to its siblings
     */
    sort?: number;
    /**
     * An object which configures ownership of this Scene
     */
    ownership?: object;
    /**
     * An object of optional key/value flags
     */
    flags?: object;
    /**
     * An object of creation and access information
     */
    _stats?: DocumentStats;
};
export type GridData = {
    /**
     * The type of grid, a number from CONST.GRID_TYPES.
     */
    type?: number;
    /**
     * The grid size which represents the width (or height) of a single grid space.
     */
    size?: number;
    /**
     * 000000]  A string representing the color used to render the grid lines.
     */
    color?: string;
    /**
     * A number between 0 and 1 for the opacity of the grid lines.
     */
    alpha?: number;
    /**
     * The number of distance units which are represented by a single grid space.
     */
    distance?: number;
    /**
     * A label for the units of measure which are used for grid distance.
     */
    units?: string;
};
/**
 * @typedef {Object} SceneData
 * @property {string} _id                 The _id which uniquely identifies this Scene document
 * @property {string} name                The name of this scene
 * @property {boolean} [active=false]     Is this scene currently active? Only one scene may be active at a given time
 * @property {boolean} [navigation=false] Is this scene displayed in the top navigation bar?
 * @property {number} [navOrder]          The sorting order of this Scene in the navigation bar relative to siblings
 * @property {string} [navName]           A string which overrides Scene name for display in the navigation bar
 * @property {TextureData|null} [background]  An image or video file that provides the background texture for the scene.
 * @property {string|null} [foreground]   An image or video file path providing foreground media for the scene
 * @property {number} [foregroundElevation=20] The elevation of the foreground layer where overhead tiles reside
 *
 * @property {string|null} [thumb]        A thumbnail image which depicts the scene at lower resolution
 * @property {number} [width=4000]        The width of the scene canvas, normally the width of the background media
 * @property {number} [height=3000]       The height of the scene canvas, normally the height of the background media
 * @property {number} [padding=0.25]      The proportion of canvas padding applied around the outside of the scene
 *                                        dimensions to provide additional buffer space
 * @property {{x: number, y: number, scale: number}|null} [initial=null] The initial view coordinates for the scene
 * @property {string|null} [backgroundColor=#999999] The color of the canvas displayed behind the scene background
 * @property {GridData} [grid]            Grid configuration for the scene
 * @property {boolean} [tokenVision=true] Do Tokens require vision in order to see the Scene environment?
 * @property {boolean} [globalLight=false] Is a global source of illumination present which provides dim light to all
 *                                        areas of the Scene?
 * @property {number} [darkness=0]        The ambient darkness level in this Scene, where 0 represents midday
 *                                        (maximum illumination) and 1 represents midnight (maximum darkness)
 * @property {number} [globalLightThreshold] A darkness threshold between 0 and 1. When the Scene darkness level
 *                                        exceeds this threshold Global Illumination is automatically disabled
 *
 * @property {boolean} [fogExploration=true] Should fog exploration progress be tracked for this Scene?
 * @property {number} [fogReset]          The timestamp at which fog of war was last reset for this Scene.
 * @property {string|null} [fogOverlay]   A special overlay image or video texture which is used for fog of war
 * @property {string|null} [fogExploredColor]   A color tint applied to explored regions of fog of war
 * @property {string|null} [fogUnexploredColor] A color tint applied to unexplored regions of fog of war
 *
 * @property {Collection<BaseDrawing>} [drawings=[]]   A collection of embedded Drawing objects.
 * @property {Collection<BaseTile>} [tiles=[]]         A collection of embedded Tile objects.
 * @property {Collection<BaseToken>} [tokens=[]]       A collection of embedded Token objects.
 * @property {Collection<BaseAmbientLight>} [lights=[]] A collection of embedded AmbientLight objects.
 * @property {Collection<BaseNote>} [notes=[]]         A collection of embedded Note objects.
 * @property {Collection<BaseAmbientSound>} [sounds=[]] A collection of embedded AmbientSound objects.
 * @property {Collection<BaseMeasuredTemplate>} [templates=[]] A collection of embedded MeasuredTemplate objects.
 * @property {Collection<BaseWall>} [walls=[]]         A collection of embedded Wall objects
 * @property {BasePlaylist} [playlist]    A linked Playlist document which should begin automatically playing when this
 *                                        Scene becomes active.
 * @property {BasePlaylistSound} [playlistSound]  A linked PlaylistSound document from the selected playlist that will
 *                                                begin automatically playing when this Scene becomes active
 * @property {JournalEntry} [journal]     A JournalEntry document which provides narrative details about this Scene
 * @property {string} [weather]           A named weather effect which should be rendered in this Scene.

 * @property {string|null} folder         The _id of a Folder which contains this Actor
 * @property {number} [sort]              The numeric sort value which orders this Actor relative to its siblings
 * @property {object} [ownership]         An object which configures ownership of this Scene
 * @property {object} [flags]             An object of optional key/value flags
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * @typedef {object} GridData
 * @property {number} [type=1]         The type of grid, a number from CONST.GRID_TYPES.
 * @property {number} [size=100]       The grid size which represents the width (or height) of a single grid space.
 * @property {string} [color=#000000]  A string representing the color used to render the grid lines.
 * @property {number} [alpha=0.2]      A number between 0 and 1 for the opacity of the grid lines.
 * @property {number} [distance]       The number of distance units which are represented by a single grid space.
 * @property {string} [units]          A label for the units of measure which are used for grid distance.
 */
/**
 * The Document definition for a Scene.
 * Defines the DataSchema and common behaviors for a Scene which are shared between both client and server.
 * @extends abstract.Document
 * @mixes SceneData
 * @memberof documents
 *
 * @param {SceneData} data                        Initial data from which to construct the Scene
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseScene {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        active: fields.BooleanField;
        navigation: fields.BooleanField;
        navOrder: fields.NumberField;
        navName: fields.HTMLField;
        background: TextureData;
        foreground: fields.FilePathField;
        foregroundElevation: fields.NumberField;
        thumb: fields.FilePathField;
        width: fields.NumberField;
        height: fields.NumberField;
        padding: fields.NumberField;
        initial: fields.SchemaField;
        backgroundColor: fields.ColorField;
        grid: fields.SchemaField;
        tokenVision: fields.BooleanField;
        fogExploration: fields.BooleanField;
        fogReset: fields.NumberField;
        globalLight: fields.BooleanField;
        globalLightThreshold: fields.AlphaField;
        darkness: fields.AlphaField;
        fogOverlay: fields.FilePathField;
        fogExploredColor: fields.ColorField;
        fogUnexploredColor: fields.ColorField;
        drawings: fields.EmbeddedCollectionField;
        tokens: fields.EmbeddedCollectionField;
        lights: fields.EmbeddedCollectionField;
        notes: fields.EmbeddedCollectionField;
        sounds: fields.EmbeddedCollectionField;
        templates: fields.EmbeddedCollectionField;
        tiles: fields.EmbeddedCollectionField;
        walls: fields.EmbeddedCollectionField;
        playlist: fields.ForeignDocumentField;
        playlistSound: fields.ForeignDocumentField;
        journal: fields.ForeignDocumentField;
        journalEntryPage: fields.ForeignDocumentField;
        weather: fields.StringField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /** @inheritdoc */
    static migrateData(data: any): any;
    /** @inheritdoc */
    static shimData(data: any, options: any): any;
}
import { TextureData } from "../data/data.mjs";
import * as fields from "../data/fields.mjs";
