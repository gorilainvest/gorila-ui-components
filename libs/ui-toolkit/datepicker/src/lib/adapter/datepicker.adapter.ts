import { Inject, Injectable, Optional } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DateRange } from '@angular/material/datepicker';
import { Moment, utc } from 'moment';

import { DatePickerMode } from '../model/datepicker.model';

@Injectable()
export class GorilaDatepickerAdapter extends MomentDateAdapter {
  private _mode: DatePickerMode = 'all';
  public set mode(mode: DatePickerMode) {
    this._mode = mode;
  }

  constructor(
    @Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string,
    @Optional()
    @Inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS)
    _options?: any
  ) {
    super(dateLocale, _options);
  }
  public parse(value: any, parseFormat: string | string[]): Moment | null {
    return super.parse(value, this.getDateFormat() || parseFormat);
  }

  public format(date: DateRange<Moment> | Moment, displayFormat: string): string {
    if (date instanceof DateRange) {
      return super.format(date.start, this.getDateFormat() || displayFormat);
    }
    return super.format(date, this.getDateFormat() || displayFormat);
  }

  public isValid(date: DateRange<Moment> | Moment): boolean {
    if (date instanceof DateRange) {
      const startIsValid = date.start && this.clone(date.start).isValid();
      const endIsValid = date.end === null || this.clone(date.end).isValid();
      return startIsValid && endIsValid;
    }
    return this.clone(date).isValid();
  }

  private getDateFormat() {
    switch (this._mode) {
      case 'all':
        return 'DD/MM/YYYY';
      case 'year-month':
        return 'MMMM[ de ]YYYY';
      case 'year-only':
        return 'YYYY';
    }
  }
}
