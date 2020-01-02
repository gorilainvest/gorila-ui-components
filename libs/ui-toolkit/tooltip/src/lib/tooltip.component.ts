import { Component, Input, OnChanges } from '@angular/core';

export type OrientationType = 'above' | 'below' | 'left' | 'right' | 'before' | 'after';

@Component({
  selector: 'gor-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnChanges {
  @Input() public tooltipText = '';
  @Input() public orientation: OrientationType = 'right';
  @Input() public showIcon = true;
  public cssClass = '';
  constructor() {}

  public ngOnChanges(data) {
    if (data['orientation']) {
      if (['above', 'below', 'left', 'right', 'before', 'after'].indexOf(this.orientation) === -1) {
        this.orientation = 'right';
      }
      this.cssClass = this.orientation ? `tooltip-arrow-${this.orientation}` : '';
    }
  }
}
