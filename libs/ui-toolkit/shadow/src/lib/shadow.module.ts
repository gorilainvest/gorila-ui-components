import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';

import { ShadowComponent } from './shadow.component';

@NgModule({
  imports: [CommonModule, PipesModule],
  declarations: [ShadowComponent],
  exports: [ShadowComponent],
})
export class ShadowModule {}
