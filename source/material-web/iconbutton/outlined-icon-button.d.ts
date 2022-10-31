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
        'md-outlined-icon-button': MdOutlinedIconButton;
    }
}
/** @soyCompatible */
export declare class MdOutlinedIconButton extends IconButton {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
}
