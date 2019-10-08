import { Component, Input } from '@angular/core';

/**
 * Pre-defined button styles, that can be:
 * - gray
 * - green
 */
export declare type ButtonType = 'green' | 'gray';

/**
 * Pre-styled button that can hold anything
 */
@Component({
  selector: 'mag-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /**
   * The button type.
   *
   * @default 'gray'
   */
  @Input() public btnType: ButtonType = 'gray';

  /**
   * Determine if the button must be disabled.
   *
   * @default false
   */
  @Input() public disabled = false;

  /**
   * Empty constructor.
   */
  constructor() {}
}

