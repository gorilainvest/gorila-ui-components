import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'gorilainvest-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {
  public form = new FormGroup({
    infoList: new FormControl([
      {
        title: 'My title',
        arrow: true,
        value: 2345678,
        smallerValue: true,
        dateValue: null,
        longDateValue: {
          begin: null,
          dateJoin: null,
          end: null
        },
        volatility: 0,
        sharpe: 0,
        subtitle: 'this is my subtitle'
      }
    ])
  });
}


