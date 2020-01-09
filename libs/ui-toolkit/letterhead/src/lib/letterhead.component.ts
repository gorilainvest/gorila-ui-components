import { ChangeDetectionStrategy, Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gor-letterhead',
  templateUrl: './letterhead.component.html',
  styleUrls: ['./letterhead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterheadComponent {

  public _isPrinting = false;
  @Input() public isPrinting: boolean;
  @HostBinding('class.full-body') @Input() public bodyFillPage: boolean;

  @Input() public headerIconList: string[] = [];
  @Input() public headerId: string;
  @Input() public headerRightMain: string | { label: string, value: string };
  @Input() public headerRightSub: string;
  @Input() public footerLeftMain: string;
  @Input() public footerLeftSub: string;
  @Input() public footerMiddleMain: string;
  @Input() public footerMiddleSub: string;

  @Output() public iconClick = new EventEmitter<string>();

  public onIconClick(iconName: string) {
    this.iconClick.emit(iconName);
  }
}
