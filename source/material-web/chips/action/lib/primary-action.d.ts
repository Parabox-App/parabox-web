/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
import { Action } from './action.js';
/**
 * Base class for all primary actions: Presentational, Selectable, Link
 * @soyCompatible
 */
export declare class PrimaryAction extends Action {
    isDeletable: boolean;
    label: string;
    icon: string;
    /** @soyTemplate */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected getRootClasses(): ClassInfo;
    /** @soyTemplate */
    protected getRippleClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderGraphic(): TemplateResult;
    /** @soyTemplate */
    protected renderIcon(): TemplateResult;
    /** @soyTemplate */
    protected renderLabel(): TemplateResult;
}
