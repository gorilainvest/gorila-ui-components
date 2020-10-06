import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { ShadowType } from './shadow.model';

@Component({
  selector: 'gor-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShadowComponent {
  /**
   * When false, component displays its content.
   */
  @HostBinding('class.shadow-container') @Input() public displayShadow = false;

  /**
   * Defines which shadow template is displayed.
   */
  @Input() public shadowType: ShadowType = ShadowType.DEFAULT;

  /**
   * When true, triggers shadow animation.
   */
  @HostBinding('class.loading-shadow') @Input() public loading = false;
}
