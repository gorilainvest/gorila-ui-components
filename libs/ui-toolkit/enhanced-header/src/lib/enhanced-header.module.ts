import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnhancedTitleModule } from '@gorilainvest/ui-toolkit/enhanced-title';
import { TooptipModule } from '@gorilainvest/ui-toolkit/tooltip';
import { TranslateModule } from '@ngx-translate/core';

import { EnhancedHeaderComponent } from './enhanced-header.component';

@NgModule({
  imports: [
    CommonModule,
    EnhancedTitleModule,
    TooptipModule,
    TranslateModule.forChild()
  ],
  declarations: [EnhancedHeaderComponent],
  exports: [EnhancedHeaderComponent]
})
export class EnhancedHeaderModule { }
