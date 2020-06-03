import { Component, Input } from '@angular/core';

import { DataFormatterType } from './data-formatter.model';

/**
 * Data formatter to avoid preoccupation with correct data display.
 * With this component you set an value input and the data type,
 * and it's displayed correctly.
 */
@Component({
  selector: 'gor-data-formatter',
  templateUrl: './data-formatter.component.html',
  styleUrls: ['./data-formatter.component.scss']
})
export class DataFormatterComponent {
  /**
   * The input alement
   * it can assume any value
   *
   * @default null
   */
  @Input() public value: any;

  /**
   * The type of data
   *
   * @default text
   * @see DataFormatterType
   */
  @Input() public dataType: DataFormatterType = 'text';

  /**
   * Extra option according to dataType. Some dataTypes not need it.
   * Data options like percent receive a string containing the number format '1-2-2' for example
   *
   * @default null
   */
  @Input() public dataOption: any = null;

  /**
   * This parameter is used to set custom styles in the data-formatter container.
   * Use the same pattern used in ng-style
   *
   * @default empty
   */
  @Input() public dataStyle: any = {};

  /**
   * This parameter is used to set custom class in the data-formatter container.
   * Use the same pattern used in ng-class
   *
   * @default item-value
   */
  @Input() public formatterClass = 'item-value';


}
