import { Component, AfterViewInit, Input, HostBinding, ViewEncapsulation, ViewChild, ComponentRef } from '@angular/core';
import { CalendarHeaderComponent } from './calendar-header.component';
import { ComponentType, CdkPortalOutlet } from '@angular/cdk/portal';
import { Moment, utc } from 'moment';
import { MatCalendar } from '@angular/material/datepicker';

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
