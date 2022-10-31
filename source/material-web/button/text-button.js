/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
import { TextButton } from './lib/text-button.js';
import { styles as textStyles } from './lib/text-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdTextButton = class MdTextButton extends TextButton {
};
MdTextButton.styles = [sharedStyles, textStyles];
MdTextButton = __decorate([
    customElement('md-text-button')
], MdTextButton);
export { MdTextButton };
//# sourceMappingURL=text-button.js.map