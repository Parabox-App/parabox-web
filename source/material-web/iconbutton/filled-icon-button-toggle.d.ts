/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/icon/icon.js';
import { ClassInfo } from 'lit/directives/class-map.js';
import { IconButtonToggle } from './lib/icon-button-toggle.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-filled-icon-button-toggle': MdFilledIconButtonToggle;
    }
}
/** @soyCompatible */
export declare class MdFilledIconButtonToggle extends IconButtonToggle {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
}
