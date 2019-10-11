import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "gorilainvest-scroll-container",
  templateUrl: "./scroll-container.component.html",
  styleUrls: ["./scroll-container.component.scss"]
})
export class ScrollContainerComponent implements OnInit {
  activateScrollEffect = false;
  initialHeightFormControl = new FormControl("400px");
  initialWidthFormControl = new FormControl("200px");
  scrolledHeightFormControl = new FormControl("50px");
  scrolledWidthFormControl = new FormControl("200px");

  constructor() {}

  ngOnInit() {}
}

