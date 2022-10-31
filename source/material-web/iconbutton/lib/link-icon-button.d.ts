/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TemplateResult } from 'lit';
import { IconButton } from './icon-button.js';
/** @soyCompatible */
export declare class LinkIconButton extends IconButton {
    linkHref: string;
    linkTarget: string;
    /** @soyTemplate */
    protected render(): TemplateResult;
}
