import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { PopupConfirmComponent } from './popup-confirm.component';

@NgModule({
  imports: [CommonModule, MatDialogModule],
  declarations: [PopupConfirmComponent],
  entryComponents: [PopupConfirmComponent],
  exports: [PopupConfirmComponent]
})
export class PopupConfirmModule {}

