/**
 * The Camera UI View that displays all the camera feeds as individual video elements.
 * @type {Application}
 *
 * @param {WebRTC} webrtc                 The WebRTC Implementation to display
 * @param {ApplicationOptions} [options]  Application configuration options.
 */
declare class CameraViews extends Application {
    /** @override */
    static override get defaultOptions(): any;
    /**
     * A custom sorting function that orders/arranges the user display frames
     * @return {number}
     * @private
     */
    private static _sortUsers;
    /**
     * A reference to the master AV orchestrator instance
     * @type {AVMaster}
     */
    get webrtc(): AVMaster;
    /**
     * If all camera views are popped out, hide the dock.
     * @type {boolean}
     */
    get hidden(): boolean;
    /**
     * Obtain a reference to the div.camera-view which is used to portray a given Foundry User.
     * @param {string} userId     The ID of the User document
     * @return {HTMLElement|null}
     */
    getUserCameraView(userId: string): HTMLElement | null;
    /**
     * Obtain a reference to the video.user-camera which displays the video channel for a requested Foundry User.
     * If the user is not broadcasting video this will return null.
     * @param {string} userId     The ID of the User document
     * @return {HTMLVideoElement|null}
     */
    getUserVideoElement(userId: string): HTMLVideoElement | null;
    /**
     * Sets whether a user is currently speaking or not
     *
     * @param {string} userId     The ID of the user
     * @param {boolean} speaking  Whether the user is speaking
     */
    setUserIsSpeaking(userId: string, speaking: boolean): void;
    /**
     * Extend the render logic to first check whether a render is necessary based on the context
     * If a specific context was provided, make sure an update to the navigation is necessary before rendering
     */
    render(force: any, context?: {}): any;
    /** @override */
    override _render(force?: boolean, options?: {}): Promise<void>;
    /** @inheritdoc */
    setPosition({ left, top, width, scale }?: {
        left: any;
        top: any;
        width: any;
        scale: any;
    }): void | {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
    };
    /** @override */
    override getData(options?: {}): {
        self: User;
        muteAll: any;
        borderColors: any;
        dockClass: string;
        hidden: boolean;
        users: any[];
        nameplates: {
            cssClass: any;
            playerName: boolean;
            charname: boolean;
        };
    };
    maxZ: number;
    /**
     * Prepare rendering data for a single user
     * @private
     */
    private _getDataForUser;
    /** @override */
    override activateListeners(html: any): void;
    /**
     * On hover in a camera container, show/hide the controls.
     * @event {Event} event   The original mouseover or mouseout hover event
     * @private
     */
    private _onCameraViewHover;
    /**
     * On clicking on a toggle, disable/enable the audio or video stream.
     * @event {MouseEvent} event   The originating click event
     * @private
     */
    private _onClickControl;
    /**
     * Change volume control for a stream
     * @param {Event} event   The originating change event from interaction with the range input
     * @private
     */
    private _onVolumeChange;
    /**
     * Dynamically refresh the state of a single camera view
     * @param {string} userId  The ID of the user whose view we want to refresh.
     * @protected
     */
    protected _refreshView(userId: string): void;
    /**
     * Render changes needed to the PlayerList ui.
     * Show/Hide players depending on option.
     * @private
     */
    private _setPlayerListVisibility;
    /**
     * Get the icon class that should be used for various action buttons with different toggled states.
     * The returned icon should represent the visual status of the NEXT state (not the CURRENT state).
     *
     * @param {string} action     The named av-control button action
     * @param {boolean} state     The CURRENT action state.
     * @returns {string}          The icon that represents the NEXT action state.
     * @protected
     */
    protected _getToggleIcon(action: string, state: boolean): string;
    /**
     * Get the text title that should be used for various action buttons with different toggled states.
     * The returned title should represent the tooltip of the NEXT state (not the CURRENT state).
     *
     * @param {string} action     The named av-control button action
     * @param {boolean} state     The CURRENT action state.
     * @returns {string}          The icon that represents the NEXT action state.
     * @protected
     */
    protected _getToggleTooltip(action: string, state: boolean): string;
    /**
     * Show or hide UI control elements
     * This replaces the use of jquery.show/hide as it simply adds a class which has display:none
     * which allows us to have elements with display:flex which can be hidden then shown without
     * breaking their display style.
     * This will show/hide the toggle buttons, volume controls and overlay sidebars
     * @param {jQuery} container    The container for which to show/hide control elements
     * @param {boolean} show        Whether to show or hide the controls
     * @param {string} selector     Override selector to specify which controls to show or hide
     * @private
     */
    private _toggleControlVisibility;
}
