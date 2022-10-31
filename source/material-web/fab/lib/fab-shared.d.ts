/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/focus/focus-ring.js';
import '@material/web/ripple/ripple.js';
import { ActionElement, BeginPressConfig, EndPressConfig } from '@material/web/actionelement/action-element.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/**
 * @soyCompatible
 */
export declare abstract class FabShared extends ActionElement {
    static shadowRootOptions: ShadowRootInit;
    disabled: boolean;
    icon: string;
    label: string;
    lowered: boolean;
    reducedTouchTarget: boolean;
    ripple: MdRipple;
    protected showFocusRing: boolean;
    /**
     * @soyTemplate
     * @soyClasses fabClasses: .md3-fab
     */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected abstract renderIcon(icon: string): TemplateResult | string;
    /** @soyTemplate */
    protected renderTouchTarget(): TemplateResult;
    /** @soyTemplate */
    protected renderLabel(): TemplateResult | string;
    /** @soyTemplate */
    protected renderElevationOverlay(): TemplateResult;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult;
    /** @soyTemplate */
    protected renderFocusRing(): TemplateResult;
    beginPress({ positionEvent }: BeginPressConfig): void;
    endPress(options: EndPressConfig): void;
    handlePointerDown(e: PointerEvent): void;
    protected handlePointerEnter(e: PointerEvent): void;
    handlePointerLeave(e: PointerEvent): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
}
