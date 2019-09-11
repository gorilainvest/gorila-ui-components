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
import { ButtonModule } from "@gorilainvest/ui-toolkit/button";
import { CountdownButtonModule } from "@gorilainvest/ui-toolkit/countdown-button";
import { LoadingModule } from "@gorilainvest/ui-toolkit/loading";
import { SpinnerModule } from "@gorilainvest/ui-toolkit/spinner";
import { ButtonsIndicatorsComponent } from "./buttons-indicators/buttons-indicators.component";
import { ButtonComponent } from "./ui/button/button.component";
import { CountdownButtonComponent } from "./ui/countdown-button/countdown-button.component";
import { LoadingComponent } from "./ui/loading/loading.component";
import { SpinnerComponent } from "./ui/spinner/spinner.component";

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
    ButtonModule,
    CountdownButtonModule,
    LoadingModule,
    SpinnerModule,
    RouterModule.forChild([
      { path: "button", pathMatch: "full", component: ButtonComponent },
      {
        path: "countdown-button",
        pathMatch: "full",
        component: CountdownButtonComponent
      },
      { path: "loading", pathMatch: "full", component: LoadingComponent },
      { path: "spinner", pathMatch: "full", component: SpinnerComponent },
      { path: "", pathMatch: "full", component: ButtonsIndicatorsComponent }
    ])
  ],
  declarations: [
    ButtonComponent,
    CountdownButtonComponent,
    LoadingComponent,
    SpinnerComponent,
    ButtonsIndicatorsComponent
  ]
})
export class ButtonsIndicatorsShellModule {}
