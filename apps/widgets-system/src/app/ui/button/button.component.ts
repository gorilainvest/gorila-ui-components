import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  contentFormControl = new FormControl('Magilla\'s button');
  typeFormControl = new FormControl('green');

  constructor() {}

  ngOnInit() {}
}
