/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ElevatedButton } from './lib/elevated-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-elevated-button': MdElevatedButton;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdElevatedButton extends ElevatedButton {
    static styles: import("lit").CSSResult[];
}
