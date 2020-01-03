import { Component, OnInit, ChangeDetectionStrategy, HostBinding, HostListener } from '@angular/core';
import { MatDatepickerToggle } from '@angular/material/datepicker';

export const SELECTOR = 'gor-datepicker-toggle';

@Component({
  selector: SELECTOR,
  templateUrl: './datepicker-toggle.component.html',
  styleUrls: ['./datepicker-toggle.component.scss'],
  exportAs: 'gorDatepickerToggle',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerToggleComponent<D> extends MatDatepickerToggle<D> {
  @HostBinding('attr.tabindex') public readonly = '-1';
  @HostBinding('class') public readonly hostClass = SELECTOR;
  @HostBinding('class.mat-datepicker-toggle-active') public readonly active = this.datepicker && this.datepicker.opened;
  @HostBinding('class.mat-accent') public readonly accentColor = this.datepicker && this.datepicker.color === 'accent';
  @HostBinding('class.mat-warn') public readonly warnColor = this.datepicker && this.datepicker.color === 'warn';
  @HostListener('focus') public setFocus() {
    this._button.focus();
  }
}
