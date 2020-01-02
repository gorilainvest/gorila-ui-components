import { Component, AfterViewInit, Input, HostBinding, ViewEncapsulation, ViewChild, ComponentRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatCalendar, MatCalendarView } from '@angular/material/datepicker';
import { Moment, utc } from 'moment';
import { CalendarHeaderComponent } from './calendar-header.component';

export const SELECTOR = 'gor-datepicker';

/**
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

  @Input() public applyText = 'Apply';
  @Input() public headerComponentRef: ComponentType<any> = CalendarHeaderComponent;
  @Input() public maxDate: Moment = utc();
  @Input() public minDate: Moment = utc().subtract(5, 'years');
  @Input() public startAt: Moment = utc();
  @Input() public startView: MatCalendarView = 'month';

  @HostBinding('class') public hostClass = SELECTOR;

  public selectedDate: Moment | null = utc();

  constructor() {}

  ngAfterViewInit() {
    this._calendar.focusActiveCell();
  }

  public dateChanged(newDate: Moment | null) {
    this.selectedDate = newDate;
  }
}
