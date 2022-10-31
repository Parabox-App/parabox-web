/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { AnyDuringAriaMigration } from '@material/web/compat/base/aria-property.js';
import { LitElement, TemplateResult } from 'lit';
/** @soyCompatible */
export declare class NavigationDrawerModal extends LitElement {
    /** @soyPrefixAttribute */ ariaDescribedBy: string | undefined;
    ariaLabel: string | AnyDuringAriaMigration;
    ariaModal: 'true' | 'false';
    /** @soyPrefixAttribute */ ariaLabelledBy: string | undefined;
    opened: boolean;
    pivot: 'start' | 'end';
    /** @soyTemplate */
    render(): TemplateResult;
    /** @soyTemplate classMap */
    protected getScrimClasses(): import("lit-html/directive").DirectiveResult<typeof import("lit-html/directives/class-map").ClassMapDirective>;
    /** @soyTemplate classMap */
    protected getRenderClasses(): import("lit-html/directive").DirectiveResult<typeof import("lit-html/directives/class-map").ClassMapDirective>;
    private handleKeyDown;
    private handleScrimClick;
}
