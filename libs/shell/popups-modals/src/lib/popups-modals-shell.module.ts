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



import { CountdownButtonModule } from '@gorilainvest/ui-toolkit/countdown-button';

import { PopupConfirmModule } from '@gorilainvest/ui-toolkit/popup-confirm';


import { PopupsModalsComponent } from "./popups-modals/popups-modals.component";
import { PopupConfirmComponent } from "./ui/popup-confirm/popup-confirm.component";

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
    CountdownButtonModule,
    PopupConfirmModule,
    RouterModule.forChild([
      {
        path: "popup-confirm",
        pathMatch: "full",
        component: PopupConfirmComponent
      },
      { path: "", pathMatch: "full", component: PopupsModalsComponent }
    ])
  ],
  declarations: [PopupConfirmComponent, PopupsModalsComponent]
})
export class PopupsModalsShellModule {}
