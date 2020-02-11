import { storiesOf, moduleMetadata } from '@storybook/angular';
import { LoadingModalComponent, SimpleModalData, UiModalModule } from '../../..';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';

@Component({
  selector: 'gor-test',
  template: `
    gor-test
  `,
  styles: ['./simple-modal.component.scss']
})
export class TestComponent implements OnChanges, OnInit {
  constructor(
    public dialogRef: MatDialogRef<TestComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: SimpleModalData
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
    this.dialog.open(LoadingModalComponent, this.matDialogProps);
  }
  /**
   * Indicates when have any change in knobs interface, it will trigger this function to render a new modal with the setted values.
   * It is done closing the old modal and oppening a new one.
   */
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
    this.dialog.open(LoadingModalComponent, this.matDialogProps);
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
      declarations: [TestComponent]
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
