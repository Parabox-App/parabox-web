/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Harness } from '@material/web/testing/harness.js';
import { Radio } from './lib/radio.js';
/**
 * Test harness for radio.
 */
export declare class RadioHarness extends Harness<Radio> {
    getInteractiveElement(): Promise<HTMLInputElement>;
}
