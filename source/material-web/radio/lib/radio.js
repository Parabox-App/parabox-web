/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
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
import { SingleSelectionController } from './single-selection-controller.js';
/**
 * @fires checked
 * @soyCompatible
 */
export class Radio extends ActionElement {
    constructor() {
        super(...arguments);
        this._checked = false;
        this.showFocusRing = false;
        this.global = false;
        this.disabled = false;
        this.value = 'on';
        this.name = '';
        /**
         * Touch target extends beyond visual boundary of a component by default.
         * Set to `true` to remove touch target added to the component.
         * @see https://material.io/design/usability/accessibility.html
         */
        this.reducedTouchTarget = false;
        /**
         * input's tabindex is updated based on checked status.
         * Tab navigation will be removed from unchecked radios.
         */
        this.formElementTabIndex = 0;
        this.focused = false;
        this.rippleElement = null;
    }
    get checked() {
        return this.getChecked();
    }
    getChecked() {
        return this._checked;
    }
    /**
     * We define our own getter/setter for `checked` because we need to track
     * changes to it synchronously.
     *
     * The order in which the `checked` property is set across radio buttons
     * within the same group is very important. However, we can't rely on
     * UpdatingElement's `updated` callback to observe these changes (which is
     * also what the `@observer` decorator uses), because it batches changes to
     * all properties.
     *
     * Consider:
     *
     *   radio1.disabled = true;
     *   radio2.checked = true;
     *   radio1.checked = true;
     *
     * In this case we'd first see all changes for radio1, and then for radio2,
     * and we couldn't tell that radio1 was the most recently checked.
     */
    set checked(isChecked) {
        this.setChecked(isChecked);
    }
    setChecked(isChecked) {
        const oldValue = this._checked;
        if (isChecked === oldValue) {
            return;
        }
        this._checked = isChecked;
        this.selectionController?.update(this);
        this.requestUpdate('checked', oldValue);
        // useful when unchecks self and wrapping element needs to synchronize
        // TODO(b/168543810): Remove triggering event on programmatic API call.
        this.dispatchEvent(new Event('checked', { bubbles: true, composed: true }));
    }
    /** @soyTemplate */
    renderRipple() {
        return html `<md-ripple unbounded
        ?disabled="${this.disabled}"></md-ripple>`;
    }
    /** @soyTemplate */
    renderFocusRing() {
        return html `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    get isRippleActive() {
        return false;
    }
    connectedCallback() {
        super.connectedCallback();
        // Note that we must defer creating the selection controller until the
        // element has connected, because selection controllers are keyed by the
        // radio's shadow root. For example, if we're stamping in a lit map
        // or repeat, then we'll be constructed before we're added to a root node.
        //
        // Also note if we aren't using native shadow DOM, we still need a
        // SelectionController, because we should update checked status of other
        // radios in the group when selection changes. It also simplifies
        // implementation and testing to use one in all cases.
        //
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        this.selectionController = SingleSelectionController.getController(this);
        this.selectionController.register(this);
        // Radios maybe checked before connected, update selection as soon it is
        // connected to DOM. Last checked radio button in the DOM will be selected.
        //
        // NOTE: If we update selection only after firstUpdate() we might mistakenly
        // update checked status before other radios are rendered.
        this.selectionController.update(this);
    }
    disconnectedCallback() {
        // The controller is initialized in connectedCallback, so if we are in
        // disconnectedCallback then it must be initialized.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.selectionController.unregister(this);
        this.selectionController = undefined;
    }
    updated(changedProperties) {
        if (changedProperties.has('checked') && this.formElement) {
            this.formElement.checked = this.checked;
            if (!this.checked) {
                // Remove focus ring when unchecked on other radio programmatically.
                // Blur on input since this determines the focus style.
                this.formElement?.blur();
            }
        }
    }
    createAdapter() { }
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
    click() {
        this.formElement.focus();
        this.formElement.click();
    }
    handleFocus() {
        this.focused = true;
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.focused = false;
        this.showFocusRing = false;
    }
    setFormData(formData) {
        if (this.name && this.checked) {
            formData.append(this.name, this.value);
        }
    }
    /**
     * @soyTemplate
     * @soyAttributes radioAttributes: input
     * @soyClasses radioClasses: .md3-radio
     */
    render() {
        /** @classMap */
        const classes = {
            'md3-radio--touch': !this.reducedTouchTarget,
            'md3-ripple-upgraded--background-focused': this.focused,
            'md3-radio--disabled': this.disabled,
        };
        return html `
      <div class="md3-radio ${classMap(classes)}">
        ${this.renderFocusRing()}
        <input
          tabindex="${this.formElementTabIndex}"
          class="md3-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${ifDefined(this.ariaLabel)}"
          aria-labelledby="${ifDefined(this.ariaLabelledBy)}"
          aria-describedby="${ifDefined(this.ariaDescribedBy)}"
          ?checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @pointerenter=${this.handlePointerEnter}
          @pointerdown=${this.handlePointerDown}
          @pointerup=${this.handlePointerUp}
          @pointercancel=${this.handlePointerCancel}
          @pointerleave=${this.handlePointerLeave}
          >
        <div class="md3-radio__background">
          <div class="md3-radio__outer-circle"></div>
          <div class="md3-radio__inner-circle"></div>
        </div>
        <div class="md3-radio__ripple">
          ${this.renderRipple()}
        </div>
      </div>`;
    }
    handlePointerEnter() {
        this.ripple.beginHover();
    }
    handlePointerDown(event) {
        super.handlePointerDown(event);
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handlePointerLeave(e) {
        super.handlePointerLeave(e);
        this.ripple.endHover();
    }
    changeHandler() {
        if (this.disabled) {
            return;
        }
        // Per spec, the change event on a radio input always represents checked.
        this.checked = true;
        this.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true,
        }));
    }
}
__decorate([
    query('input'),
    __metadata("design:type", HTMLInputElement)
], Radio.prototype, "formElement", void 0);
__decorate([
    query('md-ripple'),
    __metadata("design:type", MdRipple)
], Radio.prototype, "ripple", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Radio.prototype, "showFocusRing", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Radio.prototype, "global", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Radio.prototype, "checked", null);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Radio.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Radio.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Radio.prototype, "name", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Radio.prototype, "reducedTouchTarget", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], Radio.prototype, "formElementTabIndex", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Radio.prototype, "focused", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ attribute: 'aria-label' }),
    __metadata("design:type", String)
], Radio.prototype, "ariaLabel", void 0);
__decorate([
    legacyAriaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ attribute: 'aria-labelledby' }),
    __metadata("design:type", String)
], Radio.prototype, "ariaLabelledBy", void 0);
__decorate([
    legacyAriaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-describedby' }),
    __metadata("design:type", String)
], Radio.prototype, "ariaDescribedBy", void 0);
//# sourceMappingURL=radio.js.map