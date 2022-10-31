/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
import { IconButtonToggle } from './lib/icon-button-toggle.js';
import { styles } from './lib/standard-styles.css.js';
/** @soyCompatible */
let MdStandardIconButtonToggle = class MdStandardIconButtonToggle extends IconButtonToggle {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--standard': true,
        };
    }
};
MdStandardIconButtonToggle.styles = [sharedStyles, styles];
MdStandardIconButtonToggle = __decorate([
    customElement('md-standard-icon-button-toggle')
], MdStandardIconButtonToggle);
export { MdStandardIconButtonToggle };
//# sourceMappingURL=standard-icon-button-toggle.js.map