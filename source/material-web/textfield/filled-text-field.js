/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/field/filled-field.js';
import { customElement } from 'lit/decorators.js';
import { literal } from 'lit/static-html.js';
// TODO(b/236285090): update with HCM best practices
import { styles as filledForcedColorsStyles } from './lib/filled-forced-colors-styles.css.js';
import { styles as filledStyles } from './lib/filled-styles.css.js';
import { FilledTextField } from './lib/filled-text-field.js';
import { styles as sharedStyles } from './lib/shared-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFilledTextField = class MdFilledTextField extends FilledTextField {
    constructor() {
        super(...arguments);
        this.fieldTag = literal `md-filled-field`;
    }
};
MdFilledTextField.styles = [sharedStyles, filledStyles, filledForcedColorsStyles];
MdFilledTextField = __decorate([
    customElement('md-filled-text-field')
], MdFilledTextField);
export { MdFilledTextField };
//# sourceMappingURL=filled-text-field.js.map