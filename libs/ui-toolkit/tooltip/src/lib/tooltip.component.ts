import { Component, Input, OnChanges } from '@angular/core';

export type OrientationType = 'above' | 'below' | 'left' | 'right' | 'before' | 'after';

@Component({
  selector: 'gor-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnChanges {
  /**
   * Text to be displayed in the tooltip.
   */
  @Input() public tooltipText = '';

  /**
   * Tooltip position.
   *
   * @default right
   */
  @Input() public orientation: OrientationType = 'right';

  /**
   * Controls whether information icon is displayed or not.
   *
   * @default true
   */
  @Input() public showIcon = true;

  public cssClass = '';

  public ngOnChanges(data) {
    // Update tooltip css class according to changes in orientation.
    if (data['orientation']) {
      if (['above', 'below', 'left', 'right', 'before', 'after'].indexOf(this.orientation) === -1) {
        this.orientation = 'right';
      }
      this.cssClass = this.orientation ? `tooltip-arrow-${this.orientation}` : '';
    }
  }
}
