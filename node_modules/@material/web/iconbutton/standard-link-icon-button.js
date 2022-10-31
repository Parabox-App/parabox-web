/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
import { LinkIconButton } from './lib/link-icon-button.js';
import { styles } from './lib/standard-styles.css.js';
/** @soyCompatible */
let MdStandardLinkIconButton = class MdStandardLinkIconButton extends LinkIconButton {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--standard': true,
        };
    }
};
MdStandardLinkIconButton.styles = [sharedStyles, styles];
MdStandardLinkIconButton = __decorate([
    customElement('md-standard-link-icon-button')
], MdStandardLinkIconButton);
export { MdStandardLinkIconButton };
//# sourceMappingURL=standard-link-icon-button.js.map