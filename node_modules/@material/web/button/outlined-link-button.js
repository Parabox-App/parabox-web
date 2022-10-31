/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { OutlinedLinkButton } from './lib/outlined-link-button.js';
import { styles as outlinedStyles } from './lib/outlined-styles.css.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdOutlinedLinkButton = class MdOutlinedLinkButton extends OutlinedLinkButton {
};
MdOutlinedLinkButton.styles = [sharedStyles, outlinedStyles];
MdOutlinedLinkButton = __decorate([
    customElement('md-outlined-link-button')
], MdOutlinedLinkButton);
export { MdOutlinedLinkButton };
//# sourceMappingURL=outlined-link-button.js.map