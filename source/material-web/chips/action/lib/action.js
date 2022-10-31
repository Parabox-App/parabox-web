/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import '@material/web/focus/focus-ring.js';
import '@material/web/ripple/ripple.js';
import { ActionElement } from '@material/web/actionelement/action-element.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
/**
 * Base class for all actions.
 * @soyCompatible
 */
export class Action extends ActionElement {
    constructor() {
        super(...arguments);
        this.isFocusable = false;
        this.isTouchable = false;
        this.disabled = false;
        this.showFocusRing = false;
    }
    /** @soyTemplate */
    getRootClasses() {
        return {
            'md3-chip__action': true,
        };
    }
    /** @soyTemplate */
    getRippleClasses() {
        return {
            'md3-chip__ripple': true,
        };
    }
    /** @soyTemplate */
    renderTouchTarget() {
        return this.isTouchable ?
            html `<span class="md3-chip__action-touch"></span>` : html ``;
    }
    /** @soyTemplate */
    renderRipple() {
        return html `
      <md-ripple class="${classMap(this.getRippleClasses())}"
          ?disabled="${this.disabled}">
      </md-ripple>`;
    }
    /** @soyTemplate */
    renderFocusRing() {
        return html `
      <md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
}
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Action.prototype, "isFocusable", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Action.prototype, "isTouchable", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Action.prototype, "disabled", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Action.prototype, "showFocusRing", void 0);
__decorate([
    query('md-ripple'),
    __metadata("design:type", MdRipple)
], Action.prototype, "ripple", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-label' }),
    __metadata("design:type", String)
], Action.prototype, "ariaLabel", void 0);
//# sourceMappingURL=action.js.map