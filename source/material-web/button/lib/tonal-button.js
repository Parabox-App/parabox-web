/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Button } from './button.js';
/** @soyCompatible */
export class TonalButton extends Button {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--tonal': true,
        };
    }
}
//# sourceMappingURL=tonal-button.js.map