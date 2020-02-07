import { storiesOf, moduleMetadata } from '@storybook/angular';
import { UiLoadingModalComponent, UiSimpleModalData, UiModalModule } from '../../..';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';

@Component({
  selector: 'gor-test',
  template: `
    gor-test
  `,
  styles: ['./ui-simple-modal.component.scss']
})
export class TesteComponent implements OnChanges, OnInit {
  constructor(
    public dialogRef: MatDialogRef<TesteComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: UiSimpleModalData
  ) {}

  @Input() public height = '300px';
  @Input() public width = '500px';
  @Input() public bodyText = 'Body content';
  @Input() public titleText = 'Title';

  public matDialogProps = {
    height: this.height,
    width: this.width,
    data: {
      bodyText: this.bodyText,
      titleText: this.titleText
    }
  };

  public ngOnInit() {
    this.dialog.open(UiLoadingModalComponent, this.matDialogProps);
  }

  public ngOnChanges() {
    this.matDialogProps = {
      height: this.height,
      width: this.width,
      data: {
        bodyText: this.bodyText,
        titleText: this.titleText
      }
    };
    this.dialog.closeAll();
    this.dialog.open(UiLoadingModalComponent, this.matDialogProps);
  }
}

storiesOf('loading modal', module)
  .addDecorator(
    moduleMetadata({
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ],
      imports: [UiModalModule, PipesModule, MatDialogModule],
      declarations: [TesteComponent]
    })
  )
  .addDecorator(withKnobs)
  .add('loading modal', () => ({
    template: `
          <div>
            <gor-test
            [height]="height"
            [width]="width"
            [bodyText]="bodyText"
            [titleText]="titleText"
            >
            </gor-test>
          </div>
          `,
    props: {
      height: text('height', '300px'),
      width: text('width', '500px'),
      bodyText: text('bodyText', 'Body content'),
      titleText: text('titleText', 'Title')
    }
  }));
