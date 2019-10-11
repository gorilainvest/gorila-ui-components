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




import { SlideToggleModule } from '@gorilainvest/ui-toolkit/slide-toggle';


import { ControlsComponent } from "./controls/controls.component";
import { SlideToggleComponent } from "./ui/slide-toggle/slide-toggle.component";

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
    SlideToggleModule,
    RouterModule.forChild([
      {
        path: "slide-toggle",
        pathMatch: "full",
        component: SlideToggleComponent
      },
      { path: "", pathMatch: "full", component: ControlsComponent }
    ])
  ],
  declarations: [SlideToggleComponent, ControlsComponent]
})
export class ControlsShellModule {}
