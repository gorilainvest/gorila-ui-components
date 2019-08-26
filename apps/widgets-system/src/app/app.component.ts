import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { getItems, SidebarItem, SidebarGroup } from "./sidebar.items";
import { Theme, Themes, THEMES } from './themes.config';

const items = getItems();

const flattenedItems = (acc, it) => {
  if (it.group) {
    return acc.concat(it.items.reduce(flattenedItems, []));
  }
  return acc.concat(it);
};

const mapSidebarItems = (it: SidebarItem) => {
  if (typeof it === 'string') {
    return { text: it.replace('-', ' '), route: it };
  }
  it = it as SidebarGroup;
  return {
    group: it.group,
    label: it.label,
    items: it.items.map(mapSidebarItems)
  };
};


@Component({
  selector: 'gorilainvest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked, OnDestroy, OnInit {
  public activeGroup: string;

  public currentTheme: Theme = THEMES.find(t => t.isDefault) || THEMES[0];

  public items = items.map(mapSidebarItems);

  public mobileQuery: MediaQueryList;
  public title = 'Gorila Invest UI Toolkit';
  public themes: Themes;

  private flattenItems = items.reduce(flattenedItems, []);
  private lastCurrUrl = '';

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.updateThemesList();
  }

  ngAfterViewChecked(): void {
    const currUrl = this.router.routerState.snapshot.url;
    const groupByUrl = it => currUrl.indexOf(it) !== -1;
    if (currUrl === this.lastCurrUrl) {
      return;
    }
    this.lastCurrUrl = currUrl;
    this.updateActiveGroup(this.flattenItems.find(groupByUrl));
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public applyTheme(theme: Theme) {
    this.currentTheme = theme;
    this.updateThemesList();
  }

  public updateActiveGroup(group: string) {
    this.activeGroup = group;
  }

  private updateThemesList() {
    this.themes = THEMES.filter(t => t.name !== this.currentTheme.name);
  }
}
