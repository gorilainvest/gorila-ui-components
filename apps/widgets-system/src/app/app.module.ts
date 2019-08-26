import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { ArrowVariationModule } from "@gorilainvest/ui-toolkit/arrow-variation";
import { ButtonModule } from "@gorilainvest/ui-toolkit/button";
import { CardContainerModule } from "@gorilainvest/ui-toolkit/card-container";
import { CountdownButtonModule } from "@gorilainvest/ui-toolkit/countdown-button";
import { EnhancedTitleModule } from "@gorilainvest/ui-toolkit/enhanced-title";
import { LoadingModule } from "@gorilainvest/ui-toolkit/loading";
import { PopupConfirmModule } from "@gorilainvest/ui-toolkit/popup-confirm";
import { SectionTitleModule } from "@gorilainvest/ui-toolkit/section-title";
import { SlideToggleModule } from "@gorilainvest/ui-toolkit/slide-toggle";
import { SpinnerModule } from "@gorilainvest/ui-toolkit/spinner";
import { NxModule } from "@nrwl/angular";

import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";
import { ArrowVariationComponent } from "./ui/arrow-variation/arrow-variation.component";
import { ButtonComponent } from "./ui/button/button.component";
import { CardContainerComponent } from "./ui/card-container/card-container.component";
import { CountdownButtonComponent } from "./ui/countdown-button/countdown-button.component";
import { EnhancedTitleComponent } from "./ui/enhanced-title/enhanced-title.component";
import { LoadingComponent } from "./ui/loading/loading.component";
import { PopupConfirmComponent } from "./ui/popup-confirm/popup-confirm.component";
import { SectionTitleComponent } from "./ui/section-title/section-title.component";
import { SlideToggleComponent } from "./ui/slide-toggle/slide-toggle.component";
import { SpinnerComponent } from "./ui/spinner/spinner.component";
import { HomeComponent } from "./home/home.component";
import { GdkCardComponent } from "./gdk/gdk-card/gdk-card.component";

@NgModule({
  declarations: [
    AppComponent,
    ArrowVariationComponent,
    ButtonComponent,
    CountdownButtonComponent,
    CardContainerComponent,
    EnhancedTitleComponent,
    HomeComponent,
    LoadingComponent,

    PopupConfirmComponent,

    SectionTitleComponent,
    SlideToggleComponent,
    SpinnerComponent,
    GdkCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      initialNavigation: "enabled",
      useHash: true
    }),
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    ArrowVariationModule,
    ButtonModule,
    CardContainerModule,
    CountdownButtonModule,
    EnhancedTitleModule,
    LoadingModule,
    PopupConfirmModule,
    SectionTitleModule,
    SlideToggleModule,
    SpinnerModule
  ],
  providers: [],
  entryComponents: [PopupConfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
