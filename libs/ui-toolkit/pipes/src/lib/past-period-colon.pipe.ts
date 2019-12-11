import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { utc } from 'moment';

@Pipe({
  name: 'pastPeriodColon'
})
export class PastPeriodColonPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  public transform(value: string, format?: string, current?: string): string {
    let preColonStr = '';
    let postColonStr = '';

    if (!value.startsWith('last')) {
      preColonStr = this.translate.instant(value);
      postColonStr = utc(current).format(format);
    } else {
      const lastSplit = value.split('last');
      const numMatches = lastSplit[1].match(/\d+(?=\w)/g) || [];

      let n;
      let period;
      if (numMatches.length) {
        n = +numMatches[0];
        period = value.split(`${n}`)[1];
      } else {
        n = 1;
        period = lastSplit[1];
      }

      period = period.toLowerCase();
      if (period.startsWith('month')) {
        postColonStr = utc(current).subtract(n, 'month').format(format);
      } else if (period.startsWith('year')) {
        postColonStr = utc(current).subtract(n, 'year').format(format);
      }

      if (period === 'year' && n === 1) {
        preColonStr = this.translate.instant('last @n months', { n: 12 });
      } else {
        preColonStr = this.translate.instant(`last @n ${period}`, { n });
      }
    }

    return `${preColonStr}: ${postColonStr}`;
  }

}
