/**
 * @requirecss {button.lib.shared_styles}
 *
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import '@material/web/icon/icon.js';
import '@material/web/focus/focus-ring.js';
import '@material/web/ripple/ripple.js';
import { ActionElement } from '@material/web/actionelement/action-element.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { pointerPress, shouldShowStrongFocus } from '@material/web/focus/strong-focus.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { html as staticHtml, literal } from 'lit/static-html.js';
import { html } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/** @soyCompatible */
export class Button extends ActionElement {
    constructor() {
        super(...arguments);
        this.iconTag = literal `md-icon`;
        this.disabled = false;
        this.trailingIcon = false;
        this.icon = '';
        this.label = '';
        this.hasIcon = false;
        this.preventClickDefault = false;
        this.showFocusRing = false;
    }
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: .md3-button
     */
    render() {
        return html `
      <button
          class="md3-button ${classMap(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${ifDefined(this.ariaLabel)}"
          aria-haspopup="${ifDefined(this.ariaHasPopup)}"
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
        ${this.renderOverlay()}
        ${this.renderRipple()}
        ${this.renderOutline()}
        ${this.renderTouchTarget()}
        ${this.renderLeadingIcon()}
        ${this.renderLabel()}
        ${this.renderTrailingIcon()}
      </button>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-button--icon-leading': !this.trailingIcon && this.hasIcon,
            'md3-button--icon-trailing': this.trailingIcon && this.hasIcon,
        };
    }
    /** @soyTemplate */
    getIconContainerClasses() {
        return {
            'md3-button__icon--leading': !this.trailingIcon,
            'md3-button__icon--trailing': this.trailingIcon,
        };
    }
    /** @soyTemplate */
    renderTouchTarget() {
        return html `
      <span class="md3-button__touch"></span>
    `;
    }
    /** @soyTemplate */
    renderOverlay() {
        return html ``;
    }
    /** @soyTemplate */
    renderRipple() {
        return html `<md-ripple class="md3-button__ripple" ?disabled="${this.disabled}"></md-ripple>`;
    }
    /** @soyTemplate */
    renderOutline() {
        return html ``;
    }
    /** @soyTemplate */
    renderFocusRing() {
        return html `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    /** @soyTemplate */
    renderLabel() {
        return html `<span class="md3-button__label">${this.label}</span>`;
    }
    /** @soyTemplate */
    renderLeadingIcon() {
        return this.trailingIcon ? '' : this.renderIcon();
    }
    /** @soyTemplate */
    renderTrailingIcon() {
        return this.trailingIcon ? this.renderIcon() : '';
    }
    /** @soyTemplate */
    renderIcon() {
        return html `<span class="md3-button__icon-slot-container ${classMap(this.getIconContainerClasses())}">
                  <slot name="icon" @slotchange="${this.handleSlotChange}">
                    ${this.icon ? this.renderFontIcon() : ''}
                  </slot>
                </span>`;
    }
    /** @soyTemplate */
    renderFontIcon() {
        return staticHtml `
    <${this.iconTag} class="md3-button__icon">
      ${this.icon}
    </${this.iconTag}>`;
    }
    update(changedProperties) {
        super.update(changedProperties);
        this.hasIcon = !!this.iconElement && this.iconElement.length > 0;
    }
    // TODO(b/210731759): remove once internal tooling delegates focus
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            buttonElement.focus();
        }
    }
    // TODO(b/210731759): remove once internal tooling delegates focus
    blur() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            buttonElement.blur();
        }
    }
    beginPress({ positionEvent }) {
        this.ripple.beginPress(positionEvent);
    }
    endPress(options) {
        this.ripple.endPress();
        super.endPress(options);
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
    /** Delegate clicks on host element to inner button element. */
    click() {
        this.buttonElement.click();
    }
    // TODO(b/236044151): Remove when preventDefault supported by L2W
    handleClick(e) {
        super.handleClick(e);
        if (this.preventClickDefault) {
            e.preventDefault();
        }
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    handleSlotChange() {
        this.requestUpdate();
    }
}
Button.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    property({ type: String, attribute: 'data-aria-has-popup', noAccessor: true }),
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    __metadata("design:type", String)
], Button.prototype, "ariaHasPopup", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Button.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, attribute: 'trailingicon' }),
    __metadata("design:type", Object)
], Button.prototype, "trailingIcon", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Button.prototype, "icon", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Button.prototype, "label", void 0);
__decorate([
    property({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    __metadata("design:type", String)
], Button.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Button.prototype, "hasIcon", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Button.prototype, "preventClickDefault", void 0);
__decorate([
    query('.md3-button'),
    __metadata("design:type", HTMLElement)
], Button.prototype, "buttonElement", void 0);
__decorate([
    query('md-ripple'),
    __metadata("design:type", MdRipple)
], Button.prototype, "ripple", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Button.prototype, "showFocusRing", void 0);
__decorate([
    queryAssignedElements({ slot: 'icon', flatten: true }),
    __metadata("design:type", Array)
], Button.prototype, "iconElement", void 0);
//# sourceMappingURL=button.js.map