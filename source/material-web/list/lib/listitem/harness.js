/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Harness } from '@material/web/testing/harness.js';
/**
 * Test harness for list item.
 */
export class ListItemHarness extends Harness {
    async getInteractiveElement() {
        await this.element.updateComplete;
        return this.element.renderRoot.querySelector('li');
    }
}
//# sourceMappingURL=harness.js.map