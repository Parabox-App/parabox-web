/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Formfield } from './lib/formfield.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-formfield': MdFormfield;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdFormfield extends Formfield {
    static styles: import("lit").CSSResult[];
}
