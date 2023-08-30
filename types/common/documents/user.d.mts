export default BaseUser;
export type UserData = {
    /**
     * The _id which uniquely identifies this User document.
     */
    _id: string;
    /**
     * The user's name.
     */
    name: string;
    /**
     * The user's password. Available only on the Server side for security.
     */
    password?: string;
    /**
     * The user's password salt. Available only on the Server side for security.
     */
    passwordSalt?: string;
    /**
     * The user's avatar image.
     */
    avatar?: string | null;
    /**
     * A linked Actor document that is this user's impersonated character.
     */
    character?: BaseActor;
    /**
     * A color to represent this user.
     */
    color: string;
    /**
     * A mapping of hotbar slot number to Macro id for the user.
     */
    hotbar: object;
    /**
     * The user's individual permission configuration, see CONST.USER_PERMISSIONS.
     */
    permissions: object;
    /**
     * The user's role, see CONST.USER_ROLES.
     */
    role: number;
    /**
     * An object of optional key/value flags.
     */
    flags?: object;
    /**
     * An object of creation and access information
     */
    _stats?: DocumentStats;
};
/**
 * @typedef {Object} UserData
 * @property {string} _id                 The _id which uniquely identifies this User document.
 * @property {string} name                The user's name.
 * @property {string} [password]          The user's password. Available only on the Server side for security.
 * @property {string} [passwordSalt]      The user's password salt. Available only on the Server side for security.
 * @property {string|null} [avatar]       The user's avatar image.
 * @property {BaseActor} [character]      A linked Actor document that is this user's impersonated character.
 * @property {string} color               A color to represent this user.
 * @property {object} hotbar              A mapping of hotbar slot number to Macro id for the user.
 * @property {object} permissions         The user's individual permission configuration, see CONST.USER_PERMISSIONS.
 * @property {number} role                The user's role, see CONST.USER_ROLES.
 * @property {object} [flags]             An object of optional key/value flags.
 * @property {DocumentStats} [_stats]     An object of creation and access information
 */
/**
 * The Document definition for a User.
 * Defines the DataSchema and common behaviors for a User which are shared between both client and server.
 * @extends abstract.Document
 * @mixes UserData
 * @memberof documents
 *
 * @param {UserData} data                         Initial data from which to construct the User
 * @param {DocumentConstructionContext} context   Construction context options
 */
declare class BaseUser {
    /** @inheritdoc */
    static metadata: any;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        role: fields.NumberField;
        password: fields.StringField;
        passwordSalt: fields.StringField;
        avatar: fields.FilePathField;
        character: fields.ForeignDocumentField;
        color: fields.ColorField;
        pronouns: fields.StringField;
        hotbar: fields.ObjectField;
        permissions: fields.ObjectField;
        flags: fields.ObjectField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * Validate the structure of the User hotbar object
     * @param {object} bar      The attempted hotbar data
     * @return {boolean}
     * @private
     */
    private static "__#17@#validateHotbar";
    /**
     * Validate the structure of the User permissions object
     * @param {object} perms      The attempted permissions data
     * @return {boolean}
     * @private
     */
    private static "__#17@#validatePermissions";
    /**
     * Is a user able to create an existing User?
     * @param {BaseUser} user    The user attempting the creation.
     * @param {BaseUser} doc     The User document being created.
     * @param {object} data      The supplied creation data.
     * @private
     */
    private static "__#17@#canCreate";
    /**
     * Is a user able to update an existing User?
     * @param {BaseUser} user    The user attempting the update.
     * @param {BaseUser} doc     The User document being updated.
     * @param {object} changes   Proposed changes.
     * @private
     */
    private static "__#17@#canUpdate";
    /**
     * Is a user able to delete an existing User?
     * Only Assistants and Gamemasters can delete users, and only if the target user has a lesser or equal role.
     * @param {BaseUser} user   The user attempting the deletion.
     * @param {BaseUser} doc    The User document being deleted.
     * @private
     */
    private static "__#17@#canDelete";
    /**
     * Test whether the User has a GAMEMASTER or ASSISTANT role in this World?
     * @type {boolean}
     */
    get isGM(): boolean;
    /**
     * Test whether the User is able to perform a certain permission action.
     * The provided permission string may pertain to an explicit permission setting or a named user role.
     * Alternatively, Gamemaster users are assumed to be allowed to take all actions.
     *
     * @param {string} action         The action to test
     * @return {boolean}              Does the user have the ability to perform this action?
     */
    can(action: string): boolean;
    /** @inheritdoc */
    getUserLevel(user: any): number;
    /**
     * Test whether the User has at least a specific permission
     * @param {string} permission    The permission name from USER_PERMISSIONS to test
     * @return {boolean}             Does the user have at least this permission
     */
    hasPermission(permission: string): boolean;
    /**
     * Test whether the User has at least the permission level of a certain role
     * @param {string|number} role    The role name from USER_ROLES to test
     * @param {boolean} [exact]       Require the role match to be exact
     * @return {boolean}              Does the user have at this role level (or greater)?
     */
    hasRole(role: string | number, { exact }?: boolean): boolean;
}
import BaseActor from "./actor.mjs";
import * as fields from "../data/fields.mjs";
