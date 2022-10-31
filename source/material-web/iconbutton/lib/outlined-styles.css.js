/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
import { css } from 'lit';
export const styles = css `.md3-icon-button--outlined{background-color:rgba(0,0,0,0)}.md3-icon-button--outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute}.md3-icon-button--outlined.md3-icon-button--on::before{border-width:0}.md3-icon-button--outlined{height:var(--md-outlined-icon-button-container-size, 40px);width:var(--md-outlined-icon-button-container-size, 40px);margin:max(0px,(48px - var(--md-outlined-icon-button-container-size, 40px))/2);border-radius:var(--md-outlined-icon-button-container-shape, 9999px);font-size:var(--md-outlined-icon-button-icon-size, 24px)}.md3-icon-button--outlined i,.md3-icon-button--outlined svg,.md3-icon-button--outlined img{height:var(--md-outlined-icon-button-icon-size, 24px);width:var(--md-outlined-icon-button-icon-size, 24px)}.md3-icon-button--outlined:not(.md3-icon-button--on){color:var(--md-outlined-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--md-ripple-focus-state-layer-color:var(--md-outlined-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--md-ripple-focus-state-layer-opacity:var(--md-outlined-icon-button-focus-state-layer-opacity, 0.08);--md-ripple-hover-state-layer-color:var(--md-outlined-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--md-ripple-hover-state-layer-opacity:var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--md-ripple-pressed-state-layer-color:var(--md-outlined-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--md-ripple-pressed-state-layer-opacity:var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12)}.md3-icon-button--outlined:not(.md3-icon-button--on):disabled{color:var(--md-outlined-icon-button-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38))}.md3-icon-button--outlined:not(.md3-icon-button--on):focus{color:var(--md-outlined-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.md3-icon-button--outlined:not(.md3-icon-button--on):hover{color:var(--md-outlined-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.md3-icon-button--outlined:not(.md3-icon-button--on):not(:disabled):active{color:var(--md-outlined-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface, #1c1b1f))}.md3-icon-button--outlined:not(.md3-icon-button--on)::before{border-color:var(--md-outlined-icon-button-unselected-outline-color, var(--md-sys-color-outline, #79747e))}.md3-icon-button--outlined:not(.md3-icon-button--on):disabled::before{border-color:var(--md-outlined-icon-button-disabled-outline-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12))}.md3-icon-button--outlined:not(.md3-icon-button--on)::before{border-width:var(--md-outlined-icon-button-unselected-outline-width, 1px)}.md3-icon-button--outlined.md3-icon-button--on{color:var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f4eff4));background-color:var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #313033));--md-ripple-focus-state-layer-color:var(--md-outlined-icon-button-selected-focus-state-layer-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--md-ripple-focus-state-layer-opacity:var(--md-outlined-icon-button-focus-state-layer-opacity, 0.08);--md-ripple-hover-state-layer-color:var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--md-ripple-hover-state-layer-opacity:var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--md-ripple-pressed-state-layer-color:var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--md-ripple-pressed-state-layer-opacity:var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12)}.md3-icon-button--outlined.md3-icon-button--on:disabled{color:var(--md-outlined-icon-button-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38))}.md3-icon-button--outlined.md3-icon-button--on:focus{color:var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f4eff4))}.md3-icon-button--outlined.md3-icon-button--on:hover{color:var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f4eff4))}.md3-icon-button--outlined.md3-icon-button--on:not(:disabled):active{color:var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f4eff4))}.md3-icon-button--outlined.md3-icon-button--on:disabled{background-color:var(--md-outlined-icon-button-disabled-selected-container-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12))}@media(forced-colors: active){.md3-icon-button--outlined.md3-icon-button--on::before{border-color:var(--md-outlined-icon-button-unselected-outline-color, var(--md-sys-color-outline, #79747e))}.md3-icon-button--outlined.md3-icon-button--on:disabled::before{border-color:var(--md-outlined-icon-button-disabled-outline-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12))}.md3-icon-button--outlined.md3-icon-button--on::before{border-width:var(--md-outlined-icon-button-unselected-outline-width, 1px)}}/*# sourceMappingURL=outlined-styles.css.map */
`;
//# sourceMappingURL=outlined-styles.css.js.map