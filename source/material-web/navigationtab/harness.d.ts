/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Harness } from '@material/web/testing/harness.js';
import { NavigationTab } from './lib/navigation-tab.js';
/**
 * Test harness for navigation tab elements.
 */
export declare class NavigationTabHarness extends Harness<NavigationTab> {
    getInteractiveElement(): Promise<HTMLElement>;
}
