import { Component, Input, Inject, forwardRef, Optional, ChangeDetectorRef } from '@angular/core';
import { MatCalendarHeader, MatDatepickerIntl, MatCalendar } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';

const LEFT_ARROW_D = 'M7.2 9.688a.348.348 0 0 1-.247-.102l-4.35-4.34a.349.349 0 0 1 0-.493L6.952.414a.349.349 0 1 1 .492.494L3.342 5l4.103 4.092a.349.349 0 0 1-.246.595';
const RIGHT_ARROW_D = 'M2.849 9.688a.349.349 0 0 1-.246-.596L6.704 5 2.602.908a.349.349 0 1 1 .493-.494l4.35 4.34a.349.349 0 0 1 0 .493l-4.35 4.339a.348.348 0 0 1-.246.101';

/**
 * Default header for calendar of GorDatepicker.
 *
 * @see MatCalendarHeader
 */
@Component({
  selector: 'gor-calendar-header',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
      class="mat-calendar-previous-button" [class.disabled]="!previousEnabled()"
      role="button" (click)="previousClicked()" [attr.aria-label]="prevButtonLabel">
      <path [attr.fill]="colorCtrls" fill-rule="evenodd" d="${LEFT_ARROW_D}"/>
    </svg>
    <button mat-flat-button type="button" [style.color]="color" class="mat-calendar-period-button"
            (click)="currentPeriodClicked()" [attr.aria-label]="periodButtonLabel"
            cdkAriaLive="polite">{{periodButtonText}}</button>
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
      class="mat-calendar-next-button" [class.disabled]="!nextEnabled()"
      role="button" (click)="nextClicked()" [attr.aria-label]="nextButtonLabel">
      <path [attr.fill]="colorCtrls" fill-rule="evenodd" d="${RIGHT_ARROW_D}"/>
    </svg>
  `,
  styles: [`
    :host { width: 100%; height: 40px; }
    :host { display: flex; align-items: center; justify-content: space-between; }
    button { display: flex; flex-direction: column; justify-content: center; }
  `]
})
export class CalendarHeaderComponent<D> extends MatCalendarHeader<D> {
  /**
   * A valid text color for period button.
   *
   * @default "#2d2d2d"
   */
  @Input() public color = '#2d2d2d';

  /**
   * A valid fill color for next and previous buttons.
   *
   * @default "#888e8e"
   */
  @Input() public colorCtrls = '#888E8E';

   constructor(
    _intl: MatDatepickerIntl,
    @Inject(forwardRef(() => MatCalendar)) calendar: MatCalendar<D>,
    @Optional() _dateAdapter: DateAdapter<D>,
    @Optional() @Inject(MAT_DATE_FORMATS) _dateFormats: MatDateFormats,
    changeDetectorRef: ChangeDetectorRef) {
      super(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef);
  }
}
