import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { DatePickerMode } from '../model/datepicker.model';

@Injectable()
export class DatepickerModeService {

  private observable: BehaviorSubject<DatePickerMode> = new BehaviorSubject(null);

  public listen(): Observable<DatePickerMode> {
    return this.observable.asObservable();
  }

  public setMode(mode: DatePickerMode) {
    this.observable.next(mode);
  }
}
