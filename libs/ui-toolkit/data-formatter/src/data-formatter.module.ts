import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MomentModule } from 'ngx-moment';

import { GorCustomPipe } from './custom.pipe';
import { DataFormatterComponent } from './data-formatter.component';

@NgModule({
  declarations: [DataFormatterComponent, GorCustomPipe],
  imports: [CommonModule, MomentModule, TranslateModule.forChild()],
  providers: [GorCustomPipe],
  exports: [DataFormatterComponent, GorCustomPipe]
})
export class DataFormatterModule {}
