/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/focus/focus-ring.js';
import { ActionElement, EndPressConfig } from '@material/web/actionelement/action-element.js';
import { getFormValue } from '@material/web/controller/form-controller.js';
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/** @soyCompatible */
export declare class Switch extends ActionElement {
    static shadowRootOptions: ShadowRootInit;
    disabled: boolean;
    processing: boolean;
    selected: boolean;
    icons: boolean;
    showOnlySelectedIcon: boolean;
    ariaLabel: string;
    /** @soyPrefixAttribute */
    ariaLabelledBy: string;
    protected showFocusRing: boolean;
    get form(): HTMLFormElement;
    name: string;
    value: string;
    [getFormValue](): string;
    constructor();
    click(): void;
    /** @soyTemplate */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderFocusRing(): TemplateResult;
    /** @soyTemplate */
    protected renderHandle(): TemplateResult;
    /** @soyTemplate */
    private renderIcons;
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     *
     * @soyTemplate
     */
    protected renderOnIcon(): TemplateResult;
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aclose%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     *
     * @soyTemplate
     */
    protected renderOffIcon(): TemplateResult;
    /** @soyTemplate */
    private renderTouchTarget;
    /** @soyTemplate */
    private shouldShowIcons;
    endPress({ cancelled }: EndPressConfig): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
    handlePointerDown(event: PointerEvent): void;
}
