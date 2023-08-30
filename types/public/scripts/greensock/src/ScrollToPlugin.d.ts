export namespace ScrollToPlugin {
    export { _max as max };
    export { _getOffset as getOffset };
    export { _buildGetter as buildGetter };
}
export { ScrollToPlugin as default };
/*!
 * ScrollToPlugin 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _max(element: any, axis: any): number;
/*!
 * ScrollToPlugin 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _getOffset(element: any, container: any): {
    x: number;
    y: number;
};
/*!
 * ScrollToPlugin 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
declare function _buildGetter(e: any, axis: any): () => any;
