/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/focus/focus-ring.js';
import '@material/web/icon/icon.js';
import { ActionElement, BeginPressConfig, EndPressConfig } from '@material/web/actionelement/action-element.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { ARIAHasPopup } from '@material/web/types/aria.js';
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/** @soyCompatible */
export declare abstract class IconButton extends ActionElement {
    disabled: boolean;
    icon: string;
    flipIconInRtl: boolean;
    flipIcon: boolean;
    /** @soyPrefixAttribute */
    ariaLabel: string;
    /** @soyPrefixAttribute */
    ariaHasPopup: ARIAHasPopup;
    buttonElement: HTMLElement;
    ripple: MdRipple;
    protected showFocusRing: boolean;
    protected readonly rippleElementTag: import("lit-html/static").StaticValue;
    protected readonly focusElementTag: import("lit-html/static").StaticValue;
    protected readonly iconElementTag: import("lit-html/static").StaticValue;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    /** @soyTemplate */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderIcon(icon: string): TemplateResult | string;
    /** @soyTemplate */
    protected renderTouchTarget(): TemplateResult;
    /** @soyTemplate */
    protected renderFocusRing(): TemplateResult;
    connectedCallback(): void;
    private maybeFlipIconInRtl;
    beginPress({ positionEvent }: BeginPressConfig): void;
    endPress(options: EndPressConfig): void;
    handlePointerDown(e: PointerEvent): void;
    protected handlePointerEnter(e: PointerEvent): void;
    handlePointerLeave(e: PointerEvent): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
}
