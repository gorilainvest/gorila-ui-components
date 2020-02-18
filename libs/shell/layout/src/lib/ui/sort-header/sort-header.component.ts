import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'gorilainvest-sort-header',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss']
})
export class SortHeaderComponent {
  public disabled = false;
  public arrowWhite = false;

  public gorilas = [
    {
      name: 'Koko',
      age: 46
    },
    {
      name: 'Magilla',
      age: 31
    }
  ];
  public matColumnDataDefs = [
    {
      id: 'name',
      headerText: `Super \nDuper Gorila`
    },
    {
      id: 'age',
      headerText: 'Age'
    }
  ];
  public dataSource = new MatTableDataSource<{name: string; age:number}>(this.gorilas);
  public displayedColumns = ['name', 'age'];
  public form = new FormGroup({
    'disabled': new FormControl(false),
    'whiteArrow': new FormControl(false)
  });

  public sort: MatSort;
  @ViewChild(MatSort, { static: false }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.dataSource.sort = this.sort;
  }
}
