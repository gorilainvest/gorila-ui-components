import { ChangeDetectorRef, Component, forwardRef, Inject, Input, Optional, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { MatCalendar, MatCalendarHeader, MatDatepickerIntl } from '@angular/material/datepicker';

import { DatepickerModeService } from './datepicker-mode.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DatePickerMode } from './datepicker.model';

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
export class CalendarHeaderComponent<D> extends MatCalendarHeader<D> implements OnInit, OnDestroy {
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

  /**
   * A flag to choose the behavior of datepicker header
   * If it's set year-only, then the header can't be changed
   * If it's set year-month, then the hader can toggle between year and multi-year view
   * If it's set all, then the default behavior will be chosen
   *
   * @default "all"
   */
  @Input() public mode: DatePickerMode = 'all';

  constructor(
    _intl: MatDatepickerIntl,
    @Inject(forwardRef(() => MatCalendar)) calendar: MatCalendar<D>,
    @Optional() _dateAdapter: DateAdapter<D>,
    @Optional() @Inject(MAT_DATE_FORMATS) _dateFormats: MatDateFormats,
    changeDetectorRef: ChangeDetectorRef,
    private modeService: DatepickerModeService
  ) {
    super(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef);
  }

  public ngOnInit() {
    this.modeService.listen().pipe(untilDestroyed(this)).subscribe((mode: DatePickerMode) => this.mode = mode);
  }

  public currentPeriodClicked = (): void => {
    switch (this.mode) {
      case 'year-only':
        this.calendar.currentView = 'multi-year';
        break;
      case 'year-month':
        this.calendar.currentView = this.calendar.currentView === 'multi-year' ? 'year' : 'multi-year';
        break;

      default:
        super.currentPeriodClicked();
        break;
    }
  };

  public ngOnDestroy() {}
}
