import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { localeData, utc } from 'moment';

@Component({
  selector: 'gorilainvest-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  public maxDateInputDefault = utc()
    .add(1, 'week')
    .format('YYYY-MM-DD');
  public minDateInputDefault = utc()
    .subtract(1, 'week')
    .format('YYYY-MM-DD');
  public startAtInputDefault = utc().format('YYYY-MM-DD');

  public initialValues = {
    applyText: 'Use selected',
    maxDate: this.maxDateInputDefault,
    minDate: this.minDateInputDefault,
    startAt: utc().format(localeData().longDateFormat('L')),
    startView: 'month'
  };

  public form = new FormGroup({
    activeOnSelect: new FormControl(false),
    applyText: new FormControl(this.initialValues.applyText),
    maxDate: new FormControl(this.initialValues.maxDate),
    minDate: new FormControl(this.initialValues.minDate),
    startAt: new FormControl(this.initialValues.startAt),
    startView: new FormControl(this.initialValues.startView)
  });
}

