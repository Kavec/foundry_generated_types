/**
 * The client-side ActorDelta embedded document which extends the common BaseActorDelta document model.
 * @extends documents.BaseActorDelta
 * @mixes ClientDocumentMixin
 * @see {@link TokenDocument}  The TokenDocument document type which contains ActorDelta embedded documents.
 */
declare class ActorDelta {
    /** @inheritdoc */
    _configure(options?: {}): void;
    /** @inheritdoc */
    _initialize({ sceneReset, ...options }?: {
        sceneReset?: boolean;
    }): void;
    /**
     * Apply this ActorDelta to the base Actor and return a synthetic Actor.
     * @param {object} [context]  Context to supply to synthetic Actor instantiation.
     * @returns {Actor|null}
     */
    apply(context?: object): Actor | null;
    /** @override */
    override prepareEmbeddedDocuments(): void;
    /** @inheritdoc */
    updateSource(changes?: {}, options?: {}): any;
    /** @inheritdoc */
    reset(): void;
    /**
     * Generate a synthetic Actor instance when constructed, or when the represented Actor, or actorLink status changes.
     * @param {object} [options]
     * @param {boolean} [options.reinitializeCollections]  Whether to fully re-initialize this ActorDelta's collections in
     *                                                     order to re-retrieve embedded Documents from the synthetic
     *                                                     Actor.
     * @internal
     */
    _createSyntheticActor({ reinitializeCollections }?: {
        reinitializeCollections?: boolean;
    }): void;
    /**
     * Update the synthetic Actor instance with changes from the delta or the base Actor.
     */
    updateSyntheticActor(): void;
    /**
     * Restore this delta to empty, inheriting all its properties from the base actor.
     * @returns {Promise<Actor>}  The restored synthetic Actor.
     */
    restore(): Promise<Actor>;
    /**
     * Ensure that the embedded collection delta is managing any entries that have had their descendants updated.
     * @param {Document} doc  The parent whose immediate children have been modified.
     * @internal
     */
    _handleDeltaCollectionUpdates(doc: Document): any;
    _preDelete(options: any, user: any): Promise<any>;
    /** @override */
    override _onUpdate(data: any, options: any, userId: any): void;
    /** @inheritdoc */
    _onDelete(options: any, userId: any): void;
    /** @inheritdoc */
    _dispatchDescendantDocumentEvents(event: any, collection: any, args: any, _parent: any): void;
}
