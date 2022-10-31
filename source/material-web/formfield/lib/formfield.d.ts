/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/** @soyCompatible */
export declare class Formfield extends LitElement {
    alignEnd: boolean;
    spaceBetween: boolean;
    label: string;
    inputId?: string;
    disabled: boolean;
    protected slottedInputs: HTMLElement[] | null;
    protected get input(): HTMLElement;
    /** @soyTemplate */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    protected labelClick(): void;
}
