import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ICON_BASE_SRC, IconModule } from '@gorilainvest/ui-toolkit/icon';

import { SortHeaderComponent } from './sort-header.component';

@Component({
  selector: 'gor-test-container',
  template: `
    <div>
      <mat-table #table [dataSource]="dataSource" matSort matSortActive="date" matSortDirection="asc" matSortDisableClear>
        <ng-container *ngFor="let matColumnDataDef of matColumnDataDefs; let idx = index">
          <ng-container [matColumnDef]="matColumnDataDef.id">
            <mat-header-cell *matHeaderCellDef gor-sort-header [arrowWhite]="arrowWhite" [disabled]="disabled">
              {{ matColumnDataDef.headerText }}
            </mat-header-cell>
            <mat-cell *matCellDef="let gorila">
              {{ gorila[matColumnDataDef.id] }}
            </mat-cell>
          </ng-container>
        </ng-container>
        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </mat-table>
    </div>
  `
})
class TestHostComponent {
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
      headerText: 'Name'
    },
    {
      id: 'age',
      headerText: 'Age'
    }
  ];
  public displayedColumns = ['name', 'age'];
  public arrowWhite = true;
  public disabled = false;
  public dataSource = new MatTableDataSource<{name: string; age:number}>(this.gorilas);
  public sort: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.dataSource.sort = this.sort;
  }
}

describe('SortHeaderComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatSortModule, MatTableModule, NoopAnimationsModule, IconModule],
      declarations: [SortHeaderComponent, TestHostComponent],
      providers: [
        { provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const sortHeader = fixture.debugElement.query(By.directive(SortHeaderComponent));
    expect(sortHeader).toBeTruthy();
  });

  it('should sort table, if enabled', () => {
    fixture.debugElement.query(By.css('mat-header-cell')).nativeElement.click();
    fixture.debugElement.query(By.css('mat-header-cell')).nativeElement.click();
    fixture.detectChanges();
    const firstName = fixture.debugElement.query(By.css('mat-cell')).nativeElement.textContent.trim();
    expect(firstName).toEqual('Magilla');
  });

  it('should not sort table, if disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('mat-header-cell')).nativeElement.click();
    fixture.debugElement.query(By.css('mat-header-cell')).nativeElement.click();
    fixture.detectChanges();
    const firstName = fixture.debugElement.query(By.css('mat-cell')).nativeElement.textContent.trim();
    expect(firstName).toEqual('Koko');
  });

  it('should display white arrow if arrowWhite input is true', () => {
    const arrow = fixture.debugElement.query(By.css('gor-icon'));
    expect(arrow.attributes.icon).toEqual('arrow_up_white');
  });

  it('should display black arrow if arrowWhite input is false', () => {
    component.arrowWhite = false;
    fixture.detectChanges();
    const arrow = fixture.debugElement.query(By.css('gor-icon'));
    expect(arrow.attributes.icon).toEqual('arrow_up');
  });
});
