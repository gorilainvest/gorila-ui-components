import { Component, Input } from '@angular/core';

/**
 * Default size in pixels of the spinner.
 */
export const DEFAULT_SPINNER_SIZE = 30;

/**
 * Default weight of the spinner.
 */
export const DEFAULT_SPINNER_WEIGHT = 8;

/**
 * Ratio between spinner size and weight.
 */
export const SPINNER_WEIGHT_SIZE_RATIO = 3.75;

/**
 * Simple customizable spinner component.
 */
@Component({
  selector: 'mur-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  /**
   * Determine if the spinner should be absolutely centered related to host container.
   *
   * @default true
   */
  @Input() public centered = true;

  /**
   * Hide the spinner if false, removing it from DOM.
   *
   * @default false
   */
  @Input() public hide = false;

  /**
   * Icon css class to be applied to icon element of spinner;
   */
  @Input() public icon: string;

  /**
   * The message to be displayed below spinner.
   */
  @Input() public message: string;

  /*
   * The size in pixels of the spinner.
   *
   * @see DEFAULT_SPINNER_SIZE
   */
  private _size = DEFAULT_SPINNER_SIZE;

  /**
   * Set spinner size and define spinner weight.
   *
   * The spinner size must be a positive number.
   *
   * @param size the size to be set or the default value is not valid.
   */
  @Input('size') public set size(size: number) {
    this._size = isNaN(size) || size < 1 ? DEFAULT_SPINNER_SIZE : size;
    this.circleSize = this._size / SPINNER_WEIGHT_SIZE_RATIO;
  }

  /**
   * Get the spinner size (in pixels).
   */
  public get size(): number {
    return this._size;
  }

  /**
   * The spinner weight, calculated by it self based on const ration.
   *
   * @see DEFAULT_SPINNER_WEIGHT
   * @see SPINNER_WEIGHT_SIZE_RATIO
   */
  public circleSize = DEFAULT_SPINNER_WEIGHT;
}
