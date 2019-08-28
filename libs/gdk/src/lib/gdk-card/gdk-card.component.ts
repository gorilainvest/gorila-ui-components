import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "gdk-card",
  templateUrl: "./gdk-card.component.html",
  styleUrls: ["./gdk-card.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class GdkCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() summary: boolean;
  @Input() withoutInput: boolean;
  @Input() withoutOutput: boolean;

  constructor() {}

  ngOnInit() {}
}

