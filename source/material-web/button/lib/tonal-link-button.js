/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LinkButton } from './link-button.js';
/** @soyCompatible */
export class TonalLinkButton extends LinkButton {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--tonal': true,
        };
    }
}
//# sourceMappingURL=tonal-link-button.js.map