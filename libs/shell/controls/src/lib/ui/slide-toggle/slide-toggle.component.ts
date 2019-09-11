import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "gorilainvest-slide-toggle",
  templateUrl: "./slide-toggle.component.html",
  styleUrls: ["./slide-toggle.component.scss"]
})
export class SlideToggleComponent implements OnInit {
  checked = true;
  colorFormControl = new FormControl("#08B25A");
  disabled = false;
  titleFormControl = new FormControl("click me");

  constructor() {}

  ngOnInit() {}
}

