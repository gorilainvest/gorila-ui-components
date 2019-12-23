import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { BigCurrencyPipe } from './big-currency.pipe';
import { CssClassPipe } from './css-class.pipe';
import { PastPeriodColonPipe } from './past-period-colon.pipe';

@NgModule({
  imports: [CommonModule, TranslateModule.forChild()],
  providers: [BigCurrencyPipe, CssClassPipe, PastPeriodColonPipe],
  declarations: [BigCurrencyPipe, CssClassPipe, PastPeriodColonPipe],
  exports: [BigCurrencyPipe, CssClassPipe, PastPeriodColonPipe]
})
export class PipesModule {}
