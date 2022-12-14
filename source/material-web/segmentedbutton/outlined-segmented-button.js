/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { OutlinedSegmentedButton } from './lib/outlined-segmented-button.js';
import { styles as outlinedStyles } from './lib/outlined-styles.css.js';
import { styles as sharedStyles } from './lib/segmented-button-styles.css.js';
/**
 * MdOutlinedSegmentedButton is the custom element for the Material
 * Design outlined segmented button component.
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdOutlinedSegmentedButton = class MdOutlinedSegmentedButton extends OutlinedSegmentedButton {
};
MdOutlinedSegmentedButton.styles = [sharedStyles, outlinedStyles];
MdOutlinedSegmentedButton = __decorate([
    customElement('md-outlined-segmented-button')
], MdOutlinedSegmentedButton);
export { MdOutlinedSegmentedButton };
//# sourceMappingURL=outlined-segmented-button.js.map