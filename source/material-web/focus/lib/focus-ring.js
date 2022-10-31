/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
/** @soyCompatible */
export class FocusRing extends LitElement {
    constructor() {
        super(...arguments);
        this.visible = false;
    }
    /** @soyTemplate */
    render() {
        return html `<span class="md3-focus-ring ${classMap(this.getRenderClasses())}"></span>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-focus-ring--visible': this.visible,
        };
    }
}
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], FocusRing.prototype, "visible", void 0);
//# sourceMappingURL=focus-ring.js.map