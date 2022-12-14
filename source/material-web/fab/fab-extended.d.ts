/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/icon/icon.js';
import { TemplateResult } from 'lit';
import { FabExtended } from './lib/fab-extended.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-fab-extended': MdFabExtended;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdFabExtended extends FabExtended {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected renderIcon(icon: string): TemplateResult | string;
}
