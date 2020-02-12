import { Component, Input } from '@angular/core';

import { SimpleModalComponent } from '../simple-modal/simple-modal.component';

@Component({
  selector: 'gor-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.scss']
})
export class LoadingModalComponent extends SimpleModalComponent {}
