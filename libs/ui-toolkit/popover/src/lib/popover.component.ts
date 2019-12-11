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

  /**
   * The popover content element
   *
   * @default null
   * @see PopoverContent
   */
  public content: PopoverContent;

  /**
   * The context object
   *
   * this object contains the popover's close method
   */
  public context: any;

  /**
   * The renderMethod
   *
   * can be template, component or text
   * it will be defined based on content data that is sent
   * to popover
   */
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
