declare class SocketInterface {
    /**
     * Standardize the way that socket messages are dispatched and their results are handled
     * @param {string} eventName          The socket event name being handled
     * @param {SocketRequest} request     Data provided to the Socket event
     * @returns {Promise<SocketResponse>} A Promise which resolves to the SocketResponse
     */
    static dispatch(eventName: string, request: SocketRequest): Promise<SocketResponse>;
    /**
     * Handle an error returned from the database, displaying it on screen and in the console
     * @param {Error} err   The provided Error message
     * @protected
     */
    protected static _handleError(err: Error): Error;
}
