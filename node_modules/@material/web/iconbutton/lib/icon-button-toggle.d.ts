/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ActionElement, BeginPressConfig, EndPressConfig } from '@material/web/actionelement/action-element.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/** @soyCompatible */
export declare abstract class IconButtonToggle extends ActionElement {
    /** @soyPrefixAttribute */
    ariaLabel: string;
    disabled: boolean;
    onIcon: string;
    offIcon: string;
    ariaLabelOn: string;
    ariaLabelOff: string;
    isOn: boolean;
    ripple: MdRipple;
    protected showFocusRing: boolean;
    protected readonly rippleElementTag: import("lit-html/static").StaticValue;
    protected readonly focusElementTag: import("lit-html/static").StaticValue;
    protected readonly iconElementTag: import("lit-html/static").StaticValue;
    beginPress({ positionEvent }: BeginPressConfig): void;
    endPress({ cancelled }: EndPressConfig): void;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult;
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
    handlePointerDown(e: PointerEvent): void;
    protected handlePointerEnter(e: PointerEvent): void;
    handlePointerLeave(e: PointerEvent): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
}
