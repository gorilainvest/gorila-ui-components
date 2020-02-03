import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

import { GdkCardComponent } from './gdk-card/gdk-card.component';
import { GdkFormComponent } from './gdk-form/gdk-form.component';
import { GdkFormModule } from './gdk-form/gdk-form.module';
import { GdkImportComponent } from './gdk-import/gdk-import.component';
import { GdkJsonInputComponent } from './gdk-json-input/gdk-json-input.component';
import { GdkJsonInputModule } from './gdk-json-input/gdk-json-input.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatCommonModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    GdkJsonInputModule,
    GdkFormModule
  ],
  declarations: [GdkCardComponent, GdkImportComponent],
  exports: [GdkCardComponent, GdkImportComponent, GdkJsonInputComponent, GdkFormComponent]
})
export class GdkModule {}
