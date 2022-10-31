/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
import { Button } from './button.js';
/** @soyCompatible */
export declare class ElevatedButton extends Button {
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderOverlay(): TemplateResult;
}
