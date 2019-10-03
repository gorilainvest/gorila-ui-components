import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionTitleModule } from '@gorilainvest/ui-toolkit/section-title';

import { CardContainerComponent } from './card-container.component';

@NgModule({
  imports: [CommonModule, SectionTitleModule, ScrollingModule],
  declarations: [CardContainerComponent],
  exports: [CardContainerComponent]
})
export class CardContainerModule {}


