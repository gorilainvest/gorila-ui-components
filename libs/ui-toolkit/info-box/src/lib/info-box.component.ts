import { Component, Input } from '@angular/core';

import { InfoBox } from './info-box.model';

@Component({
  selector: 'gor-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {
  public _class = '';
  public _infoList: InfoBox[] = [];
  @Input() public set infoList(infoList: InfoBox[]) {
    this._infoList = infoList || [];
    this._class = this._infoList.length > 1 ? 'multi-info' : '';
  }
}
