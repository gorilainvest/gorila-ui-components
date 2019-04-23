import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTitleComponent } from './section-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SectionTitleComponent],
  exports: [SectionTitleComponent]
})
export class SectionTitleModule {}

