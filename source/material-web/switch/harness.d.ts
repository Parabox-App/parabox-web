/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Harness } from '@material/web/testing/harness.js';
import { Switch } from './lib/switch.js';
/**
 * Test harness for switch elements.
 */
export declare class SwitchHarness extends Harness<Switch> {
    protected getInteractiveElement(): Promise<HTMLElement>;
}
