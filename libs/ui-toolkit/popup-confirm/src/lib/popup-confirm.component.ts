import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PopupConfirmModel } from './popup-confirm.model';

/**
 * A popup confirmation component with customizable content and actions.
 */
@Component({
  selector: 'gor-popup-confirm, mag-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupConfirmComponent {
  /**
   * Empty constructor that receives data from injector.
   *
   * @param data the model for the popup
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: PopupConfirmModel) {}
}

