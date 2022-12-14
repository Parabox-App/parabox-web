/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
interface StrongFocus {
    visible: boolean;
    setVisible(visible: boolean): void;
}
/**
 * Set up integration with alternate global focus tracking object
 *
 * @param focusGlobal A global focus object to coordinate between multiple
 *     systems
 * @param enableKeydownHandler Set to true to let StrongFocusService listen for
 *     keyboard navigation
 */
export declare function setup(focusGlobal: StrongFocus, enableKeydownHandler?: boolean): void;
/**
 * Returns `true` if the component should show strong focus.
 *
 * By default, strong focus is shown only on keyboard navigation, and not on
 * pointer interaction.
 */
export declare function shouldShowStrongFocus(): boolean;
/**
 * Control if strong focus should always be shown on component focus
 *
 * Defaults to `false`
 */
export declare function setForceStrongFocus(force: boolean): void;
/**
 * If `true`, strong focus is always shown
 */
export declare function isStrongFocusForced(): boolean;
/**
 * Components should call this when a user interacts with a component with a
 * pointing device.
 *
 * By default, this will prevent the strong focus from being shown.
 */
export declare function pointerPress(): void;
export {};
