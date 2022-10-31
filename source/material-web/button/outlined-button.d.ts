/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { OutlinedButton } from './lib/outlined-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-outlined-button': MdOutlinedButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdOutlinedButton extends OutlinedButton {
    static styles: import("lit").CSSResult[];
}
