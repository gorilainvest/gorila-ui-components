import { Component, AfterViewInit, Input, HostBinding, ViewEncapsulation, ViewChild, ComponentRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatCalendar, MatCalendarView } from '@angular/material/datepicker';
import { Moment, utc } from 'moment';
import { CalendarHeaderComponent } from './calendar-header.component';

export const SELECTOR = 'gor-datepicker';

/**
 * Component responsible to display calendar and date list (in future).
 *
 * @link https://github.com/angular/components/blob/master/src/material/datepicker/calendar.ts
 */
@Component({
  selector: SELECTOR,
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements AfterViewInit {
  @ViewChild(MatCalendar, { static: true }) _calendar: MatCalendar<Moment>;

  @HostBinding('style.background-color') @Input() bgColor = 'white';

  /**
   * The text to main button of datepicker
   *
   * @default "Apply"
   */
  @Input() public applyText = 'Apply';

  /**
   * An input indicating the type of the custom header component for the calendar, if set.
   *
   * @default CalendarHeaderComponent
   */
  @Input() public headerComponentRef: ComponentType<any> = CalendarHeaderComponent;

  /**
   * The maximun range date to be selected.
   *
   * @default today
   */
  @Input() public maxDate: Moment = utc();

  /**
   * The minimun range date to be selected.
   *
   * @default 5 years before today
   */
  @Input() public minDate: Moment = utc().subtract(5, 'years');

  /**
   * The active day when datepicker is opened.
   *
   * @default today
   */
  @Input() public startAt: Moment = utc();

  /**
   * The active view when datepicker is opened.
   *
   * @default "month"
   * @see MatCalendarView
   */
  @Input() public startView: MatCalendarView = 'month';

  @HostBinding('class') public hostClass = SELECTOR;

  /**
   * The selected date stored for internal use.
   *
   * @default today
   */
  public selectedDate: Moment | null = utc();

  public ngAfterViewInit() {
    this._calendar.focusActiveCell();
  }

  /**
   * Function to be executed when some date is selected.
   *
   * @param newDate
   */
  public dateChanged(newDate: Moment | null) {
    this.selectedDate = newDate;
  }
}
