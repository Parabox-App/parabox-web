/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TextLinkButton } from './lib/text-link-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-text-link-button': MdTextLinkButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdTextLinkButton extends TextLinkButton {
    static styles: import("lit").CSSResult[];
}
