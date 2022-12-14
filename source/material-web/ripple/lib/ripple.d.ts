/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, PropertyValues, TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/** @soyCompatible */
export declare class Ripple extends LitElement {
    mdRoot: HTMLElement;
    unbounded: boolean;
    disabled: boolean;
    protected hovered: boolean;
    protected focused: boolean;
    protected pressed: boolean;
    protected rippleSize: string;
    protected rippleScale: string;
    protected initialSize: number;
    protected pressAnimationSignal: import("@material/web/motion/animation.js").AnimationSignal;
    protected growAnimation: Animation | null;
    protected delayedEndPressHandle: number | null;
    /** @soyTemplate */
    protected render(): TemplateResult;
    /** @soyTemplate */
    protected getRenderRippleClasses(): ClassInfo;
    protected update(changedProps: PropertyValues<this>): void;
    protected getDimensions(): DOMRect;
    protected determineRippleSize(): void;
    protected getNormalizedPointerEventCoords(pointerEvent: PointerEvent): {
        x: number;
        y: number;
    };
    protected getTranslationCoordinates(positionEvent?: Event | null): {
        startPoint: {
            x: number;
            y: number;
        };
        endPoint: {
            x: number;
            y: number;
        };
    };
    protected startPressAnimation(positionEvent?: Event | null): void;
    /**
     * @deprecated Use beginHover
     */
    startHover(hoverEvent?: Event): void;
    beginHover(hoverEvent?: Event): void;
    endHover(): void;
    /**
     * @deprecated Use beginFocus
     */
    startFocus(): void;
    beginFocus(): void;
    endFocus(): void;
    /**
     * @deprecated Use beginPress
     */
    startPress(positionEvent?: Event | null): void;
    beginPress(positionEvent?: Event | null): void;
    endPress(): void;
}
