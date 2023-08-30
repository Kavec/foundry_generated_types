/**
 * @deprecated since v10
 * @see TypeDataField
 * @ignore
 */
export function systemDataField(document: any): TypeDataField;
/**
 * @deprecated since v10
 * @see ForeignDocumentField
 * @ignore
 */
export function foreignDocumentField(options: any): ForeignDocumentField;
/**
 * @deprecated since v10
 * @see EmbeddedCollectionField
 * @ignore
 */
export function embeddedCollectionField(document: any, options?: {}): EmbeddedCollectionField;
/**
 * @deprecated since v10
 * @ignore
 */
export function field(field: any, options?: {}): BooleanField | NumberField | StringField | ObjectField | ArrayField;
export type DataFieldOptions = {
    /**
     * Is this field required to be populated?
     */
    required?: boolean;
    /**
     * Can this field have null values?
     */
    nullable?: boolean;
    /**
     * The initial value of a field, or a function which assigns that initial value.
     */
    initial?: Function | any;
    /**
     * A data validation function which accepts one argument with the current value.
     */
    validate?: Function;
    /**
     * A localizable label displayed on forms which render this field.
     */
    label?: string;
    /**
     * Localizable help text displayed on forms which render this field.
     */
    hint?: string;
    /**
     * A custom validation error string. When displayed will be prepended with the
     *    document name, field name, and candidate value.
     */
    validationError?: string;
};
export type DataFieldValidationOptions = {
    /**
     * Whether this is a partial schema validation, or a complete one.
     */
    partial?: boolean;
    /**
     * Whether to allow replacing invalid values with valid fallbacks.
     */
    fallback?: boolean;
    /**
     * The full source object being evaluated.
     */
    source?: object;
    /**
     * If true, invalid embedded documents will emit a warning and be placed in
     *   the invalidDocuments collection rather than causing the parent to be
     *   considered invalid.
     */
    dropInvalidEmbedded?: boolean;
};
export type NumberFieldOptions = DataFieldOptions;
export type StringFieldOptions = DataFieldOptions;
export type FilePathFieldOptions = StringFieldOptions;
export type DocumentStats = {
    /**
     * The package name of the system the Document was created in.
     */
    systemId: string;
    /**
     * The version of the system the Document was created in.
     */
    systemVersion: string;
    /**
     * The core version the Document was created in.
     */
    coreVersion: string;
    /**
     * A timestamp of when the Document was created.
     */
    createdTime: number;
    /**
     * A timestamp of when the Document was last modified.
     */
    modifiedTime: number;
    /**
     * The ID of the user who last modified the Document.
     */
    lastModifiedBy: string;
};
/**
 * A subclass of [ObjectField]{@link ObjectField} which supports a type-specific data object.
 */
export class TypeDataField extends ObjectField {
    /**
     * Return the package that provides the sub-type for the given model.
     * @param {DataModel} model       The model instance created for this sub-type.
     * @returns {System|Module|null}
     */
    static getModelProvider(model: DataModel): System | Module | null;
    /**
     * @param {typeof Document} document      The base document class which belongs in this field
     * @param {DataFieldOptions} options      Options which configure the behavior of the field
     */
    constructor(document: typeof Document, options?: DataFieldOptions);
    /**
     * The canonical document name of the document type which belongs in this field
     * @type {typeof Document}
     */
    document: typeof Document;
    /**
     * A convenience accessor for the name of the document type associated with this TypeDataField
     * @type {string}
     */
    get documentName(): string;
    /**
     * Get the DataModel definition that should be used for this type of document.
     * @param {string} type              The Document instance type
     * @returns {typeof DataModel|null}  The DataModel class or null
     */
    getModelForType(type: string): typeof DataModel | null;
    /** @override */
    override getInitialValue(data: any): any;
    /** @override */
    override _cleanType(value: any, options: any): any;
    /** @inheritdoc */
    _validateType(data: any, options?: {}): DataModelValidationFailure;
    /** @override */
    override _validateModel(changes: any, options: any): any;
    /**
     * Migrate this field's candidate source data.
     * @param {object} sourceData   Candidate source data of the root model
     * @param {any} fieldData       The value of this field within the source data
     */
    migrateSource(sourceData: object, fieldData: any): void;
}
/**
 * A special class of [StringField]{@link StringField} field which references another DataModel by its id.
 * This field may also be null to indicate that no foreign model is linked.
 */
