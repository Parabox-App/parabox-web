/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Harness } from '@material/web/testing/harness.js';
import { List } from './lib/list.js';
import { ListItemHarness } from './lib/listitem/harness.js';
/**
 * Test harness for list.
 */
export declare class ListHarness extends Harness<List> {
    /**
     * Returns the first list item element.
     */
    protected getInteractiveElement(): Promise<HTMLElement>;
    /** @return List item harnesses. */
    getItems(): ListItemHarness[];
}
