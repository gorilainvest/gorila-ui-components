import { Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PopoverRef, PopoverService } from '@gorilainvest/ui-toolkit/popover';

@Component({
  selector: "gorilainvest-popover",
  templateUrl: "./popover.component.html",
  styleUrls: ["./popover.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PopoverComponent {

  @ViewChild('targetTemplateItem', { static: true }) public refTemplate: TemplateRef<any>;
  private popoverRef: PopoverRef;
  public constructor(protected popper: PopoverService) {}

  public form = new FormGroup({
    'height': new FormControl('50px'),
    'width': new FormControl('200px'),
    'backdropClass': new FormControl('cdk-overlay-dark-backdrop'),
    'isAboveTemplate': new FormControl(true)
  });

  public showPopover = () => {
    this.popoverRef = this.popper.open({
      content: this.refTemplate,
      origin: this.refTemplate.elementRef.nativeElement,
      height: this.form.get('height').value,
      width: this.form.get('width').value,
      backdropClass: this.form.get('width').value,
      isAboveTemplate: this.form.get('isAboveTemplate').value
    });
  }
}


