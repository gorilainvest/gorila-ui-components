import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { items } from './sidebar.items';

@Component({
  selector: 'gorila-bot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy {
  items = items.map(it => ({ text: it.replace('-', ' '), route: it }));
  mobileQuery: MediaQueryList;
  title = 'Gorila Invest UI Toolkit';

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
