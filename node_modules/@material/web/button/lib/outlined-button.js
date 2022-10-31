/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { html } from 'lit';
import { Button } from './button.js';
/** @soyCompatible */
export class OutlinedButton extends Button {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--outlined': true,
        };
    }
    /** @soyTemplate */
    renderOutline() {
        return html `<span class="md3-button__outline"></span>`;
    }
}
//# sourceMappingURL=outlined-button.js.map