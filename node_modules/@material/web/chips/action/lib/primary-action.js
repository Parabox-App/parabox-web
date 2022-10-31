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
import { Action } from './action.js';
/**
 * Base class for all primary actions: Presentational, Selectable, Link
 * @soyCompatible
 */
export class PrimaryAction extends Action {
    constructor() {
        super(...arguments);
        this.isDeletable = false;
        this.label = '';
        this.icon = '';
    }
    /** @soyTemplate */
    render() {
        return html `
      <span class="${classMap(this.getRootClasses())}"
          aria-label="${ifDefined(this.ariaLabel)}"
          tabindex="${this.isFocusable ? 0 : -1}"
          type="button"
          ?disabled="${this.disabled}">
        ${this.renderTouchTarget()}
        ${this.renderRipple()}
        ${this.renderFocusRing()}
        ${this.renderGraphic()}
        ${this.renderLabel()}
      </span>`;
    }
    /** @soyTemplate */
    getRootClasses() {
        return {
            ...super.getRootClasses(),
            'md3-chip__action--primary': true,
        };
    }
    /** @soyTemplate */
    getRippleClasses() {
        return {
            ...super.getRippleClasses(),
            'md3-chip__ripple--primary': true,
        };
    }
    /** @soyTemplate */
    renderGraphic() {
        return this.icon ? html `
      <span class="md3-chip__graphic">
        ${this.renderIcon()}
      </span>` : html ``;
    }
    /** @soyTemplate */
    renderIcon() {
        return html `
      <span class="md3-chip__icon md3-chip__icon--primary material-icons">
        ${this.icon}
      </span>`;
    }
    /** @soyTemplate */
    renderLabel() {
        return html `<span class="md3-chip__text-label">${this.label}</span>`;
    }
}
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], PrimaryAction.prototype, "isDeletable", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], PrimaryAction.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], PrimaryAction.prototype, "icon", void 0);
//# sourceMappingURL=primary-action.js.map