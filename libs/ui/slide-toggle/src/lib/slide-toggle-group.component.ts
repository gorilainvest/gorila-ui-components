import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToggleData } from './slide-toggle.model';

/**
 * The component that represent a group of toggles.
 */
@Component({
  selector: 'slide-toggle-group',
  templateUrl: './slide-toggle-group.component.html',
  styleUrls: ['./slide-toggle-group.component.scss']
})
export class SlideToggleGroupComponent {
  /**
   * An array of toggle objects.
   */
  @Input() public data: Array<ToggleData> = [];

  /**
   * An array of labels for `data` input.
   */
  @Input() public labels: Array<string> = [];

  /**
   * Event indicanting the check state change of all toggles.
   */
  @Output() public selecteds = new EventEmitter<Array<string>>();

  constructor() {}

  /**
   * public toggleChange - updates and emit changes due to toggle changes
   *
   * @param  {string} cod      the toggle that have changed
   * @param  {boolean} checked the new state for the specified toggle
   */
  public toggleChange(cod: string, checked: boolean): void {
    try {
      const key = this.data.findIndex((data: ToggleData) => {
        return data.cod === cod.toString();
      });
      this.data[key].checked = checked;
      this.propagateChanges();
    } catch (e) {
      console.warn(e);
    }
  }

  private propagateChanges() {
    const out = [];
    for (const i in this.data) {
      if (!this.data[i].checked) {
        continue;
      }
      out.push(this.data[i].cod);
    }
    this.selecteds.emit(out);
  }
}
