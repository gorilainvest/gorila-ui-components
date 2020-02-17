import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { BigCurrencyPipe } from './big-currency.pipe';
import { CssClassPipe } from './css-class.pipe';
import { KeepHtmlPipe } from './keep-html.pipe';
import { PastPeriodColonPipe } from './past-period-colon.pipe';

@NgModule({
  imports: [CommonModule, TranslateModule.forChild()],
  providers: [BigCurrencyPipe, CssClassPipe, PastPeriodColonPipe, KeepHtmlPipe],
  declarations: [BigCurrencyPipe, CssClassPipe, PastPeriodColonPipe, KeepHtmlPipe],
  exports: [BigCurrencyPipe, CssClassPipe, PastPeriodColonPipe, KeepHtmlPipe]
})
export class PipesModule {}
