/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/** @soyCompatible */
export declare class FocusRing extends LitElement {
    visible: boolean;
    /** @soyTemplate */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
}
