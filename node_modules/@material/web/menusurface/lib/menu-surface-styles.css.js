/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
import { css } from 'lit';
export const styles = css `.md3-menu-surface{box-sizing:border-box;display:none;opacity:0;overflow:auto;margin:0;max-height:calc(100vh - 32px);max-width:calc(100vw - 32px);padding:0;position:absolute;transform:scale(1);transform-origin:top left;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);will-change:transform,opacity;z-index:8}.md3-menu-surface .md3-elevation-overlay{z-index:0}.md3-menu-surface:focus{outline:none}.md3-menu-surface--animating-open{display:inline-block;opacity:0;transform:scale(0.8)}.md3-menu-surface--open{display:inline-block;opacity:1;transform:scale(1)}.md3-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}.md3-menu-surface--anchor{overflow:visible;position:relative}.md3-menu-surface--fixed{position:fixed}.md3-menu-surface--fullwidth{width:100%}.md3-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.md3-menu-surface{--md-elevation-box-shadow-for-gss:0px 1px 2px 0px rgb(var(--md-sys-color-shadow-rgb, 0, 0, 0), 0.3), 0px 2px 6px 2px rgb(var(--md-sys-color-shadow-rgb, 0, 0, 0), 0.15);box-shadow:var(--md-menu-surface-container-elevation-shadow, var(--md-elevation-box-shadow-for-gss));border-radius:var(--md-menu-surface-container-shape, 4px)}/*# sourceMappingURL=menu-surface-styles.css.map */
`;
//# sourceMappingURL=menu-surface-styles.css.js.map