/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Harness } from '@material/web/testing/harness.js';
import { Fab } from './lib/fab.js';
import { FabExtended } from './lib/fab-extended.js';
/**
 * Test harness for floating action buttons.
 */
export declare class FabHarness extends Harness<Fab | FabExtended> {
    getInteractiveElement(): Promise<HTMLButtonElement>;
}
