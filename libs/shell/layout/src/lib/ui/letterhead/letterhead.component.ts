import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-letterhead',
  templateUrl: './letterhead.component.html',
  styleUrls: ['./letterhead.component.scss']
})
export class LetterheadComponent {
  public iconList = [{name: 'PDF', folder: 'Platform/Export'}];
  public iconClicked = '';
  public isPrinting = false;
  public headerLabel = new FormControl('Label: ');
  public headerMain = new FormControl('Main Header');
  public headerRightSub = new FormControl('Right Subheader');
  public footerLeftMain = new FormControl('Footer main');
  public footerLeftSub = new FormControl('Footer sub');
  public footerMiddleMain = new FormControl('Footer middle main');
  public footerMiddleSub = new FormControl('Footer middle sub');
  public landingPageUrl = new FormControl('gorila.com.br');
  public displayLogoUrl = new FormControl('assets/logo/logo_gorila.svg');
  public printLogoUrl = new FormControl('assets/logo/logo_gorila.svg');

  public onIconClick(event) {
    this.iconClicked = event;
  }
}

