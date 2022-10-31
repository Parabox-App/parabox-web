/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
import { LinkButton } from './link-button.js';
/** @soyCompatible */
export declare class OutlinedLinkButton extends LinkButton {
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderOutline(): TemplateResult;
}
