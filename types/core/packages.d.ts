/**
 * @typedef {Object} PackageCompatibilityBadge
 * @property {string} type        A type in "safe", "unsafe", "warning", "neutral" applied as a CSS class
 * @property {string} tooltip     A tooltip string displayed when hovering over the badge
 * @property {string} [label]     An optional text label displayed in the badge
 * @property {string} [icon]      An optional icon displayed in the badge
 */
/**
 * A client-side mixin used for all Package types.
 * @param {typeof BasePackage} BasePackage    The parent BasePackage class being mixed
 * @returns {typeof ClientPackage}            A BasePackage subclass mixed with ClientPackage features
 * @category - Mixins
 */
declare function ClientPackageMixin(BasePackage: any): any;
/**
 * @extends foundry.packages.BaseModule
 * @mixes ClientPackageMixin
 * @category - Packages
 */
declare class Module {
    constructor(data: any, options?: {});
}
/**
 * @extends foundry.packages.BaseSystem
 * @mixes ClientPackageMixin
 * @category - Packages
 */
declare class System {
}
/**
 * @extends foundry.packages.BaseWorld
 * @mixes ClientPackageMixin
 * @category - Packages
 */
declare class World {
    /** @inheritDoc */
    getVersionBadge(): any;
    /**
     * Provide data for a system badge displayed for the world which reflects the system ID and its availability
     * @returns {PackageCompatibilityBadge|null}
     */
    getSystemBadge(): PackageCompatibilityBadge | null;
    /** @inheritdoc */
    _formatBadDependenciesTooltip(deps: any): any;
}
/**
 * A mapping of allowed package types and the classes which implement them.
 * @type {{world: World, system: System, module: Module}}
 */
declare const PACKAGE_TYPES: {
    world: World;
    system: System;
    module: Module;
};
type PackageCompatibilityBadge = {
    /**
     * A type in "safe", "unsafe", "warning", "neutral" applied as a CSS class
     */
    type: string;
    /**
     * A tooltip string displayed when hovering over the badge
     */
    tooltip: string;
    /**
     * An optional text label displayed in the badge
     */
    label?: string;
    /**
     * An optional icon displayed in the badge
     */
    icon?: string;
};
