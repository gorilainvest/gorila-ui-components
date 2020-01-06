import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { GdkModule } from '@gorilainvest/gdk';
import { CardContainerModule } from '@gorilainvest/ui-toolkit/card-container';
import { CurrencyDisplayModule } from '@gorilainvest/ui-toolkit/currency-display';
import { EnhancedTitleModule } from '@gorilainvest/ui-toolkit/enhanced-title';
import { IconModule } from '@gorilainvest/ui-toolkit/icon';
import { PageHeaderModule } from '@gorilainvest/ui-toolkit/page-header';
import { ScrollContainerModule } from '@gorilainvest/ui-toolkit/scroll-container';
import { SectionTitleModule } from '@gorilainvest/ui-toolkit/section-title';
import { SortHeaderModule } from '@gorilainvest/ui-toolkit/sort-header';
import { TooltipModule } from '@gorilainvest/ui-toolkit/tooltip';

import { LayoutComponent } from './layout/layout.component';
import { CardContainerComponent } from './ui/card-container/card-container.component';
import { CurrencyDisplayComponent } from './ui/currency-display/currency-display.component';
import { EnhancedTitleComponent } from './ui/enhanced-title/enhanced-title.component';
import { IconComponent } from './ui/icon/icon.component';
import { PageHeaderComponent } from './ui/page-header/page-header.component';
import { ScrollContainerComponent } from './ui/scroll-container/scroll-container.component';
import { SectionTitleComponent } from './ui/section-title/section-title.component';
import { SortHeaderComponent } from './ui/sort-header/sort-header.component';
import { TooltipComponent } from './ui/tooltip/tooltip.component';

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
    MatSortModule,
    MatTableModule,
    ScrollingModule,
    GdkModule,
    CardContainerModule,
    CurrencyDisplayModule,
    EnhancedTitleModule,
    IconModule,
    ScrollContainerModule,
    SectionTitleModule,
    PageHeaderModule,
    SortHeaderModule,
    TooltipModule,
    RouterModule.forChild([
      {
        path: 'card-container',
        pathMatch: 'full',
        component: CardContainerComponent
      },
      {
        path: 'currency-display',
        pathMatch: 'full',
        component: CurrencyDisplayComponent
      },
      {
        path: 'enhanced-title',
        pathMatch: 'full',
        component: EnhancedTitleComponent
      },
      {
        path: 'icon',
        pathMatch: 'full',
        component: IconComponent
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
        path: 'sort-header',
        pathMatch: 'full',
        component: SortHeaderComponent
      },
      {
        path: 'tooltip',
        pathMatch: 'full',
        component: TooltipComponent
      },
      { path: '', pathMatch: 'full', component: LayoutComponent }
    ])
  ],
  declarations: [
    CardContainerComponent,
    CurrencyDisplayComponent,
    EnhancedTitleComponent,
    IconComponent,
    LayoutComponent,
    PageHeaderComponent,
    ScrollContainerComponent,
    SectionTitleComponent,
    SortHeaderComponent,
    TooltipComponent
  ]
})
export class LayoutShellModule { }
