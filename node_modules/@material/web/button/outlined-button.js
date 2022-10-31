/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { OutlinedButton } from './lib/outlined-button.js';
import { styles as outlinedStyles } from './lib/outlined-styles.css.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdOutlinedButton = class MdOutlinedButton extends OutlinedButton {
};
MdOutlinedButton.styles = [sharedStyles, outlinedStyles];
MdOutlinedButton = __decorate([
    customElement('md-outlined-button')
], MdOutlinedButton);
export { MdOutlinedButton };
//# sourceMappingURL=outlined-button.js.map