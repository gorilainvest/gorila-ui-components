import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SimpleModalData, SocialMediaArray } from './simple-modal.data';

@Component({
  selector: 'gor-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent {
  constructor(
    public dialogRef: MatDialogRef<SimpleModalComponent>,
      /**
       * Inject needed interface SimpleModalData.
       */
    @Inject(MAT_DIALOG_DATA) public data: SimpleModalData
  ) {}

  /**
   * Indicates default values of height and width for simple modal, also the general content of the modal.
   */
  @Input() public height = '400px';
  @Input() public width = '500px';
  @Input() public bodyText = 'Body content';
  @Input() public titleText = 'Title';
   /**
   * Indicates default values for simple modal in this case specifically it is a the modal image.
   */
  @Input() public bodyImage = '/assets/img/comming-soon.svg';
  /**
   * Indicates if social media icon should be displayed.
   */
  @Input() public socialMedia = true;
   /**
   * Indicates which social media icon with URL and image should be displayed in modal.
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
  /**
   * Function which close modal.
   */
  public closeDialog() {
    this.dialogRef.close();
  }
}
