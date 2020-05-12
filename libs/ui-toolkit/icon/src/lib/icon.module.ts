import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';
import { ICON_BASE_SRC } from './token';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [{ provide: ICON_BASE_SRC, useValue: '/' }],
  declarations: [IconComponent],
  exports: [IconComponent]
})
export class IconModule {}
