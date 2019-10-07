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




import { ArrowVariationModule } from '@gorilainvest/ui-toolkit/arrow-variation';


import { PresentationalComponent } from "./presentational/presentational.component";
import { ArrowVariationComponent } from "./ui/arrow-variation/arrow-variation.component";

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
    RouterModule.forChild([
      {
        path: "arrow-variation",
        pathMatch: "full",
        component: ArrowVariationComponent
      },
      { path: "", pathMatch: "full", component: PresentationalComponent }
    ])
  ],
  declarations: [ArrowVariationComponent, PresentationalComponent]
})
export class PresentationalShellModule {}
