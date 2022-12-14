/**
 * @requirecss {field.lib.shared_styles}
 *
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, PropertyValues, TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/** @soyCompatible */
export declare class Field extends LitElement {
    disabled: boolean;
    error: boolean;
    focused: boolean;
    label?: string;
    populated: boolean;
    required: boolean;
    /**
     * Whether or not the field has leading content.
     */
    hasStart: boolean;
    /**
     * Whether or not the field has trailing content.
     */
    hasEnd: boolean;
    protected isAnimating: boolean;
    protected readonly labelAnimationSignal: import("@material/web/motion/animation.js").AnimationSignal;
    protected readonly floatingLabelEl: Promise<HTMLElement>;
    protected readonly restingLabelEl: Promise<HTMLElement>;
    /** @soyTemplate */
    render(): TemplateResult;
    /** @soyTemplate */
    protected renderContainer(): TemplateResult;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderContainerContents(): TemplateResult;
    /** @soyTemplate */
    protected renderMiddleContents(): TemplateResult;
    /** @soyTemplate */
    protected renderFloatingLabel(): TemplateResult;
    /** @soyTemplate */
    protected renderRestingLabel(): TemplateResult;
    /** @soyTemplate */
    protected renderLabelText(): string;
    /** @soyTemplate */
    protected renderSupportingText(): TemplateResult;
    protected update(props: PropertyValues<Field>): void;
    protected animateLabelIfNeeded({ wasFocused, wasPopulated }: {
        wasFocused?: boolean;
        wasPopulated?: boolean;
    }): Promise<void>;
    protected getLabelKeyframes(): Promise<{
        transform: string;
    }[]>;
}
