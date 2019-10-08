import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnhancedTitleComponent } from './enhanced-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EnhancedTitleComponent],
  exports: [EnhancedTitleComponent]
})
export class EnhancedTitleModule {}
