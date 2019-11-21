import { Component, Input } from '@angular/core';

/**
 * A simple customizable loading component.
 */
@Component({
  selector: "gor-loading, mur-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent {
  /**
   * The message to be displayed below spinner.
   */
  @Input() public message: string;

  /**
   * Stop the loading if false, removing it from DOM.
   */
  @Input() public stopLoading: boolean;

  /**
   * The spinner thickness in pixels.
   *
   * @default 8
   */
  @Input() public thickness = 8;

  /**
   * The size in pixels of the spinner.
   *
   * @default 30
   */
  @Input() public size = 30;

  /**
   * The container width in pixel
   *
   * @default 120
   */
  @Input() public width = 120;

  /**
   * Empty constructor.
   */
  constructor() {}
}
