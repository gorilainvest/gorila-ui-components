import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';

import { CurrencyDisplayComponent } from './currency-display.component';

@NgModule({
  declarations: [CurrencyDisplayComponent],
  exports: [CurrencyDisplayComponent],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class CurrencyDisplayModule { }
