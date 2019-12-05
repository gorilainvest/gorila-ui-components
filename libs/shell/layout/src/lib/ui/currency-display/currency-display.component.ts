import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-currency-display',
  templateUrl: './currency-display.component.html',
  styleUrls: ['./currency-display.component.scss']
})
export class CurrencyDisplayComponent {
  public form = new FormGroup({
    'test': new FormControl('abc')
  });
}
