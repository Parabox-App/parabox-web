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
import { Fab } from './lib/fab.js';
import { styles as sharedStyles } from './lib/fab-shared-styles.css.js';
import { styles as fabStyles } from './lib/fab-styles.css.js';
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFab = class MdFab extends Fab {
    /** @soyTemplate */
    renderIcon(icon) {
        return icon ? html `<md-icon class="md3-fab__icon">${icon}</md-icon>` : '';
    }
};
MdFab.styles = [overlayStyles, sharedStyles, fabStyles];
MdFab = __decorate([
    customElement('md-fab')
], MdFab);
export { MdFab };
//# sourceMappingURL=fab.js.map