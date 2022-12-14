/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/field/outlined-field.js';
import { customElement } from 'lit/decorators.js';
import { literal } from 'lit/static-html.js';
// TODO(b/236285090): update with HCM best practices
import { styles as outlinedForcedColorsStyles } from './lib/outlined-forced-colors-styles.css.js';
import { styles as outlinedStyles } from './lib/outlined-styles.css.js';
import { OutlinedTextField } from './lib/outlined-text-field.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdOutlinedTextField = class MdOutlinedTextField extends OutlinedTextField {
    constructor() {
        super(...arguments);
        this.fieldTag = literal `md-outlined-field`;
    }
};
MdOutlinedTextField.styles = [sharedStyles, outlinedStyles, outlinedForcedColorsStyles];
MdOutlinedTextField = __decorate([
    customElement('md-outlined-text-field')
], MdOutlinedTextField);
export { MdOutlinedTextField };
//# sourceMappingURL=outlined-text-field.js.map