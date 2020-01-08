import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: "gorilainvest-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"]
})
export class TooltipComponent {
  public showIcon = true;
  public orientation = new FormControl("right");
  public tooltipText = new FormControl("Gorila Tooltip");
}

