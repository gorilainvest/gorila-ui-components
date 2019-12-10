import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BigCurrencyPipe, SymbolDisplay } from '@gorilainvest/ui-toolkit/pipes';

/**
 * @class CurrencyDisplayComponent
 * This component is used to format a number into currency format
 *
 * @example <gro-currency-display value="5.00"></gro-currency-display> will display: US$ 5
 */
@Component({
  selector: 'gro-currency-display',
  templateUrl: './currency-display.component.html',
  styleUrls: ['./currency-display.component.scss']
})
export class CurrencyDisplayComponent implements OnInit, OnChanges {

  /**
   * @param {number} value A decimal number to be formatted as a currency number
   */
  @Input() public value = 0;

  /**
   * @param {string} [currencyCode] A string containing a ISO 4217 code. Check:
   * https://en.wikipedia.org/wiki/ISO_4217
   */
  @Input() public currencyCode = 'USD';

  /**
   * @param {SymbolDisplay} [symbolDisplay] The format of displayed currency symbol.
   * Check SymbolDisplay to see the available options
   */
  @Input() public symbolDisplay: SymbolDisplay = 'symbol';

  /**
   * @param {string} [digitInfo] A string containing 3 numbers separeted by hyphen
   * Use the following format: x-y-z.
   * X=minIntegerDigits;
   * Y=minFractionDigits;
   * Z=maxFractionDigits;
   *
   * @example
   * if you put 1.3-3 and 5 as number input the result will be US$ 5.000
   * if you put 1.0-3 and 5.10 as number input the result will be US$ 5.1
   * if you put 3.0-3 and 5.10 as number input the result will be US$ 005.1
   */
  @Input() public digitInfo = '1.0-3';

  /**
   * @param {Object.<string, string>} [currencyClass] currencyClass is ngClass input
   * check https://angular.io/api/common/NgClass
   */
  @Input() public currencyClass = {};

  /**
   * @param {boolean} [hideNegative] If it's setted as true the negative
   * symbol will not be displayed for negative numbers
   */
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
