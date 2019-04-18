import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  centered = true;
  hide = false;
  messageFormControl = new FormControl('Spinning...');
  sizeFormControl = new FormControl(30);

  constructor() {}

  ngOnInit() {}
}
