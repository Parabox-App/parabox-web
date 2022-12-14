/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import '@material/web/focus/focus-ring.js';
import { ActionElement } from '@material/web/actionelement/action-element.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { pointerPress, shouldShowStrongFocus } from '@material/web/focus/strong-focus.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { html } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/**
 * SegmentedButton is a web component implementation of the Material Design
 * segmented button component. It is intended **only** for use as a child of a
 * `SementedButtonSet` component. It is **not** intended for use in any other
 * context.
 * @soyCompatible
 */
export class SegmentedButton extends ActionElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.selected = false;
        this.label = '';
        this.noCheckmark = false;
        this.hasIcon = false;
        this.animState = '';
        this.showFocusRing = false;
    }
    update(props) {
        this.animState = this.nextAnimationState(props);
        super.update(props);
        // NOTE: This needs to be set *after* calling super.update() to ensure the
        // appropriate CSS classes are applied.
        this.hasIcon = this.iconElement.length > 0;
    }
    nextAnimationState(changedProps) {
        const prevSelected = changedProps.get('selected');
        // Early exit for first update.
        if (prevSelected === undefined)
            return '';
        const nextSelected = this.selected;
        const nextHasCheckmark = !this.noCheckmark;
        if (!prevSelected && nextSelected && nextHasCheckmark) {
            return 'selecting';
        }
        if (prevSelected && !nextSelected && nextHasCheckmark) {
            return 'deselecting';
        }
        return '';
    }
    beginPress({ positionEvent }) {
        this.ripple.beginPress(positionEvent);
    }
    endPress(options) {
        this.ripple.endPress();
        super.endPress(options);
        if (!options.cancelled) {
            const event = new Event('segmented-button-interaction', { bubbles: true, composed: true });
            this.dispatchEvent(event);
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
    /** @soyTemplate */
    render() {
        return html `
      <button
        tabindex="${this.disabled ? '-1' : '0'}"
        aria-label="${ifDefined(this.ariaLabel)}"
        aria-pressed=${this.selected}
        ?disabled=${this.disabled}
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointercancel="${this.handlePointerCancel}"
        @pointerleave="${this.handlePointerLeave}"
        @pointerenter="${this.handlePointerEnter}"
        @click="${this.handleClick}"
        @contextmenu="${this.handleContextMenu}"
        class="md3-segmented-button ${classMap(this.getRenderClasses())}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.renderOutline()}
        ${this.renderLeading()}
        ${this.renderLabel()}
        ${this.renderTouchTarget()}
      </button>
    `;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-segmented-button--selected': this.selected,
            'md3-segmented-button--unselected': !this.selected,
            'md3-segmented-button--with-label': this.label !== '',
            'md3-segmented-button--without-label': this.label === '',
            'md3-segmented-button--with-icon': this.hasIcon,
            'md3-segmented-button--with-checkmark': !this.noCheckmark,
            'md3-segmented-button--without-checkmark': this.noCheckmark,
            'md3-segmented-button--selecting': this.animState === 'selecting',
            'md3-segmented-button--deselecting': this.animState === 'deselecting',
        };
    }
    /** @soyTemplate */
    renderFocusRing() {
        return html `<md-focus-ring .visible="${this.showFocusRing}" class="md3-segmented-button__focus-ring"></md-focus-ring>`;
    }
    /** @soyTemplate */
    renderRipple() {
        return html `<md-ripple ?disabled="${this.disabled}" class="md3-segmented-button__ripple"> </md-ripple>`;
    }
    /** @soyTemplate */
    renderOutline() {
        return html ``;
    }
    /** @soyTemplate */
    renderLeading() {
        return this.label === '' ? this.renderLeadingWithoutLabel() :
            this.renderLeadingWithLabel();
    }
    /** @soyTemplate */
    renderLeadingWithoutLabel() {
        return html `
      <span class="md3-segmented-button__leading" aria-hidden="true">
        <span class="md3-segmented-button__graphic">
          <svg class="md3-segmented-button__checkmark" viewBox="0 0 24 24">
            <path class="md3-segmented-button__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
        </span>
        <span class="md3-segmented-button__icon" aria-hidden="true">
          <slot name="icon"></slot>
        </span>
      </span>
    `;
    }
    /** @soyTemplate */
    renderLeadingWithLabel() {
        return html `
      <span class="md3-segmented-button__leading" aria-hidden="true">
        <span class="md3-segmented-button__graphic">
          <svg class="md3-segmented-button__checkmark" viewBox="0 0 24 24">
            <path class="md3-segmented-button__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <span class="md3-segmented-button__icon" aria-hidden="true">
            <slot name="icon"></slot>
          </span>
        </span>
      </span>
    `;
    }
    /** @soyTemplate */
    renderLabel() {
        return html `
      <span class="md3-segmented-button__label-text">${this.label}</span>
    `;
    }
    /** @soyTemplate */
    renderTouchTarget() {
        return html `<span class="md3-segmented-button__touch"></span>`;
    }
}
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "selected", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "noCheckmark", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "hasIcon", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-label' }),
    __metadata("design:type", String)
], SegmentedButton.prototype, "ariaLabel", void 0);
__decorate([
    state(),
    __metadata("design:type", String)
], SegmentedButton.prototype, "animState", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "showFocusRing", void 0);
__decorate([
    queryAssignedElements({ slot: 'icon', flatten: true }),
    __metadata("design:type", Array)
], SegmentedButton.prototype, "iconElement", void 0);
__decorate([
    query('md-ripple'),
    __metadata("design:type", MdRipple)
], SegmentedButton.prototype, "ripple", void 0);
//# sourceMappingURL=segmented-button.js.map