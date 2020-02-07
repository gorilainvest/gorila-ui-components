import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingModule } from '@gorilainvest/ui-toolkit/loading';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';

import { UiLoadingModalComponent } from './ui-loading-modal/ui-loading-modal.component';
import { UiSimpleModalComponent } from './ui-simple-modal/ui-simple-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, MatDialogModule, LoadingModule, PipesModule, BrowserAnimationsModule],
  declarations: [UiSimpleModalComponent, UiLoadingModalComponent],
  exports: [UiSimpleModalComponent, UiLoadingModalComponent],
  entryComponents: [UiSimpleModalComponent, UiLoadingModalComponent]
})
export class UiModalModule {}
