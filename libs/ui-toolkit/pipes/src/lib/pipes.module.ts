import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { BigCurrencyPipe } from './big-currency.pipe';
import { CssClassPipe } from './css-class.pipe';
import { FillPipe } from './fill.pipe';
import { KeepHtmlPipe } from './keep-html.pipe';
import { PastPeriodColonPipe } from './past-period-colon.pipe';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ],
  providers: [
    BigCurrencyPipe,
    CssClassPipe,
    FillPipe,
    KeepHtmlPipe,
    PastPeriodColonPipe,
  ],
  declarations: [
    BigCurrencyPipe,
    CssClassPipe,
    FillPipe,
    KeepHtmlPipe,
    PastPeriodColonPipe,
  ],
  exports: [
    BigCurrencyPipe,
    CssClassPipe,
    FillPipe,
    KeepHtmlPipe,
    PastPeriodColonPipe,
  ]
})
export class PipesModule {}
