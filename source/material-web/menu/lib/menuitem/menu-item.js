/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ListItem } from '@material/web/list/lib/listitem/list-item.js';
/** Base class for menu item component. */
export class MenuItem extends ListItem {
    constructor() {
        super(...arguments);
        this.role = 'menuitem';
    }
}
//# sourceMappingURL=menu-item.js.map