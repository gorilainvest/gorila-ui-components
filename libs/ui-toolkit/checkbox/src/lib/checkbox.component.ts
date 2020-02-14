import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gor-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit, OnChanges {
  /**
   * Checkbox label
   */
  @Input() public label = 'Label';

  /**
   * Label text transform
   * - up: uppercase
   * - lo: lowercase
   * - cp: capitalize
   * - no: none
   */
  @Input() public labelTransform: 'up' | 'lo' | 'cp' | 'no' = 'up';

  /**
   * Checkbox size
   * - sm: small (12px)
   * - md: medium (14px)
   * - lg: large (16px)
   *
   * @default 'sm'
   */
  @Input() public size: 'sm' | 'md' | 'lg' = 'sm';

  /**
   * Text color
   * - dark: #2d2d2d ($body)
   * - light: #888e8e ($textSecondary)
   */
  @Input() public textColor: 'dark' | 'light' = 'dark';

  /**
   * Classes added to the mat-checkbox component.
   * A string build from the inputs size and labelCapitalization.
   */
  public classes = '';

  /**
   * Checkbox value, emitted when user clicks checkbox.
   */
  private _value = false;
  @Output() public value = new EventEmitter<boolean>();

  public ngOnInit() {
    this.updateClasses();
  }

  public ngOnChanges() {
    this.updateClasses();
  }

  /**
   * Emits checkbox value to parent component.
   */
  public emitValue() {
    this._value = !this._value;
    this.value.emit(this._value);
  }

  /**
   * Updates checkbox classes.
   */
  private updateClasses() {
    this.classes = this.size + ' ' + this.labelTransform + ' ' + this.textColor;
  }
}
