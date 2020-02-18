import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingModule } from '@gorilainvest/ui-toolkit/loading';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';

import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, LoadingModule, PipesModule, BrowserAnimationsModule],
  declarations: [SimpleModalComponent, LoadingModalComponent],
  exports: [SimpleModalComponent, LoadingModalComponent],
  entryComponents: [SimpleModalComponent, LoadingModalComponent]
})
export class ModalModule {}
