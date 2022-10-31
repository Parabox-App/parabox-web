/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * KEY provides normalized string values for keys.
 */
export declare const KEY: {
    UNKNOWN: string;
    BACKSPACE: string;
    ENTER: string;
    SPACEBAR: string;
    PAGE_UP: string;
    PAGE_DOWN: string;
    END: string;
    HOME: string;
    ARROW_LEFT: string;
    ARROW_UP: string;
    ARROW_RIGHT: string;
    ARROW_DOWN: string;
    DELETE: string;
    ESCAPE: string;
    TAB: string;
};
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
export declare function normalizeKey(evt: KeyboardEvent): string;
/**
 * isNavigationEvent returns whether the event is a navigation event
 */
export declare function isNavigationEvent(evt: KeyboardEvent): boolean;
