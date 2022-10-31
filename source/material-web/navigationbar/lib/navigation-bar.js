/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
import { KEY, normalizeKey } from '@material/web/compat/dom/keyboard.js';
import { ariaProperty } from '@material/web/compat/base/aria-property.js';
import { observer } from '@material/web/compat/base/observer.js';
import { deepActiveElementPath } from '@material/web/compat/base/utils.js';
import { html, LitElement } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
/** @soyCompatible */
export class NavigationBar extends LitElement {
    constructor() {
        super(...arguments);
        this.activeIndex = 0;
        this.hideInactiveLabels = false;
        // tslint:disable-next-line:no-new-decorators
        this.tabs = [];
    }
    /** @soyTemplate */
    render() {
        return html `<div class="md3-navigation-bar"
            role="tablist"
            aria-label="${ifDefined(this.ariaLabel)}"
            @keydown="${this.handleKeydown}"
            @navigation-tab-interaction="${this.handleNavigationTabInteraction}"
            @navigation-tab-rendered=${this.handleNavigationTabConnected}
          ><div class="md3-elevation-overlay"
        ></div><div class="md3-navigation-bar__tabs-slot-container"
        ><slot></slot></div></div>`;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.layout();
    }
    layout() {
        if (!this.tabsElement)
            return;
        const navTabs = [];
        for (const node of this.tabsElement) {
            navTabs.push(node);
        }
        this.tabs = navTabs;
    }
    handleNavigationTabConnected(event) {
        const target = event.target;
        if (this.tabs.indexOf(target) === -1) {
            this.layout();
        }
    }
    handleNavigationTabInteraction(event) {
        this.activeIndex = this.tabs.indexOf(event.detail.state);
    }
    handleKeydown(event) {
        const key = normalizeKey(event);
        const activeElementPath = deepActiveElementPath();
        const focusedTabIndex = this.tabs.findIndex((tab) => {
            return tab.buttonElement ===
                activeElementPath[activeElementPath.length - 1];
        });
        const isRTL = getComputedStyle(this).getPropertyValue('direction') === 'rtl';
        const maxIndex = this.tabs.length - 1;
        if (key === KEY.ENTER || key === KEY.SPACEBAR) {
            this.activeIndex = focusedTabIndex;
            return;
        }
        if (key === KEY.HOME) {
            this.tabs[0].focus();
            return;
        }
        if (key === KEY.END) {
            this.tabs[maxIndex].focus();
            return;
        }
        const toNextTab = (key === KEY.ARROW_RIGHT && !isRTL) ||
            (key === KEY.ARROW_LEFT && isRTL);
        if (toNextTab && focusedTabIndex === maxIndex) {
            this.tabs[0].focus();
            return;
        }
        if (toNextTab) {
            this.tabs[focusedTabIndex + 1].focus();
            return;
        }
        const toPreviousTab = (key === KEY.ARROW_LEFT && !isRTL) ||
            (key === KEY.ARROW_RIGHT && isRTL);
        if (toPreviousTab && focusedTabIndex === 0) {
            this.tabs[maxIndex].focus();
            return;
        }
        if (toPreviousTab) {
            this.tabs[focusedTabIndex - 1].focus();
            return;
        }
    }
    onActiveIndexChange(value) {
        if (!this.tabs[value]) {
            throw new Error('NavigationBar: activeIndex is out of bounds.');
        }
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].active = i === value;
        }
    }
    onHideInactiveLabelsChange(value) {
        for (const tab of this.tabs) {
            tab.hideInactiveLabel = value;
        }
    }
}
__decorate([
    property({ type: Number }) // tslint:disable-next-line:no-new-decorators
    ,
    observer(function (value) {
        this.onActiveIndexChange(this.activeIndex);
        this.dispatchEvent(new CustomEvent('navigation-bar-activated', {
            detail: { tab: this.tabs[value], activeIndex: this.activeIndex },
            bubbles: true,
            composed: true
        }));
    }),
    __metadata("design:type", Object)
], NavigationBar.prototype, "activeIndex", void 0);
__decorate([
    property({ type: Boolean }) // tslint:disable-next-line:no-new-decorators
    ,
    observer(function (value) {
        this.onHideInactiveLabelsChange(this.hideInactiveLabels);
    }),
    __metadata("design:type", Object)
], NavigationBar.prototype, "hideInactiveLabels", void 0);
__decorate([
    observer(function () {
        this.onHideInactiveLabelsChange(this.hideInactiveLabels);
        this.onActiveIndexChange(this.activeIndex);
    }),
    __metadata("design:type", Array)
], NavigationBar.prototype, "tabs", void 0);
__decorate([
    queryAssignedElements({ flatten: true }),
    __metadata("design:type", Array)
], NavigationBar.prototype, "tabsElement", void 0);
__decorate([
    ariaProperty,
    property({ attribute: 'aria-label' }),
    __metadata("design:type", Object)
], NavigationBar.prototype, "ariaLabel", void 0);
//# sourceMappingURL=navigation-bar.js.map