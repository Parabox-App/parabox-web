/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import '@material/web/icon/icon.js';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as overlayStyles } from '../elevation/lib/elevation-overlay-styles.css.js';
import { FabExtended } from './lib/fab-extended.js';
import { styles as extendedStyles } from './lib/fab-extended-styles.css.js';
import { styles as sharedStyles } from './lib/fab-shared-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFabExtended = class MdFabExtended extends FabExtended {
    /** @soyTemplate */
    renderIcon(icon) {
        return icon ? html `<md-icon class="md3-fab__icon">${icon}</md-icon>` : '';
    }
};
MdFabExtended.styles = [overlayStyles, sharedStyles, extendedStyles];
MdFabExtended = __decorate([
    customElement('md-fab-extended')
], MdFabExtended);
export { MdFabExtended };
//# sourceMappingURL=fab-extended.js.map