/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
// TODO(b/231221156): remove compat dependencies
import { ariaProperty as legacyAriaProperty } from '@material/web/compat/base/aria-property.js';
import { observer } from '@material/web/compat/base/observer.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/** @soyCompatible */
export class NavigationDrawer extends LitElement {
    constructor() {
        super(...arguments);
        // tslint:disable-next-line:no-new-decorators
        this.ariaModal = 'false';
        this.opened = false;
        this.pivot = 'end';
    }
    /** @soyTemplate */
    render() {
        const ariaExpanded = this.opened ? 'true' : 'false';
        const ariaHidden = !this.opened ? 'true' : 'false';
        return html `
      <div
        aria-describedby="${ifDefined(this.ariaDescribedBy)}"
        aria-expanded="${ariaExpanded}"
        aria-hidden="${ariaHidden}"
        aria-label="${ifDefined(this.ariaLabel)}"
        aria-labelledby="${ifDefined(this.ariaLabelledBy)}"
        aria-modal="${this.ariaModal}"
        class="md3-navigation-drawer ${this.getRenderClasses()}"
        role="dialog"><div class="md3-elevation-overlay"
        ></div>
        <div class="md3-navigation-drawer__slot-content">
          <slot></slot>
        </div>
      </div>
    `;
    }
    /** @soyTemplate classMap */
    getRenderClasses() {
        return classMap({
            'md3-navigation-drawer--opened': this.opened,
            'md3-navigation-drawer--pivot-at-start': this.pivot === 'start',
        });
    }
}
__decorate([
    legacyAriaProperty,
    property({ type: String, attribute: 'aria-describedby' }),
    __metadata("design:type", String)
], NavigationDrawer.prototype, "ariaDescribedBy", void 0);
__decorate([
    ariaProperty,
    property({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", Object)
], NavigationDrawer.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    property({ attribute: 'data-aria-modal', type: String, noAccessor: true }),
    __metadata("design:type", String)
], NavigationDrawer.prototype, "ariaModal", void 0);
__decorate([
    legacyAriaProperty,
    property({ type: String, attribute: 'aria-labelledby' }),
    __metadata("design:type", String)
], NavigationDrawer.prototype, "ariaLabelledBy", void 0);
__decorate([
    property({ type: Boolean }) // tslint:disable-next-line:no-new-decorators
    ,
    observer(function (value) {
        setTimeout(() => {
            this.dispatchEvent(new CustomEvent('navigation-drawer-changed', { detail: { opened: value }, bubbles: true, composed: true }));
        }, 250);
    }),
    __metadata("design:type", Object)
], NavigationDrawer.prototype, "opened", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], NavigationDrawer.prototype, "pivot", void 0);
//# sourceMappingURL=navigation-drawer.js.map