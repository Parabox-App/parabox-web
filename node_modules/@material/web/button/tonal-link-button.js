/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
import { TonalLinkButton } from './lib/tonal-link-button.js';
import { styles as tonalStyles } from './lib/tonal-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdTonalLinkButton = class MdTonalLinkButton extends TonalLinkButton {
};
MdTonalLinkButton.styles = [sharedStyles, tonalStyles];
MdTonalLinkButton = __decorate([
    customElement('md-tonal-link-button')
], MdTonalLinkButton);
export { MdTonalLinkButton };
//# sourceMappingURL=tonal-link-button.js.map