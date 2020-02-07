import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';
import { boolean, text, withKnobs, array, object } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { timer } from 'rxjs';

import { UiSimpleModalData, SocialMediaArray } from './ui-simple-modal.data';
import { UiSimpleModalComponent } from './ui-simple-modal.component';
import { UiModalModule } from '../ui-modal.module';

@Component({
  selector: 'gor-test',
  template: `
    test
  `,
  styles: ['./ui-simple-modal.component.scss']
})
export class TesteComponent implements OnChanges, OnInit {
  @Input() public height = '400px';
  @Input() public width = '500px';
  @Input() public bodyText = 'Body content';
  @Input() public titleText = 'Title';
   /**
   * Indicates if image should be rendered and which image.
   *
   * @default '/assets/img/comming-soon.svg'
   */
  @Input() public bodyImage = '/assets/img/comming-soon.svg';
   /**
   * Indicates that the modal should display social media buttons.
   *
   * @default true
   */
  @Input() public socialMedia = true;
   /**
   * Indicates which button should be rendered, relative to the image and URL.
   *
   * 
   */
  @Input() public socialMediaArray: SocialMediaArray[] = [
    {
      img: '/assets/img/facebook.svg',
      URL: 'https://www.facebook.com/GorilaInvest/',
      id: 'Facebook'
    },
    {
      img: '/assets/img/instagram.svg',
      URL: 'https://www.instagram.com/gorilainvest',
      id: 'Instagram'
    },
    {
      img: '/assets/img/twitter.svg',
      URL: 'https://twitter.com/gorilainvest',
      id: 'Twitter'
    },
    {
      img: '/assets/img/linked-in.svg',
      URL: 'https://www.linkedin.com/company/gorila',
      id: 'Linked-in'
    }
  ];

  @Input() public yesText = 'Primary Button';
  @Input() public noText = 'Secundary Button';

  public matDialogProps = {
    height: this.height,
    width: this.width,
    data: {
      bodyText: this.bodyText,
      titleText: this.titleText,
      bodyImage: this.bodyImage,
      socialMedia: this.socialMedia,
      socialMediaArray: this.socialMediaArray,
      yesText: this.yesText,
      noText: this.noText
    }
  };

  public dialogRef: MatDialogRef<UiSimpleModalComponent>;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: UiSimpleModalData) {}

  public ngOnInit() {
    this.dialog.open(UiSimpleModalComponent, this.matDialogProps);
  }

  public ngOnChanges() {
    this.matDialogProps = {
      height: this.height,
      width: this.width,
      data: {
        bodyText: this.bodyText,
        titleText: this.titleText,
        bodyImage: this.bodyImage,
        socialMedia: this.socialMedia,
        socialMediaArray: this.socialMediaArray,
        yesText: this.yesText,
        noText: this.noText
      }
    };
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    timer(200).subscribe(() => {
      this.dialogRef = this.dialog.open(UiSimpleModalComponent, this.matDialogProps);
    });
  }
}

storiesOf('simple modal', module)
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
  .add('simple modal', () => ({
    template: `
          <div>
            <gor-test
            [height]="height"
            [width]="width"
            [bodyText]="bodyText"
            [titleText]="titleText"
            [bodyImage]="bodyImage"
            [socialMedia]="socialMedia"
            [socialMediaArray]="socialMediaArray"
            [yesText]="yesText"
            [noText]="noText"
            >
            </gor-test>
          </div>
          `,
    props: {
      height: text('height', '400px'),
      width: text('width', '500px'),
      bodyText: text('bodyText', 'Body content'),
      titleText: text('titleText', 'Title'),
      bodyImage: text('bodyImage', '/assets/img/comming-soon.svg'),
      socialMedia: boolean('socialMedia', true),
      socialMediaArray: object('socialMediaArray', [
        {
          img: '/assets/img/facebook.svg',
          URL: 'https://www.facebook.com/GorilaInvest/',
          id: 'Facebook'
        },
        {
          img: '/assets/img/instagram.svg',
          URL: 'https://www.instagram.com/gorilainvest',
          id: 'Instagram'
        },
        {
          img: '/assets/img/twitter.svg',
          URL: 'https://twitter.com/gorilainvest',
          id: 'Twitter'
        },
        {
          img: '/assets/img/linked-in.svg',
          URL: 'https://www.linkedin.com/company/gorila',
          id: 'Linked-in'
        }
      ]),
      yesText: text('yesText', 'Primary Button'),
      noText: text('noText', 'Secundary Button')
    }
  }));

