/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { PropertyValues, TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
import { Field } from './field.js';
/** @soyCompatible */
export declare class FilledField extends Field {
    protected strokeTransformOrigin: string;
    /** @soyTemplate */
    protected getRenderClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderContainer(): TemplateResult;
    /** @soyTemplate */
    protected renderContainerContents(): TemplateResult;
    /** @soyTemplate */
    protected renderMiddleContents(): TemplateResult;
    protected handleClick(event: MouseEvent | TouchEvent): void;
    protected update(props: PropertyValues<this>): void;
    protected updateStrokeTransformOrigin(event?: MouseEvent | TouchEvent): Promise<void>;
}
