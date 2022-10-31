/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { styles } from './lib/filled-tonal-styles.css.js';
import { IconButton } from './lib/icon-button.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
/** @soyCompatible */
let MdFilledTonalIconButton = class MdFilledTonalIconButton extends IconButton {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled-tonal': true,
        };
    }
};
MdFilledTonalIconButton.styles = [sharedStyles, styles];
MdFilledTonalIconButton = __decorate([
    customElement('md-filled-tonal-icon-button')
], MdFilledTonalIconButton);
export { MdFilledTonalIconButton };
//# sourceMappingURL=filled-tonal-icon-button.js.map