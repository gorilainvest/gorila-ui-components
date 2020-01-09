import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gor-letterhead-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterheadFooterComponent {
  @Input() public landingPageUrl = '';
  @Input() public printLogoUrl = '';
  @Input() public displayLogoUrl = '';

  public logoUrl: string;
  public _isPrinting = false;
  @Input() set isPrinting(isPrinting: boolean) {
    this._isPrinting = isPrinting;
    this.logoUrl = isPrinting ? this.printLogoUrl : this.displayLogoUrl;
  }

  @Input() public leftMain: string;
  @Input() public leftSub: string;
  @Input() public middleMain: string;
  @Input() public middleSub: string;
}
