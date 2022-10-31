/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
import { TonalButton } from './lib/tonal-button.js';
import { styles as tonalStyles } from './lib/tonal-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdTonalButton = class MdTonalButton extends TonalButton {
};
MdTonalButton.styles = [sharedStyles, tonalStyles];
MdTonalButton = __decorate([
    customElement('md-tonal-button')
], MdTonalButton);
export { MdTonalButton };
//# sourceMappingURL=tonal-button.js.map