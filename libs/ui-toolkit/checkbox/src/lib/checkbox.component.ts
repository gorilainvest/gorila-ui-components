import { Component, ViewEncapsulation, Input, OnChanges, OnInit } from '@angular/core';

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
   * Label capitalization
   * - up: uppercase
   * - lo: lowercase
   * - cp: capitalize
   */
  @Input() public labelCapitalization: 'up' | 'lo' | 'cp' = 'up';

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
   * Classes added to the mat-checkbox component.
   * A string build from the inputs size and labelCapitalization.
   */
  public classes = '';

  public ngOnInit() {
    this.updateClasses();
  }

  public ngOnChanges() {
    this.updateClasses();
  }

  private updateClasses() {
    this.classes = this.size + ' ' + this.labelCapitalization;
  }
}
