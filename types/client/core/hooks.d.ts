/**
 * @typedef {object} HookedFunction
 * @property {string} hook
 * @property {number} id
 * @property {Function} fn
 * @property {boolean} once
 */
/**
 * A simple event framework used throughout Foundry Virtual Tabletop.
 * When key actions or events occur, a "hook" is defined where user-defined callback functions can execute.
 * This class manages the registration and execution of hooked callback functions.
 */
declare class Hooks {
    /**
     * A mapping of hook events which have functions registered to them.
     * @type {Object<HookedFunction[]>}
     */
    static get events(): any;
    /**
     * @type {Object<HookedFunction[]>}
     * @protected
     * @ignore
     */
    protected static "__#49@#events": any;
    /**
     * A mapping of hooked functions by their assigned ID
     * @type {Map<number, HookedFunction>}
     */
    static "__#49@#ids": Map<number, HookedFunction>;
    /**
     * An incrementing counter for assigned hooked function IDs
     * @type {number}
     */
    static "__#49@#id": number;
    /**
     * Register a callback handler which should be triggered when a hook is triggered.
     * @param {string} hook     The unique name of the hooked event
     * @param {Function} fn     The callback function which should be triggered when the hook event occurs
     * @param {object} options  Options which customize hook registration
     * @param {boolean} options.once  Only trigger the hooked function once
     * @returns {number}      An ID number of the hooked function which can be used to turn off the hook later
     */
    static on(hook: string, fn: Function, { once }?: {
        once: boolean;
    }): number;
    static on(hook: string, fn: Function, { once }?: {
        once: boolean;
    }): number;
    /**
     * Register a callback handler for an event which is only triggered once the first time the event occurs.
     * An alias for Hooks.on with {once: true}
     * @param {string} hook   The unique name of the hooked event
     * @param {Function} fn   The callback function which should be triggered when the hook event occurs
     * @returns {number}      An ID number of the hooked function which can be used to turn off the hook later
     */
    static once(hook: string, fn: Function): number;
    static once(hook: string, fn: Function): number;
    /**
     * Unregister a callback handler for a particular hook event
     * @param {string} hook           The unique name of the hooked event
     * @param {Function|number} fn    The function, or ID number for the function, that should be turned off
     */
    static off(hook: string, fn: Function | number): void;
    static off(hook: string, fn: number | Function): void;
    /**
     * Call all hook listeners in the order in which they were registered
     * Hooks called this way can not be handled by returning false and will always trigger every hook callback.
     *
     * @param {string} hook   The hook being triggered
     * @param {...*} args     Arguments passed to the hook callback functions
     * @returns {boolean}     Were all hooks called without execution being prevented?
     */
    static callAll(hook: string, ...args: any[]): boolean;
    static callAll(hook: string, ...args: any[]): boolean;
    /**
     * Call hook listeners in the order in which they were registered.
     * Continue calling hooks until either all have been called or one returns false.
     *
     * Hook listeners which return false denote that the original event has been adequately handled and no further
     * hooks should be called.
     *
     * @param {string} hook   The hook being triggered
     * @param {...*} args     Arguments passed to the hook callback functions
     * @returns {boolean}     Were all hooks called without execution being prevented?
     */
    static call(hook: string, ...args: any[]): boolean;
    static call(hook: string, ...args: any[]): boolean;
    /**
     * Call a hooked function using provided arguments and perhaps unregister it.
     * @param {HookedFunction} entry    The hooked function entry
     * @param {any[]} args              Arguments to be passed
     * @protected
     */
    protected static "__#49@#call"(entry: HookedFunction, args: any[]): any;
    /**
     * Notify subscribers that an error has occurred within foundry.
     * @param {string} location                The method where the error was caught.
     * @param {Error} error                    The error.
     * @param {object} [options={}]            Additional options to configure behaviour.
     * @param {string} [options.msg=""]        A message which should prefix the resulting error or notification.
     * @param {?string} [options.log=null]     The level at which to log the error to console (if at all).
     * @param {?string} [options.notify=null]  The level at which to spawn a notification in the UI (if at all).
     * @param {object} [options.data={}]       Additional data to pass to the hook subscribers.
     */
    static onError(location: string, error: Error, { msg, notify, log, ...data }?: {
        msg?: string;
        log?: string | null;
        notify?: string | null;
        data?: object;
    }): void;
    static onError(location: string, error: Error, { msg, notify, log, ...data }?: {
        msg?: string;
        log?: string;
        notify?: string;
        data?: any;
    }): void;
    protected static "__#109@#events": any;
    static "__#109@#ids": Map<number, HookedFunction>;
    static "__#109@#id": number;
    protected static "__#109@#call"(entry: HookedFunction, args: any[]): any;
}
type HookedFunction = {
    hook: string;
    id: number;
    fn: Function;
    once: boolean;
};
