/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/icon/icon.js';
import { ClassInfo } from 'lit/directives/class-map.js';
import { IconButtonToggle } from './lib/icon-button-toggle.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-standard-icon-button-toggle': MdStandardIconButtonToggle;
    }
}
/** @soyCompatible */
export declare class MdStandardIconButtonToggle extends IconButtonToggle {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
}
