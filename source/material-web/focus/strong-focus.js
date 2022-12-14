/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class FocusGlobal {
    constructor() {
        this.visible = false;
    }
    setVisible(visible) {
        this.visible = visible;
    }
}
/**
 * This object can be overwritten by the `setup()` function to use a different
 * focus coordination object.
 */
let focusObject = new FocusGlobal();
/**
 * Set of keyboard event codes that correspond to keyboard navigation
 */
const KEYBOARD_NAVIGATION_KEYS = new Set(['Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']);
const KEYDOWN_HANDLER = (e) => {
    if (KEYBOARD_NAVIGATION_KEYS.has(e.key)) {
        focusObject.setVisible(true);
    }
};
/**
 * Set up integration with alternate global focus tracking object
 *
 * @param focusGlobal A global focus object to coordinate between multiple
 *     systems
 * @param enableKeydownHandler Set to true to let StrongFocusService listen for
 *     keyboard navigation
 */
export function setup(focusGlobal, enableKeydownHandler = false) {
    focusObject = focusGlobal;
    if (enableKeydownHandler) {
        window.addEventListener('keydown', KEYDOWN_HANDLER);
    }
    else {
        window.removeEventListener('keydown', KEYDOWN_HANDLER);
    }
}
/**
 * Setting for always showing strong focus
 *
 * Defaults to false, controlled by `setForceStrongFocus`
 */
let alwaysStrong = false;
/**
 * Returns `true` if the component should show strong focus.
 *
 * By default, strong focus is shown only on keyboard navigation, and not on
 * pointer interaction.
 */
export function shouldShowStrongFocus() {
    return alwaysStrong || focusObject.visible;
}
/**
 * Control if strong focus should always be shown on component focus
 *
 * Defaults to `false`
 */
export function setForceStrongFocus(force) {
    alwaysStrong = force;
}
/**
 * If `true`, strong focus is always shown
 */
export function isStrongFocusForced() {
    return alwaysStrong;
}
/**
 * Components should call this when a user interacts with a component with a
 * pointing device.
 *
 * By default, this will prevent the strong focus from being shown.
 */
export function pointerPress() {
    focusObject.setVisible(false);
}
setup(focusObject, true);
//# sourceMappingURL=strong-focus.js.map