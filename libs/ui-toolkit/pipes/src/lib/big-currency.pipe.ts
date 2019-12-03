import { Pipe, PipeTransform, Inject, LOCALE_ID, Optional, SkipSelf } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { formatNumber, getDigits, getSuffix, isNumber } from './utils/number';
import { isBlank } from './utils/string';

export type SymbolDisplay = 'code' | 'symbol' | 'symbol-narrow';

/**
 * Act as a proxy to currency pipe for numbers bigger then 999999.
 *
 * Examples:
 * | Raw number   | Transformed Number |
 * | 1.0000000000 | $ 1.00             |
 * | 12.000000000 | $ 12.00            |
 * | 123.00000000 | $ 123.00           |
 * | 1234.0000000 | $ 1234.00          |
 * | 12345.000000 | $ 12345.00         |
 * | 123456.00000 | $ 123456.00        |
 * | 1234567.0000 | $ 1.234 Mi         |
 * | 12345678.000 | $ 12.34 Mi         |
 * | 1234567890.0 | $ 1.234 Bi         |
 * | 123456789.00 | $ 123.4 Mi         |
 * | 12345678901  | $ 12.34 Bi         |
 * | 123456789012 | $ 123.4 Bi         |
 *
 * @see CurrencyPipe
 */
@Pipe({
  name: 'bigCurrency'
})
export class BigCurrencyPipe implements PipeTransform {
  private currencyPipe: CurrencyPipe;

  constructor(@Inject(LOCALE_ID) @Optional() @SkipSelf() _locale: string) {
    this.currencyPipe = new CurrencyPipe(_locale || 'en-US');
  }

  public transform(value: number | string, currencyCode = 'USD', symbolDisplay: SymbolDisplay = 'symbol', digits: string = null): string {
    if ((typeof value === 'string' && isBlank(<string>value)) || !isNumber(<number>value)) { return ''; }

    // Convert strings to numbers
    value = typeof value === 'string' && !isNaN(+value - parseInt(value, 10)) ? +value : value;
    if (typeof value !== 'number') {
      if (value !== '') {
        console.warn('InvalidPipeArgument: ' + value
          + ' for pipe BigCurrencyPipe. Expected: number, received: ' + typeof value);
      }
      return '';
    }

    if (digits === null) {
      digits = getDigits(value);
    }

    const suffix = getSuffix(value);
    value = this.currencyPipe.transform(formatNumber(value), currencyCode, symbolDisplay, digits);

    return (suffix) ? value + ' ' + suffix : value;
  }
}
