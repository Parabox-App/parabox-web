/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { FilledLinkButton } from './lib/filled-link-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-filled-link-button': MdFilledLinkButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdFilledLinkButton extends FilledLinkButton {
    static styles: import("lit").CSSResult[];
}
