import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { items } from './sidebar.items';
import { Theme, Themes, THEMES } from './themes.config';

@Component({
  selector: 'gorilainvest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy, OnInit {
  public currentTheme: Theme = THEMES.find(t => t.isDefault) || THEMES[0];
  public items = items.map(it => ({ text: it.replace('-', ' '), route: it }));
  public mobileQuery: MediaQueryList;
  public title = 'Gorila Invest UI Toolkit';
  public themes: Themes;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.updateThemesList();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public applyTheme(theme: Theme) {
    this.currentTheme = theme;
    this.updateThemesList();
  }

  private updateThemesList() {
    this.themes = THEMES.filter(t => t.name !== this.currentTheme.name);
  }
}
