/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Token objects.
 * This interface provides controls for visibility, attribute bars, elevation, status effects, and more.
 * @type {BasePlaceableHUD}
 */
declare class TokenHUD extends BasePlaceableHUD {
    /**
     * Track whether the status effects control palette is currently expanded or hidden
     * @type {boolean}
     * @private
     */
    private _statusEffects;
    /** @override */
    override bind(object: any): void;
    /**
     * Refresh the currently active state of all status effect icons in the Token HUD selector.
     */
    refreshStatusIcons(): void;
    /** @override */
    override setPosition(_position: any): void;
    /**
     * Get an array of icon paths which represent valid status effect choices
     * @private
     */
    private _getStatusEffectChoices;
    /** @inheritdoc */
    _onClickControl(event: any): void | Promise<any>;
    /**
     * Handle initial click to focus an attribute update field
     * @private
     */
    private _onAttributeClick;
    /**
     * Force field handling on an Enter keypress even if the value of the field did not change.
     * This is important to suppose use cases with negative number values.
     * @param {KeyboardEvent} event     The originating keydown event
     * @private
     */
    private _onAttributeKeydown;
    /**
     * Handle attribute bar update
     * @private
     */
    private _onAttributeUpdate;
    /**
     * Toggle Token combat state
     * @private
     */
    private _onToggleCombat;
    /**
     * Handle Token configuration button click
     * @private
     */
    private _onTokenConfig;
    /**
     * Handle left-click events to toggle the displayed state of the status effect selection palette
     * @param {MouseEvent }event
     * @private
     */
    private _onToggleStatusEffects;
    /**
     * Assign css selectors for the active state of the status effects selection palette
     * @param {boolean} active      Should the effects menu be active?
     * @private
     */
    private _toggleStatusEffects;
    /**
     * Handle toggling a token status effect icon
     * @param {PointerEvent} event      The click event to toggle the effect
     * @param {object} [options]        Options which modify the toggle
     * @param {boolean} [options.overlay]   Toggle the overlay effect?
     * @private
     */
    private _onToggleEffect;
    /**
     * Handle toggling the target state for this Token
     * @param {PointerEvent} event      The click event to toggle the target
     * @private
     */
    private _onToggleTarget;
    #private;
}
