/**
 * @typedef {object} AllowedAttributeConfiguration
 * @property {Set<string>} attrs   The set of exactly-matching attribute names.
 * @property {string[]} wildcards  A list of wildcard allowed prefixes for attributes.
 */
/**
 * @typedef {object} ManagedAttributesSpec
 * @property {string[]} attributes  A list of managed attributes.
 * @property {string[]} styles      A list of CSS property names that are managed as inline styles.
 * @property {string[]} classes     A list of managed class names.
 */
/**
 * A class responsible for injecting attribute capture logic into the ProseMirror schema.
 */
export default class AttributeCapture {
    /**
     * Augments the schema definition to allow each node or mark to capture all the attributes on an element and preserve
     * them when re-serialized back into the DOM.
     * @param {NodeSpec|MarkSpec} spec  The schema specification.
     */
    attributeCapture(spec: NodeSpec | MarkSpec): void;
    #private;
}
export type AllowedAttributeConfiguration = {
    /**
     * The set of exactly-matching attribute names.
     */
    attrs: Set<string>;
    /**
     * A list of wildcard allowed prefixes for attributes.
     */
    wildcards: string[];
};
export type ManagedAttributesSpec = {
    /**
     * A list of managed attributes.
     */
    attributes: string[];
    /**
     * A list of CSS property names that are managed as inline styles.
     */
    styles: string[];
    /**
     * A list of managed class names.
     */
    classes: string[];
};
