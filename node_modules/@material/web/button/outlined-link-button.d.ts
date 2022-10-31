/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { OutlinedLinkButton } from './lib/outlined-link-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-outlined-link-button': MdOutlinedLinkButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdOutlinedLinkButton extends OutlinedLinkButton {
    static styles: import("lit").CSSResult[];
}