export class ForeignDocumentField extends DocumentIdField {
    /**
     * @param {typeof Document} model           The foreign DataModel class definition which this field should link to.
     * @param {StringFieldOptions} options      Options which configure the behavior of the field
     */
    constructor(model: typeof Document, options?: StringFieldOptions);
    /**
     * A reference to the model class which is stored in this field
     * @type {typeof Document}
     */
    model: typeof Document;
    /** @inheritdoc */
    initialize(value: any, model: any, options?: {}): any;
    /** @inheritdoc */
    toObject(value: any): any;
}
/**
 * A subclass of [ArrayField]{@link ArrayField} which supports an embedded Document collection.
 * Invalid elements will be dropped from the collection during validation rather than failing for the field entirely.
 */
export class EmbeddedCollectionField extends ArrayField {
    /** @override */
    static override _validateElementType(element: any): any;
    /**
     * The Collection implementation to use when initializing the collection.
     * @type {typeof EmbeddedCollection}
     */
    static get implementation(): typeof EmbeddedCollection;
    /**
     * @param {typeof Document} element     The type of Document which belongs to this embedded collection
     * @param {DataFieldOptions} [options]  Options which configure the behavior of the field
     */
    constructor(element: typeof Document, options?: DataFieldOptions);
    readonly: boolean;
    /**
     * A reference to the DataModel subclass of the embedded document element
     * @type {typeof Document}
     */
    get model(): {
        new (): Document;
        prototype: Document;
    };
    /**
     * The DataSchema of the contained Document model.
     * @type {SchemaField}
     */
    get schema(): SchemaField;
    /** @override */
    override _validateElements(value: any, options: any): DataModelValidationFailure;
    /** @override */
    override apply(fn: any, value?: any[], options?: {}): {}[];
    /**
     * Return the embedded document(s) as a Collection.
     * @param {Document} parent  The parent document.
     * @returns {Collection<Document>}
     */
    getCollection(parent: Document): Collection<Document>;
}
/**
 * A subclass of [DataField]{@link DataField} which deals with boolean-typed data.
 */
export class BooleanField extends DataField {
    /** @inheritdoc */
    static get _defaults(): any;
    /** @override */
    override _cast(value: any): boolean;
    /** @override */
    override _validateType(value: any): void;
}
/**
 * @typedef {DataFieldOptions} NumberFieldOptions
 * @property {number} [min]               A minimum allowed value
 * @property {number} [max]               A maximum allowed value
 * @property {number} [step]              A permitted step size
 * @property {boolean} [integer=false]    Must the number be an integer?
 * @property {number} [positive=false]    Must the number be positive?
 * @property {number[]|object|function} [choices]  An array of values or an object of values/labels which represent
 *                                        allowed choices for the field. A function may be provided which dynamically
 *                                        returns the array of choices.
 */
/**
 * A subclass of [DataField]{@link DataField} which deals with number-typed data.
 *
 * @property {number} min                 A minimum allowed value
 * @property {number} max                 A maximum allowed value
 * @property {number} step                A permitted step size
 * @property {boolean} integer=false      Must the number be an integer?
 * @property {number} positive=false      Must the number be positive?
 * @property {number[]|object|function} [choices]  An array of values or an object of values/labels which represent
 *                                        allowed choices for the field. A function may be provided which dynamically
 *                                        returns the array of choices.
 */
export class NumberField extends DataField {
    /** @inheritdoc */
    static get _defaults(): any;
    nullable: boolean;
    /** @override */
    override _cast(value: any): number;
    /** @inheritdoc */
    _cleanType(value: any, options: any): any;
    /** @override */
    override _validateType(value: any): void;
    #private;
}
/**
 * @typedef {DataFieldOptions} StringFieldOptions
 * @property {boolean} [blank=true]       Is the string allowed to be blank (empty)?
 * @property {boolean} [trim=true]        Should any provided string be trimmed as part of cleaning?
 * @property {string[]|object|function} [choices]  An array of values or an object of values/labels which represent
 *                                        allowed choices for the field. A function may be provided which dynamically
 *                                        returns the array of choices.
 */
