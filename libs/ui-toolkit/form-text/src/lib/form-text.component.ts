import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Text input for forms
 */
@Component({
  selector: 'gor-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.scss']
})
export class FormTextComponent {
  /**
   * Form control for input
   */
  @Input() public control: FormControl;

  /**
   * Determine if charactere count should be displayed
   *
   * @default false
   */
  @Input() public displayCount = false;

  /**
   * Text to display as a hint of input
   */
  @Input() public hint = '';

  /**
   * Max length of input text
   *
   * @default 50
   */
  @Input() public maxLength = 50;

  /**
   * Text to display as placeholder of input
   */
  @Input() public placeholder = '';

  /**
   * Determine if input can be resized
   *
   * @default true
   */
  @Input() public resizable = true;

  /**
   * Number of rows of input
   *
   * @default 3
   */
  @Input() public rows = 3;

  /**
   * Empty constructor.
   */
  constructor() {}
}
