/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/icon/icon.js';
import { ClassInfo } from 'lit/directives/class-map.js';
import { IconButton } from './lib/icon-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-standard-icon-button': MdStandardIconButton;
    }
}
/** @soyCompatible */
export declare class MdStandardIconButton extends IconButton {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
}
