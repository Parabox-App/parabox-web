/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Button } from './button.js';
/** @soyCompatible */
export class FilledButton extends Button {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--filled': true,
        };
    }
}
//# sourceMappingURL=filled-button.js.map