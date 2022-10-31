/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TonalButton } from './lib/tonal-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-tonal-button': MdTonalButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdTonalButton extends TonalButton {
    static styles: import("lit").CSSResult[];
}
