import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

const MOD_FACTOR = 10;

@Component({
  selector: 'gorilainvest-countdown-button',
  templateUrl: './countdown-button.component.html',
  styleUrls: ['./countdown-button.component.scss']
})
export class CountdownButtonComponent implements OnInit {
  actionTextFormControl = new FormControl('Clickable');
  waitTextFormControl = new FormControl('Wait a bit');
  waitTimeFormControl = new FormControl(
    Math.abs(Math.ceil((Date.now() % MOD_FACTOR) - MOD_FACTOR / 2))
  );

  constructor() {}

  ngOnInit() {}
}

