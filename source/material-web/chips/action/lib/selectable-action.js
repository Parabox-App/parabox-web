/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { PrimaryAction } from './primary-action.js';
/** @soyCompatible */
export class SelectableAction extends PrimaryAction {
    constructor() {
        super(...arguments);
        this.selected = false;
    }
    /** @soyTemplate */
    render() {
        return html `
      <span class="${classMap(this.getRootClasses())}"
          aria-label="${ifDefined(this.ariaLabel)}"
          aria-selected="${this.selected}"
          aria-disabled="${this.disabled}"
          tabindex="${this.isFocusable ? 0 : -1}"
          role="option">
        ${this.renderTouchTarget()}
        ${this.renderRipple()}
        ${this.renderFocusRing()}
        ${this.renderGraphic()}
        ${this.renderLabel()}
      </span>`;
    }
    /** @soyTemplate */
    renderGraphic() {
        return html `
      <span class="md3-chip__graphic">
        ${this.icon ? this.renderIcon() : ''}
        ${this.renderCheckMark()}
      </span>`;
    }
    /** @soyTemplate */
    renderCheckMark() {
        return html `
      <span class="md3-chip__checkmark">
        <svg class="md3-chip__checkmark-svg" viewBox="-2 -3 30 30">
          <path class="md3-chip__checkmark-path" fill="none" stroke="black"
                d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
      </span>`;
    }
}
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], SelectableAction.prototype, "selected", void 0);
//# sourceMappingURL=selectable-action.js.map