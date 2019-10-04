import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '@gorilainvest/ui/button';

import { CountdownButtonComponent } from './countdown-button.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [CountdownButtonComponent],
  exports: [CountdownButtonComponent]
})
export class CountdownButtonModule {}

