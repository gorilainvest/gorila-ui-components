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
import { DataFormatterModule } from '@gorilainvest/ui-toolkit/data-formatter';
import { InfoBoxModule } from '@gorilainvest/ui-toolkit/info-box';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { PresentationalComponent } from './presentational/presentational.component';
import { ArrowVariationComponent } from './ui/arrow-variation/arrow-variation.component';
import { DataFormatterComponent } from './ui/data-formatter/data-formatter.component';
import { InfoBoxComponent } from './ui/info-box/info-box.component';
import { PipesComponent } from './ui/pipes';

export class TranslateServicePresentational {
  public instant = (str) => str;
}

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
    InfoBoxModule,
    ArrowVariationModule,
    DataFormatterModule,
    TranslateModule.forRoot({}),
    PipesModule,
    RouterModule.forChild([
      {
        path: 'arrow-variation',
        pathMatch: 'full',
        component: ArrowVariationComponent
      },
      {
        path: 'data-formatter',
        pathMatch: 'full',
        component: DataFormatterComponent
      },
      {
        path: 'info-box',
        pathMatch: 'full',
        component: InfoBoxComponent
      },
      {
        path: 'pipes',
        pathMatch: 'full',
        component: PipesComponent
      },
      { path: '', pathMatch: 'full', component:
    PresentationalComponent }
    ])
  ],
  providers: [{ provide: TranslateService, useClass: TranslateServicePresentational }],
  declarations: [
    
    ArrowVariationComponent,
    PresentationalComponent,
   
   
    DataFormatterComponent,
   
    PipesComponent,
   
    InfoBoxComponent
  
  ],
  exports: [
    ArrowVariationComponent,
    DataFormatterComponent,
    PipesComponent,
    InfoBoxComponent
  ]
})
export class PresentationalShellModule {}
