import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "gorilainvest-section-title",
  templateUrl: "./section-title.component.html",
  styleUrls: ["./section-title.component.scss"]
})
export class SectionTitleComponent implements OnInit {
  bgColorFormControl = new FormControl("#FFFFFF");
  colorFormControl = new FormControl("#08B25A");
  titleFormControl = new FormControl("Cool title");

  constructor() {}

  ngOnInit() {}
}

