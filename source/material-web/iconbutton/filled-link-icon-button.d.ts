/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/icon/icon.js';
import { ClassInfo } from 'lit/directives/class-map.js';
import { LinkIconButton } from './lib/link-icon-button.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-filled-link-icon-button': MdFilledLinkIconButton;
    }
}
/** @soyCompatible */
export declare class MdFilledLinkIconButton extends LinkIconButton {
    static styles: import("lit").CSSResult[];
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
}
