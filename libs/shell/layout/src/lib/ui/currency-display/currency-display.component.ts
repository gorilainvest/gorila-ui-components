import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-currency-display',
  templateUrl: './currency-display.component.html',
  styleUrls: ['./currency-display.component.scss']
})
export class CurrencyDisplayComponent {
  public form = new FormGroup({
    'value': new FormControl(10.01022),
    'currencyCode': new FormControl('BRL'),
    'symbolDisplay': new FormControl('symbol'),
    'digitInfo': new FormControl('1.0-3'),
    'hideNegative': new FormControl(false),
  });
}
