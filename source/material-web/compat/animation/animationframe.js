/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * AnimationFrame provides a user-friendly abstraction around requesting
 * and canceling animation frames.
 */
export class AnimationFrame {
    constructor() {
        this.rafIDs = new Map();
    }
    /**
     * Requests an animation frame. Cancels any existing frame with the same key.
     * @param {string} key The key for this callback.
     * @param {FrameRequestCallback} callback The callback to be executed.
     */
    request(key, callback) {
        this.cancel(key);
        const frameID = requestAnimationFrame((frame) => {
            this.rafIDs.delete(key);
            // Callback must come *after* the key is deleted so that nested calls to
            // request with the same key are not deleted.
            callback(frame);
        });
        this.rafIDs.set(key, frameID);
    }
    /**
     * Cancels a queued callback with the given key.
     * @param {string} key The key for this callback.
     */
    cancel(key) {
        const rafID = this.rafIDs.get(key);
        if (rafID) {
            cancelAnimationFrame(rafID);
            this.rafIDs.delete(key);
        }
    }
    /**
     * Cancels all queued callback.
     */
    cancelAll() {
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach((_, key) => {
            this.cancel(key);
        });
    }
    /**
     * Returns the queue of unexecuted callback keys.
     */
    getQueue() {
        const queue = [];
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach((_, key) => {
            queue.push(key);
        });
        return queue;
    }
}
//# sourceMappingURL=animationframe.js.map