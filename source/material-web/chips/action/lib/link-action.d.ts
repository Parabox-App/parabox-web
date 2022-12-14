/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TemplateResult } from 'lit';
import { PrimaryAction } from './primary-action.js';
/** @soyCompatible */
export declare class LinkAction extends PrimaryAction {
    href: string;
    target: string;
    /**
     * @soyTemplate
     * @soyAttributes linkAttributes: .md3-chip__action
     */
    protected render(): TemplateResult;
}
