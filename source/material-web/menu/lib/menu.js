/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import '../../list/list.js';
import '../../menusurface/menu-surface.js';
import { ariaProperty } from '@material/web/decorators/aria-property.js';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MenuSurface } from '../../menusurface/lib/menu-surface.js';
import { MDCMenuFoundation } from './foundation.js';
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 * @fires opened
 * @fires closed
 */
export class Menu extends LitElement {
    constructor() {
        super(...arguments);
        this.listElementInternal = null;
        this.anchor = null;
        this.open = false;
        this.quick = false;
        this.corner = 'BOTTOM_START';
        this.x = null;
        this.y = null;
        this.absolute = false;
        this.activatable = false;
        this.fixed = false;
        this.forceGroupSelection = false;
        this.fullwidth = false;
        this.flipMenuHorizontally = false;
        this.stayOpenOnBodyClick = false;
        this.skipRestoreFocus = false;
        this.defaultFocus = 'LIST_ROOT';
        this.listUpdateComplete = null;
    }
    get listElement() {
        if (!this.listElementInternal) {
            this.listElementInternal = this.renderRoot.querySelector('md-list');
            return this.listElementInternal;
        }
        return this.listElementInternal;
    }
    get items() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.items;
        }
        return [];
    }
    render() {
        return html `
      <md-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .flipMenuHorizontally=${this.flipMenuHorizontally}
          .skipRestoreFocus=${this.skipRestoreFocus}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="md3-menu"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <md-list
          aria-label="${ifDefined(this.ariaLabel)}"
          role=${'menu'}
          .listTabIndex=${-1}
          .listItemTagName=${this.getMenuItemTagName()}
          @action=${this.onAction}>
        <slot></slot>
      </md-list>
    </md-menu-surface>`;
    }
    getMenuItemTagName() {
        return 'md-menu-item';
    }
    createAdapter() {
        return {
            addClassToElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.classList.add(className);
            },
            removeClassFromElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.classList.remove(className);
            },
            addAttributeToElementAtIndex: (index, attr, value) => {
                // TODO(b/240174946): This method is only used for setting
                // `aria-checked` and `aria-disabled` on the menu items when selected
                // and disabled states change. Remove this in favor of adding to the
                // template declaratively.
            },
            removeAttributeFromElementAtIndex: (index, attr) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.removeAttribute(attr);
            },
            getAttributeFromElementAtIndex: (index, attr) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return null;
                }
                const element = listElement.items[index];
                if (!element) {
                    return null;
                }
                return element.getAttribute(attr);
            },
            elementContainsClass: (element, className) => element.classList.contains(className),
            closeSurface: (skipRestoreFocus) => {
                this.skipRestoreFocus = Boolean(skipRestoreFocus);
                this.open = false;
            },
            getElementIndex: (element) => {
                const listElement = this.listElement;
                if (listElement) {
                    return listElement.items.indexOf(element);
                }
                return -1;
            },
            notifySelected: () => { },
            getMenuItemCount: () => {
                const listElement = this.listElement;
                if (!listElement) {
                    return 0;
                }
                return listElement.items.length;
            },
            getSelectedSiblingOfItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return -1;
                }
                // TODO(b/240177152): Remove/refactor this when implementing keyboard
                // navigation support.
                // const elementAtIndex = listElement.items[index];
                // if (!elementAtIndex || !elementAtIndex.group) {
                //   return -1;
                // }
                // for (let i = 0; i < listElement.items.length; i++) {
                //   if (i === index) {
                //     continue;
                //   }
                //   const current = listElement.items[i];
                //   if (current.selected && current.group === elementAtIndex.group) {
                //     return i;
                //   }
                // }
                return -1;
            },
            isSelectableItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return false;
                }
                const elementAtIndex = listElement.items[index];
                if (!elementAtIndex) {
                    return false;
                }
                return elementAtIndex.hasAttribute('group');
            },
        };
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onAction(evt) {
        const listElement = this.listElement;
        if (this.mdcFoundation && listElement) {
            const el = evt.detail.item;
            if (el) {
                this.mdcFoundation.handleItemAction(el);
            }
        }
    }
    onOpened() {
        this.skipRestoreFocus = false;
        this.open = true;
        this.listElement?.resetActiveListItem();
        switch (this.defaultFocus) {
            case 'FIRST_ITEM':
                this.listElement?.activateFirstItem();
                break;
            case 'LAST_ITEM':
                this.listElement?.activateLastItem();
                break;
            case 'NONE':
                // Do nothing.
                break;
            case 'LIST_ROOT':
            default:
                this.listElement?.focus();
                break;
        }
    }
    onClosed() {
        this.open = false;
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
        await this.listUpdateComplete;
        // @ts-ignore
        const result = await super.getUpdateComplete();
        return result;
    }
    // tslint:enable:ban-ts-ignore
    async firstUpdated() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        this.mdcFoundation = new MDCMenuFoundation(this.createAdapter());
        const listElement = this.listElement;
        if (listElement) {
            this.listUpdateComplete = listElement.updateComplete;
            await this.listUpdateComplete;
        }
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}
__decorate([
    query('.md3-menu'),
    __metadata("design:type", MenuSurface)
], Menu.prototype, "mdcRoot", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLSlotElement)
], Menu.prototype, "slotElement", void 0);
__decorate([
    property({ type: Object }),
    __metadata("design:type", HTMLElement)
], Menu.prototype, "anchor", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    property({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], Menu.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Menu.prototype, "open", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "quick", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Menu.prototype, "corner", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], Menu.prototype, "x", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], Menu.prototype, "y", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "absolute", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "activatable", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "fixed", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "forceGroupSelection", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "fullwidth", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "flipMenuHorizontally", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "skipRestoreFocus", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Menu.prototype, "defaultFocus", void 0);
//# sourceMappingURL=menu.js.map