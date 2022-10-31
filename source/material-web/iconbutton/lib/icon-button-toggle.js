/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { ActionElement } from '@material/web/actionelement/action-element.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { pointerPress, shouldShowStrongFocus } from '@material/web/focus/strong-focus.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html as staticHtml, literal } from 'lit/static-html.js';
/** @soyCompatible */
export class IconButtonToggle extends ActionElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.onIcon = '';
        this.offIcon = '';
        this.isOn = false;
        this.showFocusRing = false;
        this.rippleElementTag = literal `md-ripple`;
        this.focusElementTag = literal `md-focus-ring`;
        this.iconElementTag = literal `md-icon`;
    }
    beginPress({ positionEvent }) {
        this.ripple.beginPress(positionEvent);
    }
    endPress({ cancelled }) {
        this.ripple.endPress();
        if (cancelled) {
            return;
        }
        this.isOn = !this.isOn;
        const detail = { isOn: this.isOn };
        this.dispatchEvent(new CustomEvent('icon-button-toggle-change', { detail, bubbles: true, composed: true }));
        super.endPress({ cancelled, actionData: detail });
    }
    /** @soyTemplate */
    renderRipple() {
        return staticHtml `<${this.rippleElementTag} ?disabled="${this.disabled}" unbounded> </${this.rippleElementTag}>`;
    }
    /** @soyTemplate */
    render() {
        const hasToggledAriaLabel = this.ariaLabelOn && this.ariaLabelOff;
        const ariaPressedValue = hasToggledAriaLabel ? undefined : this.isOn;
        const ariaLabelValue = hasToggledAriaLabel ?
            (this.isOn ? this.ariaLabelOn : this.ariaLabelOff) :
            this.ariaLabel;
        return html `<button
          class="md3-icon-button ${classMap(this.getRenderClasses())}"
          aria-pressed="${ifDefined(ariaPressedValue)}"
          aria-label="${ifDefined(ariaLabelValue)}"
          ?disabled="${this.disabled}"
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
        ${this.renderTouchTarget()}
        <span class="md3-icon-button__icon">
          <slot name="offIcon">${this.renderIcon(this.offIcon)}</slot>
        </span>
        <span class="md3-icon-button__icon md3-icon-button__icon--on">
          <slot name="onIcon">${this.renderIcon(this.onIcon)}</slot>
        </span>
      </button>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-icon-button--on': this.isOn,
        };
    }
    /** @soyTemplate */
    renderIcon(icon) {
        return icon ?
            staticHtml `<${this.iconElementTag}>${icon}</${this.iconElementTag}>` :
            '';
    }
    /** @soyTemplate */
    renderTouchTarget() {
        return html `<span class="md3-icon-button__touch"></span>`;
    }
    /** @soyTemplate */
    renderFocusRing() {
        return staticHtml `<${this.focusElementTag} .visible="${this.showFocusRing}"></${this.focusElementTag}>`;
    }
    handlePointerDown(e) {
        super.handlePointerDown(e);
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handlePointerEnter(e) {
        this.ripple.beginHover(e);
    }
    handlePointerLeave(e) {
        super.handlePointerLeave(e);
        this.ripple.endHover();
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
}
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-label' }),
    __metadata("design:type", String)
], IconButtonToggle.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "onIcon", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "offIcon", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], IconButtonToggle.prototype, "ariaLabelOn", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], IconButtonToggle.prototype, "ariaLabelOff", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "isOn", void 0);
__decorate([
    query('md-ripple'),
    __metadata("design:type", MdRipple)
], IconButtonToggle.prototype, "ripple", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "showFocusRing", void 0);
//# sourceMappingURL=icon-button-toggle.js.map