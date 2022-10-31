/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TemplateResult } from 'lit';
import { Button } from './button.js';
/** @soyCompatible */
export declare abstract class LinkButton extends Button {
    href: string;
    target: string;
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: .md3-button
     */
    protected render(): TemplateResult;
}
