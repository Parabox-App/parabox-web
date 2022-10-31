/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { html } from 'lit';
import { Button } from './button.js';
/** @soyCompatible */
export class ElevatedButton extends Button {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--elevated': true,
        };
    }
    /** @soyTemplate */
    renderOverlay() {
        return html `<div class="md3-elevation-overlay"></div>`;
    }
}
//# sourceMappingURL=elevated-button.js.map