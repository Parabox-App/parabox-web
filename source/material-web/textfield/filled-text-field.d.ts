/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/field/filled-field.js';
import { FilledTextField } from './lib/filled-text-field.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-filled-text-field': MdFilledTextField;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdFilledTextField extends FilledTextField {
    static styles: import("lit").CSSResult[];
    protected readonly fieldTag: import("lit-html/static.js").StaticValue;
}
