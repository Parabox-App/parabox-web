/**
 * @requirecss {textfield.lib.shared_styles}
 *
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { getFormValue } from '@material/web/controller/form-controller.js';
import { LitElement, PropertyValues, TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
import { StaticValue } from 'lit/static-html.js';
import { ARIAAutoComplete, ARIAExpanded, ARIARole } from '../../types/aria.js';
/**
 * Input types that are compatible with the text field.
 */
export declare type TextFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
/**
 * Input types that are not fully supported for the text field.
 */
export declare type UnsupportedTextFieldType = 'color' | 'date' | 'datetime-local' | 'file' | 'month' | 'time' | 'week';
/**
 * Input types that are incompatible with the text field.
 */
export declare type InvalidTextFieldType = 'button' | 'checkbox' | 'hidden' | 'image' | 'radio' | 'range' | 'reset' | 'submit';
/** @soyCompatible */
export declare abstract class TextField extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    disabled: boolean;
    /**
     * Gets or sets whether or not the text field is in a visually invalid state.
     *
     * Calling `reportValidity()` will automatically update `error`.
     */
    error: boolean;
    /**
     * The error message that replaces supporting text when `error` is true. If
     * `errorText` is an empty string, then the supporting text will continue to
     * show.
     *
     * Calling `reportValidity()` will automatically update `errorText` to the
     * native `validationMessage`.
     */
    errorText: string;
    label?: string;
    required: boolean;
    /**
     * The current value of the text field. It is always a string.
     *
     * This is equal to `defaultValue` before user input.
     */
    value: string;
    /**
     * The default value of the text field. Before user input, changing the
     * default value will update `value` as well.
     *
     * When the text field is reset, its `value` will be set to this default
     * value.
     */
    defaultValue: string;
    /**
     * An optional prefix to display before the input value.
     */
    prefixText: string;
    /**
     * An optional suffix to display after the input value.
     */
    suffixText: string;
    /**
     * Whether or not the text field has a leading icon. Used for SSR.
     */
    hasLeadingIcon: boolean;
    /**
     * Whether or not the text field has a trailing icon. Used for SSR.
     */
    hasTrailingIcon: boolean;
    /**
     * Conveys additional information below the text field, such as how it should
     * be used.
     */
    supportingText: string;
    /**
     * The ID on the supporting text element, used for SSR.
     */
    supportingTextId: string;
    ariaAutoComplete: ARIAAutoComplete | null;
    ariaControls: string | null;
    ariaActiveDescendant: string | null;
    ariaExpanded: ARIAExpanded | null;
    ariaLabel: string;
    ariaLabelledBy: string;
    role: ARIARole | null;
    get form(): HTMLFormElement;
    name: string;
    [getFormValue](): string;
    /**
     * Defines the greatest value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
     */
    max: string;
    /**
     * The maximum number of characters a user can enter into the text field. Set
     * to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
     */
    maxLength: number;
    /**
     * Defines the most negative value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
     */
    min: string;
    /**
     * The minimum number of characters a user can enter into the text field. Set
     * to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
     */
    minLength: number;
    /**
     * A regular expression that the text field's value must match to pass
     * constraint validation.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
     */
    pattern: string;
    placeholder: string;
    readonly: boolean;
    /**
     * Gets or sets the direction in which selection occurred.
     */
    get selectionDirection(): 'forward' | 'backward' | 'none' | null;
    set selectionDirection(value: 'forward' | 'backward' | 'none' | null);
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    get selectionEnd(): number | null;
    set selectionEnd(value: number | null);
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    get selectionStart(): number | null;
    set selectionStart(value: number | null);
    /**
     * Returns or sets the element's step attribute, which works with min and max
     * to limit the increments at which a numeric or date-time value can be set.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
     */
    step: string;
    type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'color' | 'date' | 'datetime-local' | 'file' | 'month' | 'time' | 'week';
    /**
     * Returns the native validation error message that would be displayed upon
     * calling `reportValidity()`.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
     */
    get validationMessage(): string;
    /**
     * Returns a ValidityState object that represents the validity states of the
     * text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    get validity(): ValidityState;
    /**
     * The text field's value as a number.
     */
    get valueAsNumber(): number;
    set valueAsNumber(value: number);
    /**
     * The text field's value as a Date.
     */
    get valueAsDate(): Date | null;
    set valueAsDate(value: Date | null);
    /**
     * Returns whether an element will successfully validate based on forms
     * validation rules and constraints.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/willValidate
     */
    get willValidate(): boolean;
    /**
     * Returns true when the text field has been interacted with. Native
     * validation errors only display in response to user interactions.
     */
    protected dirty: boolean;
    protected focused: boolean;
    protected readonly input?: HTMLInputElement | null;
    protected abstract readonly fieldTag: StaticValue;
    private readonly leadingIcons;
    private readonly trailingIcons;
    constructor();
    /**
     * Checks the text field's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
     *
     * @return true if the text field is valid, or false if not.
     */
    checkValidity(): boolean;
    focus(): void;
    /**
     * Checks the text field's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * This method will update `error` to the current validity state and
     * `errorText` to the current `validationMessage`, unless the invalid event is
     * canceled.
     *
     * Use `setCustomValidity()` to customize the `validationMessage`.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
     *
     * @return true if the text field is valid, or false if not.
     */
    reportValidity(): boolean;
    /**
     * Selects all the text in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
     */
    select(): void;
    /**
     * Sets the text field's native validation error message. This is used to
     * customize `validationMessage`.
     *
     * When the error is not an empty string, the text field is considered invalid
     * and `validity.customError` will be true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
     *
     * @param error The error message to display.
     */
    setCustomValidity(error: string): void;
    /**
     * Replaces a range of text with a new string.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setRangeText
     */
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Sets the start and end positions of a selection in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
     *
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start: number | null, end: number | null, direction?: 'forward' | 'backward' | 'none'): void;
    /**
     * Decrements the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
     *
     * @param stepDecrement The number of steps to decrement, defaults to 1.
     */
    stepDown(stepDecrement?: number): void;
    /**
     * Increments the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
     *
     * @param stepIncrement The number of steps to increment, defaults to 1.
     */
    stepUp(stepIncrement?: number): void;
    /**
     * Reset the text field to its default value.
     */
    reset(): void;
    /** @soyTemplate */
    render(): TemplateResult;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderField(): TemplateResult;
    /**
     * @soyTemplate
     * @slotName start
     */
    protected renderLeadingIcon(): TemplateResult;
    /**
     * @soyTemplate
     * @slotName end
     */
    protected renderTrailingIcon(): TemplateResult;
    /** @soyTemplate */
    protected renderInput(): TemplateResult;
    /** @soyTemplate */
    protected renderPrefix(): TemplateResult;
    /** @soyTemplate */
    protected renderSuffix(): TemplateResult;
    /**
     * @soyTemplate
     * @slotName supporting-text
     */
    protected renderSupportingText(): TemplateResult;
    /** @soyTemplate */
    protected getSupportingText(): string;
    protected willUpdate(changedProperties: PropertyValues<TextField>): void;
    protected updated(): void;
    protected handleFocusin(event: FocusEvent): void;
    protected handleFocusout(event: FocusEvent): void;
    protected handleInput(event: InputEvent): void;
    protected redispatchEvent(event: Event): void;
    protected getInput(): HTMLInputElement;
    private checkValidityAndDispatch;
    private handleIconChange;
}
