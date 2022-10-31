/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import '@material/web/focus/focus-ring.js';
import { ActionElement } from '@material/web/actionelement/action-element.js';
import { ariaProperty as legacyAriaProperty } from '@material/web/compat/base/aria-property.js'; // TODO(b/236840525): remove compat dependencies
import { FormController, getFormValue } from '@material/web/controller/form-controller.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { pointerPress as focusRingPointerPress, shouldShowStrongFocus } from '@material/web/focus/strong-focus.js';
import { html } from 'lit';
import { eventOptions, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/** @soyCompatible */
export class Switch extends ActionElement {
    constructor() {
        super();
        this.disabled = false;
        this.processing = false;
        this.selected = false;
        this.icons = false;
        this.showOnlySelectedIcon = false;
        // TODO: Add support in @ariaProperty for idref aria attributes
        /** @soyPrefixAttribute */
        this.ariaLabelledBy = '';
        this.showFocusRing = false;
        this.name = '';
        this.value = 'on';
        this.addController(new FormController(this));
    }
    // FormController
    get form() {
        return this.closest('form');
    }
    [getFormValue]() {
        return this.selected ? this.value : null;
    }
    click() {
        this.endPress({ cancelled: false });
        super.click();
    }
    /** @soyTemplate */
    render() {
        const ariaLabelValue = this.ariaLabel ? this.ariaLabel : undefined;
        const ariaLabelledByValue = this.ariaLabelledBy ? this.ariaLabelledBy : undefined;
        // TODO(b/230763631): update this template to include spans instead of divs
        return html `
      <button
        type="button"
        class="md3-switch ${classMap(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label="${ifDefined(ariaLabelValue)}"
        aria-labelledby="${ifDefined(ariaLabelledByValue)}"
        ?disabled=${this.disabled}
        @click=${this.handleClick}
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerCancel}
        @pointerleave=${this.handlePointerLeave}
        @contextmenu=${this.handleContextMenu}
      >
        ${this.renderFocusRing()}
        <div class="md3-switch__track">
          ${this.renderHandle()}
        </div>
      </button>

      <input
        class="md3-switch__input"
        type="checkbox"
        aria-hidden="true"
        name="${this.name}"
        ?checked=${this.selected}
        .value=${this.value}
      >
    `;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-switch--processing': this.processing,
            'md3-switch--selected': this.selected,
            'md3-switch--unselected': !this.selected,
        };
    }
    /** @soyTemplate */
    renderFocusRing() {
        return html `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    /** @soyTemplate */
    renderHandle() {
        /** @classMap */
        const classes = {
            'md3-switch__handle--big': this.icons && !this.showOnlySelectedIcon,
        };
        return html `
      <div class="md3-switch__handle-container">
        <div class="md3-switch__handle ${classMap(classes)}">
          ${this.shouldShowIcons() ? this.renderIcons() : html ``}
        </div>
        ${this.renderTouchTarget()}
      </div>
    `;
    }
    /** @soyTemplate */
    renderIcons() {
        return html `
      <div class="md3-switch__icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon ? html `` : this.renderOffIcon()}
      </div>
    `;
    }
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     *
     * @soyTemplate
     */
    renderOnIcon() {
        return html `
      <svg class="md3-switch__icon md3-switch__icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `;
    }
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aclose%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     *
     * @soyTemplate
     */
    renderOffIcon() {
        return html `
      <svg class="md3-switch__icon md3-switch__icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `;
    }
    /** @soyTemplate */
    renderTouchTarget() {
        return html `<span class="md3-switch__touch"></span>`;
    }
    /** @soyTemplate */
    shouldShowIcons() {
        return this.icons || this.showOnlySelectedIcon;
    }
    endPress({ cancelled }) {
        if (cancelled || this.disabled) {
            return;
        }
        this.selected = !this.selected;
        super.endPress({ cancelled, actionData: { selected: this.selected } });
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    handlePointerDown(event) {
        super.handlePointerDown(event);
        focusRingPointerPress();
        this.showFocusRing = false;
    }
}
Switch.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Switch.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Switch.prototype, "processing", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Switch.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Switch.prototype, "icons", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Switch.prototype, "showOnlySelectedIcon", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    // TODO(b/210730484): replace with @soyParam annotation
    ,
    property({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], Switch.prototype, "ariaLabel", void 0);
__decorate([
    legacyAriaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'aria-labelledby' }),
    __metadata("design:type", Object)
], Switch.prototype, "ariaLabelledBy", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Switch.prototype, "showFocusRing", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], Switch.prototype, "name", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Switch.prototype, "value", void 0);
__decorate([
    eventOptions({ passive: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PointerEvent]),
    __metadata("design:returntype", void 0)
], Switch.prototype, "handlePointerDown", null);
//# sourceMappingURL=switch.js.map