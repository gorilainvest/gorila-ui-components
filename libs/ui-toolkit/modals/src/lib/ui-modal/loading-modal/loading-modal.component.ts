import { Component, Input } from '@angular/core';

import { SimpleModalComponent } from '../simple-modal/simple-modal.component';

@Component({
  selector: 'gor-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.scss']
})
export class LoadingModalComponent extends SimpleModalComponent {
 /**
   * Indicates default height value for modal.
   */
  @Input() public height = '400px';
  /**
   * Indicates default width value for modal.
   */
  @Input() public width = '500px';
   /**
   * Indicates default body text for modal.
   */
  @Input() public bodyText = 'Body content';
   /**
   * Indicates default title text for modal.
   */
  @Input() public titleText = 'Title';
}
