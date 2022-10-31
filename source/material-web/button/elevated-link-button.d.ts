/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ElevatedLinkButton } from './lib/elevated-link-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-elevated-link-button': MdElevatedLinkButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdElevatedLinkButton extends ElevatedLinkButton {
    static styles: import("lit").CSSResult[];
}
