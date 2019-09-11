import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "gorilainvest-enhanced-title",
  templateUrl: "./enhanced-title.component.html",
  styleUrls: ["./enhanced-title.component.scss"]
})
export class EnhancedTitleComponent implements OnInit {
  highlightFormControl = new FormControl("HIGHLIGHT");
  titleFormControl = new FormControl("TITLE");

  constructor() {}

  ngOnInit() {}
}

