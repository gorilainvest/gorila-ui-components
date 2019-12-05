import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.scss']
})
export class FormTextComponent implements OnInit {
  public control = new FormControl();

  public disabled = false;
  public displayCount = true;
  public hint = 'I am a hint';
  public maxLength = 50;
  public placeholder = 'I am a placeholder';
  public resizable = true;
  public rows = 3;

  constructor() {}

  ngOnInit() {}
}


