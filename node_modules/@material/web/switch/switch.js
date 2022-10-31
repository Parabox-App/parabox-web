/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { Switch } from './lib/switch.js';
import { styles } from './lib/switch-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdSwitch = class MdSwitch extends Switch {
};
MdSwitch.styles = [styles];
MdSwitch = __decorate([
    customElement('md-switch')
], MdSwitch);
export { MdSwitch };
//# sourceMappingURL=switch.js.map