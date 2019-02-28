import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { EnhancedTitleModule } from '@gorilainvest/ui-enhanced-title';
import { SlideToggleModule } from '@gorilainvest/ui-slide-toggle';
import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { EnhancedTitleComponent } from './ui/enhanced-title/enhanced-title.component';
import { HomeComponent } from './home/home.component';
import { SlideToggleComponent } from './ui/slide-toggle/slide-toggle.component';
import { GdkCardComponent } from './gdk/gdk-card/gdk-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EnhancedTitleComponent,
    HomeComponent,
    SlideToggleComponent,
    GdkCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EnhancedTitleModule,
    SlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' }),
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
