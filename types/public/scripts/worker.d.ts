/**
 * Handle the initialization workflow for a new Worker
 * @param {object} [options={}]     Options which configure worker initialization
 * @param {number} [options.taskId]          The task ID being performed
 * @param {string} [options.workerName]      The worker name
 * @param {boolean} [options.debug]          Should the worker run in debug mode?
 * @param {boolean} [options.loadPrimitives] Should we automatically load primitives from module.mjs?
 * @param {string[]} [options.scripts]        An array of scripts to import.
 * @private
 */
declare function _handleInitializeWorker({ taskId, workerName, debug, loadPrimitives, scripts }?: {
    taskId?: number;
    workerName?: string;
    debug?: boolean;
    loadPrimitives?: boolean;
    scripts?: string[];
}): Promise<{
    taskId: number;
}>;
/**
 * Currently Chrome and Safari support web worker modules which can use ES Module imports directly.
 * Firefox lags behind and this feature is not yet implemented: https://bugzilla.mozilla.org/show_bug.cgi?id=1247687
 * FIXME: Once Firefox supports module workers, we can import commons libraries into workers directly.
 * Until then, this is a hacky workaround to parse the source script into the global namespace of the worker thread.
 * @param {string} path           The commons ES Module to load
 * @returns {Promise<void>}       A Promise that resolves once the module has been "loaded"
 * @private
 */
declare function _loadLibrary(path: string): Promise<void>;
/**
 * Handle a request from the main thread to load a function into Worker memory.
 * @param {object} [options={}]
 * @param {number} [options.taskId]         The task ID being performed
 * @param {string} [options.functionName]   The name that the function should assume in the Worker global scope
 * @param {string} [options.functionBody]   The content of the function to be parsed.
 * @private
 */
declare function _handleLoadFunction({ taskId, functionName, functionBody }?: {
    taskId?: number;
    functionName?: string;
    functionBody?: string;
}): Promise<{
    taskId: number;
}>;
/**
 * Handle a request from the main thread to execute a function with provided parameters.
 * @param {object}   [options={}]
 * @param {number}   [options.taskId]         The task ID being performed
 * @param {string}   [options.functionName]   The name that the function should assume in the Worker global scope
 * @param {Array<*>} [options.args]           An array of arguments passed to the function
 * @private
 */
declare function _handleExecuteFunction({ taskId, functionName, args }?: {
    taskId?: number;
    functionName?: string;
    args?: Array<any>;
}): Promise<{
    taskId: number;
    result: any;
    error?: undefined;
} | {
    taskId: number;
    error: any;
    result?: undefined;
}>;
/**
 * Supported worker task actions
 */
type WORKER_TASK_ACTIONS = string;
declare namespace WORKER_TASK_ACTIONS {
    let INIT: string;
    let LOAD: string;
    let EXECUTE: string;
}
/**
 * The name of this Worker thread
 * @type {string}
 */
declare let _workerName: string;
/**
 * Is this Worker operating in debug mode?
 * @type {boolean}
 */
declare let _debug: boolean;
/**
 * A registry of loaded functions
 * @type {Map<string, Function>}
 */
declare const functions: Map<string, Function>;
