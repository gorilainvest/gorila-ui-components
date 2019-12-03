import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';

@NgModule({
  imports: [CommonModule, RouterModule],

  declarations: [IconComponent],
  exports: [IconComponent]
})
export class IconModule {}
