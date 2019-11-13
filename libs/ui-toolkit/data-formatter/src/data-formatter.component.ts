import { Component, Input } from '@angular/core';

import { DataFormatterType } from './data-formatter.model';

@Component({
  selector: 'gor-data-formatter',
  templateUrl: './data-formatter.component.html',
  styleUrls: ['./data-formatter.component.scss']
})
export class DataFormatterComponent {
  @Input() public value: any;
  @Input() public dataType: DataFormatterType = 'text';
  @Input() public dataOption: any = null;
  @Input() public dataStyle: any = {};
}
