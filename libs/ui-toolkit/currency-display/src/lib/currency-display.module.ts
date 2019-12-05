import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyDisplayComponent } from './currency-display.component';

@NgModule({
  declarations: [CurrencyDisplayComponent],
  exports: [CurrencyDisplayComponent],
  imports: [
    CommonModule
  ]
})
export class CurrencyDisplayModule { }
