/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { AnimationFrame } from '@material/web/compat/animation/animationframe.js';
import { KEY } from '@material/web/compat/dom/keyboard.js';
import { MDCChipActionFocusBehavior, MDCChipActionInteractionTrigger, MDCChipActionType } from '../../action/lib/constants.js';
import { MDCChipAnimation, MDCChipAttributes, MDCChipCssClasses, MDCChipEvents } from './constants.js';
var Direction;
(function (Direction) {
    Direction[Direction["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Direction[Direction["LEFT"] = 1] = "LEFT";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
})(Direction || (Direction = {}));
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["SELECTION"] = "selection";
    AnimationKeys["EXIT"] = "exit";
})(AnimationKeys || (AnimationKeys = {}));
/**
 * MDCChipFoundation provides a foundation for all chips.
 */
export class MDCChipFoundation {
    constructor(adapter) {
        this.adapter = { ...MDCChipFoundation.defaultAdapter, ...adapter };
        this.animFrame = new AnimationFrame();
    }
    static get defaultAdapter() {
        return {
            addClass: () => undefined,
            emitEvent: () => undefined,
            getActions: () => [],
            getAttribute: () => null,
            getElementID: () => '',
            getOffsetWidth: () => 0,
            hasClass: () => false,
            isActionDisabled: () => false,
            isActionFocusable: () => false,
            isActionSelectable: () => false,
            isActionSelected: () => false,
            isRTL: () => false,
            removeClass: () => undefined,
            setActionDisabled: () => undefined,
            setActionFocus: () => undefined,
            setActionSelected: () => undefined,
            setStyleProperty: () => undefined,
        };
    }
    destroy() {
        this.animFrame.cancelAll();
    }
    getElementID() {
        return this.adapter.getElementID();
    }
    setDisabled(isDisabled) {
        const actions = this.getActions();
        for (const action of actions) {
            this.adapter.setActionDisabled(action, isDisabled);
        }
        if (isDisabled) {
            this.adapter.addClass(MDCChipCssClasses.DISABLED);
        }
        else {
            this.adapter.removeClass(MDCChipCssClasses.DISABLED);
        }
    }
    isDisabled() {
        const actions = this.getActions();
        for (const action of actions) {
            if (this.adapter.isActionDisabled(action)) {
                return true;
            }
        }
        return false;
    }
    getActions() {
        return this.adapter.getActions();
    }
    isActionFocusable(action) {
        return this.adapter.isActionFocusable(action);
    }
    isActionSelectable(action) {
        return this.adapter.isActionSelectable(action);
    }
    isActionSelected(action) {
        return this.adapter.isActionSelected(action);
    }
    setActionFocus(action, focus) {
        this.adapter.setActionFocus(action, focus);
    }
    setActionSelected(action, isSelected) {
        this.adapter.setActionSelected(action, isSelected);
        this.animateSelection(isSelected);
    }
    startAnimation(animation) {
        if (animation === MDCChipAnimation.ENTER) {
            this.adapter.addClass(MDCChipCssClasses.ENTER);
            return;
        }
        if (animation === MDCChipAnimation.EXIT) {
            this.adapter.addClass(MDCChipCssClasses.EXIT);
            return;
        }
    }
    handleAnimationEnd(event) {
        const { animationName } = event;
        if (animationName === MDCChipAnimation.ENTER) {
            this.adapter.removeClass(MDCChipCssClasses.ENTER);
            this.adapter.emitEvent(MDCChipEvents.ANIMATION, {
                chipID: this.getElementID(),
                animation: MDCChipAnimation.ENTER,
                addedAnnouncement: this.getAddedAnnouncement(),
                isComplete: true,
            });
            return;
        }
        if (animationName === MDCChipAnimation.EXIT) {
            this.adapter.removeClass(MDCChipCssClasses.EXIT);
            this.adapter.addClass(MDCChipCssClasses.HIDDEN);
            const width = this.adapter.getOffsetWidth();
            this.adapter.setStyleProperty('width', `${width}px`);
            // Wait two frames so the width gets applied correctly.
            this.animFrame.request(AnimationKeys.EXIT, () => {
                this.animFrame.request(AnimationKeys.EXIT, () => {
                    this.adapter.setStyleProperty('width', '0');
                });
            });
        }
    }
    handleTransitionEnd() {
        if (!this.adapter.hasClass(MDCChipCssClasses.HIDDEN))
            return;
        this.adapter.emitEvent(MDCChipEvents.ANIMATION, {
            chipID: this.getElementID(),
            animation: MDCChipAnimation.EXIT,
            removedAnnouncement: this.getRemovedAnnouncement(),
            isComplete: true,
        });
    }
    handleActionInteraction({ detail }) {
        const { source, actionID } = detail;
        const isSelectable = this.adapter.isActionSelectable(source);
        const isSelected = this.adapter.isActionSelected(source);
        this.adapter.emitEvent(MDCChipEvents.INTERACTION, {
            chipID: this.getElementID(),
            shouldRemove: this.shouldRemove(detail),
            actionID,
            isSelectable,
            isSelected,
            source,
        });
    }
    handleActionNavigation({ detail }) {
        const { source, key } = detail;
        const isRTL = this.adapter.isRTL();
        const isTrailingActionFocusable = this.adapter.isActionFocusable(MDCChipActionType.TRAILING);
        const isPrimaryActionFocusable = this.adapter.isActionFocusable(MDCChipActionType.PRIMARY);
        const dir = this.directionFromKey(key, isRTL);
        const shouldNavigateToTrailing = source === MDCChipActionType.PRIMARY &&
            dir === Direction.RIGHT && isTrailingActionFocusable;
        const shouldNavigateToPrimary = source === MDCChipActionType.TRAILING &&
            dir === Direction.LEFT && isPrimaryActionFocusable;
        if (shouldNavigateToTrailing) {
            this.navigateActions({ from: source, to: MDCChipActionType.TRAILING });
            return;
        }
        if (shouldNavigateToPrimary) {
            this.navigateActions({ from: source, to: MDCChipActionType.PRIMARY });
            return;
        }
        this.adapter.emitEvent(MDCChipEvents.NAVIGATION, {
            chipID: this.getElementID(),
            isRTL,
            source,
            key,
        });
    }
    directionFromKey(key, isRTL) {
        const isLeftKey = key === KEY.ARROW_LEFT;
        const isRightKey = key === KEY.ARROW_RIGHT;
        if (!isRTL && isLeftKey || isRTL && isRightKey) {
            return Direction.LEFT;
        }
        if (!isRTL && isRightKey || isRTL && isLeftKey) {
            return Direction.RIGHT;
        }
        return Direction.UNSPECIFIED;
    }
    navigateActions(nav) {
        this.adapter.setActionFocus(nav.from, MDCChipActionFocusBehavior.NOT_FOCUSABLE);
        this.adapter.setActionFocus(nav.to, MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED);
    }
    shouldRemove({ source, trigger }) {
        if (trigger === MDCChipActionInteractionTrigger.BACKSPACE_KEY ||
            trigger === MDCChipActionInteractionTrigger.DELETE_KEY) {
            return true;
        }
        return source === MDCChipActionType.TRAILING;
    }
    getRemovedAnnouncement() {
        const msg = this.adapter.getAttribute(MDCChipAttributes.DATA_REMOVED_ANNOUNCEMENT);
        return msg || undefined;
    }
    getAddedAnnouncement() {
        const msg = this.adapter.getAttribute(MDCChipAttributes.DATA_ADDED_ANNOUNCEMENT);
        return msg || undefined;
    }
    animateSelection(isSelected) {
        this.resetAnimationStyles();
        // Wait two frames to ensure the animation classes are unset
        this.animFrame.request(AnimationKeys.SELECTION, () => {
            this.animFrame.request(AnimationKeys.SELECTION, () => {
                this.updateSelectionStyles(isSelected);
            });
        });
    }
    resetAnimationStyles() {
        this.adapter.removeClass(MDCChipCssClasses.SELECTING);
        this.adapter.removeClass(MDCChipCssClasses.DESELECTING);
        this.adapter.removeClass(MDCChipCssClasses.SELECTING_WITH_PRIMARY_ICON);
        this.adapter.removeClass(MDCChipCssClasses.DESELECTING_WITH_PRIMARY_ICON);
    }
    updateSelectionStyles(isSelected) {
        const hasIcon = this.adapter.hasClass(MDCChipCssClasses.WITH_PRIMARY_ICON);
        if (hasIcon && isSelected) {
            this.adapter.addClass(MDCChipCssClasses.SELECTING_WITH_PRIMARY_ICON);
            this.animFrame.request(AnimationKeys.SELECTION, () => {
                this.adapter.addClass(MDCChipCssClasses.SELECTED);
            });
            return;
        }
        if (hasIcon && !isSelected) {
            this.adapter.addClass(MDCChipCssClasses.DESELECTING_WITH_PRIMARY_ICON);
            this.animFrame.request(AnimationKeys.SELECTION, () => {
                this.adapter.removeClass(MDCChipCssClasses.SELECTED);
            });
            return;
        }
        if (isSelected) {
            this.adapter.addClass(MDCChipCssClasses.SELECTING);
            this.animFrame.request(AnimationKeys.SELECTION, () => {
                this.adapter.addClass(MDCChipCssClasses.SELECTED);
            });
            return;
        }
        if (!isSelected) {
            this.adapter.addClass(MDCChipCssClasses.DESELECTING);
            this.animFrame.request(AnimationKeys.SELECTION, () => {
                this.adapter.removeClass(MDCChipCssClasses.SELECTED);
            });
            return;
        }
    }
}
//# sourceMappingURL=foundation.js.map