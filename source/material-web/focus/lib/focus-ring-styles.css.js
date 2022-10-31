/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
import { css } from 'lit';
export const styles = css `:host{pointer-events:none}.md3-focus-ring{display:none;position:absolute;box-sizing:border-box}.md3-focus-ring::before{inset:0;position:absolute;content:""}.md3-focus-ring--visible{display:block}.md3-focus-ring{inset:calc(-1*(var(--md-focus-ring-container-outer-padding-vertical, 2px) + var(--md-focus-ring-inner-ring-width, 2px) + var(--md-focus-ring-outer-ring-width, 2px))) calc(-1*(var(--md-focus-ring-container-outer-padding-horizontal, 2px) + var(--md-focus-ring-inner-ring-width, 2px) + var(--md-focus-ring-outer-ring-width, 2px)));border:var(--md-focus-ring-outer-ring-width, 2px) solid var(--md-focus-ring-outer-ring-color, var(--md-sys-color-tertiary-container, #ffd8e4));border-radius:var(--md-focus-ring-ring-radius, 8px)}.md3-focus-ring::before{border:var(--md-focus-ring-inner-ring-width, 2px) solid var(--md-focus-ring-inner-ring-color, var(--md-sys-color-on-tertiary-container, #31111d));border-radius:calc(var(--md-focus-ring-ring-radius, 8px) - var(--md-focus-ring-outer-ring-width, 2px))}/*# sourceMappingURL=focus-ring-styles.css.map */
`;
//# sourceMappingURL=focus-ring-styles.css.js.map