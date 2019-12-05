import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { GdkModule } from "@gorilainvest/gdk";

import { CardContainerModule } from '@gorilainvest/ui-toolkit/card-container';
import { CurrencyDisplayModule } from '@gorilainvest/ui-toolkit/currency-display';
import { EnhancedTitleModule } from '@gorilainvest/ui-toolkit/enhanced-title';
import { ScrollContainerModule } from '@gorilainvest/ui-toolkit/scroll-container';
import { SectionTitleModule } from '@gorilainvest/ui-toolkit/section-title';
import { PageHeaderModule } from '@gorilainvest/ui-toolkit/page-header';

import { LayoutComponent } from "./layout/layout.component";
import { CardContainerComponent } from "./ui/card-container/card-container.component";
import { CurrencyDisplayComponent } from './ui/currency-display/currency-display.component';
import { EnhancedTitleComponent } from "./ui/enhanced-title/enhanced-title.component";
import { ScrollContainerComponent } from './ui/scroll-container/scroll-container.component';
import { SectionTitleComponent } from "./ui/section-title/section-title.component";
import { PageHeaderComponent } from "./ui/page-header/page-header.component";
import { ScrollingModule } from '@angular/cdk/scrolling';

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
    ScrollingModule,
    GdkModule,
    CardContainerModule,
    CurrencyDisplayModule,
    EnhancedTitleModule,
    ScrollContainerModule,
    SectionTitleModule,
    PageHeaderModule,
    RouterModule.forChild([
      {
        path: "card-container",
        pathMatch: "full",
        component: CardContainerComponent
      },
      {
        path: "currency-display",
        pathMatch: "full",
        component: CurrencyDisplayComponent
      },
      {
        path: "enhanced-title",
        pathMatch: "full",
        component: EnhancedTitleComponent
      },
      {
        path: "scroll-container",
        pathMatch: "full",
        component: ScrollContainerComponent
      },
      {
        path: "section-title",
        pathMatch: "full",
        component: SectionTitleComponent
      },
      {
        path: "page-header",
        pathMatch: "full",
        component: PageHeaderComponent
      },
      { path: "", pathMatch: "full", component: LayoutComponent }
    ])
  ],
  declarations: [
    CardContainerComponent,
    EnhancedTitleComponent,
    ScrollContainerComponent,
    SectionTitleComponent,
    LayoutComponent,
    PageHeaderComponent,
    CurrencyDisplayComponent
  ]
})
export class LayoutShellModule {}
