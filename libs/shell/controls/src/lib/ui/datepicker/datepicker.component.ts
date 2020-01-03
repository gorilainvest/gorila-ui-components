import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { localeData, utc } from 'moment';

@Component({
  selector: 'gorilainvest-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  public startAtInputDefault = utc().format('YYYY-MM-DD');

  public initialValues = {
    startAt: utc().format(localeData().longDateFormat('L')),
    startView: 'month'
  };

  public form = new FormGroup({
    startAt: new FormControl(this.initialValues.startAt),
    startView: new FormControl(this.initialValues.startView)
  });
}