/**
 * A subclass of [DataField]{@link DataField} which deals with string-typed data.
 *
 * @property {boolean} blank=true         Is the string allowed to be blank (empty)?
 * @property {boolean} trim=true          Should any provided string be trimmed as part of cleaning?
 * @property {string[]|object|function} [choices]  An array of values or an object of values/labels which represent
 *                                        allowed choices for the field. A function may be provided which dynamically
 *                                        returns the array of choices.
 */
export class StringField extends DataField {
    /** @inheritdoc */
    static get _defaults(): any;
    nullable: boolean;
    blank: any;
    initial: string;
    /** @inheritdoc */
    clean(value: any, options: any): any;
    /** @override */
    override _cast(value: any): string;
    /** @inheritdoc */
    _validateSpecial(value: any): boolean | void;
    /** @override */
    override _validateType(value: any): boolean;
    /**
     * Test whether a provided value is a valid choice from the allowed choice set
     * @param {string} value      The provided value
     * @returns {boolean}         Is the choice valid?
     * @protected
     */
    protected _isValidChoice(value: string): boolean;
}
/**
 * A subclass of [DataField]{@link DataField} which deals with object-typed data.
 */
export class ObjectField extends DataField {
    /** @inheritdoc */
    static get _defaults(): any;
    /** @override */
    override _cast(value: any): any;
    /** @override */
    override initialize(value: any, model: any, options?: {}): any;
    /** @override */
    override toObject(value: any): any;
    /** @override */
    override _validateType(value: any, options?: {}): void;
}
/**
 * A subclass of [DataField]{@link DataField} which deals with array-typed data.
 */
export class ArrayField extends DataField {
    /** @inheritdoc */
    static get _defaults(): any;
    /**
     * Validate the contained element type of the ArrayField
     * @param {*} element       The type of Array element
     * @returns {*}             The validated element type
     * @throws                  An error if the element is not a valid type
     * @protected
     */
    protected static _validateElementType(element: any): any;
    /**
     * @param {DataField} element         A DataField instance which defines the type of element contained in the Array.
     * @param {DataFieldOptions} options  Options which configure the behavior of the field
     */
    constructor(element: DataField, options?: DataFieldOptions);
    /**
     * The data type of each element in this array
     * @type {DataField}
     */
    element: DataField;
    /** @override */
    override _validateModel(changes: any, options: any): void;
    /** @override */
    override _cast(value: any): any[];
    /** @override */
    override _cleanType(value: any, options: any): any;
    /** @override */
    override _validateType(value: any, options?: {}): void | DataModelValidationFailure;
    /**
     * Validate every element of the ArrayField
     * @param {Array} value                         The array to validate
     * @param {DataFieldValidationOptions} options  Validation options
     * @returns {DataModelValidationFailure|void}   A validation failure if any of the elements failed validation,
     *                                              otherwise void.
     * @protected
     */
    protected _validateElements(value: any[], options: DataFieldValidationOptions): DataModelValidationFailure | void;
    /**
     * Validate a single element of the ArrayField.
     * @param {*} value                       The value of the array element
     * @param {DataFieldValidationOptions} options  Validation options
     * @returns {DataModelValidationFailure}  A validation failure if the element failed validation
     * @protected
     */
    protected _validateElement(value: any, options: DataFieldValidationOptions): DataModelValidationFailure;
    /** @override */
    override initialize(value: any, model: any, options?: {}): any;
    /** @override */
    override toObject(value: any): any;
    /** @override */
    override apply(fn: any, value?: any[], options?: {}): any[];
    /** @override */
    override _getField(path: any): DataField | this;
    /**
     * Migrate this field's candidate source data.
     * @param {object} sourceData   Candidate source data of the root model
     * @param {any} fieldData       The value of this field within the source data
     */
    migrateSource(sourceData: object, fieldData: any): void;
}
/**
 * A special [NumberField]{@link NumberField} represents a number between 0 and 1.
 */
