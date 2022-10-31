/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TextButton } from './lib/text-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-text-button': MdTextButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdTextButton extends TextButton {
    static styles: import("lit").CSSResult[];
}
