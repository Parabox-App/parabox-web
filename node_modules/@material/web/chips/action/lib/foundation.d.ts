/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MDCChipActionAdapter } from './adapter.js';
import { MDCChipActionFocusBehavior, MDCChipActionType } from './constants.js';
/**
 * MDCChipActionFoundation provides a base abstract foundation for all chip
 * actions.
 */
export declare abstract class MDCChipActionFoundation {
    protected readonly adapter: MDCChipActionAdapter;
    static get defaultAdapter(): MDCChipActionAdapter;
    constructor(adapter: Partial<MDCChipActionAdapter>);
    handleClick(): void;
    handleKeydown(event: KeyboardEvent): void;
    setDisabled(isDisabled: boolean): void;
    isDisabled(): boolean;
    setFocus(behavior: MDCChipActionFocusBehavior): void;
    isFocusable(): boolean;
    setSelected(isSelected: boolean): void;
    isSelected(): boolean;
    private emitInteraction;
    private emitNavigation;
    private shouldNotifyInteractionFromKey;
    private getTriggerFromKey;
    abstract actionType(): MDCChipActionType;
    abstract isSelectable(): boolean;
    protected abstract shouldEmitInteractionOnRemoveKey(): boolean;
}
