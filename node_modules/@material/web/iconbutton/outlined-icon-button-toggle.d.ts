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
        'md-outlined-icon-button-toggle': MdOutlinedIconButtonToggle;
    }
}
/** @soyCompatible */
export declare class MdOutlinedIconButtonToggle extends IconButtonToggle {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
}
