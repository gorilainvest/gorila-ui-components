import { Component, Output, EventEmitter, Input } from '@angular/core';


/**
 * The component that represent a single toggle.
 */
@Component({
  selector: 'gor-slide-toggle, mur-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {

  /**
   * The toggle check state.
   */
  @Input() public checked = false;

  /**
   * The toggle color when checked.
   */
  @Input() public color = '';

  /**
   * The toggle class to be customized.
   */
  @Input() public cssClass = '';

  /**
   * The toggle disable state.
   */
  @Input() public disabled = false;


  /**
   * The toggle identifier.
   */
  @Input() public id: string;


  /**
   * The toggle text.
   */
  @Input() public title = '';

  /**
   * Event indicanting the check state change. Usually when the user click it.
   */
  @Output() public toggleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  /**
   * public changeChecked - called when the toggle button is clicked
   *
   */
  public changeChecked(): void {
    this.toggleChange.emit(!this.checked);
  }
}
