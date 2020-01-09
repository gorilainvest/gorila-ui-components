import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'gor-letterhead-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './print.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterheadHeaderComponent {
  public _isPrinting: boolean;
  @Input() set isPrinting(isPrinting: boolean) {
    this._isPrinting = isPrinting;
  }

  @Input() public iconList: string[] = [];
  public _rightMain = '';
  public _rightMainWithLabel = { label: '', value: '' };
  public displayDefaultTemplate = true;
  @Input() public set rightMain (value) {
    this.displayDefaultTemplate = typeof(value) === 'string';
    if (this.displayDefaultTemplate) {
      this._rightMain = value;
    } else {
      this._rightMainWithLabel = value;
    }
  };
  @Input() public rightSub: string;

  @HostBinding('id') @Input() public headerId: string;

  @Output() public iconClick = new EventEmitter<string>();

  public onSelectIcon(iconName: string) {
    this.iconClick.emit(iconName);
  }
}
