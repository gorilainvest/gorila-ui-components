import { ConnectionPositionPair } from '@angular/cdk/overlay';

const topAbove: ConnectionPositionPair = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'top',
};

const topBelow: ConnectionPositionPair = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom',
};

const rightAbove: ConnectionPositionPair = {
  originX: 'end',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'top',
};

const rightBelow: ConnectionPositionPair = {
  originX: 'end',
  originY: 'center',
  overlayX: 'start',
  overlayY: 'center',
};

const bottomAbove: ConnectionPositionPair = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'top',
};

const bottomBelow: ConnectionPositionPair = {
  originX: 'center',
  originY: 'bottom',
  overlayX: 'center',
  overlayY: 'top',
};

const leftAbove: ConnectionPositionPair = {
  originX: 'start',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'top',
};

const leftBelow: ConnectionPositionPair = {
  originX: 'start',
  originY: 'center',
  overlayX: 'end',
  overlayY: 'center',
};

export const POPOVER_POSITIONS_ABOVE_TEMPLATE: ConnectionPositionPair[] = [
  bottomAbove,
  leftAbove,
  rightAbove,
  topAbove
];

export const POPOVER_POSITIONS_BELOW_TEMPLATE: ConnectionPositionPair[] = [
  bottomBelow,
  leftBelow,
  rightBelow,
  topBelow
];

export const POPOVER_POSITIONS = {
  above: POPOVER_POSITIONS_ABOVE_TEMPLATE,
  below: POPOVER_POSITIONS_BELOW_TEMPLATE
};
