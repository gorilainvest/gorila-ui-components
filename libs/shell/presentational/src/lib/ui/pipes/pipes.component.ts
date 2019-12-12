import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'gorilainvest-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  public pipeFormControl = new FormControl('pastPeriodColon');
  public form = {
    'bigCurrency': new FormGroup({
      'currencyCode': new FormControl('USD'),
      'symbolDisplay': new FormControl('code'),
      'currency': new FormControl(0),
    }),
    'cssClass': new FormGroup({
      'textInput': new FormControl('this is a sample word'),
    }),
    'pastPeriodColon': new FormGroup({
      'date': new FormControl('2019-12-24'),
      'label': new FormControl('current'),
      'format': new FormControl('MM/YYYY'),
    })
  }

}
