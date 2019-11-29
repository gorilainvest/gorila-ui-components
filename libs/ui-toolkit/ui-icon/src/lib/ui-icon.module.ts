import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UiIconComponent } from './ui-icon.component';

@NgModule({
  imports: [CommonModule, RouterModule],

  declarations: [UiIconComponent],
  exports: [UiIconComponent]
})
export class UiIconModule {}


