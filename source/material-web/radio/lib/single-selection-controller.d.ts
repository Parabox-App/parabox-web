/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Set of checkable elements with added metadata
 */
export declare class SingleSelectionSet {
    selected: CheckableElement | null;
    ordered: CheckableElement[] | null;
    readonly set: Set<CheckableElement>;
}
/**
 * Element that is checkable consumed by
 * `SingleSelectionController` and `SingleSelectionSet`
 */
export declare type CheckableElement = HTMLElement & {
    name: string;
    checked: boolean;
    formElementTabIndex?: number;
};
/**
 * Controller that provides behavior similar to a native `<input type="radio">`
 * group.
 *
 * Behaviors:
 *
 * - Selection via key navigation (currently LTR is supported)
 * - Deselection of other grouped, checkable controls upon selection
 * - Grouping of checkable elements by name
 *   - Defaults grouping scope to host shadow root
 *   - Document-wide scoping enabled
 * - Land focus only on checked element. Focuses leading element when none
 *   checked.
 *
 * Intended Usage:
 *
 * ```ts
 * class MyElement extends HTMLElement {
 *   private selectionController: SingleSelectionController | null = null;
 *   name = "";
 *   global = false;
 *
 *   private _checked = false;
 *   set checked(checked: boolean) {
 *     const oldVal = this._checked;
 *     if (checked === oldVal) return;
 *
 *     this._checked = checked;
 *
 *     if (this.selectionController) {
 *       this.selectionController.update(this)
 *     }
 *   }
 *
 *   get checked() {
 *     return this._checked;
 *   }
 *
 *   connectedCallback() {
 *     this.selectionController = SelectionController.getController(this);
 *     this.selectionController.register(this);
 *     this.selectionController.update(this);
 *   }
 *
 *   disconnectedCallback() {
 *     this.selectionController!.unregister(this);
 *     this.selectionController = null;
 *   }
 * }
 * ```
 */
export declare class SingleSelectionController {
    private readonly sets;
    private focusedSet;
    private mouseIsDown;
    /**
     * Get a controller for the given element. If no controller exists, one will
     * be created. Defaults to getting the controller scoped to the element's root
     * node shadow root unless `element.global` is true. Then, it will get a
     * `window.document`-scoped controller.
     *
     * @param element Element from which to get / create a SelectionController. If
     *     `element.global` is true, it gets a selection controller scoped to
     *     `window.document`.
     */
    static getController(element: HTMLElement | HTMLElement & {
        global: boolean;
    }): SingleSelectionController;
    constructor(element: Node);
    protected keyDownHandler(e: KeyboardEvent): void;
    protected mousedownHandler(): void;
    protected mouseupHandler(): void;
    /**
     * Whether or not the controller controls  the given element.
     *
     * @param element element to check
     */
    has(element: CheckableElement): boolean;
    /**
     * Selects and returns the controlled element previous to the given element in
     * document position order. See
     * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @param element element relative from which preceding element is fetched
     */
    selectPrevious(element: CheckableElement): CheckableElement;
    /**
     * Selects and returns the controlled element next to the given element in
     * document position order. See
     * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @param element element relative from which following element is fetched
     */
    selectNext(element: CheckableElement): CheckableElement;
    select(element: CheckableElement): void;
    /**
     * Focuses the selected element in the given element's selection set. User's
     * mouse selection will override this focus.
     *
     * @param element Element from which selection set is derived and subsequently
     *     focused.
     * @deprecated update() method now handles focus management by setting
     *     appropriate tabindex to form element.
     */
    focus(element: CheckableElement): void;
    /**
     * @return Returns true if atleast one radio is selected in the radio group.
     */
    isAnySelected(element: CheckableElement): boolean;
    /**
     * Returns the elements in the given element's selection set in document
     * position order.
     * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @param element Element from which selection set is derived and subsequently
     *     ordered.
     */
    getOrdered(element: CheckableElement): CheckableElement[];
    /**
     * Gets the selection set of the given name and creates one if it does not yet
     * exist.
     *
     * @param name Name of set
     */
    getSet(name: string): SingleSelectionSet;
    /**
     * Register the element in the selection controller.
     *
     * @param element Element to register. Registers in set of `element.name`.
     */
    register(element: CheckableElement): void;
    /**
     * Unregister the element from selection controller.
     *
     * @param element Element to register. Registers in set of `element.name`.
     */
    unregister(element: CheckableElement): void;
    /**
     * Unselects other elements in element's set if element is checked. Noop
     * otherwise.
     *
     * @param element Element from which to calculate selection controller update.
     */
    update(element: CheckableElement): void;
}
