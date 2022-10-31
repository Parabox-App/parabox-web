/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/web/focus/focus-ring.js';
import '@material/web/ripple/ripple.js';
import { ActionElement } from '@material/web/actionelement/action-element.js';
import { MdRipple } from '@material/web/ripple/ripple.js';
import { TemplateResult } from 'lit';
import { ClassInfo } from 'lit/directives/class-map.js';
/**
 * Base class for all actions.
 * @soyCompatible
 */
export declare abstract class Action extends ActionElement {
    isFocusable: boolean;
    isTouchable: boolean;
    disabled: boolean;
    showFocusRing: boolean;
    ripple?: MdRipple | null;
    /** @soyPrefixAttribute */
    ariaLabel: string;
    /** @soyTemplate */
    protected getRootClasses(): ClassInfo;
    /** @soyTemplate */
    protected getRippleClasses(): ClassInfo;
    /** @soyTemplate */
    protected renderTouchTarget(): TemplateResult;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult;
    /** @soyTemplate */
    protected renderFocusRing(): TemplateResult;
}
