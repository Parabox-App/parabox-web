/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { FilledLinkButton } from './lib/filled-link-button.js';
import { styles as filledStyles } from './lib/filled-styles.css.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFilledLinkButton = class MdFilledLinkButton extends FilledLinkButton {
};
MdFilledLinkButton.styles = [sharedStyles, filledStyles];
MdFilledLinkButton = __decorate([
    customElement('md-filled-link-button')
], MdFilledLinkButton);
export { MdFilledLinkButton };
//# sourceMappingURL=filled-link-button.js.map