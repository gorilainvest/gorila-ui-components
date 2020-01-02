import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  declarations: [TooltipComponent],
  exports: [TooltipComponent]
})
export class TooltipModule { }