export class AlphaField extends NumberField {
}
/**
 * A special [NumberField]{@link NumberField} which represents an angle of rotation in degrees between 0 and 360.
 * @property {number} base                  Whether the base angle should be treated as 360 or as 0
 */
export class AngleField extends NumberField {
    /** @inheritdoc */
    _cast(value: any): any;
}
/**
 * A special [StringField]{@link StringField} which records a standardized CSS color string.
 */
export class ColorField extends StringField {
    /** @inheritdoc */
    _validateType(value: any): void;
}
/**
 * @typedef {Object} DataFieldOptions
 * @property {boolean} [required=false]   Is this field required to be populated?
 * @property {boolean} [nullable=false]   Can this field have null values?
 * @property {Function|*} [initial]       The initial value of a field, or a function which assigns that initial value.
 * @property {Function} [validate]        A data validation function which accepts one argument with the current value.
 * @property {string} [label]             A localizable label displayed on forms which render this field.
 * @property {string} [hint]              Localizable help text displayed on forms which render this field.
 * @property {string} [validationError]   A custom validation error string. When displayed will be prepended with the
 *                                        document name, field name, and candidate value.
 */
/**
 * @typedef {object} DataFieldValidationOptions
 * @property {boolean} [partial]   Whether this is a partial schema validation, or a complete one.
 * @property {boolean} [fallback]  Whether to allow replacing invalid values with valid fallbacks.
 * @property {object} [source]     The full source object being evaluated.
 * @property {boolean} [dropInvalidEmbedded]  If true, invalid embedded documents will emit a warning and be placed in
 *                                            the invalidDocuments collection rather than causing the parent to be
 *                                            considered invalid.
 */
/**
 * An abstract class that defines the base pattern for a data field within a data schema.
 * @abstract
 *
 * @property {string} name                The name of this data field within the schema that contains it
 *
 * @property {boolean} required=false     Is this field required to be populated?
 * @property {boolean} nullable=false     Can this field have null values?
 * @property {Function|*} initial         The initial value of a field, or a function which assigns that initial value.
 * @property {Function} validate          A data validation function which accepts one argument with the current value.
 * @property {boolean} [readonly=false]   Should the prepared value of the field be read-only, preventing it from being
 *                                        changed unless a change to the _source data is applied.
 * @property {string} label               A localizable label displayed on forms which render this field.
 * @property {string} hint                Localizable help text displayed on forms which render this field.
 * @property {string} validationError     A custom validation error string. When displayed will be prepended with the
 *                                        document name, field name, and candidate value.
 */
