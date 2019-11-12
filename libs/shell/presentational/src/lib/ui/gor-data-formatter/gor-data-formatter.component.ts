import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-gor-data-formatter',
  templateUrl: './gor-data-formatter.component.html',
  styleUrls: ['./gor-data-formatter.component.scss']
})
export class GorDataFormatterComponent implements OnInit {
  dataTypeFormControl = new FormControl('date');
  valueFormControl = new FormControl('2019-01-02');
  dataOptionFormControl = new FormControl('1.2-2');
  dataStyleFormControl = new FormControl('');
  displayDataOption = false;
  isCustom = false;

  constructor() {
    this.dataTypeFormControl.valueChanges.subscribe(data => this.checkType(data));
  }

  public ngOnInit() {
    this.checkType(this.dataTypeFormControl.value);
  }

  private checkType(data) {
    this.displayDataOption = ['custom', 'percentual'].indexOf(data) !== -1;
    this.isCustom = data === 'custom';
  }
}
