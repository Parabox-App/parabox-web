/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Switch } from './lib/switch.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-switch': MdSwitch;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdSwitch extends Switch {
    static styles: import("lit").CSSResult[];
}
