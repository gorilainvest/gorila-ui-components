import { ChangeDetectorRef, Component, forwardRef, Inject, Input, Optional, ViewEncapsulation } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { MatCalendar, MatCalendarHeader, MatDatepickerIntl } from '@angular/material/datepicker';

/**
 * Default header for calendar of GorDatepicker.
 *
 * @see MatCalendarHeader
 */
@Component({
  selector: 'gor-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
  encapsulation: ViewEncapsulation.None
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
    changeDetectorRef: ChangeDetectorRef
  ) {
    super(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef);
  }
}

/**
 * Default header for calendar of GorDatepicker.
 *
 * @see MatCalendarHeader
 */
@Component({
  selector: 'gor-calendar-header-year-month',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YearMonthHeaderComponent<D> extends CalendarHeaderComponent<D> {
  public currentPeriodClicked = (): void => {
    this.calendar.currentView = this.calendar.currentView === 'multi-year' ? 'year' : 'multi-year';
  };
}
/**
 * Default header for calendar of GorDatepicker.
 *
 * @see MatCalendarHeader
 */
@Component({
  selector: 'gor-calendar-header-year-only',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YearOnlyHeaderComponent<D> extends CalendarHeaderComponent<D> {
  public currentPeriodClicked = (): void => {
    this.calendar.currentView = 'multi-year';
  };
}
