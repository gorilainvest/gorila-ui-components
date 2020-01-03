import { Component, AfterViewInit, Input, HostBinding, ViewEncapsulation, ViewChild } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatCalendar, MatCalendarView, MatDatepicker, MatDatepickerContent } from '@angular/material/datepicker';
import { CalendarHeaderComponent } from './calendar-header.component';

export const SELECTOR = 'gor-datepicker-content';

/**
 * Component responsible to display calendar and date list (in future).
 *
 * @link https://github.com/angular/components/blob/master/src/material/datepicker/calendar.ts
 */
@Component({
  selector: SELECTOR,
  templateUrl: './datepicker-content.component.html',
  styleUrls: ['./datepicker-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerContentComponent<D> extends MatDatepickerContent<D> implements AfterViewInit {
  @ViewChild(MatCalendar, { static: false }) _calendar: MatCalendar<D>;

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
   */
  @Input() public maxDate: D;

  /**
   * The minimun range date to be selected.
   */
  @Input() public minDate: D;

  /**
   * The active day when datepicker is opened.
   */
  @Input() public startAt: D;

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
   */
  public selectedDate: D | null = null;

  public ngAfterViewInit() {
    this._calendar.focusActiveCell();
  }

  /**
   * Function to be executed when some date is selected.
   *
   * @param newDate
   */
  public dateChanged(newDate: D | null) {
    this.selectedDate = newDate;
  }
}
