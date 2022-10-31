/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ARIARole } from '@material/web/types/aria.js';
import { LitElement, PropertyValues, TemplateResult } from 'lit';
import { ListItem } from './listitem/list-item.js';
/** @soyCompatible */
export declare class List extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    ariaLabel: string;
    ariaActivedescendant: string;
    role: ARIARole;
    listTabIndex: number;
    items: ListItem[];
    activeListItem: ListItem | null;
    listRoot: HTMLElement;
    listItemTagName: string;
    protected assignedElements: HTMLElement[] | null;
    firstUpdated(changedProperties: PropertyValues): void;
    /** @soyTemplate */
    render(): TemplateResult;
    handleKeydown(event: KeyboardEvent): void;
    protected activateListItem(item: ListItem): void;
    protected deactivateListItem(item: ListItem): void;
    protected isListItemActive(item: ListItem): boolean;
    protected handleAction(event: CustomEvent): void;
    activateFirstItem(): void;
    activateLastItem(): void;
    resetActiveListItem(): void;
    focusListRoot(): void;
    /** Updates `this.items` based on slot elements in the DOM. */
    protected updateItems(): void;
    /** @return Whether the given element is a list item element. */
    private isListItem;
    private getFirstItem;
    private getLastItem;
    private getPrevItem;
    private getNextItem;
}
