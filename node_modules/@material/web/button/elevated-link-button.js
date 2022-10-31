/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { styles as elevationOverlayStyles } from '../elevation/lib/elevation-overlay-styles.css.js';
import { ElevatedLinkButton } from './lib/elevated-link-button.js';
import { styles as elevatedStyles } from './lib/elevated-styles.css.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdElevatedLinkButton = class MdElevatedLinkButton extends ElevatedLinkButton {
};
MdElevatedLinkButton.styles = [elevationOverlayStyles, sharedStyles, elevatedStyles];
MdElevatedLinkButton = __decorate([
    customElement('md-elevated-link-button')
], MdElevatedLinkButton);
export { MdElevatedLinkButton };
//# sourceMappingURL=elevated-link-button.js.map