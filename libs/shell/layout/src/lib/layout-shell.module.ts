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
import { EnhancedHeaderModule } from '@gorilainvest/ui-toolkit/enhanced-header';
import { EnhancedTitleModule } from '@gorilainvest/ui-toolkit/enhanced-title';
import { ICON_BASE_SRC, IconModule } from '@gorilainvest/ui-toolkit/icon';
import { DirectivesModule } from '@gorilainvest/ui-toolkit/directives';
import { PageHeaderModule } from '@gorilainvest/ui-toolkit/page-header';
import { ScrollContainerModule } from '@gorilainvest/ui-toolkit/scroll-container';
import { SectionTitleModule } from '@gorilainvest/ui-toolkit/section-title';
import { SortHeaderModule } from '@gorilainvest/ui-toolkit/sort-header';
import { TooltipModule } from '@gorilainvest/ui-toolkit/tooltip';
import { LetterheadModule } from '@gorilainvest/ui-toolkit/letterhead';

import { LayoutComponent } from './layout/layout.component';
import { CardContainerComponent } from './ui/card-container/card-container.component';
import { CurrencyDisplayComponent } from './ui/currency-display/currency-display.component';
import { EnhancedHeaderComponent } from './ui/enhanced-header/enhanced-header.component';
import { EnhancedTitleComponent } from './ui/enhanced-title/enhanced-title.component';
import { PageHeaderComponent } from './ui/page-header/page-header.component';
import { ScrollContainerComponent } from './ui/scroll-container/scroll-container.component';
import { SectionTitleComponent } from './ui/section-title/section-title.component';
import { SortHeaderComponent } from './ui/sort-header/sort-header.component';
import { TooltipComponent } from './ui/tooltip/tooltip.component';
import { LetterheadComponent } from './ui/letterhead/letterhead.component';

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
    EnhancedHeaderModule,
    EnhancedTitleModule,
    IconModule,
    LetterheadModule,
    ScrollContainerModule,
    SectionTitleModule,
    PageHeaderModule,
    SortHeaderModule,
    TooltipModule,
    DirectivesModule,
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
        path: 'enhanced-header',
        pathMatch: 'full',
        component: EnhancedHeaderComponent
      },
      {
        path: 'tooltip',
        pathMatch: 'full',
        component: TooltipComponent
      },
      {
        path: 'letterhead',
        pathMatch: 'full',
        component: LetterheadComponent
      },
      { path: '', pathMatch: 'full', component: LayoutComponent }
    ])
  ],
  providers: [{ provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }],
  declarations: [
    CardContainerComponent,
    CurrencyDisplayComponent,
    EnhancedHeaderComponent,
    EnhancedTitleComponent,
    LayoutComponent,
    LetterheadComponent,
    PageHeaderComponent,
    ScrollContainerComponent,
    SectionTitleComponent,
    SortHeaderComponent,
    TooltipComponent
  ]
})
export class LayoutShellModule { }
