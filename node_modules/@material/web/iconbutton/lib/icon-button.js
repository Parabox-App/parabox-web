/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import '@material/web/focus/focus-ring.js';
import '@material/web/icon/icon.js';
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
export class IconButton extends ActionElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.icon = '';
        this.flipIconInRtl = false;
        this.flipIcon = false;
        this.showFocusRing = false;
        this.rippleElementTag = literal `md-ripple`;
        this.focusElementTag = literal `md-focus-ring`;
        this.iconElementTag = literal `md-icon`;
    }
    /** @soyTemplate */
    renderRipple() {
        return staticHtml `<${this.rippleElementTag} ?disabled="${this.disabled}" unbounded> </${this.rippleElementTag}>`;
    }
    /** @soyTemplate */
    render() {
        return html `<button
        class="md3-icon-button ${classMap(this.getRenderClasses())}"
        aria-label="${ifDefined(this.ariaLabel)}"
        aria-haspopup="${ifDefined(this.ariaHasPopup)}"
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
        <span class="md3-icon-button__icon">${this.renderIcon(this.icon)}</span>
        ${this.renderTouchTarget()}
        <span class="md3-icon-button__icon"><slot></slot></span>
  </button>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-icon-button--flip-icon': this.flipIcon,
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
    connectedCallback() {
        this.maybeFlipIconInRtl();
        super.connectedCallback();
    }
    maybeFlipIconInRtl() {
        if (!this.flipIconInRtl)
            return;
        const isRtl = getComputedStyle(this).getPropertyValue('direction') === 'rtl';
        this.flipIcon = isRtl;
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
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
}
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], IconButton.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], IconButton.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], IconButton.prototype, "flipIconInRtl", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], IconButton.prototype, "flipIcon", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-label' }),
    __metadata("design:type", String)
], IconButton.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-haspopup' }),
    __metadata("design:type", String)
], IconButton.prototype, "ariaHasPopup", void 0);
__decorate([
    query('button'),
    __metadata("design:type", HTMLElement)
], IconButton.prototype, "buttonElement", void 0);
__decorate([
    query('md-ripple'),
    __metadata("design:type", MdRipple)
], IconButton.prototype, "ripple", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], IconButton.prototype, "showFocusRing", void 0);
//# sourceMappingURL=icon-button.js.map