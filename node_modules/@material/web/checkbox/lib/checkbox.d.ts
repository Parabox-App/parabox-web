/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/focus/focus-ring.js';
import '@material/web/ripple/ripple.js';
import { ActionElement, BeginPressConfig, EndPressConfig } from '@material/web/actionelement/action-element.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { PropertyValues, TemplateResult } from 'lit';
/** @soyCompatible */
export declare class Checkbox extends ActionElement {
    protected formElement: HTMLInputElement;
    checked: boolean;
    indeterminate: boolean;
    disabled: boolean;
    name: string;
    value: string;
    /** @soyPrefixAttribute */
    ariaLabel: string;
    /** @soyPrefixAttribute */
    ariaLabelledBy: undefined | string;
    /** @soyPrefixAttribute */
    ariaDescribedBy: undefined | string;
    /**
     * Touch target extends beyond visual boundary of a component by default.
     * Set to `true` to remove touch target added to the component.
     * @see https://material.io/design/usability/accessibility.html
     */
    reducedTouchTarget: boolean;
    protected animationClass: string;
    protected showFocusRing: boolean;
    ripple: MdRipple;
    protected update(changedProperties: PropertyValues): void;
    protected calculateAnimationStateName(checked: boolean, indeterminate: boolean, disabled: boolean): string;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult;
    /** @soyTemplate */
    protected renderFocusRing(): TemplateResult;
    /**
     * @soyTemplate
     * @soyAttributes checkboxAttributes: input
     * @soyClasses checkboxClasses: .md3-checkbox
     */
    protected render(): TemplateResult;
    protected setFormData(formData: FormData): void;
    beginPress({ positionEvent }: BeginPressConfig): void;
    endPress({ cancelled }: EndPressConfig): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
    protected handlePointerEnter(e: PointerEvent): void;
    handlePointerLeave(e: PointerEvent): void;
    handlePointerDown(e: PointerEvent): void;
    protected handleChange(): void;
    protected resetAnimationClass(): void;
}
