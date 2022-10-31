/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO(b/242194005): remove MDC deps
import { isNavigationEvent, KEY, normalizeKey } from '@material/web/compat/dom/keyboard.js';
import { MDCChipActionAttributes, MDCChipActionEvents, MDCChipActionFocusBehavior, MDCChipActionInteractionTrigger } from './constants.js';
const triggerMap = new Map();
triggerMap.set(KEY.SPACEBAR, MDCChipActionInteractionTrigger.SPACEBAR_KEY);
triggerMap.set(KEY.ENTER, MDCChipActionInteractionTrigger.ENTER_KEY);
triggerMap.set(KEY.DELETE, MDCChipActionInteractionTrigger.DELETE_KEY);
triggerMap.set(KEY.BACKSPACE, MDCChipActionInteractionTrigger.BACKSPACE_KEY);
/**
 * MDCChipActionFoundation provides a base abstract foundation for all chip
 * actions.
 */
export class MDCChipActionFoundation {
    constructor(adapter) {
        this.adapter = { ...MDCChipActionFoundation.defaultAdapter, ...adapter };
    }
    static get defaultAdapter() {
        return {
            emitEvent: () => undefined,
            focus: () => undefined,
            getAttribute: () => null,
            getElementID: () => '',
            removeAttribute: () => undefined,
            setAttribute: () => undefined,
        };
    }
    handleClick() {
        // Early exit for cases where the click comes from a source other than the
        // user's pointer (i.e. programmatic click from AT).
        if (this.isDisabled())
            return;
        this.emitInteraction(MDCChipActionInteractionTrigger.CLICK);
    }
    handleKeydown(event) {
        const key = normalizeKey(event);
        if (this.shouldNotifyInteractionFromKey(key)) {
            event.preventDefault();
            this.emitInteraction(this.getTriggerFromKey(key));
            return;
        }
        if (isNavigationEvent(event)) {
            event.preventDefault();
            this.emitNavigation(key);
            return;
        }
    }
    setDisabled(isDisabled) {
        // Use `aria-disabled` for the selectable (listbox) disabled state
        if (this.isSelectable()) {
            this.adapter.setAttribute(MDCChipActionAttributes.ARIA_DISABLED, `${isDisabled}`);
            return;
        }
        if (isDisabled) {
            this.adapter.setAttribute(MDCChipActionAttributes.DISABLED, 'true');
        }
        else {
            this.adapter.removeAttribute(MDCChipActionAttributes.DISABLED);
        }
    }
    isDisabled() {
        if (this.adapter.getAttribute(MDCChipActionAttributes.ARIA_DISABLED) ===
            'true') {
            return true;
        }
        if (this.adapter.getAttribute(MDCChipActionAttributes.DISABLED) !== null) {
            return true;
        }
        return false;
    }
    setFocus(behavior) {
        // Early exit if not focusable
        if (!this.isFocusable()) {
            return;
        }
        // Add it to the tab order and give focus
        if (behavior === MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED) {
            this.adapter.setAttribute(MDCChipActionAttributes.TAB_INDEX, '0');
            this.adapter.focus();
            return;
        }
        // Add to the tab order
        if (behavior === MDCChipActionFocusBehavior.FOCUSABLE) {
            this.adapter.setAttribute(MDCChipActionAttributes.TAB_INDEX, '0');
            return;
        }
        // Remove it from the tab order
        if (behavior === MDCChipActionFocusBehavior.NOT_FOCUSABLE) {
            this.adapter.setAttribute(MDCChipActionAttributes.TAB_INDEX, '-1');
            return;
        }
    }
    isFocusable() {
        if (this.isDisabled()) {
            return false;
        }
        if (this.adapter.getAttribute(MDCChipActionAttributes.ARIA_HIDDEN) ===
            'true') {
            return false;
        }
        return true;
    }
    setSelected(isSelected) {
        // Early exit if not selectable
        if (!this.isSelectable()) {
            return;
        }
        this.adapter.setAttribute(MDCChipActionAttributes.ARIA_SELECTED, `${isSelected}`);
    }
    isSelected() {
        return this.adapter.getAttribute(MDCChipActionAttributes.ARIA_SELECTED) ===
            'true';
    }
    emitInteraction(trigger) {
        this.adapter.emitEvent(MDCChipActionEvents.INTERACTION, {
            actionID: this.adapter.getElementID(),
            source: this.actionType(),
            trigger,
        });
    }
    emitNavigation(key) {
        this.adapter.emitEvent(MDCChipActionEvents.NAVIGATION, {
            source: this.actionType(),
            key,
        });
    }
    shouldNotifyInteractionFromKey(key) {
        const isFromActionKey = key === KEY.ENTER || key === KEY.SPACEBAR;
        const isFromRemoveKey = key === KEY.BACKSPACE || key === KEY.DELETE;
        if (isFromActionKey) {
            return true;
        }
        if (isFromRemoveKey && this.shouldEmitInteractionOnRemoveKey()) {
            return true;
        }
        return false;
    }
    getTriggerFromKey(key) {
        const trigger = triggerMap.get(key);
        if (trigger) {
            return trigger;
        }
        // Default case, should ideally never be returned
        return MDCChipActionInteractionTrigger.UNSPECIFIED;
    }
}
//# sourceMappingURL=foundation.js.map