export class DataField {
    /**
     * Whether this field defines part of a Document/Embedded Document hierarchy.
     * @type {boolean}
     */
    static hierarchical: boolean;
    /**
     * Does this field type contain other fields in a recursive structure?
     * Examples of recursive fields are SchemaField, ArrayField, or TypeDataField
     * Examples of non-recursive fields are StringField, NumberField, or ObjectField
     * @type {boolean}
     */
    static recursive: boolean;
    /**
     * Default parameters for this field type
     * @return {DataFieldOptions}
     * @protected
     */
    protected static get _defaults(): DataFieldOptions;
    /**
     * @param {DataFieldOptions} options    Options which configure the behavior of the field
     */
    constructor(options?: DataFieldOptions);
    /**
     * The initially provided options which configure the data field
     * @type {DataFieldOptions}
     */
    options: DataFieldOptions;
    /**
     * The field name of this DataField instance.
     * This is assigned by SchemaField#initialize.
     * @internal
     */
    name: any;
    /**
     * A reference to the parent schema to which this DataField belongs.
     * This is assigned by SchemaField#initialize.
     * @internal
     */
    parent: any;
    /**
     * A dot-separated string representation of the field path within the parent schema.
     * @type {string}
     */
    get fieldPath(): string;
    /**
     * Apply a function to this DataField which propagates through recursively to any contained data schema.
     * @param {string|function} fn          The function to apply
     * @param {*} value                     The current value of this field
     * @param {object} [options={}]         Additional options passed to the applied function
     * @returns {object}                    The results object
     */
    apply(fn: string | Function, value: any, options?: object): object;
    /**
     * Coerce source data to ensure that it conforms to the correct data type for the field.
     * Data coercion operations should be simple and synchronous as these are applied whenever a DataModel is constructed.
     * For one-off cleaning of user-provided input the sanitize method should be used.
     * @param {*} value           The initial value
     * @param {object} [options]  Additional options for how the field is cleaned
     * @param {boolean} [options.partial]   Whether to perform partial cleaning?
     * @param {object} [options.source]     The root data model being cleaned
     * @returns {*}               The cast value
     */
    clean(value: any, options?: {
        partial?: boolean;
        source?: object;
    }): any;
    /**
     * Apply any cleaning logic specific to this DataField type.
     * @param {*} value           The appropriately coerced value.
     * @param {object} [options]  Additional options for how the field is cleaned.
     * @returns {*}               The cleaned value.
     * @protected
     */
    protected _cleanType(value: any, options?: object): any;
    /**
     * Cast a non-default value to ensure it is the correct type for the field
     * @param {*} value       The provided non-default value
     * @returns {*}           The standardized value
     * @protected
     */
    protected _cast(value: any): any;
    /**
     * Attempt to retrieve a valid initial value for the DataField.
     * @param {object} data   The source data object for which an initial value is required
     * @returns {*}           A valid initial value
     * @throws                An error if there is no valid initial value defined
     */
    getInitialValue(data: object): any;
    /**
     * Validate a candidate input for this field, ensuring it meets the field requirements.
     * A validation failure can be provided as a raised Error (with a string message), by returning false, or by returning
     * a DataModelValidationFailure instance.
     * A validator which returns true denotes that the result is certainly valid and further validations are unnecessary.
     * @param {*} value                                  The initial value
     * @param {DataFieldValidationOptions} [options={}]  Options which affect validation behavior
     * @returns {DataModelValidationFailure}             Returns a DataModelValidationFailure if a validation failure
     *                                                   occurred.
     */
    validate(value: any, options?: DataFieldValidationOptions): DataModelValidationFailure;
    /**
     * Special validation rules which supersede regular field validation.
     * This validator screens for certain values which are otherwise incompatible with this field like null or undefined.
     * @param {*} value               The candidate value
     * @returns {boolean|void}        A boolean to indicate with certainty whether the value is valid.
     *                                Otherwise, return void.
     * @throws                        May throw a specific error if the value is not valid
     * @protected
     */
    protected _validateSpecial(value: any): boolean | void;
    /**
     * A default type-specific validator that can be overridden by child classes
     * @param {*} value                                    The candidate value
     * @param {DataFieldValidationOptions} [options={}]    Options which affect validation behavior
     * @returns {boolean|DataModelValidationFailure|void}  A boolean to indicate with certainty whether the value is
     *                                                     valid, or specific DataModelValidationFailure information,
     *                                                     otherwise void.
     * @throws                                             May throw a specific error if the value is not valid
     * @protected
     */
    protected _validateType(value: any, options?: DataFieldValidationOptions): boolean | DataModelValidationFailure | void;
    /**
     * Certain fields may declare joint data validation criteria.
     * This method will only be called if the field is designated as recursive.
     * @param {object} data       Candidate data for joint model validation
     * @param {object} options    Options which modify joint model validation
     * @throws  An error if joint model validation fails
     * @internal
     */
    _validateModel(data: object, options?: object): void;
    /**
     * Initialize the original source data into a mutable copy for the DataModel instance.
     * @param {*} value                   The source value of the field
     * @param {Object} model              The DataModel instance that this field belongs to
     * @param {object} [options]          Initialization options
     * @returns {*}                       An initialized copy of the source data
     */
    initialize(value: any, model: any, options?: object): any;
    /**
     * Export the current value of the field into a serializable object.
     * @param {*} value                   The initialized value of the field
     * @returns {*}                       An exported representation of the field
     */
    toObject(value: any): any;
    /**
     * Recursively traverse a schema and retrieve a field specification by a given path
     * @param {string[]} path             The field path as an array of strings
     * @protected
     */
    protected _getField(path: string[]): this;
}
/**
 * A subclass of [StringField]{@link StringField} which provides the primary _id for a Document.
 * The field may be initially null, but it must be non-null when it is saved to the database.
 */
