/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { customElement } from 'lit/decorators.js';
import { IconButton } from './lib/icon-button.js';
import { styles as sharedStyles } from './lib/icon-button-styles.css.js';
import { styles } from './lib/standard-styles.css.js';
/** @soyCompatible */
let MdStandardIconButton = class MdStandardIconButton extends IconButton {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--standard': true,
        };
    }
};
MdStandardIconButton.styles = [sharedStyles, styles];
MdStandardIconButton = __decorate([
    customElement('md-standard-icon-button')
], MdStandardIconButton);
export { MdStandardIconButton };
//# sourceMappingURL=standard-icon-button.js.map