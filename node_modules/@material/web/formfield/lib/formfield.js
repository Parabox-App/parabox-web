/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { html, LitElement } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/** @soyCompatible */
export class Formfield extends LitElement {
    constructor() {
        super(...arguments);
        this.alignEnd = false;
        this.spaceBetween = false;
        this.label = '';
        this.disabled = false;
    }
    get input() {
        return this.slottedInputs?.[0] ?? null;
    }
    /** @soyTemplate */
    render() {
        return html `
      <div class="md3-formfield ${classMap(this.getRenderClasses())}">
        <div><slot></slot></div>
        <label class="md3-formfield__label"
          for="${ifDefined(this.inputId)}"
          @click="${this.labelClick}">${this.label}</label>
      </div>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-formfield--align-end': this.alignEnd,
            'md3-formfield--space-between': this.spaceBetween,
            'md3-formfield--disabled': this.disabled,
        };
    }
    labelClick() {
        const input = this.input;
        if (input && this.shadowRoot) {
            input.focus();
            input.click();
        }
    }
}
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Formfield.prototype, "alignEnd", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Formfield.prototype, "spaceBetween", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Formfield.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Formfield.prototype, "inputId", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Formfield.prototype, "disabled", void 0);
__decorate([
    queryAssignedElements(),
    __metadata("design:type", Array)
], Formfield.prototype, "slottedInputs", void 0);
//# sourceMappingURL=formfield.js.map