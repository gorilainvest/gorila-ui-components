import * as moment from 'moment';

import { PastPeriodColonPipe } from './past-period-colon.pipe';

describe('PastPeriodColonPipe', () => {
  const format = 'MMM/YYYY';
  let pipe: PastPeriodColonPipe;

  beforeEach(() => {
    pipe = new PastPeriodColonPipe((str, data) => str);
  });

  describe('without base date', () => {
    beforeEach(() => {
      const today = moment.utc('2015-05-05');
      jasmine.clock().mockDate(today.toDate());

      spyOn(moment, 'utc').and.returnValue(today);
    });

    it('should only translate input and print today for non \'last\' labels', () => {
      const expected = 'current: Mai/2015';

      const transformed = pipe.transform('current', format);

      expect(transformed).toBe(expected);
    });

    it('should transform last6months to \'6 last: Nov/2014\'', () => {
      const expected = 'last @n months: Nov/2014';

      const transformed = pipe.transform('last6months', format);

      expect(transformed).toBe(expected);
    });

    it('should transform lastyear to \'12 last: Mai/2014\'', () => {
      const expected = 'last @n months: Mai/2014';

      const transformed = pipe.transform('lastyear', format);

      expect(transformed).toBe(expected);
    });
  });

  describe('with base date', () => {
    it('should only translate input and print passed base date (\'2018-08-08\') for non \'last\' labels', () => {
      const expected = 'current: Ago/2018';

      const transformed = pipe.transform('current', format, '2018-08-08');

      expect(transformed).toBe(expected);
    });

    it('should transform last6months based on passed base date (\'2018-08-08\') to \'6 last: Fev/2018\'', () => {
      const expected = 'last @n months: Fev/2018';

      const transformed = pipe.transform('last6months', format, '2018-08-08');

      expect(transformed).toBe(expected);
    });

    it('should transform lastyear based on passed base date (\'2018-08-08\') to \'12 last: Ago/2017\'', () => {
      const expected = 'last @n months: Ago/2017';

      const transformed = pipe.transform('lastyear', format, '2018-08-08');

      expect(transformed).toBe(expected);
    });
  });
});
