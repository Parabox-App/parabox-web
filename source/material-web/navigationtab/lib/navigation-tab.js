/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import '@material/web/badge/badge.js';
import '@material/web/focus/focus-ring.js';
import { ActionElement } from '@material/web/actionelement/action-element.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { pointerPress, shouldShowStrongFocus } from '@material/web/focus/strong-focus.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/** @soyCompatible */
export class NavigationTab extends ActionElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.active = false;
        this.hideInactiveLabel = false;
        this.badgeValue = '';
        this.showBadge = false;
        this.showFocusRing = false;
    }
    /** @soyTemplate */
    render() {
        return html `
      <button
        class="md3-navigation-tab ${classMap(this.getRenderClasses())}"
        role="tab"
        aria-selected="${this.active}"
        aria-label="${ifDefined(this.ariaLabel)}"
        tabindex="${this.active ? 0 : -1}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointercancel="${this.handlePointerCancel}"
        @pointerleave="${this.handlePointerLeave}"
        @pointerenter="${this.handlePointerEnter}"
        @click="${this.handleClick}"
        @contextmenu="${this.handleContextMenu}"
      >${this.renderFocusRing()}${this.renderRipple()}
        <span aria-hidden="true" class="md3-navigation-tab__icon-content"
          ><span class="md3-navigation-tab__active-indicator"
            ></span><span class="md3-navigation-tab__icon"
          ><slot name="inactiveIcon"></slot
        ></span>
        <span class="md3-navigation-tab__icon md3-navigation-tab__icon--active"
          ><slot name="activeIcon"></slot
        ></span>${this.renderBadge()}</span
        >${this.renderLabel()}
      </button>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-navigation-tab--hide-inactive-label': this.hideInactiveLabel,
            'md3-navigation-tab--active': this.active,
        };
    }
    /** @soyTemplate */
    renderFocusRing() {
        return html `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    /** @soyTemplate */
    renderRipple() {
        return html `<md-ripple class="md3-navigation-tab__ripple"></md-ripple>`;
    }
    /** @soyTemplate */
    renderBadge() {
        return this.showBadge ?
            html `<md-badge .value="${this.badgeValue}"></md-badge>` :
            '';
    }
    /** @soyTemplate */
    renderLabel() {
        const ariaHidden = this.ariaLabel ? 'true' : 'false';
        return !this.label ?
            '' :
            html `
        <span aria-hidden="${ariaHidden}" class="md3-navigation-tab__label-text">${this.label}</span>`;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const event = new Event('navigation-tab-rendered', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            buttonElement.focus();
        }
    }
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
        if (!options.cancelled) {
            this.dispatchEvent(new CustomEvent('navigation-tab-interaction', { detail: { state: this }, bubbles: true, composed: true }));
        }
    }
    handlePointerDown(e) {
        super.handlePointerDown(e);
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handlePointerUp(e) {
        super.handlePointerUp(e);
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
], NavigationTab.prototype, "active", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NavigationTab.prototype, "hideInactiveLabel", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], NavigationTab.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], NavigationTab.prototype, "badgeValue", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], NavigationTab.prototype, "showBadge", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], NavigationTab.prototype, "showFocusRing", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], NavigationTab.prototype, "ariaLabel", void 0);
__decorate([
    query('button'),
    __metadata("design:type", HTMLElement)
], NavigationTab.prototype, "buttonElement", void 0);
__decorate([
    query('md-ripple'),
    __metadata("design:type", MdRipple)
], NavigationTab.prototype, "ripple", void 0);
//# sourceMappingURL=navigation-tab.js.map