export class DocumentIdField extends StringField {
    /** @override */
    override _cast(value: any): any;
    /** @override */
    override _validateType(value: any): void;
}
/**
 * A special [ObjectField]{@link ObjectField} which captures a mapping of User IDs to Document permission levels.
 */
export class DocumentOwnershipField extends ObjectField {
    /** @override */
    override _validateType(value: any): boolean;
}
/** @typedef {Object} DocumentStats
 * @property {string} systemId  The package name of the system the Document was created in.
 * @property {string} systemVersion  The version of the system the Document was created in.
 * @property {string} coreVersion  The core version the Document was created in.
 * @property {number} createdTime  A timestamp of when the Document was created.
 * @property {number} modifiedTime  A timestamp of when the Document was last modified.
 * @property {string} lastModifiedBy  The ID of the user who last modified the Document.
 */
/**
 * A subclass of {@link SchemaField} which stores document metadata in the _stats field.
 * @mixes DocumentStats
 */
export class DocumentStatsField extends SchemaField {
    constructor(options: any);
}
/**
 * A subclass of [ObjectField]{@link ObjectField} which embeds some other DataModel definition as an inner object.
 */
export class EmbeddedDataField extends SchemaField {
    /**
     * @param {typeof DataModel} model          The class of DataModel which should be embedded in this field
     * @param {DataFieldOptions} options        Options which configure the behavior of the field
     */
    constructor(model: typeof DataModel, options: DataFieldOptions);
    /**
     * The embedded DataModel definition which is contained in this field.
     * @type {typeof DataModel}
     */
    model: typeof DataModel;
    /** @override */
    override _initialize(schema: any): any;
    /** @override */
    override _validateModel(changes: any, options: any): void;
}
/**
 * A subclass of {@link EmbeddedCollectionField} which manages a collection of delta objects relative to another
 * collection.
 */
export class EmbeddedCollectionDeltaField extends EmbeddedCollectionField {
    /** @override */
    static override get implementation(): typeof EmbeddedCollectionDelta;
}
/**
 * A subclass of {@link EmbeddedDataField} which supports a single embedded Document.
 */
export class EmbeddedDocumentField extends EmbeddedDataField {
    /**
     * @param {typeof Document} model     The type of Document which is embedded.
     * @param {DataFieldOptions} options  Options which configure the behavior of the field.
     */
    constructor(model: typeof Document, options?: DataFieldOptions);
    /**
     * Return the embedded document(s) as a Collection.
     * @param {Document} parent  The parent document.
     * @returns {Collection<Document>}
     */
    getCollection(parent: Document): Collection<Document>;
}
/**
 * @typedef {StringFieldOptions} FilePathFieldOptions
 * @property {string[]} [categories]    A set of categories in CONST.FILE_CATEGORIES which this field supports
 * @property {boolean} [base64=false]   Is embedded base64 data supported in lieu of a file path?
 * @property {boolean} [wildcard=false] Does this file path field allow wildcard characters?
 */
/**
 * A special [StringField]{@link StringField} which records a file path or inline base64 data.
 * @property {string[]} categories      A set of categories in CONST.FILE_CATEGORIES which this field supports
 * @property {boolean} base64=false     Is embedded base64 data supported in lieu of a file path?
 * @property {boolean} wildcard=false   Does this file path field allow wildcard characters?
 */
export class FilePathField extends StringField {
}
/**
 * A subclass of [StringField]{@link StringField} which contains a sanitized HTML string.
 * This class does not override any StringField behaviors, but is used by the server-side to identify fields which
 * require sanitization of user input.
 */
export class HTMLField extends StringField {
}
/**
 * A subclass of {@link NumberField} which is used for storing integer sort keys.
 */
export class IntegerSortField extends NumberField {
}
/**
 * A special [StringField]{@link StringField} which contains serialized JSON data.
 */
export class JSONField extends StringField {
    /** @override */
    override _validateType(value: any): void;
    /** @override */
    override initialize(value: any, model: any, options?: {}): any;
    /** @override */
    override toObject(value: any): string;
}
/**
 * A special class of {@link DataField} which defines a data schema.
 */
