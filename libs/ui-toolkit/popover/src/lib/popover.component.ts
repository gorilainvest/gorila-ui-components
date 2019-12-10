import { Component, OnInit, TemplateRef } from '@angular/core';

import { PopoverContent, PopoverRef } from './popover-ref';
/**
 * @class PopoverComponent
 * This component is used to display data inside a popover
 */
@Component({
  selector: 'gor-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  public content: PopoverContent;
  public context: any;
  public renderMethod: 'template' | 'component' | 'text' = 'component';

  public constructor(private popoverRef: PopoverRef) { }

  public ngOnInit() {
    this.content = this.popoverRef.content;

    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    } else if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      };
    }
  }
}
