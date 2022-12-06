import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "gorilainvest-card-container",
  templateUrl: "./card-container.component.html",
  styleUrls: ["./card-container.component.scss"]
})
export class CardContainerComponent implements OnInit {
  colorEndFormControl = new FormControl("#3366FF");
  colorInitFormControl = new FormControl("#4dde90");
  titleFormControl = new FormControl("Nice title");

  constructor() {}

  ngOnInit() {}
}

