/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { styles } from './lib/filled-tonal-styles.css.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
import { IconButtonToggle } from './lib/icon-button-toggle.js';
/** @soyCompatible */
let MdFilledTonalIconButtonToggle = class MdFilledTonalIconButtonToggle extends IconButtonToggle {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled-tonal': true,
            'md3-icon-button--toggle-filled-tonal': true,
        };
    }
};
MdFilledTonalIconButtonToggle.styles = [sharedStyles, styles];
MdFilledTonalIconButtonToggle = __decorate([
    customElement('md-filled-tonal-icon-button-toggle')
], MdFilledTonalIconButtonToggle);
export { MdFilledTonalIconButtonToggle };
//# sourceMappingURL=filled-tonal-icon-button-toggle.js.map