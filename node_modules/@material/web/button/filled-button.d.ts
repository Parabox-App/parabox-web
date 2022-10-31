/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { FilledButton } from './lib/filled-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-filled-button': MdFilledButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdFilledButton extends FilledButton {
    static styles: import("lit").CSSResult[];
}
