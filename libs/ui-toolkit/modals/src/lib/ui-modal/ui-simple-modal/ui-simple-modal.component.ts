import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UiSimpleModalData } from './ui-simple-modal.data';

@Component({
  selector: 'gor-ui-simple-modal',
  templateUrl: './ui-simple-modal.component.html',
  styleUrls: ['./ui-simple-modal.component.scss']
})
export class UiSimpleModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UiSimpleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UiSimpleModalData
  ) {}

  public height = '300px';
  public width = '500px';
  public bodyText = 'Body content';
  public titleText = 'Title';
  public yesText = 'Primary Button';
  public noText = 'Secundary Button';

  public ngOnInit() {}

  public closeDialog() {
    this.dialogRef.close();
  }
}
