/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/focus/focus-ring.js';
import '@material/web/ripple/ripple.js';
import { ActionElement, BeginPressConfig, EndPressConfig } from '@material/web/actionelement/action-element.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { PropertyValues, TemplateResult } from 'lit';
import { SingleSelectionController } from './single-selection-controller.js';
/**
 * @fires checked
 * @soyCompatible
 */
export declare class Radio extends ActionElement {
    protected formElement: HTMLInputElement;
    ripple: MdRipple;
    protected _checked: boolean;
    protected showFocusRing: boolean;
    global: boolean;
    get checked(): boolean;
    protected getChecked(): boolean;
    /**
     * We define our own getter/setter for `checked` because we need to track
     * changes to it synchronously.
     *
     * The order in which the `checked` property is set across radio buttons
     * within the same group is very important. However, we can't rely on
     * UpdatingElement's `updated` callback to observe these changes (which is
     * also what the `@observer` decorator uses), because it batches changes to
     * all properties.
     *
     * Consider:
     *
     *   radio1.disabled = true;
     *   radio2.checked = true;
     *   radio1.checked = true;
     *
     * In this case we'd first see all changes for radio1, and then for radio2,
     * and we couldn't tell that radio1 was the most recently checked.
     */
    set checked(isChecked: boolean);
    protected setChecked(isChecked: boolean): void;
    disabled: boolean;
    value: string;
    name: string;
    /**
     * Touch target extends beyond visual boundary of a component by default.
     * Set to `true` to remove touch target added to the component.
     * @see https://material.io/design/usability/accessibility.html
     */
    reducedTouchTarget: boolean;
    protected selectionController?: SingleSelectionController;
    /**
     * input's tabindex is updated based on checked status.
     * Tab navigation will be removed from unchecked radios.
     */
    formElementTabIndex: number;
    protected focused: boolean;
    /** @soyPrefixAttribute */
    ariaLabel: string;
    /** @soyPrefixAttribute */
    ariaLabelledBy: string;
    /** @soyPrefixAttribute */
    ariaDescribedBy: undefined | string;
    protected rippleElement: MdRipple | null;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    /** @soyTemplate */
    protected renderFocusRing(): TemplateResult;
    get isRippleActive(): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues): void;
    protected createAdapter(): void;
    beginPress({ positionEvent }: BeginPressConfig): void;
    endPress({ cancelled }: EndPressConfig): void;
    click(): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
    protected setFormData(formData: FormData): void;
    /**
     * @soyTemplate
     * @soyAttributes radioAttributes: input
     * @soyClasses radioClasses: .md3-radio
     */
    protected render(): TemplateResult;
    protected handlePointerEnter(): void;
    handlePointerDown(event: PointerEvent): void;
    handlePointerLeave(e: PointerEvent): void;
    protected changeHandler(): void;
}
