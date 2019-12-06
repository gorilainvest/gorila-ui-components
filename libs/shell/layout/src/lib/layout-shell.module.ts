import { ScrollingModule } from '@angular/cdk/scrolling';
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
import { CardContainerModule } from '@gorilainvest/ui-toolkit/card-container';
import { EnhancedTitleModule } from '@gorilainvest/ui-toolkit/enhanced-title';
import { IconModule } from '@gorilainvest/ui-toolkit/icon';
import { PageHeaderModule } from '@gorilainvest/ui-toolkit/page-header';
import { ScrollContainerModule } from '@gorilainvest/ui-toolkit/scroll-container';
import { SectionTitleModule } from '@gorilainvest/ui-toolkit/section-title';

import { LayoutComponent } from './layout/layout.component';
import { CardContainerComponent } from './ui/card-container/card-container.component';
import { EnhancedTitleComponent } from './ui/enhanced-title/enhanced-title.component';
import { IconComponent } from './ui/icon/icon.component';
import { PageHeaderComponent } from './ui/page-header/page-header.component';
import { ScrollContainerComponent } from './ui/scroll-container/scroll-container.component';
import { SectionTitleComponent } from './ui/section-title/section-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    ScrollingModule,
    GdkModule,
    CardContainerModule,
    EnhancedTitleModule,
    ScrollContainerModule,
    SectionTitleModule,
    PageHeaderModule,
    RouterModule.forChild([
      {
        path: 'card-container',
        pathMatch: 'full',
        component: CardContainerComponent
      },
      {
        path: 'enhanced-title',
        pathMatch: 'full',
        component: EnhancedTitleComponent
      },
      {
        path: 'scroll-container',
        pathMatch: 'full',
        component: ScrollContainerComponent
      },
      {
        path: 'section-title',
        pathMatch: 'full',
        component: SectionTitleComponent
      },
      {
        path: 'page-header',
        pathMatch: 'full',
        component: PageHeaderComponent
      },
      {
        path: 'icon',
        pathMatch: 'full',
        component: IconComponent
      },
      { path: '', pathMatch: 'full', component: LayoutComponent }
    ])
  ],
  declarations: [
    CardContainerComponent,
    EnhancedTitleComponent,
    IconComponent,
    ScrollContainerComponent,
    SectionTitleComponent,
    LayoutComponent,
    PageHeaderComponent
  ]
})
export class LayoutShellModule {}
