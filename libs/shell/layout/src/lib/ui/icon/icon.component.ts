import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  public color = new FormControl('black');
  public icon = new FormControl('arrow_down');
  public pathPrefix = '/assets/img/';
  public imgFormat = 'svg';
  public height = new FormControl('25px');
  public width = new FormControl('25px');
}

