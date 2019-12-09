import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCurrencyPipe } from './big-currency.pipe';
import { CssClassPipe } from './css-class.pipe';

@NgModule({
  imports: [CommonModule],
  providers: [BigCurrencyPipe, CssClassPipe],
  declarations: [BigCurrencyPipe, CssClassPipe],
  exports: [BigCurrencyPipe, CssClassPipe]
})
export class PipesModule {}
