import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

/**
 * A card to be used for shell libs with input and output aside, a preview and code areas.
 */
@Component({
  selector: "gdk-card",
  templateUrl: "./gdk-card.component.html",
  styleUrls: ["./gdk-card.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class GdkCardComponent implements OnInit {
  /**
   * The title for the card.
   */
  @Input() title: string;

  /**
   * The subtitle for the card.
   */
  @Input() subtitle: string;

  /**
   * Flag to control right aside for summary info.
   */
  @Input() summary: boolean;

  /**
   * Flag to not show inputs in aside.
   */
  @Input() withoutInput: boolean;

  /**
   * Flag to not show outputs in aside.
   */
  @Input() withoutOutput: boolean;

  constructor() {}

  ngOnInit() {}
}
