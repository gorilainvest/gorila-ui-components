import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'gorilainvest-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {
  public checked = true;
  public colorFormControl = new FormControl('#08B25A');
  public uncheckedColorFormControl = new FormControl('#000000');
  public disabled = false;
  public titleFormControl = new FormControl('click me');
}
