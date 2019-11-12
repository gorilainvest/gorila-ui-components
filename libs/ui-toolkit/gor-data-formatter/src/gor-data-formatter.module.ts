import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';

import { GorCustomPipe } from './gor-custom.pipe';
import { GorDataFormatterComponent } from './gor-data-formatter.component';

@NgModule({
  declarations: [GorDataFormatterComponent, GorCustomPipe],
  imports: [CommonModule, MomentModule],
  providers: [GorCustomPipe],
  exports: [GorDataFormatterComponent, GorCustomPipe]
})
export class GorDataFormatterModule {}
