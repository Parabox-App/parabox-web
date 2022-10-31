/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate, __metadata } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
// TODO(b/239222919): remove compat dependencies
import { observer } from '@material/web/compat/base/observer.js';
import { deepActiveElementPath, doesElementContainFocus } from '@material/web/compat/base/utils.js';
import { html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Corner as CornerEnum } from './constants.js';
import { MDCMenuSurfaceFoundation } from './foundation.js';
// tslint:disable:no-bitwise
// required for closure compiler
const stringToCorner = {
    'TOP_LEFT': CornerEnum.TOP_LEFT,
    'TOP_RIGHT': CornerEnum.TOP_RIGHT,
    'BOTTOM_LEFT': CornerEnum.BOTTOM_LEFT,
    'BOTTOM_RIGHT': CornerEnum.BOTTOM_RIGHT,
    'TOP_START': CornerEnum.TOP_START,
    'TOP_END': CornerEnum.TOP_END,
    'BOTTOM_START': CornerEnum.BOTTOM_START,
    'BOTTOM_END': CornerEnum.BOTTOM_END,
};
/**
 * @fires opened
 * @fires closed
 */
export class MenuSurface extends LitElement {
    constructor() {
        super(...arguments);
        this.absolute = false;
        this.fullwidth = false;
        this.fixed = false;
        this.x = null;
        this.y = null;
        // must be defined before open or else race condition in foundation occurs.
        this.quick = false;
        this.open = false;
        this.stayOpenOnBodyClick = false;
        this.skipRestoreFocus = false;
        this.bitwiseCorner = CornerEnum.TOP_START;
        this.previousFlipMenuHorizontally = false;
        /**
         * Whether to align the menu surface to the opposite side of the default
         * alignment.
         */
        this.flipMenuHorizontally = false;
        this.corner = 'BOTTOM_START';
        this.styleTop = '';
        this.styleLeft = '';
        this.styleRight = '';
        this.styleBottom = '';
        this.styleMaxHeight = '';
        this.styleTransformOrigin = '';
        this.anchor = null;
        this.previouslyFocused = null;
        this.previousAnchor = null;
        this.onBodyClickBound = () => undefined;
    }
    render() {
        const classes = {
            'md3-menu-surface--fixed': this.fixed,
            'md3-menu-surface--fullwidth': this.fullwidth,
        };
        const styles = {
            'top': this.styleTop,
            'left': this.styleLeft,
            'right': this.styleRight,
            'bottom': this.styleBottom,
            'max-height': this.styleMaxHeight,
            'transform-origin': this.styleTransformOrigin,
        };
        return html `
      <div
          class="md3-menu-surface ${classMap(classes)}"
          style="${styleMap(styles)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
    }
    firstUpdated() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        this.mdcFoundation = new MDCMenuSurfaceFoundation(this.createAdapter());
        this.mdcFoundation.init();
    }
    createAdapter() {
        return {
            addClass: (className) => {
                this.mdcRoot.classList.add(className);
            },
            removeClass: (className) => {
                this.mdcRoot.classList.remove(className);
            },
            hasClass: (className) => this.mdcRoot.classList.contains(className),
            hasAnchor: () => {
                return !!this.anchor;
            },
            notifyClose: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('closed', init);
                this.open = false;
                this.mdcRoot.dispatchEvent(ev);
            },
            notifyClosing: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('closing', init);
                this.mdcRoot.dispatchEvent(ev);
            },
            notifyOpen: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('opened', init);
                this.open = true;
                this.mdcRoot.dispatchEvent(ev);
            },
            notifyOpening: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('opening', init);
                this.mdcRoot.dispatchEvent(ev);
            },
            isElementInContainer: () => false,
            isRtl: () => {
                if (this.mdcRoot) {
                    return getComputedStyle(this.mdcRoot).direction === 'rtl';
                }
                return false;
            },
            setTransformOrigin: (origin) => {
                const root = this.mdcRoot;
                if (!root) {
                    return;
                }
                this.styleTransformOrigin = origin;
            },
            isFocused: () => {
                return doesElementContainFocus(this);
            },
            saveFocus: () => {
                const activeElementPath = deepActiveElementPath();
                const pathLength = activeElementPath.length;
                if (!pathLength) {
                    this.previouslyFocused = null;
                }
                this.previouslyFocused = activeElementPath[pathLength - 1];
            },
            restoreFocus: () => {
                if (!this.previouslyFocused) {
                    return;
                }
                if ('focus' in this.previouslyFocused) {
                    this.previouslyFocused.focus();
                }
            },
            getInnerDimensions: () => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return { width: 0, height: 0 };
                }
                return { width: mdcRoot.offsetWidth, height: mdcRoot.offsetHeight };
            },
            getAnchorDimensions: () => {
                const anchorElement = this.anchor;
                return anchorElement ? anchorElement.getBoundingClientRect() : null;
            },
            getBodyDimensions: () => {
                return {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight,
                };
            },
            getWindowDimensions: () => {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            getWindowScroll: () => {
                return {
                    x: window.pageXOffset,
                    y: window.pageYOffset,
                };
            },
            setPosition: (position) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                this.styleLeft = 'left' in position ? `${position.left}px` : '';
                this.styleRight = 'right' in position ? `${position.right}px` : '';
                this.styleTop = 'top' in position ? `${position.top}px` : '';
                this.styleBottom = 'bottom' in position ? `${position.bottom}px` : '';
            },
            setMaxHeight: async (height) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                // must set both for IE support as IE will not set a var
                this.styleMaxHeight = height;
                await this.updateComplete;
                this.styleMaxHeight = `var(--md3-menu-max-height, ${height})`;
            },
        };
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onBodyClick(evt) {
        if (this.stayOpenOnBodyClick) {
            return;
        }
        const path = evt.composedPath();
        if (path.indexOf(this) === -1) {
            this.close();
        }
    }
    registerBodyClick() {
        this.onBodyClickBound = this.onBodyClick.bind(this);
        // capture otherwise listener closes menu after quick menu opens
        document.body.addEventListener('click', this.onBodyClickBound, { passive: true, capture: true });
    }
    deregisterBodyClick() {
        document.body.removeEventListener('click', this.onBodyClickBound, { capture: true });
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}
__decorate([
    query('.md3-menu-surface'),
    __metadata("design:type", HTMLDivElement)
], MenuSurface.prototype, "mdcRoot", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLSlotElement)
], MenuSurface.prototype, "slotElement", void 0);
__decorate([
    property({ type: Boolean }),
    observer(function (isAbsolute) {
        if (this.mdcFoundation && !this.fixed) {
            this.mdcFoundation.setIsHoisted(isAbsolute);
        }
    }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "absolute", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "fullwidth", void 0);
__decorate([
    property({ type: Boolean }),
    observer(function (isFixed) {
        if (this.mdcFoundation && !this.absolute) {
            this.mdcFoundation.setFixedPosition(isFixed);
        }
    }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "fixed", void 0);
__decorate([
    property({ type: Number }),
    observer(function (value) {
        if (this.mdcFoundation && this.y !== null && value !== null) {
            this.mdcFoundation.setAbsolutePosition(value, this.y);
            this.mdcFoundation.setAnchorMargin({ left: value, top: this.y, right: -value, bottom: this.y });
        }
    }),
    __metadata("design:type", Number)
], MenuSurface.prototype, "x", void 0);
__decorate([
    property({ type: Number }),
    observer(function (value) {
        if (this.mdcFoundation && this.x !== null && value !== null) {
            this.mdcFoundation.setAbsolutePosition(this.x, value);
            this.mdcFoundation.setAnchorMargin({ left: this.x, top: value, right: -this.x, bottom: value });
        }
    }),
    __metadata("design:type", Number)
], MenuSurface.prototype, "y", void 0);
__decorate([
    property({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setQuickOpen(value);
        }
    }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "quick", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function (isOpen, wasOpen) {
        if (this.mdcFoundation) {
            if (isOpen) {
                this.mdcFoundation.open();
                // wasOpen helps with first render (when it is `undefined`) perf
            }
            else if (wasOpen !== undefined) {
                this.mdcFoundation.close(this.skipRestoreFocus);
            }
        }
    }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "open", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "skipRestoreFocus", void 0);
__decorate([
    state(),
    observer(function (value) {
        if (this.mdcFoundation) {
            if (value) {
                this.mdcFoundation.setAnchorCorner(value);
            }
            else {
                this.mdcFoundation.setAnchorCorner(value);
            }
        }
    }),
    __metadata("design:type", Number)
], MenuSurface.prototype, "bitwiseCorner", void 0);
__decorate([
    observer(function (flipMenuHorizontally) {
        if (!this.mdcFoundation)
            return;
        if (this.previousFlipMenuHorizontally !== flipMenuHorizontally) {
            this.mdcFoundation.flipCornerHorizontally();
        }
        this.previousFlipMenuHorizontally = flipMenuHorizontally;
    }),
    property({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "flipMenuHorizontally", void 0);
__decorate([
    property({ type: String }),
    observer(function (value) {
        if (this.mdcFoundation) {
            if (value) {
                this.bitwiseCorner = stringToCorner[value];
            }
        }
    }),
    __metadata("design:type", String)
], MenuSurface.prototype, "corner", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleTop", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleLeft", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleRight", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleBottom", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleMaxHeight", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleTransformOrigin", void 0);
//# sourceMappingURL=menu-surface.js.map