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
import { Button } from './button.js';
/** @soyCompatible */
export class LinkButton extends Button {
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: .md3-button
     */
    render() {
        return html `
      <span class="md3-link-button-wrapper"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
          @pointerdown="${this.handlePointerDown}"
          @pointerup="${this.handlePointerUp}"
          @pointercancel="${this.handlePointerCancel}"
          @pointerleave="${this.handlePointerLeave}"
          @pointerenter="${this.handlePointerEnter}"
          @click="${this.handleClick}"
          @contextmenu="${this.handleContextMenu}">
        <a class="md3-button ${classMap(this.getRenderClasses())}"
          href="${ifDefined(this.href)}"
          target="${ifDefined(this.target)}"
          aria-label="${ifDefined(this.ariaLabel)}">
            ${this.renderFocusRing()}
            ${this.renderOverlay()}
            ${this.renderRipple()}
            ${this.renderOutline()}
            ${this.renderTouchTarget()}
            ${this.renderIcon()}
            ${this.renderLabel()}</a>
      </span>`;
        // Note: link buttons cannot have trailing icons.
    }
}
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], LinkButton.prototype, "href", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], LinkButton.prototype, "target", void 0);
//# sourceMappingURL=link-button.js.map