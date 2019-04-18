import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Triangle arrow for positive negative and zero values.
 */
@Component({
  selector: 'mur-arrow-variation',
  templateUrl: './arrow-variation.component.html',
  styleUrls: ['./arrow-variation.component.scss']
})
export class ArrowVariationComponent implements OnChanges {
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
   * The value to determine arrow type.
   *
   * @default 0
   */
  @Input() public value = 0;

  /**
   * CSS classes to manage arrow appearance in CSS.
   *
   * Consist of type and size of the arrow, e.g:
   * `['zero', 'sm']`
   */
  public cssclasses: string[];

  /**
   * The type of arrow to be displayed, can be:
   * - negative (iff value < 0)
   * - positive (iff value < 0)
   * - zero (otherwise)
   *
   * @default 'zero'
   */
  public type: 'negative' | 'positive' | 'zero' = 'zero';

  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Updates type and CSS classes on value change.
   */
  public ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.type = this.value
        ? this.value > 0
          ? 'positive'
          : 'negative'
        : 'zero';
    }

    this.cssclasses = [this.type, this.size];
  }
}

