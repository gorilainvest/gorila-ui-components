import { Component, Input } from '@angular/core';

import { GorDataFormatterType } from './gor-data-formatter.model';

@Component({
  selector: 'gor-data-formatter',
  templateUrl: './gor-data-formatter.component.html',
  styleUrls: ['./gor-data-formatter.component.scss']
})
export class GorDataFormatterComponent {
  @Input() public value: any;
  @Input() public dataType: GorDataFormatterType = 'text';
  @Input() public dataOption: any = null;
  @Input() public dataStyle: any = {};
}
