import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

const MOD_FACTOR = 2019;

@Component({
  selector: "gorilainvest-arrow-variation",
  templateUrl: "./arrow-variation.component.html",
  styleUrls: ["./arrow-variation.component.scss"]
})
export class ArrowVariationComponent implements OnInit {
  checked = true;
  disabled = false;
  sizeFormControl = new FormControl("sm");
  valueFormControl = new FormControl(
    Math.ceil((Date.now() % MOD_FACTOR) - MOD_FACTOR / 2)
  );

  constructor() {}

  ngOnInit() {}
}


