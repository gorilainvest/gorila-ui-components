import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';

/**
 * Interface for event emitted by CheckboxComponent
 */
interface CheckboxEvent {
  checkboxId: string | number;
  value: boolean;
}

@Component({
  selector: 'gor-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit, OnChanges {
  /**
   * An id to identify the checkbox. Emitted together with the
   * checkbox value when user clicks the checkbox.
   */
  @Input() public id: string | number = 0;

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
   * Emits an event when user clicks checkbox.
   */
  @Output() public event = new EventEmitter<CheckboxEvent>();

  private value = false;

  public ngOnInit() {
    this.updateClasses();
  }

  public ngOnChanges() {
    this.updateClasses();
  }

  /**
   * Emits checkbox event to parent component.
   */
  public emitValue() {
    this.value = !this.value;
    this.event.emit({
      checkboxId: this.id,
      value: this.value
    });
  }

  /**
   * Updates checkbox classes.
   */
  private updateClasses() {
    this.classes = this.size + ' ' + this.labelTransform + ' ' + this.textColor;
  }
}
