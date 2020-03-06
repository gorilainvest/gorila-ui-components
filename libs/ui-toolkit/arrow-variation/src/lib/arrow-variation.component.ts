import { Component, Input } from '@angular/core';

/**
 * SVG paths to draw arrow pointing up and down
 */
export enum PATH_ARROW {
  UP = 'M2 22h20L12 2z',
  DOWN = 'M2 2h20L12 22z'
}

/**
 * Triangle arrow for positive negative and zero values.
 */
@Component({
  selector: 'gor-arrow-variation, mur-arrow-variation',
  templateUrl: './arrow-variation.component.html',
  styleUrls: ['./arrow-variation.component.scss']
})
export class ArrowVariationComponent {
  @Input() public pdfPrint = false;

  /**
   * The size of the arrow, can be:
   * - sm: small (6px)
   * - md: medium (12px)
   * - lg: large (18px)
   *
   * @default 'sm'
   */
  @Input() public size: 'sm' | 'md' | 'lg' = 'sm';

  /**
   * Sets the image source and the flag to hide arrow
   *
   * @param n
   */
  @Input() set value(n: number | '') {
    this.updateArrow(n);
  }

  public arrowLink: string;

  /**
   * Color of arrow in hex value
   */
  public arrowColor: string;

  /**
   * Direction of arrow
   *
   * @default PATH_ARROW.UP
   * @see PATH_ARROW
   */
  public arrowDirection: PATH_ARROW = PATH_ARROW.UP;

  /**
   * Determine if arrow should be hidden
   *
   * @default true
   */
  public isZero = true;

  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Check if the value is positive, negative or zero
   *
   * @param n number to check
   */

  public updateArrow(n: number | '') {

    if (this.pdfPrint) {
       this.arrowLink = n > 0 ? '/assets/img/positive.png' : '/assets/img/negative.png';
}
    this.isZero = !n;
    this.arrowColor = n > 0 ? '#75B629' : '#EF2E2E';
    this.arrowDirection = n > 0 ? PATH_ARROW.UP : PATH_ARROW.DOWN;
  }
}
