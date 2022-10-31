/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { FilledButton } from './lib/filled-button.js';
import { styles as filledStyles } from './lib/filled-styles.css.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFilledButton = class MdFilledButton extends FilledButton {
};
MdFilledButton.styles = [sharedStyles, filledStyles];
MdFilledButton = __decorate([
    customElement('md-filled-button')
], MdFilledButton);
export { MdFilledButton };
//# sourceMappingURL=filled-button.js.map