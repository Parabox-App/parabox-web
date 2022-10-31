/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { styles } from './lib/filled-styles.css.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
import { IconButtonToggle } from './lib/icon-button-toggle.js';
/** @soyCompatible */
let MdFilledIconButtonToggle = class MdFilledIconButtonToggle extends IconButtonToggle {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled': true,
            'md3-icon-button--toggle-filled': true,
        };
    }
};
MdFilledIconButtonToggle.styles = [sharedStyles, styles];
MdFilledIconButtonToggle = __decorate([
    customElement('md-filled-icon-button-toggle')
], MdFilledIconButtonToggle);
export { MdFilledIconButtonToggle };
//# sourceMappingURL=filled-icon-button-toggle.js.map