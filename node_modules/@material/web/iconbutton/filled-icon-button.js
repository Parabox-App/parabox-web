/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { styles } from './lib/filled-styles.css.js';
import { IconButton } from './lib/icon-button.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
/** @soyCompatible */
let MdFilledIconButton = class MdFilledIconButton extends IconButton {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled': true,
        };
    }
};
MdFilledIconButton.styles = [sharedStyles, styles];
MdFilledIconButton = __decorate([
    customElement('md-filled-icon-button')
], MdFilledIconButton);
export { MdFilledIconButton };
//# sourceMappingURL=filled-icon-button.js.map