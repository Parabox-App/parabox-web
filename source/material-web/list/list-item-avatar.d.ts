/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ListItemAvatar } from './lib/avatar/list-item-avatar.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-list-item-avatar': MdListItemAvatar;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdListItemAvatar extends ListItemAvatar {
    static styles: import("lit").CSSResult[];
}
