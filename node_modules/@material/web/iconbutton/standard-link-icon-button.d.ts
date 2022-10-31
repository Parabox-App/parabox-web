/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/icon/icon.js';
import { ClassInfo } from 'lit/directives/class-map.js';
import { LinkIconButton } from './lib/link-icon-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-standard-link-icon-button': MdStandardLinkIconButton;
    }
}
/** @soyCompatible */
export declare class MdStandardLinkIconButton extends LinkIconButton {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
}
