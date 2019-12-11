import { ConnectionPositionPair } from '@angular/cdk/overlay';

/**
 * coordinates to positioning the popover above
 */
const topAbove: ConnectionPositionPair = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'top',
};

/**
 * coordinates to positioning the popover below
 */
const topBelow: ConnectionPositionPair = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom',
};

/**
 * coordinates to positioning the popover right and above
 */
const rightAbove: ConnectionPositionPair = {
  originX: 'end',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'top',
};

/**
 * coordinates to positioning the popover right and below
 */
const rightBelow: ConnectionPositionPair = {
  originX: 'end',
  originY: 'center',
  overlayX: 'start',
  overlayY: 'center',
};

/**
 * coordinates to positioning the popover bottom and above
 */
const bottomAbove: ConnectionPositionPair = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'top',
};

/**
 * coordinates to positioning the popover bottom and below
 */
const bottomBelow: ConnectionPositionPair = {
  originX: 'center',
  originY: 'bottom',
  overlayX: 'center',
  overlayY: 'top',
};

/**
 * coordinates to positioning the popover left and above
 */
const leftAbove: ConnectionPositionPair = {
  originX: 'start',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'top',
};

/**
 * coordinates to positioning the popover left and below
 */
const leftBelow: ConnectionPositionPair = {
  originX: 'start',
  originY: 'center',
  overlayX: 'end',
  overlayY: 'center',
};

/**
 * coordinates to positioning the popover above
 */
export const POPOVER_POSITIONS_ABOVE_TEMPLATE: ConnectionPositionPair[] = [
  bottomAbove,
  leftAbove,
  rightAbove,
  topAbove
];

/**
 * coordinates to positioning the popover below
 */
export const POPOVER_POSITIONS_BELOW_TEMPLATE: ConnectionPositionPair[] = [
  bottomBelow,
  leftBelow,
  rightBelow,
  topBelow
];

/**
 * a object with popover positioning data
 */
export const POPOVER_POSITIONS = {
  above: POPOVER_POSITIONS_ABOVE_TEMPLATE,
  below: POPOVER_POSITIONS_BELOW_TEMPLATE
};
