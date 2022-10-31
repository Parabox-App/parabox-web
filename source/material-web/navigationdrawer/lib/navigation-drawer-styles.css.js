/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
import { css } from 'lit';
export const styles = css `.md3-elevation-overlay{position:absolute;inset:0;border-radius:inherit;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-2}:host{display:flex}.md3-navigation-drawer{inline-size:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;overflow-y:auto;visibility:hidden;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer .md3-elevation-overlay{width:inherit;z-index:0}.md3-navigation-drawer--opened{visibility:visible;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer__slot-content{display:flex;flex-direction:column;position:relative}.md3-navigation-drawer{background-color:var(--md-navigation-drawer-container-color, #fff);border-start-start-radius:var(--md-navigation-drawer-container-shape-start-start, 0);border-start-end-radius:var(--md-navigation-drawer-container-shape-start-end, 16px);border-end-end-radius:var(--md-navigation-drawer-container-shape-end-end, 16px);border-end-start-radius:var(--md-navigation-drawer-container-shape-end-start, 0);height:var(--md-navigation-drawer-container-height, 100%);--md-elevation-box-shadow-for-gss:none;box-shadow:var(--md-navigation-drawer-standard-container-elevation-shadow, var(--md-elevation-box-shadow-for-gss))}.md3-navigation-drawer.md3-navigation-drawer--opened{inline-size:var(--md-navigation-drawer-container-width, 360px)}.md3-navigation-drawer .md3-navigation-drawer__slot-content{min-inline-size:var(--md-navigation-drawer-container-width, 360px);max-inline-size:var(--md-navigation-drawer-container-width, 360px)}.md3-navigation-drawer .md3-elevation-overlay{opacity:var(--md-navigation-drawer-standard-container-elevation-overlay-opacity, 0)}/*# sourceMappingURL=navigation-drawer-styles.css.map */
`;
//# sourceMappingURL=navigation-drawer-styles.css.js.map