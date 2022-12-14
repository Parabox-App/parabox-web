/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/icon/icon.js';
import { TemplateResult } from 'lit';
import { Fab } from './lib/fab.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-fab': MdFab;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdFab extends Fab {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected renderIcon(icon: string): TemplateResult | string;
}
