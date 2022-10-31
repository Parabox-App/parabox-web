/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import '@material/web/focus/focus-ring.js';
import '@material/web/ripple/ripple.js';
import { ActionElement } from '@material/web/actionelement/action-element.js';
import { ariaProperty as legacyAriaProperty } from '@material/web/compat/base/aria-property.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { pointerPress, shouldShowStrongFocus } from '@material/web/focus/strong-focus.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/** @soyCompatible */
export class Checkbox extends ActionElement {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.name = '';
        this.value = 'on';
        /**
         * Touch target extends beyond visual boundary of a component by default.
         * Set to `true` to remove touch target added to the component.
         * @see https://material.io/design/usability/accessibility.html
         */
        this.reducedTouchTarget = false;
        this.animationClass = '';
        this.showFocusRing = false;
    }
    update(changedProperties) {
        const oldIndeterminate = changedProperties.get('indeterminate');
        const oldChecked = changedProperties.get('checked');
        const oldDisabled = changedProperties.get('disabled');
        if (oldIndeterminate !== undefined || oldChecked !== undefined ||
            oldDisabled !== undefined) {
            const oldState = this.calculateAnimationStateName(!!oldChecked, !!oldIndeterminate, !!oldDisabled);
            const newState = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
            this.animationClass = `${oldState}-${newState}`;
        }
        super.update(changedProperties);
    }
    calculateAnimationStateName(checked, indeterminate, disabled) {
        if (disabled) {
            return 'disabled';
        }
        else if (indeterminate) {
            return 'indeterminate';
        }
        else if (checked) {
            return 'checked';
        }
        else {
            return 'unchecked';
        }
    }
    /** @soyTemplate */
    renderRipple() {
        return html `<md-ripple
        ?disabled="${this.disabled}"
        unbounded></md-ripple>`;
    }
    /** @soyTemplate */
    renderFocusRing() {
        return html `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    /**
     * @soyTemplate
     * @soyAttributes checkboxAttributes: input
     * @soyClasses checkboxClasses: .md3-checkbox
     */
    render() {
        /** @classMap */
        const classes = {
            'md3-checkbox--disabled': this.disabled,
            'md3-checkbox--touch': !this.reducedTouchTarget,
            // transition animiation classes
            'md3-checkbox--anim-checked-indeterminate': this.animationClass === 'checked-indeterminate',
            'md3-checkbox--anim-checked-unchecked': this.animationClass === 'checked-unchecked',
            'md3-checkbox--anim-indeterminate-checked': this.animationClass === 'indeterminate-checked',
            'md3-checkbox--anim-indeterminate-unchecked': this.animationClass === 'indeterminate-unchecked',
            'md3-checkbox--anim-unchecked-checked': this.animationClass === 'unchecked-checked',
            'md3-checkbox--anim-unchecked-indeterminate': this.animationClass === 'unchecked-indeterminate',
        };
        const ariaChecked = this.indeterminate ? 'mixed' : undefined;
        return html `
      <div class="md3-checkbox ${classMap(classes)}">
        ${this.renderFocusRing()}
        <input type="checkbox"
              class="md3-checkbox__native-control"
              name="${ifDefined(this.name)}"
              aria-checked="${ifDefined(ariaChecked)}"
              aria-label="${ifDefined(this.ariaLabel)}"
              aria-labelledby="${ifDefined(this.ariaLabelledBy)}"
              aria-describedby="${ifDefined(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? 'true' : 'false'}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              ?checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @pointerdown=${this.handlePointerDown}
              @pointerenter=${this.handlePointerEnter}
              @pointerup=${this.handlePointerUp}
              @pointercancel=${this.handlePointerCancel}
              @pointerleave=${this.handlePointerLeave}
              @click=${this.handleClick}
              @contextmenu=${this.handleContextMenu}
              >
        <div class="md3-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="md3-checkbox__checkmark"
              viewBox="0 0 24 24" aria-hidden="true">
            <path class="md3-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="md3-checkbox__mixedmark"></div>
        </div>
        <div class="md3-checkbox__ripple">
          ${this.renderRipple()}
        </div>
      </div>`;
    }
    setFormData(formData) {
        if (this.name && this.checked) {
            formData.append(this.name, this.value);
        }
    }
    beginPress({ positionEvent }) {
        this.ripple.beginPress(positionEvent);
    }
    endPress({ cancelled }) {
        this.ripple.endPress();
        if (cancelled) {
            return;
        }
        super.endPress({
            cancelled,
            actionData: { checked: this.formElement.checked, value: this.formElement.value }
        });
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    handlePointerEnter(e) {
        this.ripple.beginHover(e);
    }
    handlePointerLeave(e) {
        super.handlePointerLeave(e);
        this.ripple.endHover();
    }
    handlePointerDown(e) {
        super.handlePointerDown(e);
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleChange() {
        this.checked = this.formElement.checked;
        this.indeterminate = this.formElement.indeterminate;
        this.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true,
        }));
    }
    resetAnimationClass() {
        this.animationClass = '';
    }
}
__decorate([
    query('input'),
    __metadata("design:type", HTMLInputElement)
], Checkbox.prototype, "formElement", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Checkbox.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Checkbox.prototype, "disabled", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], Checkbox.prototype, "name", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Checkbox.prototype, "value", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-label' }),
    __metadata("design:type", String)
], Checkbox.prototype, "ariaLabel", void 0);
__decorate([
    legacyAriaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-labelledby' }),
    __metadata("design:type", String)
], Checkbox.prototype, "ariaLabelledBy", void 0);
__decorate([
    legacyAriaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-describedby' }),
    __metadata("design:type", String)
], Checkbox.prototype, "ariaDescribedBy", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Checkbox.prototype, "reducedTouchTarget", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Checkbox.prototype, "animationClass", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Checkbox.prototype, "showFocusRing", void 0);
__decorate([
    query('md-ripple'),
    __metadata("design:type", MdRipple)
], Checkbox.prototype, "ripple", void 0);
//# sourceMappingURL=checkbox.js.map