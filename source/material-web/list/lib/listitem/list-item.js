/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import '@material/web/ripple/ripple.js';
import '@material/web/focus/focus-ring.js';
import { ActionElement } from '@material/web/actionelement/action-element.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { pointerPress, shouldShowStrongFocus } from '@material/web/focus/strong-focus.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/** @soyCompatible */
export class ListItem extends ActionElement {
    constructor() {
        super(...arguments);
        this.role = 'listitem';
        this.supportingText = '';
        this.multiLineSupportingText = '';
        this.trailingSupportingText = '';
        this.disabled = false;
        this.itemTabIndex = -1;
        this.headline = '';
        this.showFocusRing = false;
    }
    /** @soyTemplate */
    render() {
        return html `
      <li
          tabindex=${this.itemTabIndex}
          role=${this.role}
          aria-selected=${ifDefined(this.ariaSelected || undefined)}
          aria-checked=${ifDefined(this.ariaChecked || undefined)}
          id=${ifDefined(this.itemId || undefined)}
          data-query-md3-list-item
          class="md3-list-item ${classMap(this.getRenderClasses())}"
          @pointerdown=${this.handlePointerDown}
          @pointerenter=${this.handlePointerEnter}
          @pointerup=${this.handlePointerUp}
          @pointercancel=${this.handlePointerCancel}
          @pointerleave=${this.handlePointerLeave}
          @keydown=${this.handleKeyDown}
          @keyup=${this.handleKeyUp}
          @click=${this.handleClick}
          @contextmenu=${this.handleContextMenu}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          >
        ${this.renderStart()}
        ${this.renderBody()}
        ${this.renderEnd()}
        <div class="md3-list-item__ripple">
          ${this.renderRipple()}
        </div>
        <div class="md3-list-item__focus-ring">
          ${this.renderFocusRing()}
        </div>
      </li>`;
    }
    /** @soyTemplate */
    renderRipple() {
        return html `<md-ripple ?disabled="${this.disabled}"></md-ripple>`;
    }
    /** @soyTemplate */
    renderFocusRing() {
        return html `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    /** @soyTemplate */
    getAriaRole() {
        return 'listitem';
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-list-item--with-one-line': this.supportingText === '' && this.multiLineSupportingText === '',
            'md3-list-item--with-two-line': this.supportingText !== '' && this.multiLineSupportingText === '',
            'md3-list-item--with-three-line': this.multiLineSupportingText !== '',
            'md3-list-item--disabled': this.disabled,
            'md3-list-item--enabled': !this.disabled,
        };
    }
    /** @soyTemplate */
    renderStart() {
        return html `<div class="md3-list-item__start"><!--
      --><slot name="start" @slotchange=${this.handleSlotChange}></slot><!--
    --></div>`;
    }
    /** @soyTemplate */
    renderBody() {
        return html `<div class="md3-list-item__body"><!--
       --><span class="md3-list-item__label-text"><!--
          -->${this.headline}<!--
       --></span><!--
        -->${this.multiLineSupportingText !== '' ?
            this.renderMultiLineSupportingText() :
            this.supportingText !== '' ? this.renderSupportingText() :
                ''}<!--
    --></div>`;
    }
    /** @soyTemplate */
    renderSupportingText() {
        return html `<span class="md3-list-item__supporting-text"><!--
          -->${this.supportingText}<!--
       --></span>`;
    }
    /** @soyTemplate */
    renderMultiLineSupportingText() {
        return html `<span class="md3-list-item__supporting-text md3-list-item__supporting-text--multi-line"><!--
          -->${this.multiLineSupportingText}<!--
       --></span>`;
    }
    /** @soyTemplate */
    renderEnd() {
        return html `<div class="md3-list-item__end"><!--
      --><slot name="end" @slotchange=${this.handleSlotChange}><!--
        -->${this.trailingSupportingText !== '' ?
            this.renderTrailingSupportingText() :
            ''}<!--
      --></slot><!--
    --></div>`;
    }
    /** @soyTemplate */
    renderTrailingSupportingText() {
        return html `<span class="md3-list-item__trailing-supporting-text"><!--
          -->${this.trailingSupportingText}<!--
       --></span>`;
    }
    handleSlotChange() {
        this.requestUpdate();
    }
    beginPress({ positionEvent }) {
        this.ripple.beginPress(positionEvent);
    }
    endPress({ cancelled }) {
        this.ripple.endPress();
        if (cancelled)
            return;
        super.endPress({ cancelled, actionData: { item: this } });
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
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
    /** @bubbleWizEvent */
    handleKeyDown(e) {
        if (e.key !== ' ' && e.key !== 'Enter')
            return;
        e.preventDefault();
        // TODO(b/240124486): Replace with beginPress provided by action
        // element.
        this.ripple.beginPress(e);
    }
    handleKeyUp(e) {
        if (e.key !== ' ' && e.key !== 'Enter')
            return;
        e.preventDefault();
        // TODO(b/240124486): Replace with beginPress provided by action element.
        super.endPress({ cancelled: false, actionData: { item: this } });
        this.ripple.endPress();
    }
    /**
     * Focuses list item and makes list item focusable via keyboard.
     */
    activate() {
        this.itemTabIndex = 0;
        this.listItemRoot.focus();
        this.showFocusRing = true;
    }
    /**
     * Returns true if list item is currently focused and is focusable.
     */
    isActive() {
        return this.itemTabIndex === 0 && this.showFocusRing;
    }
    /**
     * Removes list item from sequential keyboard navigation.
     */
    deactivate() {
        this.itemTabIndex = -1;
    }
}
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'data-role', noAccessor: true }),
    __metadata("design:type", String)
], ListItem.prototype, "role", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'data-aria-selected', noAccessor: true }),
    __metadata("design:type", String)
], ListItem.prototype, "ariaSelected", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'data-aria-checked', noAccessor: true }),
    __metadata("design:type", String)
], ListItem.prototype, "ariaChecked", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], ListItem.prototype, "itemId", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], ListItem.prototype, "supportingText", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], ListItem.prototype, "multiLineSupportingText", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], ListItem.prototype, "trailingSupportingText", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], ListItem.prototype, "disabled", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], ListItem.prototype, "itemTabIndex", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], ListItem.prototype, "headline", void 0);
__decorate([
    query('md-ripple'),
    __metadata("design:type", MdRipple)
], ListItem.prototype, "ripple", void 0);
__decorate([
    query('[data-query-md3-list-item]'),
    __metadata("design:type", HTMLElement)
], ListItem.prototype, "listItemRoot", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], ListItem.prototype, "showFocusRing", void 0);
//# sourceMappingURL=list-item.js.map