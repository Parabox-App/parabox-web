/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Checkbox } from './lib/checkbox.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-checkbox': MdCheckbox;
    }
}
/** @soyCompatible */
export declare class MdCheckbox extends Checkbox {
    static styles: import("lit").CSSResult[];
}
