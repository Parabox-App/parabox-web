/**
 * @requirecss {button.lib.shared_styles}
 *
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/icon/icon.js';
import '@material/web/focus/focus-ring.js';
import '@material/web/ripple/ripple.js';
import { ActionElement, BeginPressConfig, EndPressConfig } from '@material/web/actionelement/action-element.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { ARIAHasPopup } from '@material/web/types/aria.js';
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
import { ButtonState } from './state.js';
/** @soyCompatible */
export declare abstract class Button extends ActionElement implements ButtonState {
    static shadowRootOptions: ShadowRootInit;
    protected readonly iconTag: import("lit-html/static.js").StaticValue;
    ariaHasPopup: ARIAHasPopup;
    disabled: boolean;
    trailingIcon: boolean;
    icon: string;
    label: string;
    ariaLabel: string;
    hasIcon: boolean;
    preventClickDefault: boolean;
    buttonElement: HTMLElement;
    ripple: MdRipple;
    protected showFocusRing: boolean;
    protected iconElement: HTMLElement[] | null;
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: .md3-button
     */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected getIconContainerClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderTouchTarget(): TemplateResult;
    /** @soyTemplate */
    protected renderOverlay(): TemplateResult;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    /** @soyTemplate */
    protected renderOutline(): TemplateResult;
    /** @soyTemplate */
    protected renderFocusRing(): TemplateResult;
    /** @soyTemplate */
    protected renderLabel(): TemplateResult;
    /** @soyTemplate */
    protected renderLeadingIcon(): TemplateResult | string;
    /** @soyTemplate */
    protected renderTrailingIcon(): TemplateResult | string;
    /** @soyTemplate */
    protected renderIcon(): TemplateResult;
    /** @soyTemplate */
    protected renderFontIcon(): TemplateResult;
    update(changedProperties: Map<string, string>): void;
    focus(): void;
    blur(): void;
    beginPress({ positionEvent }: BeginPressConfig): void;
    endPress(options: EndPressConfig): void;
    handlePointerDown(e: PointerEvent): void;
    protected handlePointerEnter(e: PointerEvent): void;
    handlePointerLeave(e: PointerEvent): void;
    /** Delegate clicks on host element to inner button element. */
    click(): void;
    handleClick(e: MouseEvent): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
    protected handleSlotChange(): void;
}
