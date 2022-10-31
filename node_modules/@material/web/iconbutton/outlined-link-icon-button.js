/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
import { LinkIconButton } from './lib/link-icon-button.js';
import { styles } from './lib/outlined-styles.css.js';
/** @soyCompatible */
let MdOutlinedLinkIconButton = class MdOutlinedLinkIconButton extends LinkIconButton {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--outlined': true,
        };
    }
};
MdOutlinedLinkIconButton.styles = [sharedStyles, styles];
MdOutlinedLinkIconButton = __decorate([
    customElement('md-outlined-link-icon-button')
], MdOutlinedLinkIconButton);
export { MdOutlinedLinkIconButton };
//# sourceMappingURL=outlined-link-icon-button.js.map