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

  private _printing: boolean;

  @Input() set printing(printing: boolean){
    this._printing = printing;
    this.updateArrow()
  }

   get printing() { return this._printing }


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

  private _value: number | '';

  @Input() set value(n: number | '') {
    this._value = n
    this.updateArrow();
  }
  
  get value() { return this._value }

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
   */

  public updateArrow() {
    this.isZero = !this._value;
    if(this._value > 0) {
      this.arrowColor = '#75B629'
      this.arrowDirection = PATH_ARROW.UP;
      if (this._printing) {
        this.arrowLink = '/assets/img/positive.png';
      }
      return;
    } 
    if(this._printing) {
      this.arrowLink = '/assets/img/negative.png';
    }
    this.arrowColor = '#EF2E2E';
    this.arrowDirection = PATH_ARROW.DOWN;
  }
}
