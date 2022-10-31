/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
import { TextLinkButton } from './lib/text-link-button.js';
import { styles as textStyles } from './lib/text-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdTextLinkButton = class MdTextLinkButton extends TextLinkButton {
};
MdTextLinkButton.styles = [sharedStyles, textStyles];
MdTextLinkButton = __decorate([
    customElement('md-text-link-button')
], MdTextLinkButton);
export { MdTextLinkButton };
//# sourceMappingURL=text-link-button.js.map