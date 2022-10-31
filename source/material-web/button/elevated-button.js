/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { styles as elevationOverlayStyles } from '../elevation/lib/elevation-overlay-styles.css.js';
import { ElevatedButton } from './lib/elevated-button.js';
import { styles as elevatedStyles } from './lib/elevated-styles.css.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdElevatedButton = class MdElevatedButton extends ElevatedButton {
};
MdElevatedButton.styles = [elevationOverlayStyles, sharedStyles, elevatedStyles];
MdElevatedButton = __decorate([
    customElement('md-elevated-button')
], MdElevatedButton);
export { MdElevatedButton };
//# sourceMappingURL=elevated-button.js.map