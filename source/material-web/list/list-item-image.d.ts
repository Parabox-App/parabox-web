/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ListItemImage } from './lib/image/list-item-image.js';
declare global {
    interface HTMLElementTagNameMap {
        'md-list-item-image': MdListItemImage;
    }
}
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export declare class MdListItemImage extends ListItemImage {
    static styles: import("lit").CSSResult[];
}
