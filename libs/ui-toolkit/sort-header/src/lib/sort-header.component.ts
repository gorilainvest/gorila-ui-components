import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Inject,
  Input,
  Optional,
  ViewEncapsulation
} from '@angular/core';
import { MatSortHeader, MatSortHeaderIntl, MatSort, matSortAnimations } from '@angular/material/sort';

/** Column definition associated with a `MatSortHeader`. */
interface MatSortHeaderColumnDef {
  name: string;
}

@Component({
  selector: 'gor-sort-header',
  exportAs: 'gorSortHeader',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    matSortAnimations.indicator,
    matSortAnimations.leftPointer,
    matSortAnimations.rightPointer,
    matSortAnimations.arrowOpacity,
    matSortAnimations.arrowPosition,
    matSortAnimations.allowChildren
  ]
})
export class SortHeaderComponent extends MatSortHeader {
  /**
   * ID of this sort header. If used within the context of a CdkColumnDef, this will default to
   * the column's name.
   */
  // tslint:disable-next-line
  @Input('gor-sort-header') public id: string;

  @Input() public disabled: boolean;

  @Input() public arrowWhite: boolean;

  @HostBinding('attr.aria-sort') public ariaSort = this._getAriaSortAttribute();
  @HostBinding('class.mat-sort-header-disabled') public matSortHeaderDisabledClass = this._isDisabled();

  @HostListener('click') public handleClick() {
    this._handleClick();
  }

  @HostListener('mouseenter') public handleMouseEnter() {
    this._setIndicatorHintVisible(true);
  }

  @HostListener('longpress') public handleLongPress() {
    this._setIndicatorHintVisible(true);
  }

  @HostListener('mouseleave') public handleMouseLeave() {
    this._setIndicatorHintVisible(false);
  }

  constructor(
    public _intl: MatSortHeaderIntl,
    changeDetectorRef: ChangeDetectorRef,
    @Optional() public _sort: MatSort,
    @Inject('MAT_SORT_HEADER_COLUMN_DEF') @Optional() public _columnDef: MatSortHeaderColumnDef
  ) {
    super(_intl, changeDetectorRef, _sort, _columnDef);
  }

  public _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
}
