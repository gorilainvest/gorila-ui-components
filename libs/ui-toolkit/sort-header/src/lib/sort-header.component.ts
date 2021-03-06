import { FocusMonitor } from '@angular/cdk/a11y';
import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Inject,
  Input,
  Optional,
  ViewEncapsulation,
  ElementRef
} from '@angular/core';
import { MatSortHeader, MatSortHeaderIntl, MatSort, matSortAnimations } from '@angular/material/sort';

/** Column definition associated with a `MatSortHeader`. */
interface MatSortHeaderColumnDef {
  name: string;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[gor-sort-header]',
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

  /**
   * Enables/disables component.
   */
  @Input() public disabled: boolean;

  /**
   * Defines whether to display the white arrow or the default arrow.
   */
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
    @Inject('MAT_SORT_HEADER_COLUMN_DEF') @Optional() public _columnDef: MatSortHeaderColumnDef,
    _focusMonitor: FocusMonitor,
    _elementRef: ElementRef<HTMLElement>
  ) {
    super(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef);
  }

  public _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
}
