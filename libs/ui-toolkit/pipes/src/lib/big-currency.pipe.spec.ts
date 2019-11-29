import { registerLocaleData } from '@angular/common';

import { BigCurrencyPipe } from './big-currency.pipe';

describe('BigCurrencyPipe', () => {
  const currencyCode = 'USD';
  let bcPipe: BigCurrencyPipe;

  beforeAll(() => {
    bcPipe = new BigCurrencyPipe('en-US');
  });

  it('should return empty string for invalid pipe arguments', () => {
    expect(bcPipe.transform('o')).toEqual('');
  });

  it('should return empty string for blank values', () => {
    const blankValues = ['', null, undefined];
    const expectedPipedValue = '';
    let pipedValue;

    blankValues.forEach(blankValue => {
      pipedValue = bcPipe.transform(blankValue);
      expect(pipedValue).toEqual(expectedPipedValue);
    });
  });

  [
    {
      expectedValue: '$12,345.12',
      message: '0 <= 12345.12345 < 10^6 should be formatted to $12,345.12',
      value: 12345.12345
    },
    {
      expectedValue: '$1.235 Mi',
      message: '10^6 <= 1234567.1234567 < 10^7 should be formatted to $1.235 Mi',
      value: 1234567.1234567
    },
    {
      expectedValue: '$12.35 Mi',
      message: '10^7 <= 12345678.12345678 < 10^8 should be formatted to $12.35 Mi',
      value: 12345678.12345678
    },
    {
      expectedValue: '$123.5 Mi',
      message: '10^8 <= 123456789.123456789 < 10^9 should be formatted to $123.5.Mi',
      value: 123456789.123456789
    },
    {
      expectedValue: '$1.235 Bi',
      message: '10^9 <= 1234567891.1234567891 < 10^10 should be formatted to $1.235 Bi',
      value: 1234567891.1234567891
    },
    {
      expectedValue: '$12.35 Bi',
      message: '10^10 <= 12345678912.12345678912 < 10^11 should be formatted to $12.35 Bi',
      value: 12345678912.12345678912
    },
    {
      expectedValue: '$123.5 Bi',
      message: '10^11 <= 123456789123.123456789123 should be formatted to $123.5 Bi',
      value: 123456789123.123456789123
    },
    {
      expectedValue: '-$12,345.12',
      message: '0 <= -12345.12345 < -10^6 should be formatted to R$-12.345,12',
      value: -12345.12345
    },
    {
      expectedValue: '-$1.235 Mi',
      message: '-10^6 <= -1234567.1234567 < -10^7 should be formatted to R$-1,235 Mi',
      value: -1234567.1234567
    },
    {
      expectedValue: '-$12.35 Mi',
      message: '-10^7 <= -12345678.12345678 < -10^8 should be formatted to R$-12,35 Mi',
      value: -12345678.12345678
    },
    {
      expectedValue: '-$123.5 Mi',
      message: '-10^8 <= -123456789.123456789 < -10^9 should be formatted to R$-123,5 Mi',
      value: -123456789.123456789
    },
    {
      expectedValue: '-$1.235 Bi',
      message: '-10^9 <= -1234567891.1234567891 < -10^10 should be formatted to R$-1,235 Bi',
      value: -1234567891.1234567891
    },
    {
      expectedValue: '-$12.35 Bi',
      message: '-10^10 <= -12345678912.12345678912 < -10^11 should be formatted to R$-12,35 Bi',
      value: -12345678912.12345678912
    },
    {
      expectedValue: '-$123.5 Bi',
      message: '-10^11 <= -123456789123.123456789123 should be formatted to R$-123,5 Bi',
      value: -123456789123.123456789123
    }
  ].forEach(spec => it(spec.message,
    () => expect(bcPipe.transform(spec.value, currencyCode, 'symbol')).toBe(spec.expectedValue)));
});
