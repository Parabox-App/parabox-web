/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { IconButton } from './lib/icon-button.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
import { styles } from './lib/outlined-styles.css.js';
/** @soyCompatible */
let MdOutlinedIconButton = class MdOutlinedIconButton extends IconButton {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--outlined': true,
        };
    }
};
MdOutlinedIconButton.styles = [sharedStyles, styles];
MdOutlinedIconButton = __decorate([
    customElement('md-outlined-icon-button')
], MdOutlinedIconButton);
export { MdOutlinedIconButton };
//# sourceMappingURL=outlined-icon-button.js.map