/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { AnyDuringAriaMigration } from '@material/web/compat/base/aria-property.js';
import { NavigationTab } from '@material/web/navigationtab/lib/navigation-tab.js';
import { LitElement, PropertyValues, TemplateResult } from 'lit';
import { NavigationBarState } from './state.js';
/** @soyCompatible */
export declare class NavigationBar extends LitElement implements NavigationBarState {
    activeIndex: number;
    hideInactiveLabels: boolean;
    tabs: NavigationTab[];
    protected tabsElement: NavigationTab[];
    /** @soyPrefixAttribute */ ariaLabel: string | AnyDuringAriaMigration;
    /** @soyTemplate */
    render(): TemplateResult;
    firstUpdated(changedProperties: PropertyValues): void;
    layout(): void;
    private handleNavigationTabConnected;
    private handleNavigationTabInteraction;
    private handleKeydown;
    private onActiveIndexChange;
    private onHideInactiveLabelsChange;
}
