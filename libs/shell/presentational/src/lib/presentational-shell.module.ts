import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { GdkModule } from '@gorilainvest/gdk';


















import { ArrowVariationModule } from '@gorilainvest/ui-toolkit/arrow-variation';








import { GorDataFormatterModule } from '@gorilainvest/ui-toolkit/gor-data-formatter';

import { PresentationalComponent } from './presentational/presentational.component';
import { ArrowVariationComponent } from './ui/arrow-variation/arrow-variation.component';
import { GorDataFormatterComponent } from './ui/gor-data-formatter/gor-data-formatter.component';








@NgModule({
  imports: [
    CommonModule,

    FormsModule,

    ReactiveFormsModule,
    MatCheckboxModule,

    MatFormFieldModule,
    MatInputModule,

    MatListModule,
    MatSelectModule,

    GdkModule,

    ArrowVariationModule,

    GorDataFormatterModule,

    RouterModule.forChild([
      {
        path: 'arrow-variation',
        pathMatch: 'full',

        component: ArrowVariationComponent
      },

      {
        path: 'gor-data-formatter',
        pathMatch: 'full',
        component: GorDataFormatterComponent
      },

      { path: '', pathMatch: 'full', component: PresentationalComponent }
    ])
  ],

  declarations: [ArrowVariationComponent, PresentationalComponent, GorDataFormatterComponent]
})
export class PresentationalShellModule {}
