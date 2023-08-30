/**
 * The client-side Note document which extends the common BaseNote document model.
 * @extends documents.BaseNote
 * @mixes ClientDocumentMixin
 *
 * @see {@link Scene}                     The Scene document type which contains Note documents
 * @see {@link NoteConfig}                The Note configuration application
 */
declare class NoteDocument {
    /**
     * The associated JournalEntry which is referenced by this Note
     * @type {JournalEntry}
     */
    get entry(): JournalEntry;
    /**
     * The specific JournalEntryPage within the associated JournalEntry referenced by this Note.
     * @type {JournalEntryPage}
     */
    get page(): JournalEntryPage;
    /**
     * The text label used to annotate this Note
     * @type {string}
     */
    get label(): string;
}
