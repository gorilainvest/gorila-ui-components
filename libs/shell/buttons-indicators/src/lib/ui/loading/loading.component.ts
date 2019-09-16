import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "gorilainvest-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent implements OnInit {
  messageFormControl = new FormControl("Loading...");

  sizeFormControl = new FormControl(30);

  stop = false;

  thicknessFormControl = new FormControl(8);

  constructor() {}

  ngOnInit() {}
}

