import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleModule } from '@gorilainvest/ui-section-title';
import { CardContainerComponent } from './card-container.component';

@NgModule({
  imports: [CommonModule, SectionTitleModule],
  declarations: [CardContainerComponent],
  exports: [CardContainerComponent]
})
export class CardContainerModule {}

