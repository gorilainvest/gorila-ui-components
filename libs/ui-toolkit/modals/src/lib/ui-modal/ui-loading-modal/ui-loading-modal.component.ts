import { Component } from '@angular/core';

import { UiSimpleModalComponent } from '../ui-simple-modal/ui-simple-modal.component';

@Component({
  selector: 'gor-ui-loading-modal',
  templateUrl: './ui-loading-modal.component.html',
  styleUrls: ['./ui-loading-modal.component.scss']
})
export class UiLoadingModalComponent extends UiSimpleModalComponent {}
