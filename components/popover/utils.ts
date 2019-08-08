import { TOP, LEFT, RIGHT, BOTTOM } from './constants';

export interface Rect {
  height: number;
  width: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export type Direction = typeof TOP | typeof LEFT | typeof RIGHT | typeof BOTTOM;

/**
 * Get the element style value.
 * @param {Element} element
 * @param {string} property
 * @returns {string}
 */
function getStyleComputedProperty(element: Element, property: keyof CSSStyleDeclaration) {
  const styles: CSSStyleDeclaration = window.getComputedStyle(element);

  return styles[property];
}

/**
 * Encapsulate getBoundingClientRect function
 * @param {HTMLElement} element
 * @returns {Rect}
 */
function getBoundingClientRect(element: HTMLElement) {
  const rect: Rect = element.getBoundingClientRect();

  // If the browser is below ie11 and element is html
  if (navigator.userAgent.indexOf('MSIE') !== -1 && element.tagName === 'HTML') {
    rect.top = -element.scrollTop;
  }

  return rect;
}

/**
 * Get offsetParent of the element
 * @param {HTMLElement} element
 * @returns {HTMLElement}
 */
export function getOffsetParent(element: HTMLElement) {
  const offsetParent = element.offsetParent as HTMLElement;

  if (offsetParent === document.body || !offsetParent) {
    return document.documentElement;
  }
  return offsetParent;
}

/**
 * Get offset rect of the element
 * @param {HTMLElement} element
 * @returns {{width: number; height: number; left: number; top: number; right: number; bottom: number}}
 */
export function getOffsetRect(element: HTMLElement) {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight,
    left: element.offsetLeft,
    top: element.offsetTop,
    right: element.offsetLeft + element.offsetWidth,
    bottom: element.offsetTop + element.offsetHeight,
  };
}

/**
 * Get the element needs to be fixed
 * @param {HTMLElement} element
 * @param {HTMLElement} container
 * @returns {boolean}
 */
export function isFixed(element: HTMLElement, container: HTMLElement): boolean {
  if (element === container) return false;
  if (getStyleComputedProperty(element, 'position') === 'fixed') return true;
  if (element.parentNode) return isFixed(element.parentNode as HTMLElement, container);
  return false;
}

/**
 * Get a scroll parent element of the element
 * @param {HTMLElement} element
 * @returns {HTMLElement}
 */
export function getScrollParent(element: HTMLElement): HTMLElement {
  const parent = element.parentNode as HTMLElement;

  if (!parent) return element;

  // Compatible with Firebox
  if (parent as Node === document) {
    if (document.body.scrollTop) {
      return document.body;
    } else {
      return document.documentElement;
    }
  }

  // Firebox check overflow-x and overflow-y
  const values = ['scroll', 'auto'];
  const overflow = 'overflow';
  const overflowX = 'overflow-x' as keyof CSSStyleDeclaration;
  const overflowY = 'overflow-y' as keyof CSSStyleDeclaration;

  if (
    values.indexOf(getStyleComputedProperty(parent, overflow)) !== -1 ||
    values.indexOf(getStyleComputedProperty(parent, overflowX)) !== -1 ||
    values.indexOf(getStyleComputedProperty(parent, overflowY)) !== -1
  ) {
    if (parent === document.body && !parent.scrollTop) {
      return document.documentElement;
    }

    return parent;
  }

  return getScrollParent(element.parentNode as HTMLElement);
}

/**
 * Get popper client rect
 *  right = left + width
 *  bottom = top + height
 * @param {Rect} popperOffsets
 * @returns {{height: number; width: number; top: number; left: number; right: number; bottom: number}}
 */
export function getPopperClientRect(popperOffsets: Rect) {
  return {
    ...popperOffsets,
    right: popperOffsets.left + popperOffsets.width,
    bottom: popperOffsets.top + popperOffsets.height,
  }
}

/**
 * Get offset rect relative to custom parent
 * @param {HTMLElement} target
 * @param {HTMLElement} popper
 * @param {boolean} fixed
 * @returns {{top: number; left: number; bottom: number; right: number; width: number; height: number}}
 */
export function getOffsetRectRelativeToCustomParent(target: HTMLElement, popper: HTMLElement, fixed: boolean) {
  const targetRect = getBoundingClientRect(target);
  const popperOffsetParent = getOffsetParent(popper);
  const popperOffsetParentRect = getBoundingClientRect(popperOffsetParent);

  if (fixed) {
    const scrollParent = getScrollParent(popperOffsetParent);

    popperOffsetParentRect.top = popperOffsetParentRect.top + scrollParent.scrollTop;
    popperOffsetParentRect.left = popperOffsetParentRect.left + scrollParent.scrollLeft;
    popperOffsetParentRect.right = popperOffsetParentRect.right + scrollParent.scrollLeft;
    popperOffsetParentRect.bottom = popperOffsetParentRect.bottom + scrollParent.scrollTop;
  }

  return {
    top: targetRect.top - popperOffsetParentRect.top,
    left: targetRect.left - popperOffsetParentRect.left,
    bottom: (targetRect.top - popperOffsetParentRect.top) + targetRect.height,
    right: (targetRect.left - popperOffsetParentRect.left) + targetRect.width,
    width: targetRect.width,
    height: targetRect.height,
  };
}

/**
 * Get outer sizes(offset size + margin size) of the element
 * @param {HTMLElement} element
 * @returns {{width: number; height: number}}
 */
export function getOuterSizes(element: HTMLElement) {
  const display = element.style.display;
  const visibility = element.style.visibility;
  // set element box model
  element.style.display = 'block';
  element.style.visibility = 'hidden';
  const styles = window.getComputedStyle(element) as CSSStyleDeclaration;
  const x = parseFloat(styles.marginTop as string) + parseFloat(styles.marginBottom as string);
  const y = parseFloat(styles.marginLeft as string) + parseFloat(styles.marginRight as string);
  const result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x,
  };

  // reset element box model
  element.style.display = display;
  element.style.visibility = visibility;

  return result;
}

/**
 * Get opposite placement
 * @param {string} placement
 * @returns {string}
 */
export function getOppositePlacement(placement: Direction): Direction {
  switch (placement) {
    case LEFT:
      return RIGHT;
    case RIGHT:
      return LEFT;
    case TOP:
      return BOTTOM;
    case BOTTOM:
      return TOP;
    default:
      return TOP;
  }
}
