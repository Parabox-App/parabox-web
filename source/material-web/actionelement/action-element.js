/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ActionController } from '@material/web/controller/action-controller.js';
import { LitElement } from 'lit';
/**
 * @soyCompatible
 *
 * ActionElement is a base class that provides a handy starting point for using
 * ActionController. Subclasses should add the event handlers on the interactive
 * node in the template, and override `beginPress` and `endPress` to handle
 * pressed state, ripple interaction, and any other "press" interaction.
 */
export class ActionElement extends LitElement {
    constructor() {
        super(...arguments);
        this.actionController = new ActionController(this);
    }
    /**
     * Hook method called when we've confirmed that the gesture is intended to be
     * a press. Subclasses should change the visual state of the control to
     * 'active' at this point, and possibly fire an event. Subclasses should
     * override this method if more needs to be done.
     *
     * @param options `positionEvent` is the Event that is considered the
     * beginning of the press. Null if this was a keyboard interaction.
     */
    beginPress(options) { }
    /**
     * Hook method called when the control goes from a pressed to unpressed
     * state.
     *
     * @param options If `cancelled` is true, means the user canceled the action.
     *    Subclasses which trigger events on endPress() should check the value
     *    of this flag, and modify their behavior accordingly.
     */
    endPress({ cancelled, actionData }) {
        if (!cancelled) {
            this.dispatchEvent(new CustomEvent('action', {
                detail: actionData,
                bubbles: true,
                composed: true,
            }));
        }
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@pointerdown="${this.handlePointerDown}"`
     */
    handlePointerDown(e) {
        this.actionController.pointerDown(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@pointerup="${this.handlePointerUp}"`
     */
    handlePointerUp(e) {
        this.actionController.pointerUp(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@pointercancel="${this.handlePointerCancel}"`
     */
    handlePointerCancel(e) {
        this.actionController.pointerCancel(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@pointerleave="${this.handlePointerleave}"`
     */
    handlePointerLeave(e) {
        this.actionController.pointerLeave(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@click="${this.handleClick}"`
     */
    handleClick(e) {
        this.actionController.click(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@contextmenu="${this.handleContextMenu}"`
     */
    handleContextMenu() {
        this.actionController.contextMenu();
    }
}
//# sourceMappingURL=action-element.js.map