/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement } from 'lit';
import { MDCMenuSurfaceAdapter } from './adapter.js';
import { Corner as CornerEnum } from './constants.js';
import { MDCMenuSurfaceFoundation } from './foundation.js';
export declare type Corner = keyof typeof CornerEnum;
export declare type AnchorableElement = HTMLElement & {
    anchor: Element | null;
};
/**
 * @fires opened
 * @fires closed
 */
export declare abstract class MenuSurface extends LitElement {
    protected mdcFoundation: MDCMenuSurfaceFoundation;
    mdcRoot: HTMLDivElement;
    slotElement: HTMLSlotElement | null;
    absolute: boolean;
    fullwidth: boolean;
    fixed: boolean;
    x: number | null;
    y: number | null;
    quick: boolean;
    open: boolean;
    stayOpenOnBodyClick: boolean;
    skipRestoreFocus: boolean;
    protected bitwiseCorner: CornerEnum;
    protected previousFlipMenuHorizontally: boolean;
    /**
     * Whether to align the menu surface to the opposite side of the default
     * alignment.
     */
    flipMenuHorizontally: boolean;
    corner: Corner;
    protected styleTop: string;
    protected styleLeft: string;
    protected styleRight: string;
    protected styleBottom: string;
    protected styleMaxHeight: string;
    protected styleTransformOrigin: string;
    anchor: HTMLElement | null;
    protected previouslyFocused: HTMLElement | Element | null;
    protected previousAnchor: HTMLElement | null;
    protected onBodyClickBound: (evt: MouseEvent) => void;
    render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    createAdapter(): MDCMenuSurfaceAdapter;
    protected onKeydown(evt: KeyboardEvent): void;
    protected onBodyClick(evt: MouseEvent): void;
    protected registerBodyClick(): void;
    protected deregisterBodyClick(): void;
    close(): void;
    show(): void;
}
