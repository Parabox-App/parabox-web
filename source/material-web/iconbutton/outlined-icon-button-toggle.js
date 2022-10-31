/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
import { IconButtonToggle } from './lib/icon-button-toggle.js';
import { styles } from './lib/outlined-styles.css.js';
/** @soyCompatible */
let MdOutlinedIconButtonToggle = class MdOutlinedIconButtonToggle extends IconButtonToggle {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--outlined': true,
        };
    }
};
MdOutlinedIconButtonToggle.styles = [sharedStyles, styles];
MdOutlinedIconButtonToggle = __decorate([
    customElement('md-outlined-icon-button-toggle')
], MdOutlinedIconButtonToggle);
export { MdOutlinedIconButtonToggle };
//# sourceMappingURL=outlined-icon-button-toggle.js.map