import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BigCurrencyPipe, SymbolDisplay } from '@gorilainvest/ui-toolkit/pipes';

@Component({
  selector: 'gro-currency-display',
  templateUrl: './currency-display.component.html',
  styleUrls: ['./currency-display.component.scss']
})
export class CurrencyDisplayComponent implements OnInit, OnChanges {
  @Input() public value = 0;
  @Input() public currencyCode = 'USD';
  @Input() public symbolDisplay: SymbolDisplay = 'symbol';
  @Input() public digitInfo = '1.0-3';
  @Input() public currencyClass = {};
  @Input() public hideNegative = false;
  public valueToDisplay = '';
  public symbolToDisplay = '';

  constructor(private bigCurrencyPipe: BigCurrencyPipe) { }

  public ngOnInit() {
    this.setDisplayableValues();
  }

  public ngOnChanges() {
    this.setDisplayableValues();
  }

  private setDisplayableValues() {
    const pipedValue = this.bigCurrencyPipe.transform(this.value, this.currencyCode, this.symbolDisplay, this.digitInfo);
    if (!pipedValue) {
      this.symbolToDisplay = '';
      this.valueToDisplay = '';
      return;
    }

    let firstNumberIndex = 0;
    for (let i = 0; i < pipedValue.length; i++) {
      const c = pipedValue.charAt(i);
      if (c !== ' ' && !isNaN(+c)) {
        firstNumberIndex = i;
        break;
      }
    }

    this.symbolToDisplay = pipedValue.substring(0, firstNumberIndex).replace(/-/, '-\u00A0');
    if (this.hideNegative) {
      this.symbolToDisplay = this.symbolToDisplay.replace('-', '');
    }
    this.valueToDisplay = pipedValue.substring(firstNumberIndex);
  }
}
