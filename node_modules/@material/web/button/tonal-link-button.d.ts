/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TonalLinkButton } from './lib/tonal-link-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-tonal-link-button': MdTonalLinkButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdTonalLinkButton extends TonalLinkButton {
    static styles: import("lit").CSSResult[];
}
