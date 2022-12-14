/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/ripple/ripple.js';
import '@material/web/focus/focus-ring.js';
import { ActionElement, BeginPressConfig, EndPressConfig } from '@material/web/actionelement/action-element.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { ARIARole } from '@material/web/types/aria.js';
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/** @soyCompatible */
export declare class ListItem extends ActionElement {
    role: ARIARole;
    ariaSelected: 'true' | 'false';
    ariaChecked: 'true' | 'false';
    itemId: string;
    supportingText: string;
    multiLineSupportingText: string;
    trailingSupportingText: string;
    disabled: boolean;
    itemTabIndex: number;
    headline: string;
    ripple: MdRipple;
    listItemRoot: HTMLElement;
    showFocusRing: boolean;
    /** @soyTemplate */
    render(): TemplateResult;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult;
    /** @soyTemplate */
    protected renderFocusRing(): TemplateResult;
    /** @soyTemplate */
    protected getAriaRole(): ARIARole;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderStart(): TemplateResult;
    /** @soyTemplate */
    protected renderBody(): TemplateResult;
    /** @soyTemplate */
    protected renderSupportingText(): TemplateResult;
    /** @soyTemplate */
    protected renderMultiLineSupportingText(): TemplateResult;
    /** @soyTemplate */
    protected renderEnd(): TemplateResult;
    /** @soyTemplate */
    protected renderTrailingSupportingText(): TemplateResult;
    protected handleSlotChange(): void;
    beginPress({ positionEvent }: BeginPressConfig): void;
    endPress({ cancelled }: EndPressConfig): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
    handlePointerDown(e: PointerEvent): void;
    protected handlePointerEnter(e: PointerEvent): void;
    handlePointerLeave(e: PointerEvent): void;
    /** @bubbleWizEvent */
    protected handleKeyDown(e: KeyboardEvent): void;
    protected handleKeyUp(e: KeyboardEvent): void;
    /**
     * Focuses list item and makes list item focusable via keyboard.
     */
    activate(): void;
    /**
     * Returns true if list item is currently focused and is focusable.
     */
    isActive(): boolean;
    /**
     * Removes list item from sequential keyboard navigation.
     */
    deactivate(): void;
}
