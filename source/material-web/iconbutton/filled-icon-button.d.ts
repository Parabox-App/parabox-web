/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/icon/icon.js';
import { ClassInfo } from 'lit/directives/class-map.js';
import { IconButton } from './lib/icon-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-filled-icon-button': MdFilledIconButton;
    }
}
/** @soyCompatible */
export declare class MdFilledIconButton extends IconButton {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
}
