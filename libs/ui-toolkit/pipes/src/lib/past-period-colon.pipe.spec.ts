import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

import { PastPeriodColonPipe } from './past-period-colon.pipe';

export class TranslateServiceStub {
  public instant = (str) => str
}

describe('PastPeriodColonPipe', () => {
  const format = 'MMM/YYYY';
  let pipe: PastPeriodColonPipe;

  beforeEach(() => {
    pipe = new PastPeriodColonPipe(new TranslateServiceStub() as TranslateService);
  });

  describe('without base date', () => {
    beforeEach(() => {
      const today = moment.utc('2015-05-05');
      jasmine.clock().mockDate(today.toDate());

      spyOn(moment, 'utc').and.returnValue(today);
    });

    it('should only translate input and print today for non \'last\' labels', () => {
      const expected = 'current: May/2015';

      const transformed = pipe.transform('current', format);

      expect(transformed).toBe(expected);
    });

    it('should transform last6months to \'6 last: Nov/2014\'', () => {
      const expected = 'last @n months: Nov/2014';

      const transformed = pipe.transform('last6months', format);

      expect(transformed).toBe(expected);
    });

    it('should transform lastyear to \'12 last: May/2014\'', () => {
      const expected = 'last @n months: May/2014';

      const transformed = pipe.transform('lastyear', format);

      expect(transformed).toBe(expected);
    });
  });

  describe('with base date', () => {
    it('should only translate input and print passed base date (\'2018-08-08\') for non \'last\' labels', () => {
      const expected = 'current: Aug/2018';

      const transformed = pipe.transform('current', format, '2018-08-08');

      expect(transformed).toBe(expected);
    });

    it('should transform last6months based on passed base date (\'2018-08-08\') to \'6 last: Feb/2018\'', () => {
      const expected = 'last @n months: Feb/2018';

      const transformed = pipe.transform('last6months', format, '2018-08-08');

      expect(transformed).toBe(expected);
    });

    it('should transform lastyear based on passed base date (\'2018-08-08\') to \'12 last: Aug/2017\'', () => {
      const expected = 'last @n months: Aug/2017';

      const transformed = pipe.transform('lastyear', format, '2018-08-08');

      expect(transformed).toBe(expected);
    });
  });
});
