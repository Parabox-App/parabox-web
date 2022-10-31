/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { styles } from './lib/filled-styles.css.js';
import { LinkIconButton } from './lib/link-icon-button.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
/** @soyCompatible */
let MdFilledLinkIconButton = class MdFilledLinkIconButton extends LinkIconButton {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled': true,
        };
    }
};
MdFilledLinkIconButton.styles = [sharedStyles, styles];
MdFilledLinkIconButton = __decorate([
    customElement('md-filled-link-icon-button')
], MdFilledLinkIconButton);
export { MdFilledLinkIconButton };
//# sourceMappingURL=filled-link-icon-button.js.map