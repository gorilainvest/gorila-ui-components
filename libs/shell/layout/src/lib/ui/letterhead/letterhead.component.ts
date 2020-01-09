import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-letterhead',
  templateUrl: './letterhead.component.html',
  styleUrls: ['./letterhead.component.scss']
})
export class LetterheadComponent {
  public iconList = ['print', 'Information'];
  public iconClicked = '';
  public isPrinting = false;
  public headerRightMain = new FormControl('Main Header');
  public headerRightSub = new FormControl('Right Subheader');
  public footerLeftMain = new FormControl('Footer main');
  public footerLeftSub = new FormControl('Footer sub');
  public footerMiddleMain = new FormControl('Footer middle main');
  public footerMiddleSub = new FormControl('Footer middle sub');

  public onIconClick(event) {
    this.iconClicked = event;
  }
}

