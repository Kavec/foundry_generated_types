/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Drawing objects.
 * @extends {BasePlaceableHUD}
 * @param {Drawing} object                The {@link Drawing} this HUD is bound to.
 * @param {ApplicationOptions} [options]  Application configuration options.
 */
declare class DrawingHUD extends BasePlaceableHUD {
    /** @inheritdoc */
    setPosition(options: any): void;
}
