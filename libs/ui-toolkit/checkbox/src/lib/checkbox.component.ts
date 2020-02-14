import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';

/**
 * Interface for event emitted by CheckboxComponent
 */
interface CheckboxEvent {
  id: string | number;
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
   * @default 0
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
   * @default up
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
   * @default dark
   */
  @Input() public textColor: 'dark' | 'light' = 'dark';

  /**
   * Checkbox background color when active
   * - red: #df5e3d
   * - darkblue: #314a61
   * - blue: #815ae8
   * - lightblue: #0dd6f4
   * - yellow: #fcbd1f
   * - pink: #ed4581
   * - gradient: from #10c0c6 to #4dde90
   * @default gradient
   */
  @Input() public backgroundColor: 'red' | 'darkblue' | 'blue' | 'lightblue' | 'yellow' | 'pink' | 'gradient' = 'gradient';

  /**
   * Controls the state of the checkbox.
   */
  public _checked = false;
  @Input() public set checked (value: any) {
    this._checked = !!value;
  }

  /**
   * Emits an event when user clicks checkbox.
   * Event contains the id and value of the checkbox.
   */
  @Output() public event = new EventEmitter<CheckboxEvent>();

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

  /**
   * Emits checkbox event to parent component.
   */
  public emitValue() {
    this.event.emit({
      id: this.id,
      value: this._checked
    });
  }

  /**
   * Updates checkbox classes.
   */
  private updateClasses() {
    const cssInputs = [
      this.size,
      this.labelTransform,
      this.backgroundColor,
      this.textColor
    ]
    this.classes = cssInputs.join(' ');
  }
}