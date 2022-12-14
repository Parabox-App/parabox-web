/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ReactiveController, ReactiveControllerHost } from 'lit';
declare global {
    interface Window {
        ShadyDOM?: {
            inUse: boolean;
        };
    }
}
/**
 * An element that `FormController` may use.
 */
export interface FormElement extends ReactiveControllerHost, HTMLElement {
    /**
     * The `<form>` that this element is associated with.
     */
    readonly form: HTMLFormElement | null;
    /**
     * The name of the element in the form. This property should reflect to a
     * `name` attribute.
     */
    name: string;
    /**
     * Whether or not this element is disabled. If present, this property should
     * reflect to a `disabled` attribute.
     */
    disabled?: boolean;
    /**
     * A function that retrieves the current form value for this element.
     *
     * @return The current form value, or `null` if there is no value.
     */
    [getFormValue](): string | File | FormData | null;
}
/**
 * A unique symbol key for `FormController` elements to implement their
 * `getFormValue()` function.
 */
export declare const getFormValue: unique symbol;
/**
 * A `ReactiveController` that adds `<form>` support to an element.
 */
export declare class FormController implements ReactiveController {
    private readonly element;
    private form?;
    /**
     * Creates a new `FormController` for the given element.
     *
     * @param element The element to add `<form>` support to.
     */
    constructor(element: FormElement);
    hostConnected(): void;
    hostDisconnected(): void;
    private formDataListener;
}
