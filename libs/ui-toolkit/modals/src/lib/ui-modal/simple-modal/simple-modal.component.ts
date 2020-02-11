import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SimpleModalData } from './simple-modal.data';

@Component({
  selector: 'gor-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent {
  constructor(
    public dialogRef: MatDialogRef<SimpleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SimpleModalData
  ) {}
  /**
   * Function which close modal.
   */
  public closeDialog() {
    this.dialogRef.close();
  }
}
