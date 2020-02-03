import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrowVariationModule } from '@gorilainvest/ui-toolkit/arrow-variation';
import { CurrencyDisplayModule } from '@gorilainvest/ui-toolkit/currency-display';
import { TranslateModule } from '@ngx-translate/core';

import { InfoBoxComponent } from './info-box.component';

@NgModule({
  imports: [ArrowVariationModule, CurrencyDisplayModule, CommonModule, TranslateModule],
  declarations: [InfoBoxComponent],
  exports: [InfoBoxComponent]
})
export class InfoBoxModule {}
