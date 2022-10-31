/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Button } from './button.js';
/** @soyCompatible */
export class TextButton extends Button {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--text': true,
        };
    }
}
//# sourceMappingURL=text-button.js.map