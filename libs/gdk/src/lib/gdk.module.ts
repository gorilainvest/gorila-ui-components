import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { GdkCardComponent } from "./gdk-card/gdk-card.component";
import { MatCommonModule } from '@angular/material/core';
import { GdkImportComponent } from './gdk-import/gdk-import.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatCommonModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSelectModule
  ],
  declarations: [GdkCardComponent, GdkImportComponent],
  exports: [GdkCardComponent, GdkImportComponent]
})
export class GdkModule {}
