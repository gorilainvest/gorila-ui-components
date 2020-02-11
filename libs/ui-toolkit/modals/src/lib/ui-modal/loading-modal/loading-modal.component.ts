import { Component, Input } from '@angular/core';

import { SimpleModalComponent } from '../simple-modal/simple-modal.component';

@Component({
  selector: 'gor-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.scss']
})
export class LoadingModalComponent extends SimpleModalComponent {
  /**
   * Indicates default values for loading modal
   */
  @Input() public height = '400px';
  @Input() public width = '500px';
  @Input() public bodyText = 'Body content';
  @Input() public titleText = 'Title';
}