export class SchemaField extends DataField {
    /** @inheritdoc */
    static get _defaults(): any;
    /**
     * @param {DataSchema} fields                 The contained field definitions
     * @param {DataFieldOptions} options          Options which configure the behavior of the field
     */
    constructor(fields: DataSchema, options?: DataFieldOptions);
    /**
     * The contained field definitions.
     * @type {DataSchema}
     */
    fields: DataSchema;
    initial: () => any;
    /**
     * Initialize and validate the structure of the provided field definitions.
     * @param {DataSchema} fields     The provided field definitions
     * @returns {DataSchema}          The validated schema
     * @protected
     */
    protected _initialize(fields: DataSchema): DataSchema;
    /**
     * An array of field names which are present in the schema.
     * @returns {string[]}
     */
    keys(): string[];
    /**
     * An array of DataField instances which are present in the schema.
     * @returns {DataField[]}
     */
    values(): DataField[];
    /**
     * An array of [name, DataField] tuples which define the schema.
     * @returns {Array<[string, DataField]>}
     */
    entries(): Array<[string, DataField]>;
    /**
     * Test whether a certain field name belongs to this schema definition.
     * @param {string} fieldName    The field name
     * @returns {boolean}           Does the named field exist in this schema?
     */
    has(fieldName: string): boolean;
    /**
     * Get a DataField instance from the schema by name
     * @param {string} fieldName    The field name
     * @returns {DataField}         The DataField instance or undefined
     */
    get(fieldName: string): DataField;
    /**
     * Traverse the schema, obtaining the DataField definition for a particular field.
     * @param {string[]|string} fieldName       A field path like ["abilities", "strength"] or "abilities.strength"
     * @returns {SchemaField|DataField}         The corresponding DataField definition for that field, or undefined
     */
    getField(fieldName: string[] | string): SchemaField | DataField;
    /** @override */
    override _getField(path: any): DataField | this;
    /** @override */
    override _cast(value: any): any;
    /** @inheritdoc */
    _cleanType(data: any, options?: {}): any;
    /** @override */
    override initialize(value: any, model: any, options?: {}): any;
    /** @override */
    override _validateType(data: any, options?: {}): DataModelValidationFailure;
    /** @override */
    override _validateModel(changes: any, options?: {}): void;
    /** @override */
    override toObject(value: any): any;
    /** @override */
    override apply(fn: any, data?: {}, options?: {}): {};
    /**
     * Migrate this field's candidate source data.
     * @param {object} sourceData   Candidate source data of the root model
     * @param {any} fieldData       The value of this field within the source data
     */
    migrateSource(sourceData: object, fieldData: any): void;
    /**
     * Iterate over a SchemaField by iterating over its fields.
     * @type {Iterable<DataField>}
     */
    [Symbol.iterator](): Generator<any, void, unknown>;
}
/**
 * A subclass of [ArrayField]{@link ArrayField} which supports a set of contained elements.
 * Elements in this set are treated as fungible and may be represented in any order or discarded if invalid.
 */
export class SetField extends ArrayField {
    /** @override */
    override _validateElements(value: any, options: any): DataModelValidationFailure;
    /** @override */
    override initialize(value: any, model: any, options?: {}): Set<any>;
    /** @override */
    override toObject(value: any): any[];
}
/**
 * @deprecated since v11
 * @see DataModelValidationError
 * @ignore
 */
export class ModelValidationError extends Error {
    /**
     * Collect all the errors into a single message for consumers who do not handle the ModelValidationError specially.
     * @param {Object<Error>|Error[]|string} errors   The raw error structure
     * @returns {string}                              A formatted error message
     */
    static formatErrors(errors: any | Error[] | string): string;
    constructor(errors: any);
    errors: any;
}
import DataModel from "../abstract/data.mjs";
import { DataModelValidationFailure } from "./validation-failure.mjs";
import EmbeddedCollection from "../abstract/embedded-collection.mjs";
import EmbeddedCollectionDelta from "../abstract/embedded-collection-delta.mjs";
