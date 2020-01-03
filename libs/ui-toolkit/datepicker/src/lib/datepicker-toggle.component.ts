import { Component, OnInit, ChangeDetectionStrategy, HostBinding, HostListener } from '@angular/core';
import { MatDatepickerToggle } from '@angular/material/datepicker';

export const SELECTOR = 'gor-datepicker-toggle';

/**
 * Extends MatDatepickerToggle to insert our custom calendar icon.
 * 
 * @link https://github.com/angular/components/blob/master/src/material/datepicker/datepicker-toggle.ts
 */
@Component({
  selector: SELECTOR,
  templateUrl: './datepicker-toggle.component.html',
  styleUrls: ['./datepicker-toggle.component.scss'],
  exportAs: 'gorDatepickerToggle',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerToggleComponent<D> extends MatDatepickerToggle<D> {
  /**
   * Set readonly tabIndex for toggle component.
   */
  @HostBinding('attr.tabindex') public readonly tabIndex= '-1';
  
  /**
   * Set a css class equal to component selector.
   */
  @HostBinding('class') public readonly hostClass = SELECTOR;
  
  /**
   * Indicates if associated datepicker is active.
   */
  @HostBinding('class.mat-datepicker-toggle-active') public readonly active = this.datepicker && this.datepicker.opened;

  /**
   * Indicates if current datepicker color palette is accent.
   */
  @HostBinding('class.mat-accent') public readonly accentColor = this.datepicker && this.datepicker.color === 'accent';
  
  /**
   * Indicates if current datepicker color palette is warn.
   */
  @HostBinding('class.mat-warn') public readonly warnColor = this.datepicker && this.datepicker.color === 'warn';

  /**
   * Listen to focus event on component to force focus on button.
   */
  @HostListener('focus') public setFocus() {
    this._button.focus();
  }
}
