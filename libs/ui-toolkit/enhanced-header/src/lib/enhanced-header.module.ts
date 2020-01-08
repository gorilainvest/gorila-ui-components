import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnhancedTitleModule } from '@gorilainvest/ui-toolkit/enhanced-title';
import { TooltipModule } from '@gorilainvest/ui-toolkit/tooltip';

import { EnhancedHeaderComponent } from './enhanced-header.component';

@NgModule({
  imports: [
    CommonModule,
    EnhancedTitleModule,
    TooltipModule
  ],
  declarations: [EnhancedHeaderComponent],
  exports: [EnhancedHeaderComponent]
})
export class EnhancedHeaderModule { }
