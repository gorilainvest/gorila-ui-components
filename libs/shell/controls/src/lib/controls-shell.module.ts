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
import { DatepickerModule } from '@gorilainvest/ui-toolkit/datepicker';
import { FormTextModule } from '@gorilainvest/ui-toolkit/form-text';
import { SlideToggleModule } from '@gorilainvest/ui-toolkit/slide-toggle';

import { ControlsComponent } from "./controls/controls.component";
import { DatepickerComponent } from './ui/datepicker/datepicker.component';
import { FormTextComponent } from './ui/form-text/form-text.component';
import { SlideToggleComponent } from "./ui/slide-toggle/slide-toggle.component";
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    FormTextModule,
    GdkModule,
    DatepickerModule,
    SlideToggleModule,
    RouterModule.forChild([
      {
        path: 'slide-toggle',
        pathMatch: 'full',
        component: SlideToggleComponent
      },
      {
        path: 'form-text',
        pathMatch: 'full',
        component: FormTextComponent
      },
      {
        path: 'datepicker',
        pathMatch: 'full',
        component: DatepickerComponent
      },
      { path: '', pathMatch: 'full', component: ControlsComponent }
    ])
  ],
  declarations: [SlideToggleComponent, FormTextComponent, DatepickerComponent, ControlsComponent]
})
export class ControlsShellModule {}
