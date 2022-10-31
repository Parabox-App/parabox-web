/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Harness } from '@material/web/testing/harness.js';
import { Button } from './lib/button.js';
/**
 * Test harness for buttons.
 */
export declare class ButtonHarness extends Harness<Button> {
    protected getInteractiveElement(): Promise<HTMLElement>;
}
