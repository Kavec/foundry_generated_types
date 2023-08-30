/**
 * The Application responsible for configuring a single Combatant document within a parent Combat.
 * @extends {DocumentSheet}
 */
declare class CombatantConfig extends DocumentSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @override */
    override get title(): any;
}
