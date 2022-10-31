/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { Formfield } from './lib/formfield.js';
import { styles as formfieldStyles } from './lib/formfield-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFormfield = class MdFormfield extends Formfield {
};
MdFormfield.styles = [formfieldStyles];
MdFormfield = __decorate([
    customElement('md-formfield')
], MdFormfield);
export { MdFormfield };
//# sourceMappingURL=formfield.js.map