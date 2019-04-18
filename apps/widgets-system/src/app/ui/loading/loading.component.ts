import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  iconOnly = false;
  messageFormControl = new FormControl('Loading...');
  stop = false;

  constructor() {}

  ngOnInit() {}
}
