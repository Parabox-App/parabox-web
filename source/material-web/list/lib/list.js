/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { html, LitElement } from 'lit';
import { property, query, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
const NAVIGATABLE_KEYS = {
    ArrowDown: 'ArrowDown',
    ArrowUp: 'ArrowUp',
    Home: 'Home',
    End: 'End',
};
/** @soyCompatible */
export class List extends LitElement {
    constructor() {
        super(...arguments);
        this.role = 'list';
        this.listTabIndex = 0;
        this.items = [];
        this.activeListItem = null;
        this.listItemTagName = 'md-list-item';
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.updateItems();
    }
    /** @soyTemplate */
    render() {
        return html `
      <ul class="md3-list"
          aria-label="${ifDefined(this.ariaLabel)}"
          tabindex=${this.listTabIndex}
          role=${this.role}
          @action=${this.handleAction}
          @keydown=${this.handleKeydown}
          >
        <span><slot></slot></span>
        <div class="md3-elevation-overlay"></div>
      </ul>
    `;
    }
    handleKeydown(event) {
        if (Object.values(NAVIGATABLE_KEYS).indexOf(event.key) === -1)
            return;
        for (const item of this.items) {
            if (this.isListItemActive(item)) {
                this.activeListItem = item;
            }
            this.deactivateListItem(item);
        }
        if (event.key === NAVIGATABLE_KEYS.ArrowDown) {
            event.preventDefault();
            if (this.activeListItem) {
                this.activeListItem = this.getNextItem(this.activeListItem);
            }
            else {
                this.activeListItem = this.getFirstItem();
            }
        }
        if (event.key === NAVIGATABLE_KEYS.ArrowUp) {
            event.preventDefault();
            if (this.activeListItem) {
                this.activeListItem = this.getPrevItem(this.activeListItem);
            }
            else {
                this.activeListItem = this.getLastItem();
            }
        }
        if (event.key === NAVIGATABLE_KEYS.Home) {
            event.preventDefault();
            this.activeListItem = this.getFirstItem();
        }
        if (event.key === NAVIGATABLE_KEYS.End) {
            event.preventDefault();
            this.activeListItem = this.getLastItem();
        }
        if (this.activeListItem) {
            this.activateListItem(this.activeListItem);
        }
    }
    activateListItem(item) {
        item.activate();
    }
    deactivateListItem(item) {
        item.deactivate();
    }
    isListItemActive(item) {
        return item.isActive();
    }
    handleAction(event) { }
    activateFirstItem() {
        this.activeListItem = this.getFirstItem();
        this.activeListItem.activate();
    }
    activateLastItem() {
        this.activeListItem = this.getLastItem();
        this.activeListItem.activate();
    }
    resetActiveListItem() {
        this.activeListItem = null;
    }
    focusListRoot() {
        this.listRoot.focus();
    }
    /** Updates `this.items` based on slot elements in the DOM. */
    updateItems() {
        const elements = this.assignedElements || [];
        this.items = elements.filter(this.isListItem, this);
    }
    /** @return Whether the given element is a list item element. */
    isListItem(element) {
        return element.tagName.toLowerCase() === this.listItemTagName;
    }
    getFirstItem() {
        return this.items[0];
    }
    getLastItem() {
        return this.items[this.items.length - 1];
    }
    getPrevItem(item) {
        const curIndex = this.items.indexOf(item);
        return this.items[curIndex === 0 ? this.items.length - 1 : curIndex - 1];
    }
    getNextItem(item) {
        const curIndex = this.items.indexOf(item);
        return this.items[(curIndex + 1) % this.items.length];
    }
}
List.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], List.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'data-aria-activedescendant', noAccessor: true }),
    __metadata("design:type", String)
], List.prototype, "ariaActivedescendant", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'data-role', noAccessor: true }),
    __metadata("design:type", String)
], List.prototype, "role", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], List.prototype, "listTabIndex", void 0);
__decorate([
    query('.md3-list'),
    __metadata("design:type", HTMLElement)
], List.prototype, "listRoot", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], List.prototype, "listItemTagName", void 0);
__decorate([
    queryAssignedElements({ flatten: true }),
    __metadata("design:type", Array)
], List.prototype, "assignedElements", void 0);
//# sourceMappingURL=list.js.map