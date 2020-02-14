import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { BigCurrencyPipe } from './big-currency.pipe';
import { CssClassPipe } from './css-class.pipe';
import { GorKeepHtmlPipe } from './keep-html.pipe';
import { PastPeriodColonPipe } from './past-period-colon.pipe';

@NgModule({
  imports: [CommonModule, TranslateModule.forChild()],
  providers: [BigCurrencyPipe, CssClassPipe, PastPeriodColonPipe, GorKeepHtmlPipe],
  declarations: [BigCurrencyPipe, CssClassPipe, PastPeriodColonPipe, GorKeepHtmlPipe],
  exports: [BigCurrencyPipe, CssClassPipe, PastPeriodColonPipe, GorKeepHtmlPipe]
})
export class PipesModule {}
