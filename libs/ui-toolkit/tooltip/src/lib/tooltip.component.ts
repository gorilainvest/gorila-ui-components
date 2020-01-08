import { Component, Input } from '@angular/core';

export type OrientationType = 'above' | 'below' | 'left' | 'right' | 'before' | 'after';

@Component({
  selector: 'gor-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  /**
   * Text to be displayed in the tooltip.
   */
  @Input() public tooltipText = '';

  public _orientation = 'right';
  /**
   * Tooltip position.
   *
   * @default right
   */
  @Input() public set orientation (orientation: OrientationType) {
    this._orientation = ['above', 'below', 'left', 'right', 'before', 'after'].indexOf(orientation) === -1 ?
      'right' : orientation;
    this.cssClass = this._orientation ? `tooltip-arrow-${this._orientation}` : '';
  }

  /**
   * Controls whether information icon is displayed or not.
   *
   * @default true
   */
  @Input() public showIcon = true;

  public cssClass = '';
}
