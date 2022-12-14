/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Harness } from '@material/web/testing/harness.js';
import { IconButton } from './lib/icon-button.js';
import { IconButtonToggle } from './lib/icon-button-toggle.js';
/**
 * Test harness for icon buttons.
 */
export declare class IconButtonHarness extends Harness<IconButton | IconButtonToggle> {
    protected getInteractiveElement(): Promise<HTMLElement>;
}
