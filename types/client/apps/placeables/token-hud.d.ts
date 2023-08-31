/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Token objects.
 * This interface provides controls for visibility, attribute bars, elevation, status effects, and more.
 * @type {BasePlaceableHUD}
 */
declare class TokenHUD extends BasePlaceableHUD {
    /**
     * Track whether the status effects control palette is currently expanded or hidden
     * @type {boolean}
     * @protected
     */
    protected _statusEffects: boolean;
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
     * @protected
     */
    protected _getStatusEffectChoices(): any;
    /** @inheritdoc */
    _onClickControl(event: any): void | Promise<any>;
    /**
     * Handle initial click to focus an attribute update field
     * @protected
     */
    protected _onAttributeClick(event: any): void;
    /**
     * Force field handling on an Enter keypress even if the value of the field did not change.
     * This is important to suppose use cases with negative number values.
     * @param {KeyboardEvent} event     The originating keydown event
     * @protected
     */
    protected _onAttributeKeydown(event: KeyboardEvent): void;
    /**
     * Handle attribute bar update
     * @protected
     */
    protected _onAttributeUpdate(event: any): void;
    /**
     * Toggle Token combat state
     * @protected
     */
    protected _onToggleCombat(event: any): Promise<any>;
    /**
     * Handle Token configuration button click
     * @protected
     */
    protected _onTokenConfig(event: any): void;
    /**
     * Handle left-click events to toggle the displayed state of the status effect selection palette
     * @param {MouseEvent }event
     * @protected
     */
    protected _onToggleStatusEffects(event: MouseEvent): void;
    /**
     * Assign css selectors for the active state of the status effects selection palette
     * @param {boolean} active      Should the effects menu be active?
     * @protected
     */
    protected _toggleStatusEffects(active: boolean): void;
    /**
     * Handle toggling a token status effect icon
     * @param {PointerEvent} event      The click event to toggle the effect
     * @param {object} [options]        Options which modify the toggle
     * @param {boolean} [options.overlay]   Toggle the overlay effect?
     * @protected
     */
    protected _onToggleEffect(event: PointerEvent, { overlay }?: {
        overlay?: boolean;
    }): any;
    /**
     * Handle toggling the target state for this Token
     * @param {PointerEvent} event      The click event to toggle the target
     * @protected
     */
    protected _onToggleTarget(event: PointerEvent): void;
    #private;
}
