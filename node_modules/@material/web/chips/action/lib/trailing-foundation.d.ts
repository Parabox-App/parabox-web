/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MDCChipActionType } from './constants.js';
import { MDCChipActionFoundation } from './foundation.js';
/**
 * MDCChipTrailingActionFoundation provides the business logic for the trailing
 * chip action.
 */
export declare class MDCChipTrailingActionFoundation extends MDCChipActionFoundation {
    isSelectable(): boolean;
    actionType(): MDCChipActionType;
    protected shouldEmitInteractionOnRemoveKey(): boolean;
}
