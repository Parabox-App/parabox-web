/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MDCChipActionType } from './constants.js';
import { MDCChipActionFoundation } from './foundation.js';
/**
 * MDCChipPrimaryActionFoundation provides the business logic for the primary
 * chip action.
 */
export declare class MDCChipPrimaryActionFoundation extends MDCChipActionFoundation {
    isSelectable(): boolean;
    actionType(): MDCChipActionType;
    protected shouldEmitInteractionOnRemoveKey(): boolean;
}
