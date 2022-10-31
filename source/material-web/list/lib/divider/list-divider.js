/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
/** @soyCompatible */
export class ListDivider extends LitElement {
    constructor() {
        super(...arguments);
        this.role = 'separator';
    }
    /** @soyTemplate */
    render() {
        return html `
       <li role="separator" class="md3-list__divider">
       </li>
     `;
    }
}
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'data-role', noAccessor: true }),
    __metadata("design:type", String)
], ListDivider.prototype, "role", void 0);
//# sourceMappingURL=list-divider.js.map