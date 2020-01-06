import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [TooltipComponent],
  exports: [TooltipComponent],
  imports: [CommonModule, MatTooltipModule]
})
export class TooltipModule {}
