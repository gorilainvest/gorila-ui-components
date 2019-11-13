import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-gor-data-formatter',
  templateUrl: './data-formatter.component.html',
  styleUrls: ['./data-formatter.component.scss']
})
export class DataFormatterComponent implements OnInit {
  dataTypeFormControl = new FormControl('date');
  valueFormControl = new FormControl('2019-01-02');
  dataOptionFormControl = new FormControl('1.2-2');
  dataStyleFormControl = new FormControl('');
  displayDataOption = false;
  isCustom = false;

  public ngOnInit() {
    this.dataTypeFormControl.valueChanges.subscribe(data => this.checkType(data));
    this.checkType(this.dataTypeFormControl.value);
  }

  private checkType(data) {
    this.displayDataOption = ['custom', 'percentual'].indexOf(data) !== -1;
    this.isCustom = data === 'custom';
  }
}
