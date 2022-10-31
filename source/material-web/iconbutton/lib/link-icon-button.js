/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IconButton } from './icon-button.js';
/** @soyCompatible */
export class LinkIconButton extends IconButton {
    constructor() {
        super(...arguments);
        this.linkHref = '';
    }
    /** @soyTemplate */
    render() {
        return html `<div
        class="md3-icon-button ${classMap(this.getRenderClasses())}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointercancel="${this.handlePointerCancel}"
        @pointerleave="${this.handlePointerLeave}"
        @pointerenter="${this.handlePointerEnter}"
        @click="${this.handleClick}"
        @contextmenu="${this.handleContextMenu}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.renderIcon(this.icon)}
        ${this.renderTouchTarget()}
        <span><slot></slot></span>
        <a class="md3-icon-button__link" href="${this.linkHref}"
           target="${ifDefined(this.linkTarget)}"
           aria-label="${ifDefined(this.ariaLabel)}"
           @focus="${this.handleFocus}"
           @blur="${this.handleBlur}">
        </a>
  </div>`;
    }
}
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], LinkIconButton.prototype, "linkHref", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], LinkIconButton.prototype, "linkTarget", void 0);
//# sourceMappingURL=link-icon-button.js.map