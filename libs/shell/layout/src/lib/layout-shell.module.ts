import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { GdkModule } from "@gorilainvest/gdk";
import { CardContainerModule } from "@gorilainvest/ui-toolkit/card-container";
import { EnhancedTitleModule } from "@gorilainvest/ui-toolkit/enhanced-title";
import { SectionTitleModule } from "@gorilainvest/ui-toolkit/section-title";
import { LayoutComponent } from "./layout/layout.component";
import { CardContainerComponent } from "./ui/card-container/card-container.component";
import { EnhancedTitleComponent } from "./ui/enhanced-title/enhanced-title.component";
import { SectionTitleComponent } from "./ui/section-title/section-title.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    GdkModule,
    CardContainerModule,
    EnhancedTitleModule,
    SectionTitleModule,
    RouterModule.forChild([
      {
        path: "card-container",
        pathMatch: "full",
        component: CardContainerComponent
      },
      {
        path: "enhanced-title",
        pathMatch: "full",
        component: EnhancedTitleComponent
      },
      {
        path: "section-title",
        pathMatch: "full",
        component: SectionTitleComponent
      },
      { path: "", pathMatch: "full", component: LayoutComponent }
    ])
  ],
  declarations: [
    CardContainerComponent,
    EnhancedTitleComponent,
    SectionTitleComponent,
    LayoutComponent
  ]
})
export class LayoutShellModule {}
