/**
 * Process the image compression.
 * @param {object} options
 * @param {Uint8ClampedArray} options.buffer              Buffer used to create the image data.
 * @param {number} options.width                          Buffered image width.
 * @param {number} options.height                         Buffered image height.
 * @param {string} [options.type="image/png"]             The required image type.
 * @param {number} [options.quality=1]                    The required image quality.
 * @param {boolean} [options.debug]                       The debug option.
 * @param {string} [hash]                                 Hash to test.
 */
declare function processBufferToBase64({ buffer, width, height, type, quality, debug, hash, readFormat }?: {
    buffer: Uint8ClampedArray;
    width: number;
    height: number;
    type?: string;
    quality?: number;
    debug?: boolean;
}): Promise<{
    base64img: string;
    buffer: Uint8ClampedArray;
    hash: any;
    transfer: ArrayBufferLike[];
}>;
/**
 * Expand a single RED channel buffer into a RGBA buffer and returns it to the main thread.
 * The created RGBA buffer is transfered.
 * @param {object} options
 * @param {Uint8ClampedArray} options.buffer       Buffer to expand.
 * @param {number} options.width                   Width of the image.
 * @param {number} options.height                  Height of the image.
 * @param {boolean} [options.debug]                Debug option.
 * @param {string}  [hash]                         Hash to test.
 * @returns {object<Uint8ClampedArray, Uint8ClampedArray, Uint8ClapedArray[]>}
 */
declare function processBufferRedToBufferRGBA({ buffer, width, height, debug, hash }?: {
    buffer: Uint8ClampedArray;
    width: number;
    height: number;
    debug?: boolean;
}): object;
/**
 * Reduce a RGBA buffer into a single RED buffer and returns it to the main thread.
 * The created RGBA buffer is transfered.
 * @param {object} options
 * @param {Uint8ClampedArray} options.buffer       Buffer to expand.
 * @param {number} options.width                   Width of the image.
 * @param {number} options.height                  Height of the image.
 * @param {boolean} [options.debug]                Debug option.
 * @param {string}  [hash]                         Hash to test.
 * @returns {object<Uint8ClampedArray, Uint8ClampedArray, Uint8ClapedArray[]>}
 */
declare function processBufferRGBAToBufferRED({ buffer, width, height, debug, hash }?: {
    buffer: Uint8ClampedArray;
    width: number;
    height: number;
    debug?: boolean;
}): object;
/**
 * Control the hash of a provided buffer.
 * @param {Uint8ClampedArray} buffer                 Buffer to control.
 * @param {string} [hash]                            Hash to test.
 * @returns {{} | {same: boolean, hash: string}}     Returns an empty object if not control is made
 *                                                   else returns {same: <boolean to know if the hashes are the same>,
 *                                                                 hash: <the previous or the new hash>}
 */
declare function controlHashes(buffer: Uint8ClampedArray, hash?: string): {} | {
    same: boolean;
    hash: string;
};
/**
 * Create an offscreen canvas element containing the pixel data.
 * @param {Uint8ClampedArray} buffer              Buffer used to create the image data.
 * @param {number} width                          Buffered image width.
 * @param {number} height                         Buffered image height.
 * @param {object} [options]
 * @returns {OffscreenCanvas}
 */
declare function pixelsToOffscreenCanvas(buffer: Uint8ClampedArray, width: number, height: number, options?: object): OffscreenCanvas;
/**
 * Asynchronously convert a canvas element to base64.
 * @param {OffscreenCanvas} offscreen
 * @param {string} [type="image/png"]
 * @param {number} [quality]
 * @param {object} [options]
 * @returns {Promise<string>} The base64 string of the canvas.
 */
declare function offscreenToBase64(offscreen: OffscreenCanvas, type?: string, quality?: number, options?: object): Promise<string>;
/**
 * Convert a blob to a base64 string.
 * @param {Blob} blob
 * @returns {Promise}
 */
declare function blobToBase64(blob: Blob): Promise<any>;
/**
 * Expand a single RED channel buffer into a RGBA buffer.
 * @param {Uint8ClampedArray} buffer
 * @param {number} width
 * @param {number} height
 * @param {object} [options]
 * @returns {Uint8ClampedArray}
 */
declare function expandBuffer(buffer: Uint8ClampedArray, width: number, height: number, options?: object): Uint8ClampedArray;
/**
 * Reduce a RGBA channel buffer into a RED buffer.
 * @param {Uint8ClampedArray} buffer
 * @param {number} width
 * @param {number} height
 * @param {object} [options]
 * @returns {Uint8ClampedArray}
 */
declare function reduceBuffer(buffer: Uint8ClampedArray, width: number, height: number, options?: object): Uint8ClampedArray;
/**
 * Some texture formats
 */
type FORMATS = number;
declare namespace FORMATS {
    let RED: number;
    let RGBA: number;
}
